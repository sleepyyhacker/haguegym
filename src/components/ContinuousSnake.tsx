export const ContinuousSnake = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
      <svg
        className="w-full min-h-full"
        viewBox="0 0 1920 8000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
        <linearGradient id="snakeBlue" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stopColor="#006400" stopOpacity="0.4" />   {/* Donkergroen */}
  <stop offset="50%" stopColor="#228B22" stopOpacity="0.25" /> {/* Forest green */}
  <stop offset="100%" stopColor="#6B8E23" stopOpacity="0.15" />{/* Olijfgroen */}
</linearGradient>
          <linearGradient id="snakeYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EAB308" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#FCD34D" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="snakeGray" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B7280" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#9CA3AF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#D1D5DB" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        
        {/* Main continuous flowing snake from top to bottom of entire page */}
        <path
          d="M 1700 100 
             Q 1400 400, 1500 800 
             T 1300 1400 
             Q 1100 1800, 800 2000 
             T 400 2600 
             Q 200 3000, 350 3400 
             T 700 4000 
             Q 1000 4400, 1300 4600 
             T 1600 5200 
             Q 1800 5600, 1650 6000 
             T 1300 6600 
             Q 1000 7000, 700 7200 
             T 300 7800"
          stroke="url(#snakeBlue)"
          strokeWidth="50"
          strokeLinecap="round"
          fill="none"
          className="animate-float"
        />
        
        {/* Secondary yellow accent line following the main path */}
        <path
          d="M 1730 130 
             Q 1430 430, 1530 830 
             T 1330 1430 
             Q 1130 1830, 830 2030 
             T 430 2630 
             Q 230 3030, 380 3430 
             T 730 4030 
             Q 1030 4430, 1330 4630 
             T 1630 5230 
             Q 1830 5630, 1680 6030 
             T 1330 6630 
             Q 1030 7030, 730 7230 
             T 330 7830"
          stroke="url(#snakeYellow)"
          strokeWidth="32"
          strokeLinecap="round"
          fill="none"
          className="animate-float"
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* Gray accent segments at key points */}
        <path
          d="M 1650 200 Q 1350 500, 1450 900"
          stroke="url(#snakeGray)"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        
        <path
          d="M 750 2100 Q 350 2400, 400 2800"
          stroke="url(#snakeGray)"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        
        <path
          d="M 1550 5300 Q 1750 5700, 1600 6100"
          stroke="url(#snakeGray)"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        
        {/* Subtle detail accents */}
        <path
          d="M 1200 1500 Q 1000 1700, 900 1900"
          stroke="#FCD34D"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
        />
        
        <path
          d="M 650 4100 Q 950 4300, 1250 4500"
          stroke="#93C5FD"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
        />
        
        <path
          d="M 1250 6700 Q 950 6900, 650 7100"
          stroke="#9CA3AF"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          opacity="0.15"
        />
      </svg>
    </div>
  );
};
