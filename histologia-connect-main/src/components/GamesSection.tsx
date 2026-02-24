import { useState } from "react";
import { Gamepad2, RotateCcw, CheckCircle2, XCircle, Timer, Trophy, ArrowRight, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { questions } from "@/data/quizQuestions";

// ===== GAME 1: ASSOCIAÇÃO (MATCHING) =====
interface MatchPair { term: string; definition: string; }

const matchSets: { title: string; pairs: MatchPair[] }[] = [
  {
    title: "Células e Funções",
    pairs: [
      { term: "Osteoclasto", definition: "Reabsorção óssea" },
      { term: "Fibroblasto", definition: "Síntese de matriz extracelular" },
      { term: "Célula de Kupffer", definition: "Macrófago hepático" },
      { term: "Célula de Sertoli", definition: "Suporte da espermatogênese" },
      { term: "Pneumócito tipo II", definition: "Produção de surfactante" },
      { term: "Mastócito", definition: "Liberação de histamina" },
    ],
  },
  {
    title: "Colorações Especiais",
    pairs: [
      { term: "H&E", definition: "Coloração de rotina" },
      { term: "PAS", definition: "Glicogênio e mucinas" },
      { term: "Tricrômico de Masson", definition: "Colágeno em azul" },
      { term: "Verhoeff", definition: "Fibras elásticas em preto" },
      { term: "Prata (reticulina)", definition: "Fibras reticulares" },
      { term: "Vermelho Congo", definition: "Amiloide" },
    ],
  },
  {
    title: "Colágenos e Localizações",
    pairs: [
      { term: "Tipo I", definition: "Osso, tendão, pele" },
      { term: "Tipo II", definition: "Cartilagem hialina/elástica" },
      { term: "Tipo III", definition: "Fibras reticulares" },
      { term: "Tipo IV", definition: "Lâmina basal" },
      { term: "Tipo VII", definition: "Fibrilas de ancoragem" },
    ],
  },
  {
    title: "Epitélios e Localizações",
    pairs: [
      { term: "Simples pavimentoso", definition: "Alvéolos, endotélio" },
      { term: "Estratificado pavimentoso", definition: "Esôfago, pele" },
      { term: "Pseudoestratificado ciliado", definition: "Traqueia" },
      { term: "Transição (urotélio)", definition: "Bexiga urinária" },
      { term: "Simples cilíndrico", definition: "Intestino delgado" },
      { term: "Simples cúbico", definition: "Túbulos renais" },
    ],
  },
  {
    title: "Glândulas Endócrinas e Hormônios",
    pairs: [
      { term: "Zona glomerulosa", definition: "Aldosterona" },
      { term: "Zona fasciculada", definition: "Cortisol" },
      { term: "Medula adrenal", definition: "Adrenalina" },
      { term: "Células beta pancreáticas", definition: "Insulina" },
      { term: "Células parafoliculares (C)", definition: "Calcitonina" },
      { term: "Células parietais gástricas", definition: "HCl e fator intrínseco" },
    ],
  },
];

const MatchGame = () => {
  const [setIdx, setSetIdx] = useState(0);
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [shuffledDefs, setShuffledDefs] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number | null>(null);
  const [gameComplete, setGameComplete] = useState(false);

  const currentSet = matchSets[setIdx];

  const startGame = (idx: number) => {
    setSetIdx(idx);
    const indices = matchSets[idx].pairs.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setShuffledDefs(indices);
    setMatched(new Set());
    setSelectedTerm(null);
    setWrong(null);
    setGameComplete(false);
  };

  if (shuffledDefs.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground mb-4">Associe cada termo à sua definição correta. Selecione um termo à esquerda e depois a definição correspondente à direita.</p>
        {matchSets.map((s, i) => (
          <button key={i} onClick={() => startGame(i)} className="w-full text-left rounded-xl bg-card border border-border card-shadow p-4 hover:card-shadow-hover transition-all">
            <p className="font-serif text-lg font-bold text-foreground">{s.title}</p>
            <p className="text-sm text-muted-foreground">{s.pairs.length} pares para associar</p>
          </button>
        ))}
      </div>
    );
  }

  const handleDefClick = (defOriginalIdx: number) => {
    if (selectedTerm === null || matched.has(selectedTerm)) return;
    if (defOriginalIdx === selectedTerm) {
      const newMatched = new Set(matched);
      newMatched.add(selectedTerm);
      setMatched(newMatched);
      setSelectedTerm(null);
      setWrong(null);
      if (newMatched.size === currentSet.pairs.length) setGameComplete(true);
    } else {
      setWrong(defOriginalIdx);
      setTimeout(() => setWrong(null), 800);
    }
  };

  if (gameComplete) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">Parabéns! 🎉</h3>
        <p className="text-muted-foreground mb-4">Você associou todos os pares de "{currentSet.title}" corretamente!</p>
        <div className="flex gap-3 justify-center">
          <Button onClick={() => startGame(setIdx)} variant="outline" className="gap-2"><RotateCcw className="w-4 h-4" />Jogar novamente</Button>
          <Button onClick={() => { setShuffledDefs([]); setGameComplete(false); }} className="gap-2"><ArrowRight className="w-4 h-4" />Outros temas</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-lg font-bold text-foreground">{currentSet.title}</h3>
        <span className="text-sm text-muted-foreground">{matched.size}/{currentSet.pairs.length} pares</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Termos</p>
          {currentSet.pairs.map((p, i) => (
            <button
              key={i}
              disabled={matched.has(i)}
              onClick={() => setSelectedTerm(i)}
              className={`w-full text-left p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                matched.has(i) ? "border-quiz-correct bg-quiz-correct/10 opacity-60" :
                selectedTerm === i ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
              }`}
            >
              {matched.has(i) && <CheckCircle2 className="w-4 h-4 text-quiz-correct inline mr-2" />}
              {p.term}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Definições</p>
          {shuffledDefs.map((origIdx, i) => (
            <button
              key={i}
              disabled={matched.has(origIdx)}
              onClick={() => handleDefClick(origIdx)}
              className={`w-full text-left p-3 rounded-lg border-2 text-sm transition-all ${
                matched.has(origIdx) ? "border-quiz-correct bg-quiz-correct/10 opacity-60" :
                wrong === origIdx ? "border-quiz-incorrect bg-quiz-incorrect/10" : "border-border hover:border-primary/50"
              }`}
            >
              {matched.has(origIdx) && <CheckCircle2 className="w-4 h-4 text-quiz-correct inline mr-2" />}
              {currentSet.pairs[origIdx].definition}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="outline" size="sm" onClick={() => { setShuffledDefs([]); }}>← Voltar aos temas</Button>
      </div>
    </div>
  );
};

// ===== GAME 2: VERDADEIRO OU FALSO RÁPIDO =====
const tfStatements: { statement: string; isTrue: boolean; explanation: string }[] = [
  { statement: "O colágeno tipo IV forma fibras visíveis em microscopia óptica.", isTrue: false, explanation: "O colágeno tipo IV forma uma rede, não fibras visíveis. Está presente na lâmina basal." },
  { statement: "Os cílios possuem arranjo de microtúbulos 9+2.", isTrue: true, explanation: "O axonema ciliar tem 9 pares periféricos + 2 microtúbulos centrais, movidos por dineína." },
  { statement: "A cartilagem hialina possui vasos sanguíneos.", isTrue: false, explanation: "A cartilagem é avascular; nutrição ocorre por difusão a partir do pericôndrio ou líquido sinovial." },
  { statement: "Os osteoblastos são células multinucleadas.", isTrue: false, explanation: "Os osteoblastos são mononucleados. Os osteoclastos é que são multinucleados." },
  { statement: "O músculo liso possui estriações transversais.", isTrue: false, explanation: "O músculo liso NÃO possui estriações transversais visíveis; seus filamentos não estão organizados em sarcômeros." },
  { statement: "A microglia é derivada de precursores da medula óssea (monócitos).", isTrue: true, explanation: "A microglia tem origem mesodérmica (monócitos/macrófagos), diferente das demais células gliais (ectoderma)." },
  { statement: "A eosina cora núcleos em azul.", isTrue: false, explanation: "A eosina cora citoplasma e proteínas em rosa. A hematoxilina cora núcleos em azul/roxo." },
  { statement: "As células de Paneth secretam defensinas.", isTrue: true, explanation: "As células de Paneth no fundo das criptas intestinais secretam defensinas e lisozima (peptídeos antimicrobianos)." },
  { statement: "O epidídimo possui epitélio simples cúbico.", isTrue: false, explanation: "O epidídimo possui epitélio pseudoestratificado com estereocílios." },
  { statement: "A barreira hematoencefálica é formada por tight junctions entre células endoteliais.", isTrue: true, explanation: "As tight junctions entre células endoteliais dos capilares cerebrais contínuos formam a base da BHE." },
  { statement: "O tecido adiposo marrom contém UCP1.", isTrue: true, explanation: "A UCP1 (termogenina) desacopla a fosforilação oxidativa nas mitocôndrias do tecido adiposo marrom, gerando calor." },
  { statement: "As fibras de Purkinje são neurônios do córtex cerebelar.", isTrue: false, explanation: "As fibras de Purkinje NO CORAÇÃO são cardiomiócitos modificados de condução. As CÉLULAS de Purkinje são neurônios do cerebelo." },
  { statement: "A aldosterona é produzida pela zona fasciculada.", isTrue: false, explanation: "A aldosterona é produzida pela zona GLOMERULOSA. A fasciculada produz cortisol." },
  { statement: "O urotélio possui células em guarda-chuva com uroplaquinas.", isTrue: true, explanation: "As uroplaquinas nas células em guarda-chuva formam placas rígidas que impermeabilizam o urotélio." },
  { statement: "O surfactante pulmonar é produzido pelos pneumócitos tipo I.", isTrue: false, explanation: "O surfactante é produzido pelos pneumócitos tipo II (corpos lamelares). Os tipo I fazem trocas gasosas." },
];

const TrueFalseGame = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [shuffled, setShuffled] = useState<typeof tfStatements>([]);
  const [started, setStarted] = useState(false);

  const start = () => {
    const s = [...tfStatements].sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffled(s);
    setCurrent(0);
    setScore(0);
    setAnswered(false);
    setUserAnswer(null);
    setStarted(true);
  };

  if (!started) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-muted-foreground mb-4">Leia cada afirmação e decida se é Verdadeira ou Falsa. Rápido e direto!</p>
        <Button onClick={start} className="gap-2"><Shuffle className="w-4 h-4" />Iniciar (10 afirmações)</Button>
      </div>
    );
  }

  if (current >= shuffled.length) {
    const pct = Math.round((score / shuffled.length) * 100);
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-3">{pct >= 80 ? "🏆" : pct >= 60 ? "👏" : "📖"}</div>
        <p className="text-lg font-bold text-foreground mb-1">Resultado: {score}/{shuffled.length} ({pct}%)</p>
        <Button onClick={start} variant="outline" className="gap-2 mt-3"><RotateCcw className="w-4 h-4" />Jogar novamente</Button>
      </div>
    );
  }

  const stmt = shuffled[current];

  const answer = (val: boolean) => {
    setUserAnswer(val);
    setAnswered(true);
    if (val === stmt.isTrue) setScore((s) => s + 1);
  };

  const next = () => {
    setCurrent((c) => c + 1);
    setAnswered(false);
    setUserAnswer(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">{current + 1}/{shuffled.length}</span>
        <span className="text-sm font-semibold text-primary">Pontos: {score}</span>
      </div>
      <div className="bg-card border border-border rounded-xl p-6 mb-4">
        <p className="font-serif text-lg font-bold text-foreground leading-relaxed">"{stmt.statement}"</p>
      </div>
      {!answered ? (
        <div className="flex gap-3 justify-center">
          <Button onClick={() => answer(true)} size="lg" variant="outline" className="gap-2 px-8">✅ Verdadeiro</Button>
          <Button onClick={() => answer(false)} size="lg" variant="outline" className="gap-2 px-8">❌ Falso</Button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className={`p-4 rounded-xl border-2 ${userAnswer === stmt.isTrue ? "border-quiz-correct bg-quiz-correct/10" : "border-quiz-incorrect bg-quiz-incorrect/10"}`}>
            <p className="text-sm font-semibold mb-1">
              {userAnswer === stmt.isTrue ? "✅ Correto!" : "❌ Incorreto!"} A afirmação é {stmt.isTrue ? "VERDADEIRA" : "FALSA"}.
            </p>
            <p className="text-sm text-foreground/80">{stmt.explanation}</p>
          </div>
          <div className="flex justify-end">
            <Button onClick={next} className="gap-2">Próxima <ArrowRight className="w-4 h-4" /></Button>
          </div>
        </div>
      )}
    </div>
  );
};

// ===== GAME 3: FLASH QUIZ (contra o relógio) =====
const FlashQuiz = () => {
  const [gameQuestions, setGameQuestions] = useState<typeof questions>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [started, setStarted] = useState(false);
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    setGameQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setTimeLeft(15);
    setAnswered(false);
    setSelected(null);
    setStarted(true);
  };

  const answer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === gameQuestions[current].correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (current < gameQuestions.length - 1) {
      setCurrent((c) => c + 1);
      setAnswered(false);
      setSelected(null);
      setTimeLeft(15);
    } else {
      setStarted(false);
    }
  };

  if (!started && gameQuestions.length > 0 && current >= gameQuestions.length - 1 && answered) {
    const pct = Math.round((score / gameQuestions.length) * 100);
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-3">{pct >= 80 ? "⚡" : pct >= 60 ? "💪" : "📚"}</div>
        <p className="text-lg font-bold text-foreground mb-1">Flash Quiz: {score}/{gameQuestions.length} ({pct}%)</p>
        <Button onClick={start} variant="outline" className="gap-2 mt-3"><RotateCcw className="w-4 h-4" />Jogar novamente</Button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-muted-foreground mb-4">Responda 10 questões rápidas de histologia! Sem tempo limite, mas tente ser rápido!</p>
        <Button onClick={start} className="gap-2"><Timer className="w-4 h-4" />Iniciar Flash Quiz</Button>
      </div>
    );
  }

  const q = gameQuestions[current];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">{current + 1}/{gameQuestions.length}</span>
        <span className="text-sm font-semibold text-primary">⚡ {score} pontos</span>
      </div>
      <p className="font-serif text-base font-bold text-foreground mb-4 leading-relaxed">{q.question}</p>
      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => {
          let cls = "w-full text-left p-3 rounded-lg border-2 text-sm transition-all ";
          if (!answered) cls += "border-border hover:border-primary/50 cursor-pointer";
          else if (i === q.correctIndex) cls += "border-quiz-correct bg-quiz-correct/10";
          else if (i === selected) cls += "border-quiz-incorrect bg-quiz-incorrect/10";
          else cls += "border-border opacity-50";
          return (
            <button key={i} className={cls} onClick={() => answer(i)}>
              <div className="flex items-center gap-2">
                <span>{opt}</span>
                {answered && i === q.correctIndex && <CheckCircle2 className="w-4 h-4 text-quiz-correct ml-auto" />}
                {answered && i === selected && i !== q.correctIndex && <XCircle className="w-4 h-4 text-quiz-incorrect ml-auto" />}
              </div>
            </button>
          );
        })}
      </div>
      {answered && (
        <>
          <div className="bg-secondary rounded-lg p-3 mb-3 text-sm text-secondary-foreground/80">💡 {q.explanation}</div>
          <div className="flex justify-end">
            <Button onClick={next} className="gap-2">{current < gameQuestions.length - 1 ? "Próxima" : "Ver Resultado"} <ArrowRight className="w-4 h-4" /></Button>
          </div>
        </>
      )}
    </div>
  );
};

