import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { reminders } from "@/data/reminders";

const RemindersSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {reminders.map((r) => (
        <div key={r.id} className="rounded-xl bg-card border border-border card-shadow overflow-hidden transition-all duration-300 hover:card-shadow-hover">
          <button
            onClick={() => setExpandedId(expandedId === r.id ? null : r.id)}
            className="w-full text-left p-5 flex items-center gap-4"
          >
            <span className="text-3xl shrink-0">{r.emoji}</span>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-lg font-bold text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{r.category}</p>
            </div>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${expandedId === r.id ? "rotate-180" : ""}`} />
          </button>
          {expandedId === r.id && (
            <div className="px-5 pb-5 pt-0 animate-in fade-in slide-in-from-top-1 duration-300">
              <div className="border-t border-border pt-4">
                <ul className="space-y-2">
                  {r.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground/80 leading-relaxed">
                      <span className="text-primary font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RemindersSection;
