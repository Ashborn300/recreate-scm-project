import { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  /** Add thousand separators (fr-FR). Default: false (avoids "2 019" for years). */
  separator?: boolean;
  className?: string;
}

/**
 * Animated number counter that triggers when scrolled into view.
 * Used across the site for any numerical value.
 */
export default function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1800,
  decimals = 0,
  separator = false,
  className,
}: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
            setValue(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);

  let formatted: string;
  if (decimals > 0) {
    formatted = value.toFixed(decimals);
  } else {
    const rounded = Math.round(value);
    formatted = separator ? rounded.toLocaleString("fr-FR") : String(rounded);
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
