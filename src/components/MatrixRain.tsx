import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  value: string;
  speed: number;
}

interface Stream {
  x: number;
  points: Point[];
  speed: number;
}

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let streams: Stream[] = [];

    // Regular characters (katakana, numbers, symbols)
    const regularChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|\\;:\'",./!@#$%^&*()_+-=';
    const regularCharArray = regularChars.split('');
    const bitcoinChar = '₿';
    const fontSize = 16;
    const glowColor = 'hsl(30, 100%, 50%)'; // Orange
    const dimColor = 'hsl(30, 80%, 30%)';
    const brightColor = 'hsl(35, 100%, 60%)';
    const bitcoinGlowColor = 'hsl(45, 100%, 65%)'; // Bright golden for Bitcoin

    // 10% chance for Bitcoin symbol, 90% for regular characters
    const getRandomChar = () => {
      if (Math.random() < 0.10) {
        return bitcoinChar;
      }
      return regularCharArray[Math.floor(Math.random() * regularCharArray.length)];
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStreams();
    };

    const initStreams = () => {
      streams = [];
      const columns = Math.ceil(canvas.width / fontSize);
      
      for (let i = 0; i < columns; i++) {
        const speed = 0.5 + Math.random() * 2;
        const streamLength = 5 + Math.floor(Math.random() * 20);
        const points: Point[] = [];
        
        // Start stream at random position above viewport
        const startY = -Math.random() * canvas.height * 2;
        
        for (let j = 0; j < streamLength; j++) {
          points.push({
            x: i * fontSize,
            y: startY - j * fontSize,
            value: getRandomChar(),
            speed: speed,
          });
        }
        
        streams.push({
          x: i * fontSize,
          points,
          speed,
        });
      }
    };

    const draw = () => {
      // Fade effect - creates trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;

      streams.forEach((stream) => {
        stream.points.forEach((point, index) => {
          // Update position
          point.y += stream.speed;

          // Only draw if in viewport
          if (point.y > 0 && point.y < canvas.height + fontSize) {
            // Randomly change character
            if (Math.random() < 0.02) {
              point.value = getRandomChar();
            }

            const isBitcoin = point.value === bitcoinChar;

            // Head of stream is brightest
            if (index === 0) {
              if (isBitcoin) {
                ctx.fillStyle = bitcoinGlowColor;
                ctx.shadowColor = bitcoinGlowColor;
                ctx.shadowBlur = 25;
              } else {
                ctx.fillStyle = brightColor;
                ctx.shadowColor = brightColor;
                ctx.shadowBlur = 15;
              }
            } else if (index < 3) {
              if (isBitcoin) {
                ctx.fillStyle = bitcoinGlowColor;
                ctx.shadowColor = bitcoinGlowColor;
                ctx.shadowBlur = 20;
              } else {
                ctx.fillStyle = glowColor;
                ctx.shadowColor = glowColor;
                ctx.shadowBlur = 8;
              }
            } else {
              // Fade based on position in stream
              const alpha = Math.max(0.1, 1 - (index / stream.points.length));
              if (isBitcoin) {
                ctx.fillStyle = 'hsl(45, 100%, 55%)';
                ctx.shadowColor = bitcoinGlowColor;
                ctx.shadowBlur = 12;
                ctx.globalAlpha = alpha * 0.9;
              } else {
                ctx.fillStyle = dimColor;
                ctx.shadowBlur = 0;
                ctx.globalAlpha = alpha * 0.6;
              }
            }

            ctx.fillText(point.value, point.x, point.y);
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
          }
        });

        // Reset stream when it goes off screen
        const lastPoint = stream.points[stream.points.length - 1];
        if (lastPoint.y > canvas.height + fontSize * stream.points.length) {
          // Reset to top with new random properties
          const startY = -Math.random() * 200;
          stream.speed = 0.5 + Math.random() * 2;
          
          stream.points.forEach((point, index) => {
            point.y = startY - index * fontSize;
            point.value = getRandomChar();
          });
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)' }}
      aria-hidden="true"
    />
  );
};

export default MatrixRain;
