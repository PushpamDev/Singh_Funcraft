const CANVA_EMBED_URL =
  "https://www.canva.com/design/DAG0-ZxveBA/lOmqK2uwyhoywbMByobH5Q/view?embed";
const LOGO_SRC =
  "https://cdn.builder.io/api/v1/image/assets%2Fee490ab7568246e9b133f68b6a7c26d5%2Fd7f9d1a688754a7b997ea9e4bff5abd7?format=webp&width=800";
const ADDRESS_URL =
  "https://www.google.com/search?sca_esv=6146ca317b294b83&q=singh+furncraft+new+delhi+address&ludocid=16453454953949760354&sa=X&ved=2ahUKEwilnebxt5GQAxUBTWwGHZBWLEAQ6BN6BAgsEAI&biw=1920&bih=993&dpr=1";
const PHONE_URL =
  "https://www.google.com/search?q=Singh+Furncraft&oq=Singh+Furncraft&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCggCEAAYgAQYogQyCggDEAAYgAQYogQyBwgEEAAY7wUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg4NDUwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#";

export default function Index() {
  return (
    <div className="min-h-screen px-4 pb-16 pt-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex h-20 w-24 items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-card/70 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
              <img
                src={LOGO_SRC}
                alt="Singh Funcraft logo"
                className="h-full w-full object-contain p-2"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                SINGH FURNCRAFT
              </p>
              <p className="mt-1 text-2xl font-semibold text-foreground">
                ELEVATE YOUR VISION
              </p>
            </div>
          </div>
        </header>
        <main className="mt-12 flex flex-1 flex-col gap-10 pb-12">
          <section className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.55em] text-primary/80">
              Signature collection
            </p>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground underline decoration-muted-foreground/60 decoration-2 underline-offset-8">
              <p>The website is under development, By that time please contact us at</p>
              <p className="text-sm text-muted-foreground">
                <a
                  href={ADDRESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold uppercase tracking-[0.3em] text-primary hover:text-primary/80"
                >
                  Address
                </a>
                <span className="font-semibold text-muted-foreground">:&nbsp;</span>
                <span className="font-medium">
                  L-73, Block L, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Phone:&nbsp;</span>
                <a
                  href={PHONE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:text-primary/80"
                >
                  099535 13737
                </a>
              </p>
            </div>
          </section>
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/8 bg-card/40 shadow-[0_45px_140px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_58%),radial-gradient(circle_at_80%_0%,rgba(196,155,118,0.12),transparent_45%)] opacity-100 transition group-hover:opacity-100" />
            <div className="relative aspect-[2702/1000] w-full">
              <iframe
                loading="lazy"
                src={CANVA_EMBED_URL}
                title="Black Grey Brown Minimalist Photo Collage Interior Design"
                allow="fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
