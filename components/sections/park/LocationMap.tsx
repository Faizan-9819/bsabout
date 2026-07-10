// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import { motion } from "framer-motion";
// import { MapContainer, TileLayer, useMap, ZoomControl } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// interface LocationTab {
//   name: string;
//   distance: string;
//   destination: [number, number];
// }

// const PARK: [number, number] = [19.257, 73.038];

// const locations: LocationTab[] = [
//   { name: "Pagda Toll", distance: "05 km", destination: [19.2985, 73.0295] },
//   {
//     name: "Samruddhi Highway",
//     distance: "12 km",
//     destination: [19.336, 73.0965],
//   },
//   {
//     name: "Chhatrapati Shivaji Maharaj International Airport",
//     distance: "57 km",
//     destination: [19.0896, 72.8656],
//   },
//   {
//     name: "Navi Mumbai Airport",
//     distance: "63 km",
//     destination: [18.9968, 73.0996],
//   },
//   { name: "JNPT Port", distance: "77 km", destination: [18.9494, 72.9525] },
// ];

// /* ─── Route cache: populated by prefetch before user ever clicks ─── */
// const routeCache = new Map<string, [number, number][]>();
// const routeInFlight = new Map<string, Promise<[number, number][]>>();

// function routeKey(dest: [number, number]) {
//   return `${dest[0]},${dest[1]}`;
// }

// function fetchRoute(dest: [number, number]): Promise<[number, number][]> {
//   const key = routeKey(dest);
//   if (routeCache.has(key)) return Promise.resolve(routeCache.get(key)!);
//   if (routeInFlight.has(key)) return routeInFlight.get(key)!;

//   const url =
//     `https://router.project-osrm.org/route/v1/driving/` +
//     `${PARK[1]},${PARK[0]};${dest[1]},${dest[0]}` +
//     `?overview=full&geometries=geojson`;

//   const promise = fetch(url)
//     .then((r) => r.json())
//     .then((data) => {
//       const coords: [number, number][] =
//         data.routes[0].geometry.coordinates.map(
//           ([lng, lat]: [number, number]) => [lat, lng],
//         );
//       routeCache.set(key, coords);
//       routeInFlight.delete(key);
//       return coords;
//     })
//     .catch(() => {
//       const fallback: [number, number][] = [PARK, dest];
//       routeCache.set(key, fallback);
//       routeInFlight.delete(key);
//       return fallback;
//     });

//   routeInFlight.set(key, promise);
//   return promise;
// }

// if (typeof window !== "undefined") {
//   for (const loc of locations) {
//     fetchRoute(loc.destination);
//   }
// }

// function chipHtml(text: string) {
//   return `<div style="background:linear-gradient(90deg,#bf584f 0%,#f6736a 100%);color:white;font-family:var(--font-dm-sans),'DM Sans',sans-serif;font-size:16px;text-transform:uppercase;white-space:nowrap;padding:10px 20px;border-radius:10px;box-shadow:0px 4px 4px rgba(0,0,0,0.35);line-height:1.2;pointer-events:none;">${text}</div>`;
// }

// /* Small navy/coral dot with white ring — marks Sahakar Logistics (our park), the fixed anchor on every tab. */
// function makeParkIcon() {
//   const PIN = 20;
//   const CHIP_H = 39; // approx rendered height of the label chip
//   const GAP = 6;
//   const html = `<div style="display:flex;flex-direction:column;align-items:center;gap:${GAP}px;pointer-events:none;">
//     ${chipHtml("Sahakar Logistics")}
//     <img src="/park/startpoint.svg" width="${PIN}" height="${PIN}" style="display:block;" />
//   </div>`;
//   const width = 220;
//   const height = CHIP_H + GAP + PIN;
//   return L.divIcon({
//     html,
//     className: "",
//     iconSize: [width, height],
//     // anchor at the exact center of the dot, so the route line's endpoint (the LatLng)
//     // lines up with the dot's visual center, not the bounding box corner
//     iconAnchor: [width / 2, height - PIN / 2],
//   });
// }

// /* Coral teardrop pin — marks the selected destination (Pagda Toll, Samruddhi Highway, etc). */
// function makeDestinationIcon(label: string) {
//   const PIN_W = 52;
//   const PIN_H = 52;
//   const CHIP_H = 39;
//   const GAP = 6;
//   // Tip of the teardrop sits at the bottom-center of the 52x52 pin graphic.
//   const html = `<div style="display:flex;flex-direction:column;align-items:center;gap:${GAP}px;pointer-events:none;">
//     ${chipHtml(label)}
//     <img src="/park/pin.svg" width="${PIN_W}" height="${PIN_H}" style="display:block;" />
//   </div>`;
//   const width = 220;
//   const height = CHIP_H + GAP + PIN_H;
//   return L.divIcon({
//     html,
//     className: "",
//     iconSize: [width, height],
//     // anchor at the pin's tip (bottom-center of the svg), matching its actual LatLng
//     iconAnchor: [width / 2, height],
//   });
// }

// /* Requires ctrl/cmd + scroll to zoom (so the page can still scroll normally
//    over the map), with a brief on-screen hint when scrolling without the modifier. */
// function CtrlScrollZoom() {
//   const map = useMap();
//   const [visible, setVisible] = useState(false);
//   const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   useEffect(() => {
//     const container = map.getContainer();
//     map.scrollWheelZoom.disable();

//     function onWheel(e: WheelEvent) {
//       if (e.ctrlKey || e.metaKey) {
//         e.preventDefault();
//         e.stopPropagation();
//         map.setZoom(map.getZoom() + (e.deltaY > 0 ? -1 : 1), { animate: true });
//         setVisible(false);
//         if (timerRef.current) clearTimeout(timerRef.current);
//       }
//     }
//     function onWheelHint(e: WheelEvent) {
//       if (!e.ctrlKey && !e.metaKey) {
//         setVisible(true);
//         if (timerRef.current) clearTimeout(timerRef.current);
//         timerRef.current = setTimeout(() => setVisible(false), 1600);
//       }
//     }

