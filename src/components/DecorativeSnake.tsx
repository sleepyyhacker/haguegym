export const DecorativeSnake = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="snakeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="snakeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAB308" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#FCD34D" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="snakeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B7280" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#9CA3AF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D1D5DB" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Main flowing snake body - elegant S curve */}
      <path
        d="M 100 300 Q 200 100, 400 200 T 700 300 Q 650 450, 500 400 T 200 500"
        stroke="url(#snakeGradient1)"
        strokeWidth="35"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      
      {/* Secondary accent line */}
      <path
        d="M 120 320 Q 220 120, 420 220 T 720 320 Q 670 470, 520 420 T 220 520"
        stroke="url(#snakeGradient2)"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      
      {/* Subtle detail lines */}
      <path
        d="M 150 300 Q 250 150, 400 220"
        stroke="#FCD34D"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
      
      <path
        d="M 500 380 Q 400 450, 250 480"
        stroke="#93C5FD"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
      
      <path
        d="M 350 250 Q 450 280, 550 320"
        stroke="url(#snakeGradient3)"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
};
