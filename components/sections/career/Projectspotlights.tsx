"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  FC,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

/**
 * Expected shape of each item in `spotlights`:
 */
export interface SpotlightItem {
  id?: string | number;
  image: string;
  video_url?: string;
  title: string;
  description?: string;
  author: string;
  designation?: string;
}

interface ProjectSpotlightsProps {
  spotlights?: SpotlightItem[];
}

const getSidebarOrder = (length: number, activeIndex: number): number[] => {
  const order: number[] = [];
  for (let i = 1; i < length; i++) {
    order.push((activeIndex + i) % length);
  }
  return order;
};

const SidebarCard: FC<{
  item: SpotlightItem;
  onClick?: () => void;
}> = ({ item, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="group relative w-full text-left bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl flex flex-col border border-gray-100/50 cursor-pointer"
  >
    {/* Card Image */}
    <div className="relative w-full h-[140px] sm:h-[150px] lg:h-[110px] xl:h-[125px] overflow-hidden flex-shrink-0">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      />
      {item.video_url && (
        <img
          src="/culture/CTA.svg"
          alt="play"
          className="absolute bottom-2 right-2 w-7 h-7"
        />
      )}
    </div>

    {/* Card Info */}
    <div className="p-3 sm:p-4 xl:p-4 flex flex-col justify-between flex-1 min-h-0 gap-2 sm:gap-3">
      <div className="min-h-0">
        <p className="font-sora font-bold text-[13px] xl:text-[14px] text-[#DA655B] mb-1.5 leading-snug line-clamp-1">
          {item.title}
        </p>
        {item.description && (
          <p className="font-inter text-[11px] xl:text-[12px] text-[#8a8a8a] leading-relaxed line-clamp-2 mt-1">
            {item.description}
          </p>
        )}
      </div>
      <div className="mt-1 sm:mt-2">
        <p className="font-inter font-semibold text-[11px] xl:text-[12px] text-[#1a1a1a] uppercase tracking-wide truncate">
          {item.author}
        </p>
        {item.designation && (
          <p className="font-inter text-[10px] xl:text-[10px] text-[#8a8a8a] uppercase tracking-[0.1em] mt-0.5 truncate">
            {item.designation}
          </p>
        )}
      </div>
    </div>
  </button>
);

const MobileCarousel: FC<{
  items: SpotlightItem[];
  onSelect: (idx: number) => void;
}> = ({ items, onSelect }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onEmblaSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const frame = requestAnimationFrame(onEmblaSelect);
    emblaApi.on("select", onEmblaSelect);
    emblaApi.on("reInit", onEmblaSelect);

    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", onEmblaSelect);
      emblaApi.off("reInit", onEmblaSelect);
    };
  }, [emblaApi, onEmblaSelect]);

  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, items.length]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, itemIndex) => {
            return (
              <div
                key={`mobile-${item.id ?? item.title}-${itemIndex}`}
                className="flex-[0_0_100%] min-w-0"
              >
                <SidebarCard item={item} onClick={() => onSelect(itemIndex)} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Nav buttons */}
      <div className="flex items-center justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous card"
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-colors disabled:opacity-30 hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4 text-[#1a1a1a]" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next card"
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-colors disabled:opacity-30 hover:bg-gray-50"
        >
          <ChevronRight className="w-4 h-4 text-[#1a1a1a]" />
        </button>
      </div>
    </div>
  );
};

