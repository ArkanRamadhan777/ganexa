const DitherBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* SVG Dither Pattern */}
      <svg className="hidden">
        <defs>
          <filter id="dither">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="1.5" 
              numOctaves="4" 
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 0 0 1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Dither Layer */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          filter: 'url(#dither)',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Gradient Overlay for Depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)',
        }}
      />
    </div>
  )
}

export default DitherBackground