// ===== MAIN COMPONENT =====
const games = [
  { id: "match", title: "🔗 Jogo de Associação", description: "Associe termos histológicos às suas definições" },
  { id: "tf", title: "✅ Verdadeiro ou Falso", description: "Julgue afirmações sobre histologia" },
  { id: "flash", title: "⚡ Flash Quiz", description: "Quiz rápido com questões aleatórias" },
] as const;

type GameId = (typeof games)[number]["id"];

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState<GameId | null>(null);

  if (!activeGame) {
    return (
      <div className="space-y-4">
        <p className="text-muted-foreground mb-6">Aprenda histologia de forma divertida com jogos interativos!</p>
        {games.map((g) => (
          <button
            key={g.id}
            onClick={() => setActiveGame(g.id)}
            className="w-full text-left rounded-xl bg-card border border-border card-shadow p-5 hover:card-shadow-hover transition-all flex items-center gap-4"
          >
            <Gamepad2 className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground">{g.title}</h3>
              <p className="text-sm text-muted-foreground">{g.description}</p>
            </div>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Button variant="outline" size="sm" onClick={() => setActiveGame(null)} className="mb-4">← Todos os jogos</Button>
      {activeGame === "match" && <MatchGame />}
      {activeGame === "tf" && <TrueFalseGame />}
      {activeGame === "flash" && <FlashQuiz />}
    </div>
  );
};

export default GamesSection;
