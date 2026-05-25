import { GALLERY } from "@/data/site";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-24 sm:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold text-xs uppercase tracking-[0.25em] mb-5">
            <span className="w-8 h-px bg-[#00B4D8]" />
            Gallery
          </div>
          <h2
            data-testid="gallery-headline"
            className="font-display font-black text-[#003566] text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]"
          >
            A peek into our pool.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {GALLERY.map((img, i) => {
            // Asymmetric layout
            const span =
              i === 0
                ? "col-span-2 row-span-2"
                : i === 3
                  ? "lg:col-span-2"
                  : "";
            return (
              <figure
                key={i}
                data-testid={`gallery-item-${i}`}
                className={`group relative overflow-hidden rounded-2xl ${span}`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001d3d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white font-display font-semibold text-sm sm:text-base translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {img.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};