//     container.addEventListener("wheel", onWheel, {
//       capture: true,
//       passive: false,
//     });
//     container.addEventListener("wheel", onWheelHint, {
//       capture: false,
//       passive: true,
//     });

//     return () => {
//       container.removeEventListener("wheel", onWheel, { capture: true });
//       container.removeEventListener("wheel", onWheelHint, { capture: false });
//       if (timerRef.current) clearTimeout(timerRef.current);
//     };
//   }, [map]);

//   return (
//     <div
//       style={{
//         position: "absolute",
//         inset: 0,
//         zIndex: 1000,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         pointerEvents: "none",
//         transition: "opacity 0.3s ease",
//         opacity: visible ? 1 : 0,
//       }}
//     >
//       <div
//         style={{
//           background: "rgba(6,27,54,0.85)",
//           color: "white",
//           fontFamily: "'DM Sans', sans-serif",
//           fontSize: "14px",
//           fontWeight: 500,
//           padding: "10px 20px",
//           borderRadius: "8px",
//           backdropFilter: "blur(6px)",
//         }}
//       >
//         Use ctrl + scroll to zoom the map
//       </div>
//     </div>
//   );
// }

// function MapController({
//   destination,
//   endLabel,
//   cachedCoords,
//   onReady,
// }: {
//   destination: [number, number];
//   endLabel: string;
//   cachedCoords: [number, number][] | null;
//   onReady: () => void;
// }) {
//   const map = useMap();
//   const onReadyRef = useRef(onReady);

//   useEffect(() => {
//     onReadyRef.current = onReady;
//   }, [onReady]);

//   useEffect(() => {
//     let cancelled = false;
//     let startMarker: L.Marker | null = null;
//     let endMarker: L.Marker | null = null;
//     let poly: L.Polyline | null = null;

//     function draw(coords: [number, number][]) {
//       if (cancelled) return;
//       // Ensure the polyline's endpoints exactly match the pin coordinates —
//       // OSRM snaps route ends to the nearest road, which can leave a visible
//       // gap between the drawn line and the pins if used as-is.
//       const routeCoords: [number, number][] =
//         coords.length > 0
//           ? [PARK, ...coords.slice(1, -1), destination]
//           : [PARK, destination];
//       poly = L.polyline(routeCoords, {
//         color: "#061b36",
//         weight: 3,
//         opacity: 1,
//       }).addTo(map);
//       startMarker = L.marker(PARK, { icon: makeParkIcon() }).addTo(map);
//       endMarker = L.marker(destination, {
//         icon: makeDestinationIcon(endLabel),
//       }).addTo(map);
//       map.invalidateSize();
//       setTimeout(() => {
//         if (cancelled) return;
//         map.fitBounds(poly!.getBounds(), {
//           animate: false,
//           paddingTopLeft: [40, 100],
//           paddingBottomRight: [40, 40],
//         });
//         onReadyRef.current();
//       }, 0);
//     }

//     if (cachedCoords) {
//       draw(cachedCoords);
//     } else {
//       fetchRoute(destination).then(draw);
//     }

//     return () => {
//       cancelled = true;
//       poly?.remove();
//       startMarker?.remove();
//       endMarker?.remove();
//     };
//   }, [destination, endLabel]);

//   return null;
// }

// function MapPanel({
//   mapKey,
//   destination,
//   endLabel,
// }: {
//   mapKey: string;
//   destination: [number, number];
//   endLabel: string;
// }) {
//   const getCached = () => routeCache.get(routeKey(destination)) ?? null;
//   const isCached = () => routeCache.has(routeKey(destination));

//   const [overlayOpaque, setOverlayOpaque] = useState(() => !isCached());
//   const [cachedCoords, setCachedCoords] = useState<[number, number][] | null>(
//     getCached,
//   );
//   const prevKeyRef = useRef(mapKey);

//   useEffect(() => {
//     if (prevKeyRef.current === mapKey) return;
//     prevKeyRef.current = mapKey;
//     const cached = routeCache.get(routeKey(destination)) ?? null;
//     setCachedCoords(cached);
//     setOverlayOpaque(!cached);
//   }, [mapKey, destination]);

//   const handleReady = useCallback(() => setOverlayOpaque(false), []);

//   const center: [number, number] = [
//     (PARK[0] + destination[0]) / 2,
//     (PARK[1] + destination[1]) / 2,
//   ];

//   return (
//     <div style={{ width: "100%", height: "100%", position: "relative" }}>
//       <MapContainer
//         key={mapKey}
//         center={center}
//         zoom={10}
//         minZoom={8}
//         maxZoom={16}
//         style={{ width: "100%", height: "100%" }}
//         zoomControl={false}
//         scrollWheelZoom={false}
//       >
//         <TileLayer
//           url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
//           attribution=""
//           subdomains="abcd"
//           maxZoom={20}
//         />
//         <ZoomControl position="bottomright" />
//         <MapController
//           destination={destination}
//           endLabel={endLabel}
//           cachedCoords={cachedCoords}
//           onReady={handleReady}
//         />
//         <CtrlScrollZoom />
//       </MapContainer>

//       <motion.div
//         animate={{ opacity: overlayOpaque ? 1 : 0 }}
//         transition={{ duration: overlayOpaque ? 0 : 0.4, ease: "easeOut" }}
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "#001433",
//           zIndex: 2000,
//           pointerEvents: overlayOpaque ? "auto" : "none",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             width: 44,
//             height: 44,
//             borderRadius: "50%",
//             border: "2px solid rgba(245,110,106,0.3)",
//             borderTopColor: "#f56e6a",
//             animation: "location-map-spin 0.9s linear infinite",
//           }}
//         />
//       </motion.div>

//       <style>{`
//         @keyframes location-map-spin { to { transform: rotate(360deg); } }
//       `}</style>
//     </div>
//   );
// }

// export default function LocationMap() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const active = locations[activeIndex];
//   const mapKey = `${activeIndex}`;
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <section className="relative bg-white">
//       <div className="absolute inset-y-0 left-1/2 w-px bg-[rgba(0,59,157,0.05)] -translate-x-1/2 hidden lg:block" />

