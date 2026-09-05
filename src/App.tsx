import { useState, useEffect, useRef } from "react";

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com";

const IMAGES = {
  heroVideo: `${BLOB}/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4`,
  capabilities: `${BLOB}/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png`,
  tree: `${BLOB}/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png`,
  world: `${BLOB}/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png`,
  realtimeGraph: `${BLOB}/real-time-graph-INFmn3u0MlUwvNPynoIhwxtPaPjxM5.png`,
  connection: `${BLOB}/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png`,
  sdkBg: `${BLOB}/Upscaled%20Image%20%2813%29-OQ2DiR3ElVsUg8kTvTL1kC5A3Q6maM.png`,
  footerBg: `${BLOB}/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png`,
};

const CAPABILITIES = [
  { n: "01", title: "UI Engineering", desc: "Crafting interfaces that feel native to the web. Pixel-precise, accessible, and built to last — from design tokens to deployed components.", stat: "100%", statLabel: "component precision" },
  { n: "02", title: "Web Development", desc: "Full-stack web solutions from concept to deployment. Clean TypeScript, fast loads, zero bloat. Every project is production-ready on day one.", stat: "<1s", statLabel: "load target" },
  { n: "03", title: "AI Integration", desc: "Embedding intelligent features into real products. LLMs, agents, and smart workflows wired seamlessly into modern UI — no black boxes.", stat: "GPT-4o", statLabel: "primary model" },
  { n: "04", title: "Brand Ecosystems", desc: "Building unified digital identities that scale. Every project under the Mr Xeno identity connects into one coherent, intentional ecosystem.", stat: "1", statLabel: "unified identity" },
];

const PROCESS_STEPS = [
  {
    n: "01", title: "Discover", sub: "your vision",
    desc: "We start with clarity. Understanding your goals, constraints, and audience before a single line of code is written.",
    code: `const project = new MrXeno.Project({\n  goal: 'Build something real',\n  constraints: ['scope', 'timeline'],\n  audience: 'defined',\n  quality: 'uncompromised'\n})`,
  },
  {
    n: "02", title: "Design", sub: "the system",
    desc: "Every decision is intentional. Typography, spacing, color, and motion all serve the experience — nothing is decorative noise.",
    code: `await design.system({\n  tokens: true,\n  components: 'atomic',\n  motion: 'subtle',\n  aesthetic: 'intentional',\n  responsive: true\n})`,
  },
  {
    n: "03", title: "Ship", sub: "clean code",
    desc: "Production-ready builds with TypeScript, React, and Vercel. Zero legacy debt. Always deployable, always fast.",
    code: `xeno.deploy({\n  stack: ['React', 'TypeScript', 'Vercel'],\n  quality: 'production',\n  latency: '<50ms'\n})\n// live and shipping 🚀`,
  },
];

const INTEGRATIONS = [
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "UI" },
  { name: "Next.js", category: "Framework" },
  { name: "Vercel", category: "Deploy" },
  { name: "GitHub", category: "Version Control" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Figma", category: "Design" },
  { name: "Supabase", category: "Backend" },
  { name: "OpenAI", category: "AI / LLM" },
  { name: "Anthropic", category: "AI / LLM" },
  { name: "Node.js", category: "Runtime" },
  { name: "Vite", category: "Build" },
];

const SECURITY_FEATURES = [
  { title: "Clean code first", desc: "No shortcuts, no hacks. Every line is readable, typed, and purposeful by default." },
  { title: "Performance by default", desc: "Fast loads aren't a bonus feature. Every project is optimized from the first commit." },
  { title: "Intentional design", desc: "Every pixel earns its place. Beauty and function are the same thing — never in tension." },
  { title: "Ecosystem thinking", desc: "Every project connects. The Mr Xeno identity is a unified, expanding digital world." },
];

const TESTIMONIALS = [
  { quote: "Mr Xeno delivered a UI that was sharper than our brief. He sees the system behind every screen — not just the pixels.", name: "Alara Voss", role: "Founder", company: "Drift Studio", stat: "3×", statLabel: "Faster time to ship" },
  { quote: "We needed AI wired into a product that didn't feel like AI. He nailed it. Clean, fast, invisible where it needed to be.", name: "Jordan Kael", role: "CPO", company: "Nexum Labs", stat: "100%", statLabel: "Scope delivered" },
  { quote: "The attention to craft is what separates this work. Every interaction, every spacing decision — all intentional.", name: "Sia Renn", role: "Design Lead", company: "Cove Digital", stat: "↑40%", statLabel: "User engagement" },
  { quote: "He doesn't just build what you ask for. He builds what you actually need — then explains why it's better.", name: "Marcus Obi", role: "CEO", company: "Lumen Systems", stat: "0", statLabel: "Revisions needed" },
];

