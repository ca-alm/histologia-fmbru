import { ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type JournalType = "nature" | "cell" | "nejm" | "science";

interface ArticleCardProps {
  title: string;
  journal: string;
  journalType: JournalType;
  date: string;
  summary: string;
  clinicalRelevance: string;
  doi?: string;
  url?: string;
}

const journalColors: Record<JournalType, string> = {
  nature: "bg-badge-nature",
  cell: "bg-badge-cell",
  nejm: "bg-badge-nejm",
  science: "bg-badge-science",
};

const ArticleCard = ({ title, journal, journalType, date, summary, clinicalRelevance, doi, url }: ArticleCardProps) => {
  const articleUrl = url || (doi ? `https://doi.org/${doi}` : undefined);
  
  return (
    <div className="group rounded-xl bg-card p-6 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-0.5 border border-border">
      <div className="flex items-start justify-between gap-4 mb-3">
        <Badge className={`${journalColors[journalType]} text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full`}>
          {journal}
        </Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground text-sm whitespace-nowrap">
          <Calendar className="w-3.5 h-3.5" />
          {date}
        </span>
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground leading-snug mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
        {summary}
      </p>
      <div className="bg-secondary rounded-lg p-3 mb-4">
        <p className="text-sm font-semibold text-secondary-foreground mb-1">🏥 Relevância Clínica</p>
        <p className="text-sm text-secondary-foreground/80">{clinicalRelevance}</p>
      </div>
      {articleUrl && (
        <a
          href={articleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Acessar artigo
        </a>
      )}
    </div>
  );
};

export default ArticleCard;
