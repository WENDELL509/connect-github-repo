import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { ArrowLeft, Flag, Info, MapPin, Bookmark, User } from "lucide-react";
import { AppShell } from "@/components/falcon/AppShell";
import { Button } from "@/components/ui/button";
import { getFirm } from "@/lib/firms";
import { getPreviewFor } from "@/lib/message-previews";

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

function TypingBubble({ side }: { side: "in" | "out" }) {
  return (
    <div className={`flex ${side === "in" ? "justify-start" : "justify-end"}`}>
      <div className="rounded-full bg-muted/60 px-5 py-3 flex gap-1.5 items-center">
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/70 animate-bounce" />
        <span
          className="h-1.5 w-1.5 rounded-full bg-muted-foreground/70 animate-bounce"
          style={{ animationDelay: "120ms" }}
        />
        <span
          className="h-1.5 w-1.5 rounded-full bg-muted-foreground/70 animate-bounce"
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

  return (
    <AppShell hideTopBar>
      {/* Top brand bar (matches screenshot: orange pin + USEP, bookmark, avatar) */}
      <header className="sticky top-0 z-30 bg-[#0e1b3d] text-white px-5 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate({ to: "/messages" })}
          aria-label="Back"
          className="h-9 w-9 -ml-2 rounded-full flex items-center justify-center text-white/80 hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
          <MapPin className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-display tracking-wide text-base">USEP</span>
        <div className="ml-auto flex items-center gap-3">
          <Bookmark className="h-5 w-5 text-primary fill-primary" />
          <div className="h-8 w-8 rounded-full bg-white text-[#0e1b3d] flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
        </div>
      </header>

      {/* Chat card */}
      <div className="px-3 pt-3">
        <div className="bg-card rounded-2xl shadow-card-elegant overflow-hidden border border-border">
          {/* Firm row */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <div className="h-9 w-9 rounded-full bg-[#0e1b3d] flex items-center justify-center text-white">
              <User className="h-4 w-4" />
            </div>
            <p className="font-display text-[13px] tracking-wide text-[#0e1b3d] dark:text-foreground flex-1 truncate">
              {firm.name}
            </p>
            <button aria-label="Flag" className="text-primary p-1">
              <Flag className="h-4 w-4 fill-primary" />
            </button>
            <button aria-label="Info" className="text-muted-foreground p-1">
              <Info className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="px-4 py-5 space-y-4 min-h-[420px]">
            <p className="text-center text-[11px] text-muted-foreground font-poppins">4:00 PM</p>

            <div className="flex justify-start">
              <div className="max-w-[78%] rounded-2xl bg-muted/60 px-4 py-2.5 text-[13px] font-poppins text-foreground">
                <span className="font-semibold">{firm.name}</span> accepted your{" "}
                <span className="text-primary font-semibold">request</span>
              </div>
            </div>

            <TypingBubble side="out" />
            <TypingBubble side="in" />
            <TypingBubble side="out" />
            <TypingBubble side="in" />

            <div className="flex justify-start">
              <div className="max-w-[78%] rounded-2xl bg-muted/60 px-4 py-2.5 text-[13px] font-poppins text-foreground">
                Please check the final <span className="text-primary font-semibold">pricelist</span>
              </div>
            </div>
          </div>

          {/* CHECK button */}
          <div className="px-5 pb-5 pt-2">
            <Button
              variant="hero"
              size="xl"
              className="w-full font-display tracking-wider"
              onClick={() => navigate({ to: "/firm/$id/book", params: { id: firm.id } })}
            >
              CHECK
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
