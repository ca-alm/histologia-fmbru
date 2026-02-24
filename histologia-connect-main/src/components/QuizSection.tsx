import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { questions, type Question } from "@/data/quizQuestions";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const topics = ["Todos", ...Array.from(new Set(questions.map((q) => q.topic)))];

const QuizSection = () => {
  const [selectedTopic, setSelectedTopic] = useState("Todos");
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const startQuiz = () => {
    const filtered = selectedTopic === "Todos" ? questions : questions.filter((q) => q.topic === selectedTopic);
    const shuffled = shuffleArray(filtered).slice(0, 10);
    setQuizQuestions(shuffled);
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
    setStarted(true);
  };

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    if (index === quizQuestions[currentQ].correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setStarted(false);
    setFinished(false);
  };

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto text-center py-8">
        <div className="text-5xl mb-4">🧠</div>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Quiz de Histologia</h3>
        <p className="text-muted-foreground mb-6">Selecione um tema e teste seus conhecimentos com 10 questões aleatórias.</p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                selectedTopic === topic
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {selectedTopic === "Todos"
            ? `${questions.length} questões disponíveis`
            : `${questions.filter((q) => q.topic === selectedTopic).length} questões sobre ${selectedTopic}`}
        </p>
        <Button onClick={startQuiz} className="gap-2" size="lg">
          <Shuffle className="w-4 h-4" />
          Iniciar Quiz
        </Button>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="text-6xl mb-4">{pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "📚"}</div>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Quiz Finalizado!</h3>
        <p className="text-lg text-muted-foreground mb-6">
          Você acertou <span className="font-bold text-primary">{score}</span> de <span className="font-bold">{quizQuestions.length}</span> questões ({pct}%).
        </p>
        <div className="flex gap-3 justify-center">
          <Button onClick={startQuiz} variant="outline" className="gap-2">
            <Shuffle className="w-4 h-4" />
            Novo Quiz (mesmo tema)
          </Button>
          <Button onClick={restart} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Escolher Tema
          </Button>
        </div>
      </div>
    );
  }

  const q = quizQuestions[currentQ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-muted-foreground">
          Questão {currentQ + 1} de {quizQuestions.length}
        </span>
        <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-semibold">
          {q.topic}
        </span>
      </div>

      <div className="w-full bg-muted rounded-full h-1.5 mb-8">
        <div
          className="hero-gradient h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <h3 className="font-serif text-xl font-bold text-foreground mb-6 leading-relaxed">{q.question}</h3>

      <div className="space-y-3 mb-6">
        {q.options.map((opt, i) => {
          let classes = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-sm font-medium ";
          if (!showResult) {
            classes += "border-border hover:border-primary/50 hover:bg-quiz-selected cursor-pointer";
          } else if (i === q.correctIndex) {
            classes += "border-quiz-correct bg-quiz-correct/10 text-foreground";
          } else if (i === selected) {
            classes += "border-quiz-incorrect bg-quiz-incorrect/10 text-foreground";
          } else {
            classes += "border-border opacity-50";
          }
          return (
            <button key={i} className={classes} onClick={() => handleSelect(i)}>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
                {showResult && i === q.correctIndex && <CheckCircle2 className="w-5 h-5 text-quiz-correct ml-auto shrink-0" />}
                {showResult && i === selected && i !== q.correctIndex && <XCircle className="w-5 h-5 text-quiz-incorrect ml-auto shrink-0" />}
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="bg-secondary rounded-xl p-4 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-sm font-semibold text-secondary-foreground mb-1">💡 Explicação</p>
          <p className="text-sm text-secondary-foreground/80 leading-relaxed">{q.explanation}</p>
        </div>
      )}

      {showResult && (
        <div className="flex justify-end">
          <Button onClick={next} className="gap-2">
            {currentQ < quizQuestions.length - 1 ? "Próxima" : "Ver Resultado"}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