//       <style>{`
//         .location-map-wrap .leaflet-control-zoom {
//           border: none !important;
//           border-radius: 10px !important;
//           overflow: hidden;
//           box-shadow: 0 4px 12px rgba(6,27,54,0.25) !important;
//         }
//         .location-map-wrap .leaflet-control-zoom a {
//           color: white !important;
//           background: linear-gradient(90deg, #bf584f 0%, #f6736a 100%) !important;
//           border: none !important;
//           border-radius: 0 !important;
//         }
//         .location-map-wrap .leaflet-control-zoom a:hover {
//           background: linear-gradient(90deg, #a94943 0%, #e05e55 100%) !important;
//         }
//         .location-map-wrap .leaflet-control-zoom-in {
//           border-bottom: 1px solid rgba(255,255,255,0.3) !important;
//         }
//         .location-map-wrap .leaflet-control-attribution { display: none !important; }
//         .location-map-wrap .leaflet-marker-icon { background: none !important; border: none !important; }
//       `}</style>

//       <div className="fix py-[60px] lg:py-[80px]">
//         <div className="flex items-center gap-[13px] mb-5">
//           <span className="h-px w-7 bg-[#003b9d]" />
//           <span className="text-[12px] font-semibold tracking-[3.36px] uppercase text-[#003b9d]">
//             Location advantage
//           </span>
//         </div>

//         <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-[32px] sm:text-[42px] lg:text-[56px] mb-6">
//           <span className="text-gradient-brand bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
//             Minutes from everything{" "}
//           </span>
//           <span className="text-[#222] font-normal">that matters.</span>
//         </h2>

//         <p className="text-[#222] leading-[1.4] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[1000px] mb-8">
//           Bhiwandi is India&apos;s leading warehousing and logistics hub,
//           centrally positioned for connectivity to the country&apos;s top
//           consumption markets.
//         </p>

//         {/* Map card */}
//         <div className="rounded-[10px] overflow-hidden">
//           {/* Tabs row */}
//           <div
//             className="flex flex-wrap sm:flex-nowrap p-4"
//             style={{
//               background: "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)",
//             }}
//           >
//             {locations.map((loc, i) => {
//               const isActive = i === activeIndex;
//               return (
//                 <button
//                   key={loc.name}
//                   onClick={() => setActiveIndex(i)}
//                   className="flex-1 min-w-[45%] sm:min-w-0 flex flex-col items-start gap-[10px] text-left px-4 sm:px-[21px] py-[14px] sm:py-[10px] transition-colors"
//                   style={{
//                     borderLeft: "1px solid rgba(255,255,255,0.3)",
//                     background: isActive
//                       ? "rgba(255,255,255,0.1)"
//                       : "transparent",
//                     backdropFilter: isActive ? "blur(30px)" : undefined,
//                   }}
//                 >
//                   <span className="font-dm-sans text-white text-[14px] sm:text-[16px] leading-[1.4]">
//                     {loc.name}
//                   </span>
//                   <span className="font-dm-sans text-white font-semibold text-[18px] sm:text-[20px] leading-[1.4]">
//                     {loc.distance}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Map */}
//           <div className="location-map-wrap h-[380px] sm:h-[480px] lg:h-[515px] relative">
//             <MapPanel
//               mapKey={mapKey}
//               destination={active.destination}
//               endLabel={active.name}
//             />
//           </div>
//         </div>

//         <p className="text-[#222] leading-[1.4] text-[15px] sm:text-[16px] lg:text-[18px] max-w-[1280px] mt-8">
//           Direct access to the Mumbai–Agra, Mumbai–Pune, and Mumbai–Nashik
//           expressways, set within a mature warehousing ecosystem with
//           established 3PLs, a trained local workforce, and lower land and
//           operating costs than Mumbai.
//         </p>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MapContainer, TileLayer, useMap, ZoomControl } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// interface LocationTab {
//   name: string;
//   distance: string;
//   destination: [number, number];
// }

// const PARK: [number, number] = [19.257, 73.038];

// const locations: LocationTab[] = [
//   { name: "Pagda Toll", distance: "05 km", destination: [19.2985, 73.0295] },
//   {
//     name: "Samruddhi Highway",
//     distance: "12 km",
//     destination: [19.336, 73.0965],
//   },
//   {
//     name: "Chhatrapati Shivaji Maharaj International Airport",
//     distance: "57 km",
//     destination: [19.0896, 72.8656],
//   },
//   {
//     name: "Navi Mumbai Airport",
//     distance: "63 km",
//     destination: [18.9968, 73.0996],
//   },
//   { name: "JNPT Port", distance: "77 km", destination: [18.9494, 72.9525] },
// ];

// /* ─── Route cache: populated by prefetch before user ever clicks ─── */
// const routeCache = new Map<string, [number, number][]>();
// const routeInFlight = new Map<string, Promise<[number, number][]>>();

// function routeKey(dest: [number, number]) {
//   return `${dest[0]},${dest[1]}`;
// }

// function fetchRoute(dest: [number, number]): Promise<[number, number][]> {
//   const key = routeKey(dest);
//   if (routeCache.has(key)) return Promise.resolve(routeCache.get(key)!);
//   if (routeInFlight.has(key)) return routeInFlight.get(key)!;

//   const url =
//     `https://router.project-osrm.org/route/v1/driving/` +
//     `${PARK[1]},${PARK[0]};${dest[1]},${dest[0]}` +
//     `?overview=full&geometries=geojson`;

//   const promise = fetch(url)
//     .then((r) => r.json())
//     .then((data) => {
//       const coords: [number, number][] =
//         data.routes[0].geometry.coordinates.map(
//           ([lng, lat]: [number, number]) => [lat, lng],
//         );
//       routeCache.set(key, coords);
//       routeInFlight.delete(key);
//       return coords;
//     })
//     .catch(() => {
//       const fallback: [number, number][] = [PARK, dest];
//       routeCache.set(key, fallback);
//       routeInFlight.delete(key);
//       return fallback;
//     });

