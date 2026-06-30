import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleGlyph, AppleGlyph, DiscordGlyph, XGlyph } from "../components/Glyphs";

const PROVIDERS = [
  { id: "google", label: "Continue with Google", Glyph: GoogleGlyph },
  { id: "apple", label: "Continue with Apple", Glyph: AppleGlyph },
  { id: "discord", label: "Continue with Discord", Glyph: DiscordGlyph },
  { id: "x", label: "Continue with X", Glyph: XGlyph },
];

export default function Login() {
  const navigate = useNavigate();
  const go = () => navigate("/feed");

  return (
    <div
      className="min-h-screen w-full flex flex-col lg:flex-row"
      data-testid="login-page"
    >
      {/* LEFT — BLACK POSTER PANEL (60%) */}
      <section
        className="grain relative bg-ink text-paper lg:w-3/5 w-full overflow-hidden flex flex-col justify-between px-6 py-7 sm:px-10 sm:py-9 min-h-[58vh] lg:min-h-screen"
        data-testid="login-branding-panel"
      >
        {/* top-left brand */}
        <div className="relative z-10 flex items-center gap-3">
          <span
            className="font-display text-slop text-3xl sm:text-4xl leading-none tracking-tight lowercase"
            data-testid="brand-mark"
          >
            awaig
          </span>
          <span className="inline-block h-3 w-3 bg-slop rounded-full animate-blink" />
        </div>

        {/* center poster wordmark + the one subhero */}
        <div className="relative z-10 my-8 lg:my-0">
          <h1
            className="font-display uppercase leading-[0.82] tracking-tight select-none"
            data-testid="brand-fullname"
          >
            <span className="block text-paper text-[19vw] sm:text-[15vw] lg:text-[9.5vw] poster-shadow">
              AsWeird
            </span>
            <span className="block text-slop text-[19vw] sm:text-[15vw] lg:text-[9.5vw] -mt-[0.06em]">
              AsItGets
            </span>
          </h1>

          {/* hand-drawn red scribble underline */}
          <svg
            className="mt-3 w-[62%] max-w-[460px] h-8"
            viewBox="0 0 460 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="scribble"
              d="M6 26 C 90 8, 150 34, 230 18 S 380 8, 452 24"
            />
          </svg>

          <p
            className="mt-5 font-mono text-base sm:text-lg lg:text-xl text-paper/80 max-w-md"
            data-testid="subhero"
          >
            The Internet&rsquo;s home for{" "}
            <span className="text-slop font-bold">AI slop</span>
          </p>
        </div>

        {/* bottom marquee strip — purely textural */}
        <div className="relative z-10 overflow-hidden border-y border-paper/20 py-2">
          <div className="flex w-max animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-paper/40">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex">
                {Array.from({ length: 8 }).map((__, j) => (
                  <span key={j} className="mx-4">
                    cursed &middot; low-effort &middot; unserious &middot; slop
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RIGHT — WHITE LOGIN PANEL (40%) */}
      <section
        className="bg-paper text-ink lg:w-2/5 w-full flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-12"
        data-testid="login-panel"
      >
        <div className="w-full max-w-sm mx-auto animate-rise">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-ink/50">
            enter the slop
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mt-2 mb-7 uppercase leading-none">
            Sign in
          </h2>

          <div className="flex flex-col gap-3">
            {PROVIDERS.map(({ id, label, Glyph }) => (
              <button
                key={id}
                onClick={go}
                data-testid={`login-${id}-button`}
                className="group flex items-center gap-3 w-full bg-ink text-paper font-mono text-sm sm:text-base font-bold px-5 py-4 border-2 border-ink transition-transform duration-150 hover:-translate-y-0.5 hover:bg-slop hover:border-slop active:translate-y-0"
              >
                <Glyph className="shrink-0" />
                <span className="flex-1 text-left">{label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  &rarr;
                </span>
              </button>
            ))}
          </div>

          <p className="mt-7 font-mono text-[11px] leading-relaxed text-ink/45">
            by continuing you accept that everything here was made by a confused
            machine. no refunds.
          </p>
        </div>
      </section>
    </div>
  );
}
