import { useState } from "react";
import { Send, MessageCircle, User, UserX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  name: string;
  anonymous: boolean;
  message: string;
  date: string;
}

const QASection = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("histoapp-qa-messages");
    return saved ? JSON.parse(saved) : [];
  });
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const send = () => {
    if (!text.trim()) return;
    if (!anonymous && !name.trim()) return;
    const msg: Message = {
      id: Date.now().toString(),
      name: anonymous ? "Anônimo" : name.trim(),
      anonymous,
      message: text.trim(),
      date: new Date().toLocaleDateString("pt-BR"),
    };
    const updated = [msg, ...messages];
    setMessages(updated);
    localStorage.setItem("histoapp-qa-messages", JSON.stringify(updated));
    setText("");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Form */}
      <div className="rounded-xl bg-card border border-border card-shadow p-6 space-y-4">
        <h3 className="font-serif text-lg font-bold text-foreground flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-primary" />
          Enviar uma dúvida ou sugestão
        </h3>
        <p className="text-sm text-muted-foreground">
          Suas mensagens serão enviadas aos criadores do HistoApp. Você pode se identificar ou enviar anonimamente.
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setAnonymous(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
              !anonymous ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            <User className="w-4 h-4" />
            Identificado
          </button>
          <button
            onClick={() => setAnonymous(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
              anonymous ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            <UserX className="w-4 h-4" />
            Anônimo
          </button>
        </div>

        {!anonymous && (
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome..."
            className="text-sm"
          />
        )}

        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escreva sua dúvida, sugestão ou comentário..."
          className="text-sm min-h-[100px]"
        />

        <div className="flex justify-end">
          <Button onClick={send} disabled={!text.trim() || (!anonymous && !name.trim())} className="gap-2">
            <Send className="w-4 h-4" />
            Enviar
          </Button>
        </div>
      </div>

      {/* Messages */}
      {messages.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-bold text-foreground">Mensagens Enviadas ({messages.length})</h3>
          {messages.map((msg) => (
            <div key={msg.id} className="rounded-xl bg-card border border-border card-shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                {msg.anonymous ? <UserX className="w-4 h-4 text-muted-foreground" /> : <User className="w-4 h-4 text-primary" />}
                <span className="text-sm font-semibold text-foreground">{msg.name}</span>
                <span className="text-xs text-muted-foreground ml-auto">{msg.date}</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{msg.message}</p>
            </div>
          ))}
        </div>
      )}

      {messages.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <MessageCircle className="w-10 h-10 mx-auto mb-2 opacity-40" />
          <p className="text-sm">Nenhuma mensagem enviada ainda. Seja o primeiro!</p>
        </div>
      )}
    </div>
  );
};

export default QASection;