//   routeInFlight.set(key, promise);
//   return promise;
// }

// if (typeof window !== "undefined") {
//   for (const loc of locations) {
//     fetchRoute(loc.destination);
//   }
// }

// function chipHtml(text: string) {
//   return `<div style="background:linear-gradient(90deg,#bf584f 0%,#f6736a 100%);color:white;font-family:var(--font-dm-sans),'DM Sans',sans-serif;font-size:16px;text-transform:uppercase;white-space:nowrap;padding:10px 20px;border-radius:10px;box-shadow:0px 4px 4px rgba(0,0,0,0.35);line-height:1.2;pointer-events:none;">${text}</div>`;
// }

// /* Small navy/coral dot with white ring — marks Sahakar Logistics (our park), the fixed anchor on every tab. */
// function makeParkIcon() {
//   const PIN = 20;
//   const CHIP_H = 39; // approx rendered height of the label chip
//   const GAP = 6;
//   const html = `<div style="display:flex;flex-direction:column;align-items:center;gap:${GAP}px;pointer-events:none;">
//     ${chipHtml("Sahakar Logistics")}
//     <img src="/park/startpoint.svg" width="${PIN}" height="${PIN}" style="display:block;" />
//   </div>`;
//   const width = 220;
//   const height = CHIP_H + GAP + PIN;
//   return L.divIcon({
//     html,
//     className: "",
//     iconSize: [width, height],
//     // anchor at the exact center of the dot, so the route line's endpoint (the LatLng)
//     // lines up with the dot's visual center, not the bounding box corner
//     iconAnchor: [width / 2, height - PIN / 2],
//   });
// }

// /* Coral teardrop pin — marks the selected destination (Pagda Toll, Samruddhi Highway, etc). */
// function makeDestinationIcon(label: string) {
//   const PIN_W = 52;
//   const PIN_H = 52;
//   const CHIP_H = 39;
//   const GAP = 6;
//   // Tip of the teardrop sits at the bottom-center of the 52x52 pin graphic.
//   const html = `<div style="display:flex;flex-direction:column;align-items:center;gap:${GAP}px;pointer-events:none;">
//     ${chipHtml(label)}
//     <img src="/park/pin.svg" width="${PIN_W}" height="${PIN_H}" style="display:block;" />
//   </div>`;
//   const width = 220;
//   const height = CHIP_H + GAP + PIN_H;
//   return L.divIcon({
//     html,
//     className: "",
//     iconSize: [width, height],
//     // anchor at the pin's tip (bottom-center of the svg), matching its actual LatLng
//     iconAnchor: [width / 2, height],
//   });
// }

// /* Requires ctrl/cmd + scroll to zoom (so the page can still scroll normally
//    over the map), with a brief on-screen hint when scrolling without the modifier. */
// function CtrlScrollZoom() {
//   const map = useMap();
//   const [visible, setVisible] = useState(false);
//   const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   useEffect(() => {
//     const container = map.getContainer();
//     map.scrollWheelZoom.disable();

//     function onWheel(e: WheelEvent) {
//       if (e.ctrlKey || e.metaKey) {
//         e.preventDefault();
//         e.stopPropagation();
//         map.setZoom(map.getZoom() + (e.deltaY > 0 ? -1 : 1), { animate: true });
//         setVisible(false);
//         if (timerRef.current) clearTimeout(timerRef.current);
//       }
//     }
//     function onWheelHint(e: WheelEvent) {
//       if (!e.ctrlKey && !e.metaKey) {
//         setVisible(true);
//         if (timerRef.current) clearTimeout(timerRef.current);
//         timerRef.current = setTimeout(() => setVisible(false), 1600);
//       }
//     }

//     container.addEventListener("wheel", onWheel, {
//       capture: true,
//       passive: false,
//     });
//     container.addEventListener("wheel", onWheelHint, {
//       capture: false,
//       passive: true,
//     });

//     return () => {
//       container.removeEventListener("wheel", onWheel, { capture: true });
//       container.removeEventListener("wheel", onWheelHint, { capture: false });
//       if (timerRef.current) clearTimeout(timerRef.current);
//     };
//   }, [map]);

//   return (
//     <div
//       style={{
//         position: "absolute",
//         inset: 0,
//         zIndex: 1000,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         pointerEvents: "none",
//         transition: "opacity 0.3s ease",
//         opacity: visible ? 1 : 0,
//       }}
//     >
//       <div
//         style={{
//           background: "rgba(6,27,54,0.85)",
//           color: "white",
//           fontFamily: "'DM Sans', sans-serif",
//           fontSize: "14px",
//           fontWeight: 500,
//           padding: "10px 20px",
//           borderRadius: "8px",
//           backdropFilter: "blur(6px)",
//         }}
//       >
//         Use ctrl + scroll to zoom the map
//       </div>
//     </div>
//   );
// }

// function MapController({
//   destination,
//   endLabel,
//   cachedCoords,
//   onReady,
// }: {
//   destination: [number, number];
//   endLabel: string;
//   cachedCoords: [number, number][] | null;
//   onReady: () => void;
// }) {
//   const map = useMap();
//   const onReadyRef = useRef(onReady);

//   useEffect(() => {
//     onReadyRef.current = onReady;
//   }, [onReady]);

//   useEffect(() => {
//     let cancelled = false;
//     let startMarker: L.Marker | null = null;
//     let endMarker: L.Marker | null = null;
//     let poly: L.Polyline | null = null;

//     function draw(coords: [number, number][]) {
//       if (cancelled) return;
//       // Ensure the polyline's endpoints exactly match the pin coordinates —
//       // OSRM snaps route ends to the nearest road, which can leave a visible
//       // gap between the drawn line and the pins if used as-is.
//       const routeCoords: [number, number][] =
//         coords.length > 0
//           ? [PARK, ...coords.slice(1, -1), destination]
//           : [PARK, destination];
//       poly = L.polyline(routeCoords, {
//         color: "#061b36",
//         weight: 3,
//         opacity: 1,
//       }).addTo(map);
//       startMarker = L.marker(PARK, { icon: makeParkIcon() }).addTo(map);
//       endMarker = L.marker(destination, {
//         icon: makeDestinationIcon(endLabel),
//       }).addTo(map);
//       map.invalidateSize();
//       setTimeout(() => {
//         if (cancelled) return;
//         map.fitBounds(poly!.getBounds(), {
//           animate: false,
//           paddingTopLeft: [40, 100],
//           paddingBottomRight: [40, 40],
//         });
//         onReadyRef.current();
//       }, 0);
//     }

