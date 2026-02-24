import { useState } from "react";
import { ChevronDown, Eye } from "lucide-react";
import { slides } from "@/data/slides";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SlidesExplorer = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {slides.map((slide) => (
        <div key={slide.id} className="rounded-xl bg-card border border-border card-shadow overflow-hidden transition-all duration-300 hover:card-shadow-hover">
          <button
            onClick={() => setExpandedId(expandedId === slide.id ? null : slide.id)}
            className="w-full text-left p-5 flex items-center gap-4"
          >
            <Eye className="w-8 h-8 text-primary shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-lg font-bold text-foreground">{slide.tissue}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">Coloração: {slide.stain}</p>
            </div>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${expandedId === slide.id ? "rotate-180" : ""}`} />
          </button>

          {expandedId === slide.id && (
            <div className="px-5 pb-5 pt-0 animate-in fade-in slide-in-from-top-1 duration-300">
              <div className="border-t border-border pt-4 space-y-4">
                {/* Slide image */}
                {slide.imageUrl && (
                  <div className="rounded-lg overflow-hidden border border-border">
                    <AspectRatio ratio={4 / 3}>
                      <img
                        src={slide.imageUrl}
                        alt={`Lâmina histológica: ${slide.tissue}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </AspectRatio>
                  </div>
                )}

                <p className="text-sm text-foreground/80 leading-relaxed">{slide.description}</p>

                {/* Structures */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">🏷️ Estruturas Identificadas</p>
                  <div className="space-y-3">
                    {slide.structures.map((s, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-3 h-3 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: s.color }} />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{s.name}</p>
                          <p className="text-sm text-foreground/70 leading-relaxed">{s.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical note */}
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-sm font-semibold text-secondary-foreground mb-1">🏥 Correlação Clínica</p>
                  <p className="text-sm text-secondary-foreground/80 leading-relaxed">{slide.clinicalNote}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SlidesExplorer;
