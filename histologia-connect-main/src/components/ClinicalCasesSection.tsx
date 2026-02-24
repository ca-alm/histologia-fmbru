import { useState } from "react";
import { ChevronDown, ChevronRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { clinicalCases } from "@/data/clinicalCases";

const ClinicalCasesSection = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const handleAnswer = (caseId: number, qIdx: number, optIdx: number) => {
    const key = `${caseId}-${qIdx}`;
    if (revealed[key]) return;
    setAnswers((prev) => ({ ...prev, [key]: optIdx }));
    setRevealed((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="space-y-4">
      {clinicalCases.map((cc) => (
        <div key={cc.id} className="rounded-xl bg-card border border-border card-shadow overflow-hidden transition-all duration-300 hover:card-shadow-hover">
          <button
            onClick={() => setSelectedCase(selectedCase === cc.id ? null : cc.id)}
            className="w-full text-left p-5 flex items-center gap-4"
          >
            <Stethoscope className="w-8 h-8 text-primary shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-lg font-bold text-foreground">{cc.title}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{cc.category}</p>
            </div>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${selectedCase === cc.id ? "rotate-180" : ""}`} />
          </button>

          {selectedCase === cc.id && (
            <div className="px-5 pb-5 pt-0 animate-in fade-in slide-in-from-top-1 duration-300">
              <div className="border-t border-border pt-4 space-y-4">
                {/* Scenario */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">📋 Caso Clínico</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{cc.scenario}</p>
                </div>

                {/* Histological findings */}
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-sm font-semibold text-secondary-foreground mb-1">🔬 Achados Histopatológicos</p>
                  <p className="text-sm text-secondary-foreground/80 leading-relaxed">{cc.histologicalFindings}</p>
                </div>

                {/* Questions */}
                {cc.questions.map((q, qIdx) => {
                  const key = `${cc.id}-${qIdx}`;
                  const userAnswer = answers[key];
                  const isRevealed = revealed[key];

                  return (
                    <div key={qIdx} className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          let classes = "w-full text-left p-3 rounded-lg border transition-all duration-200 text-sm ";
                          if (!isRevealed) {
                            classes += "border-border hover:border-primary/50 cursor-pointer";
                          } else if (optIdx === q.correctIndex) {
                            classes += "border-quiz-correct bg-quiz-correct/10";
                          } else if (optIdx === userAnswer) {
                            classes += "border-quiz-incorrect bg-quiz-incorrect/10";
                          } else {
                            classes += "border-border opacity-50";
                          }
                          return (
                            <button key={optIdx} className={classes} onClick={() => handleAnswer(cc.id, qIdx, optIdx)}>
                              <div className="flex items-center gap-2">
                                <span>{opt}</span>
                                {isRevealed && optIdx === q.correctIndex && <CheckCircle2 className="w-4 h-4 text-quiz-correct ml-auto shrink-0" />}
                                {isRevealed && optIdx === userAnswer && optIdx !== q.correctIndex && <XCircle className="w-4 h-4 text-quiz-incorrect ml-auto shrink-0" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      {isRevealed && (
                        <div className="bg-accent rounded-lg p-3 animate-in fade-in duration-200">
                          <p className="text-sm text-accent-foreground leading-relaxed">💡 {q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Key points */}
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-sm font-semibold text-secondary-foreground mb-2">🎯 Pontos-chave</p>
                  <ul className="space-y-1">
                    {cc.keyPoints.map((kp, i) => (
                      <li key={i} className="text-sm text-secondary-foreground/80 flex gap-2">
                        <span className="shrink-0">•</span>
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ClinicalCasesSection;