//     if (cachedCoords) {
//       draw(cachedCoords);
//     } else {
//       fetchRoute(destination).then(draw);
//     }

//     return () => {
//       cancelled = true;
//       poly?.remove();
//       startMarker?.remove();
//       endMarker?.remove();
//     };
//   }, [destination, endLabel]);

//   return null;
// }

// function MapPanel({
//   mapKey,
//   destination,
//   endLabel,
// }: {
//   mapKey: string;
//   destination: [number, number];
//   endLabel: string;
// }) {
//   const getCached = () => routeCache.get(routeKey(destination)) ?? null;
//   const isCached = () => routeCache.has(routeKey(destination));

//   const [overlayOpaque, setOverlayOpaque] = useState(() => !isCached());
//   const [cachedCoords, setCachedCoords] = useState<[number, number][] | null>(
//     getCached,
//   );
//   const prevKeyRef = useRef(mapKey);

//   useEffect(() => {
//     if (prevKeyRef.current === mapKey) return;
//     prevKeyRef.current = mapKey;
//     const cached = routeCache.get(routeKey(destination)) ?? null;
//     setCachedCoords(cached);
//     setOverlayOpaque(!cached);
//   }, [mapKey, destination]);

//   const handleReady = useCallback(() => setOverlayOpaque(false), []);

//   const center: [number, number] = [
//     (PARK[0] + destination[0]) / 2,
//     (PARK[1] + destination[1]) / 2,
//   ];

//   return (
//     <div style={{ width: "100%", height: "100%", position: "relative" }}>
//       <MapContainer
//         key={mapKey}
//         center={center}
//         zoom={10}
//         minZoom={8}
//         maxZoom={16}
//         style={{ width: "100%", height: "100%" }}
//         zoomControl={false}
//         scrollWheelZoom={false}
//       >
//         <TileLayer
//           url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
//           attribution=""
//           subdomains="abcd"
//           maxZoom={20}
//         />
//         <ZoomControl position="bottomright" />
//         <MapController
//           destination={destination}
//           endLabel={endLabel}
//           cachedCoords={cachedCoords}
//           onReady={handleReady}
//         />
//         <CtrlScrollZoom />
//       </MapContainer>

//       <motion.div
//         animate={{ opacity: overlayOpaque ? 1 : 0 }}
//         transition={{ duration: overlayOpaque ? 0 : 0.4, ease: "easeOut" }}
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "#001433",
//           zIndex: 2000,
//           pointerEvents: overlayOpaque ? "auto" : "none",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             width: 44,
//             height: 44,
//             borderRadius: "50%",
//             border: "2px solid rgba(245,110,106,0.3)",
//             borderTopColor: "#f56e6a",
//             animation: "location-map-spin 0.9s linear infinite",
//           }}
//         />
//       </motion.div>

//       <style>{`
//         @keyframes location-map-spin { to { transform: rotate(360deg); } }
//       `}</style>
//     </div>
//   );
// }

// export default function LocationMap() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const active = locations[activeIndex];
//   const mapKey = `${activeIndex}`;
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <section className="relative bg-white">
//       <div className="absolute inset-y-0 left-1/2 w-px bg-[rgba(0,59,157,0.05)] -translate-x-1/2 hidden lg:block" />

//       <div className="fix py-[60px] lg:py-[80px]">
//         <div className="flex items-center gap-[13px] mb-5">
//           <span className="h-px w-7 bg-[#003b9d]" />
//           <span className="text-[12px] font-semibold tracking-[3.36px] uppercase text-[#003b9d]">
//             Location advantage
//           </span>
//         </div>

//         <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-[32px] sm:text-[42px] lg:text-[56px] mb-6">
//           <span className="text-gradient-brand bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
//             Minutes from everything{" "}
//           </span>
//           <span className="text-[#222] font-normal">that matters.</span>
//         </h2>

//         <p className="text-[#222] leading-[1.4] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[1000px] mb-8">
//           Bhiwandi is India&apos;s leading warehousing and logistics hub,
//           centrally positioned for connectivity to the country&apos;s top
//           consumption markets.
//         </p>

//         {/* Map card */}
//         <div className="rounded-[10px] overflow-hidden">
//           {/* Desktop tabs row — unchanged */}
//           <div
//             className="hidden md:flex p-4"
//             style={{
//               background: "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)",
//             }}
//           >
//             {locations.map((loc, i) => {
//               const isActive = i === activeIndex;
//               return (
//                 <button
//                   key={loc.name}
//                   onClick={() => setActiveIndex(i)}
//                   className="flex-1 min-w-0 flex flex-col items-start gap-[10px] justify-between mr-5 text-left pl-4 sm:pl-[21px] py-[14px] sm:py-[10px] transition-colors"
//                   style={{
//                     borderLeft: "1px solid rgba(255,255,255,0.3)",
//                     background: isActive
//                       ? "rgba(255,255,255,0.1)"
//                       : "transparent",
//                     backdropFilter: isActive ? "blur(30px)" : undefined,
//                   }}
//                 >
//                   <span className="font-dm-sans text-white text-[14px] sm:text-[16px] leading-[1.4]">
//                     {loc.name}
//                   </span>
//                   <span className="font-dm-sans text-white font-semibold text-[18px] sm:text-[20px] leading-[1.4]">
//                     {loc.distance}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Mobile dropdown — replaces tabs below md */}
//           <div
//             ref={dropdownRef}
//             className="md:hidden relative p-4"
//             style={{
//               background: "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)",
//             }}
//           >
//             <button
//               type="button"
//               onClick={() => setIsDropdownOpen((prev) => !prev)}
//               className="w-full flex items-center justify-between gap-3 px-4 py-[10px] rounded-[10px] cursor-pointer transition-colors"
//               style={{
//                 background: isDropdownOpen
//                   ? "rgba(255,255,255,0.1)"
//                   : "transparent",
//                 border: "1px solid rgba(255,255,255,0.3)",
//               }}
//             >
//               <span className="flex flex-col items-start gap-[4px] min-w-0">
//                 <span className="font-dm-sans text-white text-[14px] leading-[1.4] truncate max-w-full">
//                   {active.name}
//                 </span>
//                 <span className="font-dm-sans text-white font-semibold text-[18px] leading-[1.4]">
//                   {active.distance}
//                 </span>
//               </span>
//               <motion.svg
//                 animate={{ rotate: isDropdownOpen ? 180 : 0 }}
//                 transition={{ duration: 0.2, ease: "easeOut" }}
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="white"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 style={{ flexShrink: 0 }}
//               >
//                 <polyline points="6 9 12 15 18 9" />
//               </motion.svg>
//             </button>