const PROJECTS = [
  {
    name: "PhantomSecure",
    tagline: "Official Website",
    desc: "A security-focused digital presence built for credibility and clarity. Clean architecture, sharp UI, zero compromise.",
    href: "https://phantomsecure.xyz",
    tag: "Security",
    accent: "#eca8d6",
  },
  {
    name: "Xvesting",
    tagline: "Investment Platform",
    desc: "A modern investment platform interface. Data-dense, fast, and designed for clarity under complexity.",
    href: "https://xvesting.co",
    tag: "Finance",
    accent: "#a78bfa",
    featured: true,
  },
  {
    name: "LeafixServices",
    tagline: "Service Platform",
    desc: "A full-service digital platform built with precision. Responsive, accessible, and production-ready from day one.",
    href: "https://leafixofficial.vercel.app",
    tag: "Services",
    accent: "#67e8f9",
  },
  {
    name: "TerminalX",
    tagline: "Developer Tool",
    desc: "A developer-first tool built for the terminal era. Speed, clarity, and the kind of UX devs actually want.",
    href: "https://terminalx.cloud",
    tag: "Dev Tools",
    accent: "#fbbf24",
  },
];

const MODELS = ["TypeScript", "React 19", "Next.js 15", "Tailwind CSS v4", "Vercel", "Supabase", "OpenAI API", "Anthropic API", "Figma", "GitHub Actions", "Node.js", "Vite 6", "Framer Motion", "shadcn/ui"];

