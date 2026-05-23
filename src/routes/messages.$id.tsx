import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { ArrowLeft, Flag, Info, MoreHorizontal } from "lucide-react";
import { AppShell } from "@/components/falcon/AppShell";
import { Button } from "@/components/ui/button";
import { getFirm } from "@/lib/firms";

export const Route = createFileRoute("/messages/$id")({
  head: ({ params }) => {
    const firm = getFirm(params.id);
    const name = firm?.name ?? "Conversation";
    return {
      meta: [
        { title: `${name} — Messages · Falcon Geosolutions` },
        {
          name: "description",
          content: `Chat thread with ${name}. Coordinate paperwork and survey status in-app.`,
        },
      ],
    };
  },
  notFoundComponent: () => (
    <AppShell hideTopBar>
      <div className="px-6 py-16 text-center">
        <p className="text-sm text-muted-foreground">Conversation not found.</p>
        <Link to="/messages" className="text-primary text-sm mt-3 inline-block">
          Back to messages
        </Link>
      </div>
    </AppShell>
  ),
  component: Thread,
});

function Bubble({
  side,
  children,
  muted = false,
}: {
  side: "in" | "out";
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div className={`flex ${side === "in" ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm font-poppins shadow-sm ${
          side === "in"
            ? muted
              ? "bg-card border border-border text-muted-foreground"
              : "bg-card border border-border text-foreground"
            : "gradient-primary text-primary-foreground"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex justify-start">
      <div className="bg-card border border-border rounded-2xl px-4 py-3 flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce" />
        <span
          className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce"
          style={{ animationDelay: "120ms" }}
        />
        <span
          className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce"
          style={{ animationDelay: "240ms" }}
        />
      </div>
    </div>
  );
}

function Thread() {
  const { id } = Route.useParams();
  const firm = getFirm(id);
  const navigate = useNavigate();

  if (!firm) return null;

  const initial = firm.name.charAt(0).toUpperCase();

  return (
    <AppShell hideTopBar>
      <header className="sticky top-0 z-20 bg-background/90 backdrop-blur-xl border-b border-border px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate({ to: "/messages" })}
          aria-label="Back"
          className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center font-display text-sm text-primary-foreground shrink-0">
          {initial}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-poppins font-semibold text-sm truncate">{firm.name}</p>
          <p className="text-[11px] text-primary truncate">{firm.engineer}</p>
        </div>
        <button aria-label="Flag" className="text-primary p-2">
          <Flag className="h-4 w-4" />
        </button>
        <button aria-label="Info" className="text-muted-foreground p-2">
          <Info className="h-4 w-4" />
        </button>
      </header>

      <div className="px-4 py-5 space-y-3">
        <p className="text-center text-[11px] text-muted-foreground font-poppins">4:00 PM</p>

        <Bubble side="in">
          <span className="text-primary font-semibold">{firm.name}</span>{" "}
          accepted your <span className="text-primary font-semibold">request</span>
        </Bubble>

        <Typing />

        <div className="flex justify-end">
          <Typing />
        </div>

        <Typing />

        <div className="flex justify-end">
          <Typing />
        </div>

        <Bubble side="in">Please check the final pricelist</Bubble>
      </div>

      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5">
        <Button
          variant="hero"
          size="xl"
          className="w-full font-display"
          onClick={() => navigate({ to: "/firm/$id/book", params: { id: firm.id } })}
        >
          CHECK
        </Button>
      </div>

      <div className="fixed bottom-[88px] left-1/2 -translate-x-1/2 w-full max-w-[440px] flex justify-center">
        <button className="text-muted-foreground p-2" aria-label="More">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
    </AppShell>
  );
}