//             <AnimatePresence>
//               {isDropdownOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -4 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -4 }}
//                   transition={{ duration: 0.2, ease: "easeOut" }}
//                   /* FIX: Replaced 'top-full mt-3' with 'top-[58px]' to make it perfectly stick to the trigger block */
//                   className="absolute left-4 right-4 top-[88px] rounded-[10px] overflow-hidden z-[1500]"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)",
//                     boxShadow: "0 8px 20px rgba(6,27,54,0.35)",
//                   }}
//                 >
//                   {locations.map((loc, i) => {
//                     const isActive = i === activeIndex;
//                     return (
//                       <button
//                         key={loc.name}
//                         type="button"
//                         onClick={() => {
//                           setActiveIndex(i);
//                           setIsDropdownOpen(false);
//                         }}
//                         className="w-full h-[70px] flex flex-row justify-around items-center gap-[8px] px-4 text-left transition-colors"
//                         style={{
//                           background: isActive
//                             ? "rgba(255,255,255,0.12)"
//                             : "transparent",
//                           borderTop: "1px solid rgba(255,255,255,0.2)",
//                         }}
//                         onMouseEnter={(e) => {
//                           if (!isActive) {
//                             e.currentTarget.style.background =
//                               "rgba(255,255,255,0.08)";
//                           }
//                         }}
//                         onMouseLeave={(e) => {
//                           if (!isActive) {
//                             e.currentTarget.style.background = "transparent";
//                           }
//                         }}
//                       >
//                         <span className=" w-full text-start! text-white text-[14px] leading-[1.4]">
//                           {loc.name}
//                         </span>
//                         <span className="text-white font-semibold text-start text-[15px]  leading-[1.4]">
//                           {loc.distance}
//                         </span>
//                       </button>
//                     );
//                   })}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//           {/* Map */}
//           <div className="location-map-wrap h-[380px] sm:h-[480px] lg:h-[515px] relative">
//             <MapPanel
//               mapKey={mapKey}
//               destination={active.destination}
//               endLabel={active.name}
//             />
//           </div>
//         </div>

//         <p className="text-[#222] leading-[1.4] text-[15px] sm:text-[16px] lg:text-[18px] max-w-[1280px] mt-8">
//           Direct access to the Mumbai–Agra, Mumbai–Pune, and Mumbai–Nashik
//           expressways, set within a mature warehousing ecosystem with
//           established 3PLs, a trained local workforce, and lower land and
//           operating costs than Mumbai.
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, useMap, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LocationTab {
  name: string;
  distance: string;
  destination: [number, number];
}

const PARK: [number, number] = [19.257, 73.038];

const locations: LocationTab[] = [
  { name: "Pagda Toll", distance: "05 km", destination: [19.2985, 73.0295] },
  {
    name: "Samruddhi Highway",
    distance: "12 km",
    destination: [19.336, 73.0965],
  },
  {
    name: "Chhatrapati Shivaji Maharaj International Airport",
    distance: "57 km",
    destination: [19.0896, 72.8656],
  },
  {
    name: "Navi Mumbai Airport",
    distance: "63 km",
    destination: [18.9968, 73.0996],
  },
  { name: "JNPT Port", distance: "77 km", destination: [18.9494, 72.9525] },
];

const AIRPORT_LABEL = "Chhatrapati Shivaji Maharaj International Airport";
const AIRPORT_LABEL_MOBILE_HTML =
  'Chhatrapati Shivaji Maharaj<br class="location-label-mobile-break" />International Airport';

/* ─── Route cache: populated by prefetch before user ever clicks ─── */
const routeCache = new Map<string, [number, number][]>();
const routeInFlight = new Map<string, Promise<[number, number][]>>();

function routeKey(dest: [number, number]) {
  return `${dest[0]},${dest[1]}`;
}

function fetchRoute(dest: [number, number]): Promise<[number, number][]> {
  const key = routeKey(dest);
  if (routeCache.has(key)) return Promise.resolve(routeCache.get(key)!);
  if (routeInFlight.has(key)) return routeInFlight.get(key)!;

  const url =
    `https://router.project-osrm.org/route/v1/driving/` +
    `${PARK[1]},${PARK[0]};${dest[1]},${dest[0]}` +
    `?overview=full&geometries=geojson`;

  const promise = fetch(url)
    .then((r) => r.json())
    .then((data) => {
      const coords: [number, number][] =
        data.routes[0].geometry.coordinates.map(
          ([lng, lat]: [number, number]) => [lat, lng],
        );
      routeCache.set(key, coords);
      routeInFlight.delete(key);
      return coords;
    })
    .catch(() => {
      const fallback: [number, number][] = [PARK, dest];
      routeCache.set(key, fallback);
      routeInFlight.delete(key);
      return fallback;
    });

  routeInFlight.set(key, promise);
  return promise;
}

if (typeof window !== "undefined") {
  for (const loc of locations) {
    fetchRoute(loc.destination);
  }
}

