import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export interface TimelineEntry {
  title: string | React.ReactNode;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#09090b] font-sans md:px-6 relative"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-12 md:pt-28 md:gap-12"
          >
            {/* Coluna da Esquerda: Passo X + Título + Descrição */}
            <div className="sticky flex flex-col z-40 items-start top-36 self-start max-w-full md:max-w-xs lg:max-w-md w-full pl-16 md:pl-20 pr-4">
              <div className="h-9 w-9 absolute left-2 md:left-2 top-0 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-lg">
                <div className="h-3 w-3 rounded-full bg-[#B7F20B] border border-[#B7F20B] shadow-[0_0_10px_#B7F20B]" />
              </div>
              <div className="w-full">
                {item.title}
              </div>
            </div>

            {/* Coluna da Direita: Animação sem Card */}
            <div className="relative pl-16 pr-4 md:pl-0 w-full mt-6 md:mt-0 flex-1">
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-[23px] left-[23px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-zinc-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#B7F20B] via-emerald-400 to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_12px_#B7F20B]"
          />
        </div>
      </div>
    </div>
  );
};

