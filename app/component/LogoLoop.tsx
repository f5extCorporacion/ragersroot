import { useCallback, useEffect, useMemo, useRef, useState, memo, ReactNode } from 'react';
import Image from 'next/image';
import './LogoLoop.css';

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };

// Tipos para los logos
interface LogoImage {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
  href?: string;
  ariaLabel?: string;
}

interface LogoNode {
  node: ReactNode;
  href?: string;
  title?: string;
  ariaLabel?: string;
}

type Logo = LogoImage | LogoNode;

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: Logo, key: string | number) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const toCssLength = (value: number | string | undefined): string | undefined => {
  if (typeof value === 'number') return `${value}px`;
  if (typeof value === 'string') return value;
  return undefined;
};

// Hook corregido con tipos adecuados
const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<HTMLElement | null>>,
  dependencies: any[]
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }
    
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(() => callback());
      observer.observe(ref.current);
      return observer;
    });
    
    callback();
    
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [callback, ...dependencies]);
};

// Hook corregido para cargar imágenes
const useImageLoader = (
  seqRef: React.RefObject<HTMLElement | null>,
  onLoad: () => void,
  dependencies: any[]
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) {
      onLoad();
      return;
    }
    
    let remainingImages = images.length;
    
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) onLoad();
    };
    
    images.forEach(img => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
      }
    });
    
    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, [onLoad, ...dependencies]);
};

// Hook corregido para la animación
const useAnimationLoop = (
  trackRef: React.RefObject<HTMLElement | null>,
  targetVelocity: number,
  seqWidth: number,
  seqHeight: number,
  isHovered: boolean,
  hoverSpeed: number | undefined,
  isVertical: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const seqSize = isVertical ? seqHeight : seqWidth;

    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      const transformValue = isVertical
        ? `translate3d(0, ${-offsetRef.current}px, 0)`
        : `translate3d(${-offsetRef.current}px, 0, 0)`;
      track.style.transform = transformValue;
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqSize > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqSize) + seqSize) % seqSize;
        offsetRef.current = nextOffset;

        const transformValue = isVertical
          ? `translate3d(0, ${-offsetRef.current}px, 0)`
          : `translate3d(${-offsetRef.current}px, 0, 0)`;
        track.style.transform = transformValue;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical, trackRef]);
};

// Componente para imagen optimizada con Next.js
const OptimizedImage = ({ src, alt, width, height, ...props }: LogoImage) => {
  // Verificar si es una imagen local (de public) o externa
  const isLocalImage = src.startsWith('/');
  
  if (isLocalImage) {
    return (
      <Image
        src={src}
        alt={alt || ''}
        width={width || 100}
        height={height || 100}
        className="logoloop__image"
        draggable={false}
        {...props}
      />
    );
  }
  
  // Para imágenes externas usar img normal
  return (
    <img
      src={src}
      srcSet={props.srcSet}
      sizes={props.sizes}
      width={width}
      height={height}
      alt={alt || ''}
      title={props.title}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="logoloop__image"
    />
  );
};

