import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SummaryCardProps {
  icon: string;
  title: string;
  subtitle: string;
  content: string[];
}

const SummaryCard = ({ icon, title, subtitle, content }: SummaryCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl bg-card border border-border card-shadow overflow-hidden transition-all duration-300 hover:card-shadow-hover">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 flex items-center gap-4"
      >
        <span className="text-3xl shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
      {expanded && (
        <div className="px-5 pb-5 pt-0 animate-in fade-in slide-in-from-top-1 duration-300">
          <div className="border-t border-border pt-4 space-y-3">
            {content.map((paragraph, i) => (
              <p key={i} className="text-sm text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