function labelHtml(text: string) {
  return text === AIRPORT_LABEL ? AIRPORT_LABEL_MOBILE_HTML : text;
}

function chipHtml(text: string) {
  return `<div class="location-map-chip bg-gradient-to-r from-[#bf584f] to-[#f6736a] text-white font-dm-sans text-[16px] uppercase whitespace-nowrap px-5 py-2.5 rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.35)] leading-[1.2] pointer-events-none">${labelHtml(text)}</div>`;
}

/* Small navy/coral dot with white ring — marks Sahakar Logistics (our park), the fixed anchor on every tab. */
function makeParkIcon() {
  const PIN = 20;
  const CHIP_H = 39; // approx rendered height of the label chip
  const GAP = 6;
  const html = `<div class="flex flex-col items-center gap-[6px] pointer-events-none">
    ${chipHtml("Sahakar Logistics")}
    <img src="/park/startpoint.svg" width="${PIN}" height="${PIN}" class="block" />
  </div>`;
  const width = 220;
  const height = CHIP_H + GAP + PIN;
  return L.divIcon({
    html,
    className: "",
    iconSize: [width, height],
    iconAnchor: [width / 2, height - PIN / 2],
  });
}

/* Coral teardrop pin — marks the selected destination (Pagda Toll, Samruddhi Highway, etc). */
function makeDestinationIcon(label: string) {
  const PIN_W = 52;
  const PIN_H = 52;
  const CHIP_H = 39;
  const GAP = 6;
  const html = `<div class="flex flex-col items-center gap-[6px] pointer-events-none">
    ${chipHtml(label)}
    <img src="/park/pin.svg" width="${PIN_W}" height="${PIN_H}" class="block" />
  </div>`;
  const width = 220;
  const height = CHIP_H + GAP + PIN_H;
  return L.divIcon({
    html,
    className: "",
    iconSize: [width, height],
    iconAnchor: [width / 2, height],
  });
}

/* Requires ctrl/cmd + scroll to zoom (so the page can still scroll normally
    over the map), with a brief on-screen hint when scrolling without the modifier. */
