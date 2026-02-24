import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Plus, X, CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  type: "prova" | "aula" | "entrega" | "outro";
}

const typeLabels: Record<CalendarEvent["type"], { label: string; color: string }> = {
  prova: { label: "Prova", color: "bg-red-500/20 text-red-700 border-red-300" },
  aula: { label: "Aula", color: "bg-blue-500/20 text-blue-700 border-blue-300" },
  entrega: { label: "Entrega", color: "bg-amber-500/20 text-amber-700 border-amber-300" },
  outro: { label: "Outro", color: "bg-gray-500/20 text-gray-700 border-gray-300" },
};

const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>(() => {
    const saved = localStorage.getItem("histoapp-calendar-events");
    return saved ? JSON.parse(saved) : [];
  });
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newType, setNewType] = useState<CalendarEvent["type"]>("aula");

  const saveEvents = (evts: CalendarEvent[]) => {
    setEvents(evts);
    localStorage.setItem("histoapp-calendar-events", JSON.stringify(evts));
  };

  const addEvent = () => {
    if (!newTitle.trim() || !selectedDate) return;
    const evt: CalendarEvent = {
      id: Date.now().toString(),
      date: format(selectedDate, "yyyy-MM-dd"),
      title: newTitle.trim(),
      type: newType,
    };
    saveEvents([...events, evt]);
    setNewTitle("");
    setShowForm(false);
  };

  const removeEvent = (id: string) => {
    saveEvents(events.filter((e) => e.id !== id));
  };

  const selectedDateStr = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
  const dayEvents = events.filter((e) => e.date === selectedDateStr);
  const eventDates = new Set(events.map((e) => e.date));

  return (
    <div className="grid md:grid-cols-[auto_1fr] gap-8">
      {/* Calendar */}
      <div className="rounded-xl bg-card border border-border card-shadow p-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="pointer-events-auto"
          modifiers={{ hasEvent: (date) => eventDates.has(format(date, "yyyy-MM-dd")) }}
          modifiersClassNames={{ hasEvent: "!font-bold !text-primary underline underline-offset-4" }}
        />
      </div>

      {/* Day detail */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl font-bold text-foreground">
            {selectedDate
              ? format(selectedDate, "d 'de' MMMM, yyyy", { locale: ptBR })
              : "Selecione uma data"}
          </h3>
          {selectedDate && (
            <Button size="sm" onClick={() => setShowForm(true)} className="gap-1">
              <Plus className="w-4 h-4" />
              Adicionar
            </Button>
          )}
        </div>

        {/* Add event form */}
        {showForm && (
          <div className="rounded-xl bg-card border border-border p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Título do evento..."
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              onKeyDown={(e) => e.key === "Enter" && addEvent()}
              autoFocus
            />
            <div className="flex flex-wrap gap-2">
              {(Object.keys(typeLabels) as CalendarEvent["type"][]).map((t) => (
                <button
                  key={t}
                  onClick={() => setNewType(t)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                    newType === t ? typeLabels[t].color + " ring-2 ring-primary/30" : "border-border text-muted-foreground"
                  }`}
                >
                  {typeLabels[t].label}
                </button>
              ))}
            </div>
            <div className="flex gap-2 justify-end">
              <Button size="sm" variant="outline" onClick={() => setShowForm(false)}>
                Cancelar
              </Button>
              <Button size="sm" onClick={addEvent} disabled={!newTitle.trim()}>
                Salvar
              </Button>
            </div>
          </div>
        )}

        {/* Events for selected date */}
        {dayEvents.length > 0 ? (
          <div className="space-y-2">
            {dayEvents.map((evt) => (
              <div key={evt.id} className="flex items-center gap-3 rounded-lg bg-card border border-border p-3 card-shadow">
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${typeLabels[evt.type].color}`}>
                  {typeLabels[evt.type].label}
                </span>
                <span className="text-sm text-foreground flex-1">{evt.title}</span>
                <button onClick={() => removeEvent(evt.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <CalendarDays className="w-10 h-10 mx-auto mb-2 opacity-40" />
            <p className="text-sm">Nenhum evento nesta data.</p>
          </div>
        )}

        {/* Upcoming events */}
        {events.length > 0 && (
          <div className="mt-6">
            <h4 className="font-serif text-lg font-bold text-foreground mb-3">Próximos Eventos</h4>
            <div className="space-y-2">
              {events
                .filter((e) => e.date >= format(new Date(), "yyyy-MM-dd"))
                .sort((a, b) => a.date.localeCompare(b.date))
                .slice(0, 10)
                .map((evt) => (
                  <div key={evt.id} className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground font-mono text-xs w-20 shrink-0">
                      {format(new Date(evt.date + "T12:00:00"), "dd/MM", { locale: ptBR })}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${typeLabels[evt.type].color}`}>
                      {typeLabels[evt.type].label}
                    </span>
                    <span className="text-foreground">{evt.title}</span>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarSection;
