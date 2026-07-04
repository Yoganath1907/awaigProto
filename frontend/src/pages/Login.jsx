import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleGlyph, AppleGlyph, DiscordGlyph, XGlyph, Starburst } from "../components/Glyphs";

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
        <div className="relative z-10 flex items-center">
          <span
            className="font-display text-slop text-3xl sm:text-4xl leading-none tracking-tight lowercase"
            data-testid="brand-mark"
          >
            awaig
          </span>
        </div>

        <Starburst className="absolute top-7 right-7 sm:top-9 sm:right-10 h-9 w-9 sm:h-11 sm:w-11 text-slop rotate-12 z-10" />

        {/* center poster wordmark + the one subhero */}
        <div className="relative z-10 flex-1 flex flex-col justify-center my-10 lg:my-0">
          <h1
            className="font-poster uppercase leading-[0.9] tracking-[-0.005em] select-none"
            data-testid="brand-fullname"
          >
            <span className="block text-paper text-[15vw] sm:text-[12vw] lg:text-[8.2vw]">
              As Weird
            </span>
            <span className="block text-paper text-[15vw] sm:text-[12vw] lg:text-[8.2vw]">
              As It{" "}
              <span className="relative inline-block text-slop">
                Gets
                <svg
                  className="absolute left-0 -bottom-[0.14em] w-full h-[0.22em]"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 14 Q 30 4, 60 12 T 120 10 T 197 8"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p
            className="mt-7 font-mono text-base sm:text-lg lg:text-xl text-paper/75 max-w-md"
            data-testid="subhero"
          >
            The Internet&rsquo;s home for{" "}
            <span className="text-slop font-bold">AI slop</span>
          </p>

          <span
            className="mt-8 self-start inline-block -rotate-2 bg-paper text-ink font-mono text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 border-2 border-ink hard-shadow-red"
            data-testid="certified-sticker"
          >
            certified weird &#9733;
          </span>
        </div>
      </section>

      {/* RIGHT — WHITE LOGIN PANEL (40%) */}
      <section
        className="dotgrid bg-paper text-ink lg:w-2/5 w-full flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-12"
        data-testid="login-panel"
      >
        <div className="relative w-full max-w-sm mx-auto animate-rise bg-paper border-2 border-ink hard-shadow-red px-6 py-8 sm:px-8">
          <span className="tape absolute -top-3.5 left-1/2 -translate-x-1/2 -rotate-3 h-7 w-28 z-10" />
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-ink/50">
            enter the slop
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mt-2 mb-7 uppercase leading-none">
            Sign in<span className="text-slop">*</span>
          </h2>

          <div className="flex flex-col gap-3">
            {PROVIDERS.map(({ id, label, Glyph }) => (
              <button
                key={id}
                onClick={go}
                data-testid={`login-${id}-button`}
                className="group flex items-center gap-3 w-full bg-ink text-paper font-mono text-sm sm:text-base font-bold px-5 py-4 border-2 border-ink shadow-[4px_4px_0_var(--slop)] transition-[background-color,border-color,box-shadow,transform] duration-150 hover:bg-slop hover:border-slop hover:shadow-[4px_4px_0_var(--ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
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
            <span className="text-slop font-bold">*</span> by continuing you
            accept that everything here was made by a confused machine. no
            refunds.
          </p>
        </div>
      </section>
    </div>
  );
}