function useCountUp(target: number, duration = 2000, trigger = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return val;
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        className="pointer-events-auto w-full transition-all duration-300 ease-out"
        style={scrolled ? {
          maxWidth: "900px",
          margin: "12px 24px 0",
          background: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(16px)",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        } : {
          maxWidth: "1400px",
          margin: "0",
          background: "transparent",
          borderRadius: "0",
          border: "1px solid transparent",
        }}
      >
      <div className={`px-6 lg:px-8 h-16 flex items-center justify-between transition-all duration-300`}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-baseline gap-0.5">
          <span className="font-display text-2xl text-white">MR XENO</span>
          <span className="font-mono text-xs text-white/40 mt-1">©</span>
        </button>
        <div className="hidden md:flex items-center gap-12">
          {[["About", "capabilities"], ["Process", "process"], ["Stack", "integrations"], ["Approach", "security"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-sm text-white/70 hover:text-white transition-colors">
              {label}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => scrollTo("cta")} className="text-sm font-medium bg-[#ecebe7] text-[#000101] rounded-full px-6 h-10 hover:bg-white transition-colors">
            Hire me
          </button>
        </div>
        <button className="md:hidden text-white/70 p-2" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open ? <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/> : <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/5 px-6 py-4 flex flex-col gap-4" style={{ borderRadius: scrolled ? "0 0 24px 24px" : "0" }}>
          {[["About", "capabilities"], ["Process", "process"], ["Stack", "integrations"], ["Approach", "security"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-sm text-white/60 hover:text-white text-left py-1">{label}</button>
          ))}
          <div className="flex gap-3 pt-2 border-t border-white/5">
            <button className="text-sm text-white/70 px-4 py-2">Portfolio</button>
            <button onClick={() => scrollTo("cta")} className="text-sm font-medium bg-[#ecebe7] text-[#000101] rounded-full px-5 py-2">Hire me</button>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const HERO_WORDS = [
  { text: "build", color: "#eca8d6" },
  { text: "design", color: "#a78bfa" },
  { text: "ship", color: "#67e8f9" },
  { text: "scale", color: "#fbbf24" },
];

function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % HERO_WORDS.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden">
      {/* Video background */}
      <video
        autoPlay muted loop playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        src={IMAGES.heroVideo}
        onContextMenu={(e) => e.preventDefault()}
        ref={(el) => { if (el) { el.play().catch(() => {}); } }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

      {/* Vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white/[0.04]"
            style={{ left: `${(i + 1) * 8.33}%` }}
          />
        ))}
      </div>

      {/* Vertical Japanese text — ambient only */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-1 select-none pointer-events-none" aria-hidden>
        <span className="font-mono text-[10px] text-white/10 [writing-mode:vertical-rl] tracking-[0.3em]">デザイン・開発・実装</span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <p className="font-mono text-xs text-[#ecebe7]/50 tracking-widest uppercase mb-6">
          UI Engineer · Web Designer · Digital Builder
        </p>
        <p className="font-mono text-[10px] text-[#ecebe7]/20 tracking-widest mb-3 select-none">
          ものづくり — craftsmanship
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[100px] leading-[0.95] tracking-tight text-white mb-6 max-w-4xl">
          Clean, fast, intentional —<br />
          I{" "}
          <span
            className="transition-all duration-500"
            style={{ color: HERO_WORDS[wordIdx].color }}
          >
            {HERO_WORDS[wordIdx].text}
          </span>
          {" "}things.
        </h1>

        <div className="flex flex-wrap gap-4 mt-10">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="font-medium bg-[#ecebe7] text-[#000101] rounded-full px-8 h-14 text-base hover:bg-white transition-colors flex items-center gap-2"
          >
            View my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            className="font-medium border border-white/20 text-white rounded-full px-8 h-14 text-base hover:border-white/40 transition-colors"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Capabilities ─────────────────────────────────────────────────────────────
function Capabilities() {
  return (
    <section id="capabilities" className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p className="font-mono text-xs text-[#ecebe7]/40 tracking-widest uppercase mb-4">What I Do</p>
          <h2 className="font-display text-5xl lg:text-6xl text-[#ecebe7] mb-4">Built to last.</h2>
          <p className="font-mono text-[10px] text-[#ecebe7]/15 tracking-widest select-none">永続的に構築 — built permanently</p>
          <p className="text-[#757168] max-w-xl leading-relaxed">
            I focus on UI engineering, web design, and building connected digital systems — from pixel-precise interfaces to AI-integrated products under one unified identity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Large featured card with image */}
          <div className="relative flex overflow-hidden border border-[#101215] rounded-2xl bg-[#020204] min-h-[400px]">
            <div className="relative flex-1 p-8 lg:p-12 flex flex-col justify-between z-10">
              <div>
                <span className="font-mono text-xs text-[#eca8d6]/60 bg-[#eca8d6]/10 border border-[#eca8d6]/20 px-3 py-1 rounded-full">{CAPABILITIES[0].n}</span>
                <h3 className="font-display text-3xl lg:text-4xl text-[#ecebe7] mt-6 mb-3">{CAPABILITIES[0].title}</h3>
                <p className="text-[#757168] text-sm leading-relaxed max-w-xs">{CAPABILITIES[0].desc}</p>
              </div>
              <div>
                <span className="font-display text-5xl lg:text-6xl text-[#ecebe7] block">{CAPABILITIES[0].stat}</span>
                <span className="font-mono text-xs text-[#757168] uppercase tracking-widest">{CAPABILITIES[0].statLabel}</span>
              </div>
            </div>
            <div className="hidden lg:block relative w-[42%] shrink-0 overflow-hidden">
              <img src={IMAGES.capabilities} alt="Autonomous execution visualization" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020204] via-transparent to-transparent" />
            </div>
          </div>

          {/* Right column: 3 smaller cards */}
          <div className="grid gap-4">
            {CAPABILITIES.slice(1).map((cap) => (
              <div key={cap.n} className="border border-[#101215] rounded-2xl bg-[#020204] p-6 flex items-center gap-6 hover:border-[#ecebe7]/10 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-[#eca8d6]/60">{cap.n}</span>
                    <h3 className="font-display text-xl text-[#ecebe7]">{cap.title}</h3>
                  </div>
                  <p className="text-[#757168] text-sm leading-relaxed">{cap.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-display text-3xl text-[#ecebe7] block">{cap.stat}</span>
                  <span className="font-mono text-xs text-[#757168] uppercase tracking-widest whitespace-nowrap">{cap.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function Process() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const duration = 6000;
    const interval = 50;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += interval;
      setProgress(Math.min((elapsed / duration) * 100, 100));
      if (elapsed >= duration) {
        setActive((a) => (a + 1) % PROCESS_STEPS.length);
        elapsed = 0;
        setProgress(0);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section id="process" className="py-24 lg:py-32" style={{ background: "oklch(0.09 0.01 260)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-end mb-12">
          <div>
            <p className="font-mono text-xs text-[#ecebe7]/40 tracking-widest uppercase mb-4">Process <span className="text-[#ecebe7]/20 ml-2 normal-case">/ プロセス</span></p>
            <h2 className="font-display text-5xl lg:text-6xl text-white">Discover. Design. Ship.</h2>
          </div>
          {/* Tree image on the right */}
          <div className="relative h-48 lg:h-64 overflow-hidden rounded-xl">
            <img src={IMAGES.tree} alt="Agent task tree" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.09 0.01 260) 0%, transparent 40%)" }} />
          </div>
        </div>

        {/* 3 step cards */}
        <div className="grid lg:grid-cols-3 gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <button
              key={step.n}
              onClick={() => setActive(i)}
              className="relative text-left border rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: i === active ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
                borderColor: i === active ? "rgba(255,255,255,0.12)" : "#101215",
              }}
            >
              {/* Progress bar */}
              {i === active && (
                <div className="absolute top-0 left-0 h-0.5 bg-[#eca8d6]/50 transition-all duration-75" style={{ width: `${progress}%` }} />
              )}
              <div className="p-6 lg:p-8">
                <span className="font-mono text-xs text-[#ecebe7]/30 mb-4 block">{step.n}</span>
                <h3 className="font-display text-3xl lg:text-4xl text-white mb-0.5">{step.title}</h3>
                <p className="font-display text-3xl lg:text-4xl text-[#757168] mb-4">{step.sub}</p>
                <p className="text-[#757168] text-sm leading-relaxed mb-6">{step.desc}</p>
                <div className="border border-[#101215] rounded-xl bg-black/40 p-4">
                  <pre className="font-mono text-xs text-[#ecebe7]/60 whitespace-pre-wrap leading-relaxed overflow-auto">{step.code}</pre>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Infrastructure ───────────────────────────────────────────────────────────
function Infrastructure() {
  const [regionIdx, setRegionIdx] = useState(0);
  const regions = [
    { name: "UI Engineering", nodes: 12 },
    { name: "AI Integration", nodes: 8 },
    { name: "Web Systems", nodes: 6 },
    { name: "Brand & Design", nodes: 3 },
  ];
  const [sectionRef, inView] = useInView(0.2);

  useEffect(() => {
    const t = setInterval(() => setRegionIdx((i) => (i + 1) % regions.length), 3000);
    return () => clearInterval(t);
  }, []);

  // Node positions for SVG
  const nodes = [
    { x: 60, y: 80 }, { x: 140, y: 50 }, { x: 200, y: 90 },
    { x: 250, y: 40 }, { x: 310, y: 75 }, { x: 120, y: 130 },
    { x: 280, y: 130 }, { x: 180, y: 160 },
  ];

  return (
    <section id="infra" ref={sectionRef as React.RefObject<HTMLElement>} className="py-24 lg:py-32 border-t border-[#101215]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-stretch">
          {/* Globe image LEFT */}
          <div className="w-48 lg:w-72 xl:w-80 shrink-0 flex items-center justify-center">
            <img src={IMAGES.world} alt="Global network sphere" className="w-full h-auto" />
          </div>

          {/* Text RIGHT */}
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs text-[#ecebe7]/40 tracking-widest uppercase mb-4">Always online</p>
            <h2 className="font-display text-5xl lg:text-6xl text-[#ecebe7] mb-4">
              Always building.
            </h2>
            <p className="text-[#757168] leading-relaxed mb-10 max-w-xl">
              Every project I ship is part of a connected ecosystem under the Mr Xeno identity — designed for longevity, not trends.
            </p>

            {/* Stats row */}
            <div className="grid lg:grid-cols-3 gap-4 mb-8">
              {[
                { val: "15+", label: "active projects", desc: "Connected products and tools running live under the Mr Xeno ecosystem right now." },
                { val: "100%", label: "TypeScript", desc: "" },
                { val: "24/7", label: "shipping mindset", desc: "" },
              ].map((s) => (
                <div key={s.label} className="border border-[#101215] rounded-xl p-5 bg-[#020204]">
                  <div className="font-display text-4xl text-[#ecebe7] mb-1">{s.val}</div>
                  <div className="font-mono text-xs text-[#757168] uppercase tracking-widest mb-2">{s.label}</div>
                  {s.desc && <p className="text-[#757168] text-xs leading-relaxed">{s.desc}</p>}
                </div>
              ))}
            </div>

            {/* Region node SVG card */}
            <div className="border border-[#101215] rounded-xl bg-[#020204] p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6] pulse-dot" />
                  <span className="font-mono text-xs text-[#ecebe7]/40 uppercase tracking-widest">{regions[regionIdx].name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs text-emerald-400">active</span>
                </div>
              </div>
              <div className="relative h-32 overflow-hidden">
                <svg viewBox="0 0 360 170" className="w-full h-full">
                  {inView && nodes.slice(0, regions[regionIdx].nodes).map((n, i) => (
                    nodes.slice(0, regions[regionIdx].nodes).slice(i + 1, i + 3).map((m, j) => (
                      <line
                        key={`${i}-${j}`}
                        x1={n.x} y1={n.y} x2={m.x} y2={m.y}
                        stroke="#eca8d6" strokeWidth="0.5" strokeOpacity="0.2"
                        className="animated-line"
                      />
                    ))
                  ))}
                  {nodes.slice(0, regions[regionIdx].nodes).map((n, i) => (
                    <g key={i}>
                      <circle cx={n.x} cy={n.y} r="6" fill="#eca8d6" fillOpacity="0.1" />
                      <circle cx={n.x} cy={n.y} r="2.5" fill="#eca8d6" fillOpacity="0.8" />
                    </g>
                  ))}
                </svg>
                <div className="absolute bottom-2 right-3 font-display text-3xl text-[#ecebe7]">{regions[regionIdx].nodes}</div>
                <div className="absolute bottom-2 right-3 font-mono text-xs text-[#757168] mt-6" style={{ top: "auto", bottom: "0" }}>projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Metrics ──────────────────────────────────────────────────────────────────
function Metrics() {
  const [sectionRef, inView] = useInView(0.3);
  const agents = useCountUp(23847, 2000, inView);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-24 lg:py-32 border-t border-[#101215]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-12">
          <span className="flex items-center gap-2 bg-[#eca8d6]/10 text-[#eca8d6] font-mono text-xs px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6] pulse-dot" />
            LIVE
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#ecebe7]">By the numbers.</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          {/* Graph image */}
          <div className="lg:col-span-8 border border-[#101215] rounded-2xl bg-[#020204] overflow-hidden">
            <img src={IMAGES.realtimeGraph} alt="Real-time metrics graph" className="w-full h-full object-cover" />
          </div>

          {/* Counters */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="border border-[#101215] rounded-xl bg-[#020204] p-5 flex-1 flex flex-col justify-between">
              <div className="font-mono text-xs text-[#757168] uppercase tracking-widest mb-2">Lines written (est.)</div>
              <div className="font-display text-5xl text-[#ecebe7]">∞</div>
            </div>
            <div className="border border-[#101215] rounded-xl bg-[#020204] p-5 flex-1">
              <div className="font-mono text-xs text-[#757168] uppercase tracking-widest mb-2">Components shipped</div>
              <div className="font-display text-5xl text-[#ecebe7]">{agents.toLocaleString()}</div>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div className="border border-[#101215] rounded-xl bg-[#020204] p-4">
                <div className="font-mono text-xs text-[#757168] mb-2">Uptime target</div>
                <div className="font-display text-2xl text-[#ecebe7]">99.9%</div>
              </div>
              <div className="border border-[#101215] rounded-xl bg-[#020204] p-4">
                <div className="font-mono text-xs text-[#757168] mb-2">Load target</div>
                <div className="font-display text-2xl text-[#ecebe7]">&lt;1s</div>
              </div>
            </div>
          </div>
        </div>

        {/* Model ticker */}
        <div className="border border-[#101215] rounded-xl bg-[#020204] overflow-hidden">
          <div className="border-b border-[#101215] px-5 py-2.5">
            <span className="font-mono text-xs text-[#757168] uppercase tracking-widest">Tech stack</span>
          </div>
          <div className="overflow-hidden py-3">
            <div className="flex ticker-track">
              {[...MODELS, ...MODELS].map((m, i) => (
                <span key={i} className="whitespace-nowrap font-mono text-sm text-[#ecebe7]/40 px-8 border-r border-[#101215]">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Integrations ─────────────────────────────────────────────────────────────
function Integrations() {
  return (
    <section id="integrations" className="py-24 lg:py-32 border-t border-[#101215]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative mb-16 overflow-hidden rounded-2xl border border-[#101215]">
          <img src={IMAGES.connection} alt="Connection diagram" className="w-full h-48 object-cover object-top opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000101]" />
          <div className="absolute bottom-6 left-6">
            <p className="font-mono text-xs text-[#ecebe7]/40 tracking-widest uppercase mb-2">Tech Stack</p>
            <h2 className="font-display text-5xl lg:text-6xl text-[#ecebe7]">Tools I trust.</h2>
          </div>
        </div>

        <p className="text-[#757168] max-w-xl leading-relaxed mb-12">
          My stack is lean and intentional. Every tool earns its place — chosen for speed, type safety, and long-term maintainability.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {INTEGRATIONS.map((intg) => (
            <div key={intg.name} className="border border-[#101215] rounded-xl bg-[#020204] p-5 hover:border-[#ecebe7]/10 transition-colors cursor-pointer">
              <div className="font-mono text-xs text-[#757168] uppercase tracking-widest mb-2">{intg.category}</div>
              <div className="text-[#ecebe7]/80 font-medium">{intg.name}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-8">
          {[
            { val: "TS", label: "Typed end-to-end" },
            { val: "React", label: "Component-first" },
            { val: "Vercel", label: "Edge-deployed" },
          ].map((s) => (
            <div key={s.val} className="flex items-center gap-3">
              <span className="font-display text-2xl text-[#ecebe7]">{s.val}</span>
              <span className="text-[#757168]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Security ─────────────────────────────────────────────────────────────────
function Security() {
  return (
    <section id="security" className="py-24 lg:py-32 border-t border-[#101215]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Big stat card */}
          <div className="lg:col-span-5 border border-[#101215] rounded-2xl bg-[#020204] p-8 lg:p-12 flex flex-col justify-between min-h-80">
            <div>
              <p className="font-mono text-xs text-[#ecebe7]/40 tracking-widest uppercase mb-4">My Approach</p>
              <h2 className="font-display text-4xl lg:text-5xl text-[#ecebe7] mb-4">Opinionated,<br />not rigid.</h2>
              <p className="text-[#757168] leading-relaxed text-sm">
                I have strong opinions about how good software is made — and I bring those to every project, from first commit to launch day.
              </p>
            </div>
            <div>
              <div className="font-display text-7xl lg:text-8xl text-[#ecebe7] mb-1">0</div>
              <div className="font-mono text-xs text-[#757168] uppercase tracking-widest mb-8">Compromises on quality</div>
              <div className="flex flex-wrap gap-3">
                {["TypeScript", "React", "Vercel", "GitHub"].map((cert) => (
                  <span key={cert} className="font-mono text-xs border border-[#ecebe7]/20 text-[#ecebe7]/60 px-3 py-1.5 rounded-md">{cert}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SECURITY_FEATURES.map((f) => (
              <div key={f.title} className="border border-[#101215] rounded-2xl bg-[#020204] p-6 hover:border-[#ecebe7]/10 transition-colors">
                <div className="w-8 h-8 rounded-lg border border-[#ecebe7]/10 bg-[#ecebe7]/5 flex items-center justify-center mb-4">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L9 5.5L14 6.5L10.5 10L11.5 14L7 12L2.5 14L3.5 10L0 6.5L5 5.5L7 1Z" fill="#eca8d6" fillOpacity="0.6"/>
                  </svg>
                </div>
                <h3 className="text-[#ecebe7] font-semibold mb-2">{f.title}</h3>
                <p className="text-[#757168] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Developer SDK ────────────────────────────────────────────────────────────
function DeveloperSDK() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#101215] overflow-hidden relative">
      {/* Background image right side */}
      <div className="absolute bottom-0 right-0 w-[55%] h-[85%] pointer-events-none">
        <img src={IMAGES.sdkBg} alt="SDK visualization" className="w-full h-full object-cover object-left" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000101] via-[#000101]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000101] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="font-mono text-xs text-[#ecebe7]/40 tracking-widest uppercase mb-6">About Mr Xeno</p>
        <h2 className="font-display leading-[0.9] tracking-tight text-[#ecebe7] mb-8"
          style={{ fontSize: "clamp(48px, 8vw, 128px)" }}>
          Developer by craft.<br />
          <span className="text-[#757168]">Designer by instinct.</span>
        </h2>
        <p className="font-mono text-[11px] text-[#ecebe7]/20 tracking-[0.2em] mb-8 select-none">職人 · 創造者 · 構築者</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
          {[
            { title: "UI engineering focus", desc: "I build interfaces that feel native — precise, accessible, and built to outlast their tech stack." },
            { title: "AI-integrated products", desc: "Embedding LLMs and agents into real UIs without the buzzword tax." },
            { title: "Brand ecosystem builder", desc: "Every project I ship connects into the Mr Xeno digital identity — intentional by design." },
            { title: "Always shipping", desc: "Ideas without execution are just plans. I bias heavily toward done, deployed, and iterating." },
          ].map((f) => (
            <div key={f.title} className="border border-[#101215] rounded-xl bg-[#020204]/80 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6]" />
                <h3 className="text-[#ecebe7] font-semibold text-sm">{f.title}</h3>
              </div>
              <p className="text-[#757168] text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-[#ecebe7] text-[#000101] relative overflow-hidden">
      {/* Quote rain background */}
      <div className="absolute inset-0 select-none pointer-events-none overflow-hidden" aria-hidden>
        {Array.from({ length: 200 }).map((_, i) => (
          <span
            key={i}
            className="absolute font-mono text-[10px] text-[#000101]/[0.02]"
            style={{ left: `${(i % 20) * 5}%`, top: `${Math.floor(i / 20) * 12}%` }}
          >
            &quot;
          </span>
        ))}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="font-mono text-xs text-[#000101]/40 tracking-widest uppercase mb-2">Testimonials</p>
            <h2 className="font-display text-4xl text-[#000101]">What clients say.</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-[#000101]/10 flex items-center justify-center hover:border-[#000101]/30 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-[#000101]/10 flex items-center justify-center hover:border-[#000101]/30 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 relative">
            <div className="absolute -left-4 -top-8 font-display text-[200px] leading-none text-[#000101]/5 select-none">&quot;</div>
            <blockquote className="font-display text-3xl lg:text-4xl xl:text-5xl text-[#000101] leading-[1.2] mb-8 relative">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#000101]/10 flex items-center justify-center font-display text-lg text-[#000101]">
                {t.name.split(" ").map(w => w[0]).join("")}
              </div>
              <div>
                <div className="font-semibold text-[#000101]">{t.name}</div>
                <div className="text-[#000101]/50 text-sm">{t.role}, {t.company}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-[#000101]/10 rounded-2xl p-8">
              <span className="font-display text-7xl lg:text-8xl text-[#000101] block mb-2">{t.stat}</span>
              <span className="text-lg text-[#000101]/60">{t.statLabel}</span>
            </div>
            <div className="mt-8">
              <p className="font-mono text-xs text-[#000101]/40 uppercase tracking-widest mb-4">Companies worked with</p>
              <div className="flex flex-wrap gap-3">
                {TESTIMONIALS.map((tt, i) => (
                  <button key={tt.company}
                    onClick={() => setIdx(i)}
                    className="border rounded-full px-4 py-1.5 text-sm transition-colors"
                    style={{
                      borderColor: i === idx ? "#000101" : "rgba(0,0,0,0.1)",
                      color: i === idx ? "#000101" : "rgba(0,0,0,0.4)",
                    }}
                  >
                    {tt.company}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-[#101215]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p className="font-mono text-xs text-[#ecebe7]/40 tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="font-display text-5xl lg:text-6xl text-[#ecebe7]">Projects.</h2>
          <p className="text-[#757168] mt-4 max-w-xl leading-relaxed">
            A selection of live products built under the Mr Xeno ecosystem — each one intentional, shipped, and running.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {PROJECTS.map((proj) => (
            <a
              key={proj.name}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-[#101215] rounded-2xl bg-[#020204] p-8 lg:p-10 flex flex-col justify-between min-h-[260px] hover:border-white/10 transition-all duration-300 overflow-hidden"
              style={proj.featured ? { borderColor: "rgba(255,255,255,0.12)" } : {}}
            >
              {/* Subtle accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(400px circle at 20% 50%, ${proj.accent}08, transparent 60%)` }}
              />

              {proj.featured && (
                <div className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ color: proj.accent, borderColor: `${proj.accent}30`, background: `${proj.accent}10` }}>
                  Featured
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-mono text-xs px-3 py-1 rounded-full border"
                    style={{ color: proj.accent, borderColor: `${proj.accent}30`, background: `${proj.accent}10` }}
                  >
                    {proj.tag}
                  </span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl text-[#ecebe7] mb-1">{proj.name}</h3>
                <p className="font-mono text-xs text-[#757168] mb-4">{proj.tagline}</p>
                <p className="text-[#757168] text-sm leading-relaxed max-w-sm">{proj.desc}</p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-8">
                <span className="font-mono text-xs text-[#757168]">{proj.href.replace(/^https?:\/\//, "")}</span>
                <span
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-3"
                  style={{ color: proj.accent }}
                >
                  Visit
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  return (
    <section
      id="cta"
      className="py-32 lg:py-40 border-t border-[#101215] relative overflow-hidden"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(236,168,214,0.04), transparent 40%)` }}
      />
      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-[#ecebe7]/10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-[#ecebe7]/10" />
      <span className="absolute top-8 right-8 font-mono text-xs text-[#ecebe7]/10 tracking-widest select-none pointer-events-none">お問い合わせ</span>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="font-display text-5xl lg:text-7xl text-[#ecebe7] leading-[0.95] mb-6">
              Ready to build<br />something real?
            </h2>
            <p className="text-[#757168] leading-relaxed mb-10">
              I work with founders, studios, and teams who care about quality. If you're building something intentional, let's talk.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ecebe7] text-[#000101] rounded-full px-8 h-14 text-base font-medium hover:bg-white transition-colors flex items-center gap-2">
                Start a project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="border border-[#ecebe7]/20 text-[#ecebe7] rounded-full px-8 h-14 text-base font-medium hover:border-[#ecebe7]/40 transition-colors">
                View my work
              </button>
            </div>
            <p className="font-mono text-xs text-[#757168] mt-6">Currently taking on new projects</p>
          </div>
          {/* Contact form */}
          <div className="w-full lg:w-[480px] shrink-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-[#ecebe7]/20 rounded-2xl p-8 lg:p-10 flex flex-col items-center justify-center gap-4 min-h-[360px] text-center">
        <div className="w-12 h-12 rounded-full border border-[#eca8d6]/30 bg-[#eca8d6]/10 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l5 5 7-8" stroke="#eca8d6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 className="font-display text-2xl text-[#ecebe7]">Message sent.</h3>
        <p className="text-[#757168] text-sm">I'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[#ecebe7]/10 rounded-2xl p-8 lg:p-10 bg-[#020204] flex flex-col gap-5">
      <div>
        <p className="font-mono text-xs text-[#ecebe7]/40 tracking-widest uppercase mb-4">Get in touch</p>
        <h3 className="font-display text-2xl text-[#ecebe7]">Send a message.</h3>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs text-[#757168] uppercase tracking-widest">Name</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="bg-[#101215] border border-[#1a1d21] rounded-xl px-4 py-3 text-sm text-[#ecebe7] placeholder:text-[#757168]/50 focus:outline-none focus:border-[#ecebe7]/20 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs text-[#757168] uppercase tracking-widest">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
              className="bg-[#101215] border border-[#1a1d21] rounded-xl px-4 py-3 text-sm text-[#ecebe7] placeholder:text-[#757168]/50 focus:outline-none focus:border-[#ecebe7]/20 transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-xs text-[#757168] uppercase tracking-widest">Message</label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me about your project..."
            className="bg-[#101215] border border-[#1a1d21] rounded-xl px-4 py-3 text-sm text-[#ecebe7] placeholder:text-[#757168]/50 focus:outline-none focus:border-[#ecebe7]/20 transition-colors resize-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#ecebe7] text-[#000101] rounded-full h-12 text-sm font-medium hover:bg-white transition-colors flex items-center justify-center gap-2"
      >
        Send message
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </form>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const COLS = [
    { title: "Navigate", links: [
      { label: "About", id: "capabilities" },
      { label: "Process", id: "process" },
      { label: "Tech Stack", id: "integrations" },
      { label: "Approach", id: "security" },
    ]},
    { title: "Work", links: [
      { label: "Capabilities", id: "capabilities" },
      { label: "Projects", id: "projects" },
      { label: "Contact", id: "cta" },
    ]},
    { title: "Connect", links: [
      { label: "GitHub", href: "https://github.com/DeveloperXeno" },
      { label: "YouTube", href: "https://www.youtube.com/@developerxxeno" },
      { label: "Twitter / X", href: "https://x.com/DeveloperXeno" },
    ]},
  ];

  return (
    <footer className="bg-black border-t border-white/5">
      {/* Bioluminescent image */}
      <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <img src={IMAGES.footerBg} alt="Bioluminescent landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-baseline gap-0.5 mb-4">
              <span className="font-display text-2xl text-white">MR XENO</span>
              <span className="font-mono text-xs text-white/40">©</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Developer building clean, fast, and intentional digital experiences. UI engineering, web design, and connected brand ecosystems.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "X", href: "https://x.com/DeveloperXeno" },
                { icon: "GH", href: "https://github.com/DeveloperXeno" },
                { icon: "YT", href: "https://www.youtube.com/@developerxxeno" },
              ].map(({ icon, href }) => (
                <a key={icon} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all text-xs flex items-center justify-center font-mono">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"id" in link ? (
                      <button onClick={() => link.id ? scrollTo(link.id) : window.scrollTo({ top: 0 })} className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-2">
                        {link.label}
                      </button>
                    ) : (
                      <a href={"href" in link ? link.href : "#"} className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-2">
                        {link.label}
                        {"badge" in link && link.badge && (
                          <span className="bg-white text-black text-[10px] font-medium px-2 py-0.5 rounded-full">{link.badge}</span>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 Mr Xeno. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-xs text-white/30">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: "#000101" }} className="min-h-full">
      <Nav />
      <Hero />
      <Capabilities />
      <Process />
      <Infrastructure />
      <Metrics />
      <Integrations />
      <Security />
      <DeveloperSDK />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
