interface WaterWaveProps {
  position?: 'top' | 'bottom';
  color?: string;
  className?: string;
}

export default function WaterWave({
  position = 'bottom',
  color = 'white',
  className = '',
}: WaterWaveProps) {
  const fillColor = color === 'white' ? '#ffffff' : color === 'light-blue' ? '#EAF8FF' : color;

  if (position === 'top') {
    return (
      <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 ${className}`}>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
        >
          <path
            d="M0,40 C360,0 720,60 1080,30 C1260,15 1380,25 1440,20 L1440,60 L0,60 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,40 C360,0 720,60 1080,30 C1260,15 1380,25 1440,20 L1440,60 L0,60 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
