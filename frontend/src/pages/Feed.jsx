import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Heart, Users, X, Trash2, Share2 } from "lucide-react";
import { POSTS } from "../data/posts";

const NAV = [
  { id: "profile", label: "Profile", Icon: User },
  { id: "liked", label: "Liked", Icon: Heart },
  { id: "following", label: "Following", Icon: Users },
];

function Avatar({ user, color }) {
  return (
    <div
      className="shrink-0 h-10 w-10 border-2 border-ink -rotate-3 shadow-[2px_2px_0_var(--ink)] flex items-center justify-center font-display text-lg uppercase"
      style={{ background: color, color: "#fff" }}
      data-testid="post-avatar"
    >
      {user.charAt(0)}
    </div>
  );
}

function Post({ post, index }) {
  const [following, setFollowing] = useState(false);
  const [action, setAction] = useState(null);

  return (
    <article
      className="border-b-[3px] border-ink bg-paper"
      data-testid={`post-${post.id}`}
    >
      {/* uploader row */}
      <header className="flex items-center gap-3 px-4 py-3">
        <Avatar user={post.user} color={post.avatarColor} />
        <div className="min-w-0 flex-1 leading-tight">
          <p className="font-mono font-bold text-sm truncate" data-testid="post-username">
            {post.user}
          </p>
          <p className="font-mono text-xs text-ink/50 truncate">{post.handle}</p>
        </div>
        <button
          onClick={() => setFollowing((f) => !f)}
          data-testid={`follow-${post.id}-button`}
          className={`font-mono text-xs font-bold uppercase tracking-wide px-3 py-1.5 border-2 border-ink transition-colors duration-150 ${
            following
              ? "bg-paper text-ink"
              : "bg-slop text-paper border-slop hover:bg-ink hover:border-ink"
          }`}
        >
          {following ? "Following" : "Follow"}
        </button>
      </header>

      {/* image — natural aspect ratio preserved */}
      <div className="relative border-y-[3px] border-ink bg-ink">
        <img
          src={post.image}
          alt={post.caption}
          loading="lazy"
          className="block w-full h-auto"
          data-testid="post-image"
        />
        <span
          className="absolute top-2.5 right-2.5 rotate-3 bg-paper text-ink border-2 border-ink px-1.5 py-0.5 font-poster text-xs tracking-wide select-none"
          data-testid={`post-stamp-${post.id}`}
        >
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* caption */}
      <p
        className="px-4 pt-3 font-mono text-[15px] leading-snug"
        data-testid="post-caption"
      >
        {post.caption}
      </p>

      {/* actions */}
      <div className="flex items-stretch gap-2.5 px-4 pt-3 pb-4">
        {[
          { id: "pass", label: "Pass", Icon: X },
          { id: "trash", label: "Trash", Icon: Trash2 },
          { id: "share", label: "Share", Icon: Share2 },
        ].map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setAction(id)}
            data-testid={`action-${id}-${post.id}`}
            className={`flex-1 flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-wide py-2.5 border-2 border-ink shadow-[3px_3px_0_var(--ink)] transition-[background-color,border-color,box-shadow,transform] duration-150 hover:bg-ink hover:text-paper active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
              action === id ? "bg-slop text-paper border-slop" : "bg-paper text-ink"
            }`}
          >
            <Icon size={16} strokeWidth={2.5} />
            {label}
          </button>
        ))}
      </div>
    </article>
  );
}

export default function Feed() {
  const navigate = useNavigate();
  const [active, setActive] = useState("following");

  return (
    <div className="min-h-screen dotgrid bg-paper text-ink pb-20 lg:pb-0" data-testid="feed-page">
      {/* TOP BAR */}
      <header className="sticky top-0 z-30 bg-ink text-paper border-b-[3px] border-slop">
        <div className="mx-auto max-w-[620px] flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
            data-testid="feed-brand"
          >
            <span className="font-display text-slop text-2xl leading-none lowercase">
              awaig
            </span>
            <span className="hidden sm:inline-block -rotate-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slop border-2 border-slop px-2 py-1">
              the junk drawer
            </span>
          </button>

          {/* desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            {NAV.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                data-testid={`nav-${id}`}
                className={`flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide px-3 py-2 border-2 transition-colors duration-150 ${
                  active === id
                    ? "bg-slop text-paper border-slop"
                    : "border-transparent text-paper/70 hover:text-paper hover:border-paper/40"
                }`}
              >
                <Icon size={15} strokeWidth={2.5} />
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* FEED COLUMN */}
      <main className="mx-auto max-w-[620px] bg-paper border-x-[3px] border-ink min-h-screen">
        {POSTS.map((post, i) => (
          <Post key={post.id} post={post} index={i} />
        ))}
        <div className="py-10 flex flex-col items-center gap-4">
          <svg
            width="120"
            height="16"
            viewBox="0 0 120 16"
            aria-hidden="true"
          >
            <path
              d="M4 10 Q 18 2, 34 9 T 64 8 T 94 9 T 116 7"
              fill="none"
              stroke="var(--slop)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-ink/40 px-6">
            you reached the bottom of the slop &middot; touch grass
          </p>
        </div>
      </main>

      {/* MOBILE BOTTOM NAV */}
      <nav
        className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-ink text-paper border-t-[3px] border-slop flex"
        data-testid="mobile-nav"
      >
        {NAV.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            data-testid={`mobile-nav-${id}`}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 font-mono text-[10px] font-bold uppercase tracking-wide transition-colors ${
              active === id ? "text-slop" : "text-paper/60"
            }`}
          >
            <Icon size={20} strokeWidth={2.5} />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
