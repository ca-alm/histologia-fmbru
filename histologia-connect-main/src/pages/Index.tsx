import { useState } from "react";
import { Newspaper, Brain, BookOpen, Microscope, Bell, Eye, Stethoscope, CalendarDays, MessageCircle, Gamepad2, Library } from "lucide-react";
import heroImage from "@/assets/hero-histology.jpg";
import ArticleCard from "@/components/ArticleCard";
import QuizSection from "@/components/QuizSection";
import SummaryCard from "@/components/SummaryCard";
import RemindersSection from "@/components/RemindersSection";
import SlidesExplorer from "@/components/SlidesExplorer";
import ClinicalCasesSection from "@/components/ClinicalCasesSection";
import CalendarSection from "@/components/CalendarSection";
import QASection from "@/components/QASection";
import GamesSection from "@/components/GamesSection";
import ReferencesSection from "@/components/ReferencesSection";
import { articles } from "@/data/articles";
import { summaries } from "@/data/summaries";

const tabs = [
  { id: "updates", label: "Atualizações", icon: Newspaper },
  { id: "activities", label: "Atividades", icon: Brain },
  { id: "summaries", label: "Resumos", icon: BookOpen },
  { id: "reminders", label: "Lembretes", icon: Bell },
  { id: "slides", label: "Lâminas", icon: Eye },
  { id: "cases", label: "Casos Clínicos", icon: Stethoscope },
  { id: "games", label: "Jogos", icon: Gamepad2 },
  { id: "calendar", label: "Calendário", icon: CalendarDays },
  { id: "qa", label: "Dúvidas", icon: MessageCircle },
  { id: "references", label: "Referências", icon: Library },
] as const;

type TabId = (typeof tabs)[number]["id"];

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("updates");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Histologia microscópica" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Microscope className="w-8 h-8 text-primary-foreground/90" />
            <span className="text-primary-foreground/80 font-sans text-sm font-semibold uppercase tracking-widest">
              FMBRU-USP
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-black text-primary-foreground leading-tight mb-4">
            HistoApp
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Apoio pedagógico em Histologia — atualizações científicas, atividades interativas e resumos para a prática médica.
          </p>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="sticky top-0 z-20 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-semibold transition-all border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {activeTab === "updates" && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Atualizações Científicas</h2>
            <p className="text-muted-foreground mb-8">Artigos recentes de alto impacto com relevância para a histologia e prática clínica.</p>
            <div className="grid gap-6 md:grid-cols-2">{articles.map((article, i) => <ArticleCard key={i} {...article} />)}</div>
          </section>
        )}

        {activeTab === "activities" && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Atividades Interativas</h2>
            <p className="text-muted-foreground mb-8">Teste seus conhecimentos nos temas abordados na disciplina de Histologia.</p>
            <QuizSection />
          </section>
        )}

        {activeTab === "summaries" && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Resumos</h2>
            <p className="text-muted-foreground mb-8">Sínteses dos principais temas abordados na disciplina.</p>
            <div className="space-y-4">{summaries.map((summary, i) => <SummaryCard key={i} {...summary} />)}</div>
          </section>
        )}

        {activeTab === "reminders" && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Lembretes</h2>
            <p className="text-muted-foreground mb-8">Resumos rápidos e mnemônicos para revisão antes das provas.</p>
            <RemindersSection />
          </section>
        )}

        {activeTab === "slides" && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Explorando Lâminas</h2>
            <p className="text-muted-foreground mb-8">Visualização detalhada de lâminas histológicas com identificação de estruturas.</p>
            <SlidesExplorer />
          </section>
        )}

        {activeTab === "cases" && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Casos Clínicos</h2>
            <p className="text-muted-foreground mb-8">Casos clínicos com correlação histopatológica para aplicação prática.</p>
            <ClinicalCasesSection />
          </section>
        )}

        {activeTab === "games" && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Jogos Educativos</h2>
            <p className="text-muted-foreground mb-8">Aprenda histologia de forma divertida com jogos interativos e desafios.</p>
            <GamesSection />
          </section>
        )}

        {activeTab === "calendar" && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Calendário</h2>
            <p className="text-muted-foreground mb-8">Organize provas, aulas e entregas da disciplina de Histologia.</p>
            <CalendarSection />
          </section>
        )}

        {activeTab === "qa" && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Tire suas Dúvidas</h2>
            <p className="text-muted-foreground mb-8">Envie mensagens para os criadores do HistoApp — anônimas ou identificadas.</p>
            <QASection />
          </section>
        )}

        {activeTab === "references" && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Referências Bibliográficas</h2>
            <p className="text-muted-foreground mb-8">Fontes científicas e acadêmicas nas quais o conteúdo deste aplicativo se baseia.</p>
            <ReferencesSection />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">HistoApp — Faculdade de Medicina de Bauru (FMBRU-USP)</p>
          <p className="text-xs text-muted-foreground/60 mt-1">Projeto de apoio pedagógico à disciplina de Histologia</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
