import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Maximize2, RotateCcw } from 'lucide-react';

interface Tour360Props {
  tourId: string;
  title: string;
  description?: string;
  height?: string;
  className?: string;
  showControls?: boolean;
}

export const Tour360 = ({ 
  tourId, 
  title, 
  description, 
  height = "500px", 
  className = "",
  showControls = true 
}: Tour360Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleFullscreen = () => {
    const iframe = document.querySelector(`#tour-${tourId} iframe`) as HTMLIFrameElement;
    if (iframe && iframe.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  const handleReset = () => {
    const iframe = document.querySelector(`#tour-${tourId} iframe`) as HTMLIFrameElement;
    if (iframe) {
      // Force reload by updating src
      const currentSrc = iframe.src;
      iframe.src = '';
      setTimeout(() => {
        iframe.src = currentSrc;
      }, 100);
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    setIsLoaded(true);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setIsLoaded(true);
  };

  return (
    <Card className={`relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border-0 shadow-elegant hover:shadow-2xl transition-all duration-500 ${className}`}>
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      {/* Header */}
      <div className="relative z-10 p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{title}</h3>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          </div>
          
          {showControls && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="bg-white/80 hover:bg-white border-primary/20 hover:border-primary/40"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleFullscreen}
                className="bg-white/80 hover:bg-white border-primary/20 hover:border-primary/40"
              >
                <Maximize2 className="w-4 h-4 mr-2" />
                Fullscreen
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Tour Container */}
      <div 
        id={`tour-${tourId}`}
        className="relative z-10 px-6 pb-6"
        style={{ 
          minHeight: height,
          position: 'relative'
        }}
      >
        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 rounded-lg z-20">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">Loading 360° tour...</p>
            </div>
          </div>
        )}
        
        {/* Pure iframe embed */}
        <iframe
          src={`https://app.cloudpano.com/tours/${tourId}`}
          allow="xr-spatial-tracking; gyroscope; accelerometer; magnetometer; fullscreen"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          style={{
            width: '100%',
            height: height,
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        />
        
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl" />
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-lg" />
    </Card>
  );
};