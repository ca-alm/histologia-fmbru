import { useState } from "react";
import { BookOpen, FileText, Globe, Image } from "lucide-react";
import { references } from "@/data/references";

const typeConfig = {
  livro: { icon: BookOpen, label: "Livro", color: "bg-blue-500/20 text-blue-700 border-blue-300" },
  artigo: { icon: FileText, label: "Artigo", color: "bg-green-500/20 text-green-700 border-green-300" },
  atlas: { icon: Image, label: "Atlas", color: "bg-purple-500/20 text-purple-700 border-purple-300" },
  site: { icon: Globe, label: "Site", color: "bg-amber-500/20 text-amber-700 border-amber-300" },
};

const types = ["todos", "livro", "artigo", "atlas", "site"] as const;

const ReferencesSection = () => {
  const [filter, setFilter] = useState<string>("todos");

  const filtered = filter === "todos" ? references : references.filter((r) => r.type === filter);

  return (
    <div className="space-y-6">
      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
              filter === t ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            {t === "todos" ? "Todos" : typeConfig[t as keyof typeof typeConfig].label + "s"}
          </button>
        ))}
      </div>

      {/* References list */}
      <div className="space-y-3">
        {filtered.map((ref) => {
          const cfg = typeConfig[ref.type];
          const Icon = cfg.icon;
          return (
            <div key={ref.id} className="rounded-xl bg-card border border-border card-shadow p-4 hover:card-shadow-hover transition-all">
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${cfg.color}`}>{cfg.label}</span>
                    <span className="text-xs text-muted-foreground">{ref.year}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-foreground leading-snug">{ref.title}</h3>
                  <p className="text-sm text-primary/80 font-medium mt-0.5">{ref.authors}</p>
                  <p className="text-xs text-muted-foreground">{ref.details}</p>
                  <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{ref.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center text-xs text-muted-foreground pt-4 border-t border-border">
        <p>O conteúdo deste aplicativo é baseado nestas referências acadêmicas. Para uso educacional apenas.</p>
      </div>
    </div>
  );
};

export default ReferencesSection;
