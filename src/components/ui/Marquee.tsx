const items = [
  'Dark Trap', 'Neo-Soul', 'Cinematic', 'Drill', 'Future Bass',
  'Lo-Fi', 'Ambient', 'Boom Bap', 'Electronic', 'R&B',
  'Dark Techno', 'Trap Soul', 'Noir', 'Experimental',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[rgba(124,58,237,0.12)] bg-[#06060a] py-4 select-none">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 mx-6"
          >
            <span className="font-display text-[10px] font-800 tracking-[0.28em] uppercase text-[#48486a] hover:text-[#8080a8] transition-colors duration-300">
              {item}
            </span>
            <span className="text-[#3d1f8a] text-[6px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