export const LogoLoop = memo<LogoLoopProps>(({
  logos,
  speed = 120,
  direction = 'left',
  width = '100%',
  logoHeight = 28,
  gap = 32,
  pauseOnHover,
  hoverSpeed,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  renderItem,
  ariaLabel = 'Partner logos',
  className,
  style
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null);

  const [seqWidth, setSeqWidth] = useState<number>(0);
  const [seqHeight, setSeqHeight] = useState<number>(0);
  const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const effectiveHoverSpeed = useMemo(() => {
    if (hoverSpeed !== undefined) return hoverSpeed;
    if (pauseOnHover === true) return 0;
    if (pauseOnHover === false) return undefined;
    return 0;
  }, [hoverSpeed, pauseOnHover]);

  const isVertical = direction === 'up' || direction === 'down';

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    let directionMultiplier: number;
    
    if (isVertical) {
      directionMultiplier = direction === 'up' ? 1 : -1;
    } else {
      directionMultiplier = direction === 'left' ? 1 : -1;
    }
    
    const speedMultiplier = speed < 0 ? -1 : 1;
    return magnitude * directionMultiplier * speedMultiplier;
  }, [speed, direction, isVertical]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceRect = seqRef.current?.getBoundingClientRect?.();
    const sequenceWidth = sequenceRect?.width ?? 0;
    const sequenceHeight = sequenceRect?.height ?? 0;
    
    if (isVertical) {
      const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
      if (containerRef.current && parentHeight > 0) {
        const targetHeight = Math.ceil(parentHeight);
        if (containerRef.current.style.height !== `${targetHeight}px`) {
          containerRef.current.style.height = `${targetHeight}px`;
        }
      }
      
      if (sequenceHeight > 0) {
        setSeqHeight(Math.ceil(sequenceHeight));
        const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
        const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    } else if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, [isVertical]);

  // Convertir refs para el ResizeObserver
  const resizeRefs = useMemo(() => 
    [containerRef as React.RefObject<HTMLElement | null>, seqRef as React.RefObject<HTMLElement | null>],
    [containerRef, seqRef]
  );

  useResizeObserver(updateDimensions, resizeRefs, [logos, gap, logoHeight, isVertical]);
  useImageLoader(seqRef as React.RefObject<HTMLElement | null>, updateDimensions, [logos, gap, logoHeight, isVertical]);
  useAnimationLoop(trackRef as React.RefObject<HTMLElement | null>, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);

  const cssVariables = useMemo(
    () => ({
      '--logoloop-gap': `${gap}px`,
      '--logoloop-logoHeight': `${logoHeight}px`,
      ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
    }),
    [gap, logoHeight, fadeOutColor]
  );

  const rootClassName = useMemo(
    () =>
      [
        'logoloop',
        isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
        fadeOut && 'logoloop--fade',
        scaleOnHover && 'logoloop--scale-hover',
        className
      ]
        .filter(Boolean)
        .join(' '),
    [isVertical, fadeOut, scaleOnHover, className]
  );

  const handleMouseEnter = useCallback(() => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(true);
  }, [effectiveHoverSpeed]);
  
  const handleMouseLeave = useCallback(() => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(false);
  }, [effectiveHoverSpeed]);

  const renderLogoItem = useCallback(
    (item: Logo, key: string | number) => {
      if (renderItem) {
        return (
          <li className="logoloop__item" key={key} role="listitem">
            {renderItem(item, key)}
          </li>
        );
      }
      
      const isNodeItem = 'node' in item;
      
      const content = isNodeItem ? (
        <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>
          {item.node}
        </span>
      ) : (
        <OptimizedImage {...item} />
      );
      
      const itemAriaLabel = isNodeItem 
        ? (item.ariaLabel ?? item.title) 
        : (item.alt ?? item.title);
      
      const itemContent = item.href ? (
        <a
          className="logoloop__link"
          href={item.href}
          aria-label={itemAriaLabel || 'logo link'}
          target="_blank"
          rel="noreferrer noopener"
        >
          {content}
        </a>
      ) : (
        content
      );
      
      return (
        <li className="logoloop__item" key={key} role="listitem">
          {itemContent}
        </li>
      );
    },
    [renderItem]
  );

  const logoLists = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, copyIndex) => (
        <ul
          className="logoloop__list"
          key={`copy-${copyIndex}`}
          role="list"
          aria-hidden={copyIndex > 0}
          ref={copyIndex === 0 ? seqRef : undefined}
        >
          {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
        </ul>
      )),
    [copyCount, logos, renderLogoItem]
  );

  const containerStyle = useMemo(
    () => ({
      width: isVertical
        ? toCssLength(width) === '100%'
          ? undefined
          : toCssLength(width)
        : (toCssLength(width) ?? '100%'),
      ...cssVariables,
      ...style
    }),
    [width, cssVariables, style, isVertical]
  );

  return (
    <div 
      ref={containerRef} 
      className={rootClassName} 
      style={containerStyle} 
      role="region" 
      aria-label={ariaLabel}
    >
      <div 
        className="logoloop__track" 
        ref={trackRef} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;