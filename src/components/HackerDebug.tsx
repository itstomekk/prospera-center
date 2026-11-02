import { useState, useEffect } from 'react';

interface DebugData {
  browser: string;
  os: string;
  screen: string;
  viewport: string;
  language: string;
  timezone: string;
  connection: string;
  memory: string;
  cores: string;
  online: string;
  referrer: string;
  protocol: string;
  cookiesEnabled: string;
  doNotTrack: string;
  colorDepth: string;
  pixelRatio: string;
  touchPoints: string;
}

const HackerDebug = () => {
  const [data, setData] = useState<DebugData | null>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const getBrowserInfo = () => {
      const ua = navigator.userAgent;
      if (ua.includes('Chrome')) return 'Chrome';
      if (ua.includes('Firefox')) return 'Firefox';
      if (ua.includes('Safari')) return 'Safari';
      if (ua.includes('Edge')) return 'Edge';
      return 'Unknown';
    };

    const getOSInfo = () => {
      const ua = navigator.userAgent;
      if (ua.includes('Windows')) return 'Windows';
      if (ua.includes('Mac')) return 'macOS';
      if (ua.includes('Linux')) return 'Linux';
      if (ua.includes('Android')) return 'Android';
      if (ua.includes('iOS') || ua.includes('iPhone')) return 'iOS';
      return 'Unknown';
    };

    const getConnectionType = () => {
      const nav = navigator as Navigator & { connection?: { effectiveType?: string } };
      return nav.connection?.effectiveType || 'unknown';
    };

    const getMemory = () => {
      const nav = navigator as Navigator & { deviceMemory?: number };
      return nav.deviceMemory ? `${nav.deviceMemory}GB` : 'n/a';
    };

    setData({
      browser: getBrowserInfo(),
      os: getOSInfo(),
      screen: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      connection: getConnectionType(),
      memory: getMemory(),
      cores: navigator.hardwareConcurrency?.toString() || 'n/a',
      online: navigator.onLine ? 'true' : 'false',
      referrer: document.referrer ? new URL(document.referrer).hostname : 'direct',
      protocol: window.location.protocol.replace(':', ''),
      cookiesEnabled: navigator.cookieEnabled ? 'true' : 'false',
      doNotTrack: navigator.doNotTrack || 'n/a',
      colorDepth: `${window.screen.colorDepth}bit`,
      pixelRatio: window.devicePixelRatio.toFixed(1),
      touchPoints: navigator.maxTouchPoints?.toString() || '0',
    });

    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  const leftData = [
    `SYS.BROWSER: ${data.browser}`,
    `SYS.OS: ${data.os}`,
    `SYS.CORES: ${data.cores}`,
    `SYS.RAM: ${data.memory}`,
    `NET.TYPE: ${data.connection}`,
    `NET.ONLINE: ${data.online}`,
    `NET.PROTO: ${data.protocol}`,
  ];

  const rightData = [
    `DISP.RES: ${data.screen}`,
    `DISP.VIEW: ${data.viewport}`,
    `DISP.DEPTH: ${data.colorDepth}`,
    `DISP.DPR: ${data.pixelRatio}`,
    `USR.LANG: ${data.language}`,
    `USR.TZ: ${data.timezone}`,
    `USR.DNT: ${data.doNotTrack}`,
  ];

  const bottomData = [
    `TOUCH: ${data.touchPoints}`,
    `COOKIES: ${data.cookiesEnabled}`,
    `REF: ${data.referrer}`,
  ];

  return (
    <>
      {/* Left edge */}
      <div className="fixed left-2 top-1/2 -translate-y-1/2 z-20 font-mono text-[8px] text-primary/30 leading-relaxed pointer-events-none select-none">
        {leftData.map((line, i) => (
          <div key={i} className="whitespace-nowrap">{line}</div>
        ))}
      </div>

      {/* Right edge */}
      <div className="fixed right-2 top-1/2 -translate-y-1/2 z-20 font-mono text-[8px] text-primary/30 leading-relaxed text-right pointer-events-none select-none">
        {rightData.map((line, i) => (
          <div key={i} className="whitespace-nowrap">{line}</div>
        ))}
      </div>

      {/* Top edge - timestamp */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-20 font-mono text-[8px] text-primary/30 pointer-events-none select-none">
        <span className="animate-pulse">●</span> {time.toISOString()}
      </div>

      {/* Bottom edge */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-20 font-mono text-[8px] text-primary/30 flex gap-4 pointer-events-none select-none">
        {bottomData.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </>
  );
};

export default HackerDebug;