const ProjectSpotlights: FC<ProjectSpotlightsProps> = ({ spotlights = [] }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [scrollbarActive, setScrollbarActive] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // === DEDUPLICATE SPOTLIGHTS ===
  const uniqueSpotlights = useMemo(() => {
    const seen = new Set<string>();
    return spotlights.filter((item) => {
      const id = String(item.id ?? `${item.title}-${item.author}`);
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  }, [spotlights]);

  const active = uniqueSpotlights[activeIndex % (uniqueSpotlights.length || 1)];

  const sidebarOrder = useMemo(() => {
    return getSidebarOrder(
      uniqueSpotlights.length,
      activeIndex % (uniqueSpotlights.length || 1),
    );
  }, [uniqueSpotlights.length, activeIndex]);

  const selectActiveIndex = useCallback((itemIndex: number) => {
    setIsPlaying(false);
    setActiveIndex(itemIndex);
  }, []);

  // === KEEP SIDEBAR WHEEL SCROLL INDEPENDENT FROM LENIS/PAGE SCROLL ===
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleWheel = (e: globalThis.WheelEvent) => {
      e.stopPropagation();

      const atTop = sidebar.scrollTop <= 0;
      const atBottom =
        Math.ceil(sidebar.scrollTop + sidebar.clientHeight) >=
        sidebar.scrollHeight;

      if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
        e.preventDefault();
      }
    };

    sidebar.addEventListener("wheel", handleWheel, {
      capture: true,
      passive: false,
    });

    return () => {
      sidebar.removeEventListener("wheel", handleWheel, { capture: true });
    };
  }, []);

  const handleScroll = () => {
    setScrollbarActive(true);
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setScrollbarActive(false);
    }, 800);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  if (!uniqueSpotlights.length) return null;

  return (
    <section
      className="relative w-full py-16 xl:py-24 bg-[#F5F1EC] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/career/Project.webp')" }}
    >
      {/* Scrollbar styles - reserved gutter, auto-hiding, no card width shift */}
      <style>{`
        .spotlight-sidebar {
          box-sizing: content-box;
          margin-right: -10px;
          padding-right: 10px;
          scrollbar-gutter: stable;
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }
        .spotlight-sidebar::-webkit-scrollbar {
          width: 3px;
        }
        .spotlight-sidebar::-webkit-scrollbar-track {
          background: transparent;
        }
        .spotlight-sidebar::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 10px;
        }
        .spotlight-sidebar.scrollbar-active::-webkit-scrollbar-thumb {
          background: rgba(180, 180, 180, 0.5);
        }
        .spotlight-sidebar.scrollbar-active {
          scrollbar-color: rgba(180, 180, 180, 0.5) transparent;
        }
      `}</style>

      <div className="fix relative z-10">
        {/* Heading */}
        <div className="flex flex-col gap-3 mb-8 xl:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#003b9d]" />
            <span className="text-[12px] xl:text-[12px] font-semibold tracking-[3.3px] text-[#003b9d] uppercase bw-sb">
              Project Spotlights
            </span>
          </div>
          <h2 className="font-bold text-[26px] lg:text-[40px] text-[#DA655B]">
            See what our people says!
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
          {/* Active card (Left Column) */}
          <div className="hidden lg:flex flex-[1.6] w-full flex-col min-w-0">
            {/* Image/Video Container */}
            <div className="relative w-full h-[240px] sm:h-[320px] xl:h-[420px] overflow-hidden rounded-2xl bg-black/5 shadow-sm">
              <AnimatePresence mode="wait">
                {isPlaying && active.video_url ? (
                  <motion.iframe
                    key={`video-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    src={active.video_url}
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={active.title}
                  />
                ) : (
                  <motion.div
                    key={`image-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover"
                    />
                    {active.video_url && (
                      <button
                        onClick={() => setIsPlaying(true)}
                        aria-label="Play video"
                        className="absolute inset-0 flex items-center justify-center group"
                      >
                        <span className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                          <Play
                            className="w-6 h-6 xl:w-7 xl:h-7 text-[#003b9d] ml-1"
                            fill="#003b9d"
                          />
                        </span>
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Text details */}
            <div className="pt-5 xl:pt-6 lg:min-h-[160px] xl:min-h-[180px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <h3 className=" font-medium text-[#222] text-[20px] xl:text-[28px] mb-3">
                    {active.title}
                  </h3>
                  {active.description && (
                    <p className="font-inter text-[15px] xl:text-[18px] text-[#5a5a5a] leading-relaxed mb-4">
                      {active.description}
                    </p>
                  )}
                  <p className="font-sora font-bold text-[12px] xl:text-[14px] text-[#1a1a1a] tracking-wide">
                    - {active.author}
                  </p>
                  {active.designation && (
                    <p className="font-inter text-[11px] xl:text-[12px] text-[#8a8a8a] tracking-[0.15em] uppercase mt-1">
                      {active.designation}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar (Right Column) */}
          <div className="flex-1 w-full relative lg:max-w-[340px] xl:max-w-[360px]">
            {/* Desktop: native scrollable list */}
            <div
              ref={sidebarRef}
              data-lenis-prevent
              className={`hidden lg:flex lg:flex-col gap-3 xl:gap-4 lg:overflow-y-auto w-full lg:h-[480px] xl:h-[565px] overscroll-contain spotlight-sidebar ${
                scrollbarActive ? "scrollbar-active" : ""
              }`}
              onScroll={handleScroll}
            >
              {sidebarOrder.map((itemIndex) => {
                const item = uniqueSpotlights[itemIndex];
                return (
                  <div
                    key={`${item.id ?? item.title}-${itemIndex}`}
                    className="flex-shrink-0 lg:h-[240px] xl:h-[270px]"
                  >
                    <SidebarCard
                      item={item}
                      onClick={() => selectActiveIndex(itemIndex)}
                    />
                  </div>
                );
              })}
            </div>

            {/* Mobile: Embla carousel */}
            <div className="lg:hidden">
              <MobileCarousel
                items={uniqueSpotlights}
                onSelect={selectActiveIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlights;