function CtrlScrollZoom() {
  const map = useMap();
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const container = map.getContainer();
    map.scrollWheelZoom.disable();

    function onWheel(e: WheelEvent) {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        e.stopPropagation();
        map.setZoom(map.getZoom() + (e.deltaY > 0 ? -1 : 1), { animate: true });
        setVisible(false);
        if (timerRef.current) clearTimeout(timerRef.current);
      }
    }
    function onWheelHint(e: WheelEvent) {
      if (!e.ctrlKey && !e.metaKey) {
        setVisible(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setVisible(false), 1600);
      }
    }

    container.addEventListener("wheel", onWheel, {
      capture: true,
      passive: false,
    });
    container.addEventListener("wheel", onWheelHint, {
      capture: false,
      passive: true,
    });

    return () => {
      container.removeEventListener("wheel", onWheel, { capture: true });
      container.removeEventListener("wheel", onWheelHint, { capture: false });
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [map]);

  return (
    <div
      className={`absolute inset-0 z-[1000] flex items-center justify-center pointer-events-none transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  );
}

function MapController({
  destination,
  endLabel,
  cachedCoords,
  onReady,
}: {
  destination: [number, number];
  endLabel: string;
  cachedCoords: [number, number][] | null;
  onReady: () => void;
}) {
  const map = useMap();
  const onReadyRef = useRef(onReady);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    let cancelled = false;
    let startMarker: L.Marker | null = null;
    let endMarker: L.Marker | null = null;
    let poly: L.Polyline | null = null;

    function draw(coords: [number, number][]) {
      if (cancelled) return;
      const routeCoords: [number, number][] =
        coords.length > 0
          ? [PARK, ...coords.slice(1, -1), destination]
          : [PARK, destination];
      poly = L.polyline(routeCoords, {
        color: "#061b36",
        weight: 3,
        opacity: 1,
      }).addTo(map);
      startMarker = L.marker(PARK, { icon: makeParkIcon() }).addTo(map);
      endMarker = L.marker(destination, {
        icon: makeDestinationIcon(endLabel),
      }).addTo(map);
      map.invalidateSize();
      setTimeout(() => {
        if (cancelled) return;
        const isMobile = map.getContainer().clientWidth < 768;
        map.fitBounds(poly!.getBounds(), {
          animate: false,
          maxZoom: isMobile ? 10 : undefined,
          paddingTopLeft: isMobile ? [145, 130] : [40, 100],
          paddingBottomRight: isMobile ? [80, 80] : [40, 40],
        });
        onReadyRef.current();
      }, 0);
    }

    if (cachedCoords) {
      draw(cachedCoords);
    } else {
      fetchRoute(destination).then(draw);
    }

    return () => {
      cancelled = true;
      poly?.remove();
      startMarker?.remove();
      endMarker?.remove();
    };
  }, [destination, endLabel]);

  return null;
}

function MapPanel({
  mapKey,
  destination,
  endLabel,
}: {
  mapKey: string;
  destination: [number, number];
  endLabel: string;
}) {
  const getCached = () => routeCache.get(routeKey(destination)) ?? null;
  const isCached = () => routeCache.has(routeKey(destination));

  const [overlayOpaque, setOverlayOpaque] = useState(() => !isCached());
  const [cachedCoords, setCachedCoords] = useState<[number, number][] | null>(
    getCached,
  );
  const prevKeyRef = useRef(mapKey);

  useEffect(() => {
    if (prevKeyRef.current === mapKey) return;
    prevKeyRef.current = mapKey;
    const cached = routeCache.get(routeKey(destination)) ?? null;
    setCachedCoords(cached);
    setOverlayOpaque(!cached);
  }, [mapKey, destination]);

  const handleReady = useCallback(() => setOverlayOpaque(false), []);

  const center: [number, number] = [
    (PARK[0] + destination[0]) / 2,
    (PARK[1] + destination[1]) / 2,
  ];

  return (
    <div className="w-full h-full relative">
      <MapContainer
        key={mapKey}
        center={center}
        zoom={10}
        minZoom={8}
        maxZoom={16}
        className="w-full h-full"
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution=""
          subdomains="abcd"
          maxZoom={20}
        />
        <ZoomControl position="bottomright" />
        <MapController
          destination={destination}
          endLabel={endLabel}
          cachedCoords={cachedCoords}
          onReady={handleReady}
        />
        <CtrlScrollZoom />
      </MapContainer>

      <motion.div
        animate={{ opacity: overlayOpaque ? 1 : 0 }}
        transition={{ duration: overlayOpaque ? 0 : 0.4, ease: "easeOut" }}
        className={`absolute inset-0 bg-[#001433] z-[2000] flex items-center justify-center ${
          overlayOpaque ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="w-11 h-11 rounded-full border-2 border-[#f56e6a]/30 border-t-[#f56e6a] animate-[location-map-spin_0.9s_linear_infinite]" />
      </motion.div>

      <style>{`
        @keyframes location-map-spin { to { transform: rotate(360deg); } }

        .location-label-mobile-break {
          display: none;
        }

        @media (max-width: 767px) {
          .location-label-mobile-break {
            display: block;
          }

          .location-map-chip {
            max-width: 240px;
            white-space: normal !important;
            text-align: center;
            font-size: 14px !important;
            line-height: 1.16 !important;
            padding: 9px 14px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function LocationMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = locations[activeIndex];
  const mapKey = `${activeIndex}`;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="relative bg-[linear-gradient(0deg,_#FAFAF8_0%,_#FAFAF8_100%)]">
      <div className="absolute inset-y-0 left-1/2 w-px bg-[rgba(0,59,157,0.05)] -translate-x-1/2 hidden lg:block" />

      <div className="fix py-[60px] lg:py-[80px]">
        <div className="flex items-center gap-[13px] mb-5">
          <span className="h-px w-7 bg-[#003b9d]" />
          <span className="text-[12px] font-semibold tracking-[3.36px] uppercase text-[#003b9d]">
            Location advantage
          </span>
        </div>

        <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-[32px] sm:text-[42px] lg:text-[56px] mb-6">
          <span className="text-gradient-brand bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
            Minutes from everything{" "}
          </span>
          <span className="text-[#222] font-normal">that matters.</span>
        </h2>

        <p className="text-[#222] leading-[1.4] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[1000px] mb-8">
          Bhiwandi is India&apos;s leading warehousing and logistics hub,
          centrally positioned for connectivity to the country&apos;s top
          consumption markets.
        </p>

        {/* Map card */}
        <div className="rounded-[10px] overflow-hidden">
          {/* Desktop tabs row */}
          <div className="hidden md:flex p-4 bg-gradient-to-r from-[#bf584f] to-[#f6736a]">
            {locations.map((loc, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={loc.name}
                  onClick={() => setActiveIndex(i)}
                  className={`flex-1 min-w-0 flex flex-col items-start gap-[10px] justify-between mr-5 text-left pl-4 sm:pl-[21px] py-[14px] sm:py-[10px] transition-colors border-l border-white/30 ${
                    isActive
                      ? "bg-white/10 backdrop-blur-[30px]"
                      : "bg-transparent"
                  }`}
                >
                  <span className="font-dm-sans text-white text-[14px] 2xl:text-[16px] leading-[1.4]">
                    {loc.name}
                  </span>
                  <span className="font-dm-sans text-white font-semibold text-[18px] 2xl:text-[20px] lg:text-[16px] leading-[1.4]">
                    {loc.distance}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile dropdown — replaces tabs below md */}
          <div
            ref={dropdownRef}
            className="md:hidden relative p-4 bg-gradient-to-r from-[#bf584f] to-[#f6736a]"
          >
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between gap-3 px-4 py-[10px] rounded-[10px] cursor-pointer transition-colors border border-white/30 ${
                isDropdownOpen ? "bg-white/10" : "bg-transparent"
              }`}
            >
              <span className="flex flex-col items-start gap-[4px] min-w-0">
                <span
                  className="font-dm-sans text-white text-start text-[14px] leading-[1.25] max-w-full"
                  dangerouslySetInnerHTML={{ __html: labelHtml(active.name) }}
                />
                <span className="font-dm-sans text-white font-semibold text-[18px] leading-[1.4]">
                  {active.distance}
                </span>
              </span>
              <motion.svg
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <polyline points="6 9 12 15 18 9" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-4 right-4 top-[88px] rounded-[10px] overflow-hidden z-[1500] bg-gradient-to-r from-[#bf584f] to-[#f6736a] shadow-[0_8px_20px_rgba(6,27,54,0.35)]"
                >
                  {locations.map((loc, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <button
                        key={loc.name}
                        type="button"
                        onClick={() => {
                          setActiveIndex(i);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full h-[70px] flex flex-row justify-around items-center gap-[8px] px-4 text-left transition-colors border-t border-white/20 ${
                          isActive
                            ? "bg-[rgba(255,255,255,0.12)]"
                            : "bg-transparent hover:bg-[rgba(255,255,255,0.08)]"
                        }`}
                      >
                        <span
                          className="w-full text-start! text-white text-[14px] leading-[1.25]"
                          dangerouslySetInnerHTML={{
                            __html: labelHtml(loc.name),
                          }}
                        />
                        <span className="text-white font-semibold text-start text-[15px]  leading-[1.4]">
                          {loc.distance}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Map */}
          <div className="location-map-wrap h-[380px] sm:h-[480px] lg:h-[515px] relative">
            <MapPanel
              mapKey={mapKey}
              destination={active.destination}
              endLabel={active.name}
            />
          </div>
        </div>

        <p className="text-[#222] leading-[1.4] text-[15px] sm:text-[16px] lg:text-[18px] max-w-[1280px] mt-8">
          Direct access to the Mumbai–Agra, Mumbai–Pune, and Mumbai–Nashik
          expressways, set within a mature warehousing ecosystem with
          established 3PLs, a trained local workforce, and lower land and
          operating costs than Mumbai.
        </p>
      </div>
    </section>
  );
}
