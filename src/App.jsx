import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Instagram, ShoppingBag } from "lucide-react";
import { useEffect } from "react";


// Color tokens
const colors = {
  sunRed: "#E10600",
  charcoal: "#0B0B0B",
  offWhite: "#FAF7F2",
  sand: "#E9E4DC",
  steel: "#2C2C2C",
};

export default function Nihon47() {

useEffect(() => {
  const bg = document.getElementById("parallax-bg");
  let currentOffset = 0;
  let currentScale = 1;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth < 768;

    const targetOffset = scrollY * (isMobile ? 0.1 : 0.25);
    const targetScale = 1 + scrollY * (isMobile ? 0.0001 : 0.0002);

    const lerp = (a, b, n) => a + (b - a) * n;

    const animate = () => {
      // Smoothly approach target values
      currentOffset = lerp(currentOffset, targetOffset, 0.07);
      currentScale = lerp(currentScale, targetScale, 0.05);

      if (bg) {
        bg.style.transform = `translateY(${currentOffset}px) scale(${currentScale})`;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#FAF7F2] font-sans">
     {/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-40 backdrop-blur-sm bg-black/10 border-b border-white/10">
  <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <img
        src="/main-logo.png"
        alt="Nihon47 logo"
        className="h-10 md:h-12 w-auto object-contain transition-opacity duration-500"
      />
    </div>
    <nav className="hidden md:flex items-center gap-6 text-sm">
      <a href="#story" className="hover:opacity-80">Story</a>
      <a href="#philosophy" className="hover:opacity-80">Philosophy</a>
      <a href="#collection" className="hover:opacity-80">First Light</a>
      <a href="#newsletter" className="hover:opacity-80 flex items-center gap-2">
        <Mail className="w-4 h-4" /> Join
      </a>
    </nav>
  </div>
</header>

{/* HERO SECTION */}
<section
  className="relative text-center h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-[64px] md:pt-[80px]"
>
  {/* Parallax background */}
  <div
    id="parallax-bg"
    className="absolute inset-0 will-change-transform"
    style={{
      backgroundImage: "url('/main-background.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      transformOrigin: "center",
      transition: "transform 0.2s ease-out",
      filter: "blur(2px) brightness(0.8)",
    }}
  ></div>

  {/* Top overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Bottom fade gradient */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold opacity-0 animate-fade-in [animation-delay:0.8s]">
      Wear the cities of Japan.
    </h1>
    <p className="text-lg md:text-xl text-gray-300 mt-6 opacity-0 animate-fade-in [animation-delay:1.6s]">
      Minimal streetwear inspired by the 47 prefectures — where culture meets precision.
    </p>
    <div className="flex flex-wrap justify-center gap-4 mt-10 opacity-0 animate-fade-in [animation-delay:2.4s]">
      <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300">
        Explore the Collection →
      </button>
      <button className="bg-transparent border border-gray-400 text-gray-200 px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300">
        Read the Story →
      </button>
    </div>
  </div>
</section>



      {/* STORY */}
      <section id="story" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold">A tribute to Japan. Designed with intention.</h2>
            <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
              From Tokyo’s neon pulse to Kyoto’s quiet temples, each design carries a story from one of Japan’s 47 prefectures. Nihon47 exists to turn those places into something you can wear. Simple. Cultural. Intentional.
            </p>
            <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: colors.sunRed }} />
              <span>Minimal</span>
              <span className="inline-block h-2 w-2 rounded-full bg-white/30" />
              <span>Intentional</span>
              <span className="inline-block h-2 w-2 rounded-full bg-white/30" />
              <span>Alive</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl border border-white/10 p-6 bg-white/5 backdrop-blur">
              <p className="text-sm leading-relaxed text-white/80">
                From neon nights to silent temples, from rain‑soaked alleys to sunlit mountains. Japan is not just a place. It’s rhythm, balance, imperfection, grace.
              </p>
              <p className="text-sm mt-4 leading-relaxed text-white/80">
                We wear it — 47 stories stitched in fabric. Each line, a map. Each color, a memory.
              </p>
              <p className="text-sm mt-4 font-medium">NIHON<span className="align-super text-xs">47</span> <span className="ml-2 text-xs opacity-80">日本</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="border-y border-white/10 bg-[#0D0D0D]">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-8">
          {[
            { title: "Minimal", body: "Simplicity is focus. We remove noise until only meaning remains." },
            { title: "Intentional", body: "Every decision has purpose — from a stitch to a line of type." },
            { title: "Alive", body: "We embrace small imperfections. Design should feel human." }
          ].map((card) => (
            <div key={card.title} className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION TEASER */}
      <section id="collection" className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Collection 01 — First Light</h2>
            <p className="mt-3 text-white/80 max-w-2xl">Before the noise. Before the rush. A five‑piece capsule that captures Japan at dawn. Minimal, balanced, quietly powerful.</p>
          </div>
          <a href="#newsletter" className="hidden md:inline-flex items-center gap-2 text-sm border border-white/20 px-4 py-2 rounded-xl hover:border-white/40">
            Get notified <ArrowRight className="w-4 h-4"/>
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Rising Sun Tee */}
          <Card
            title="Rising Sun Tee"
            city="All Prefectures"
            blurb="The beginning of everything. Deep red sun, clean cotton, quiet strength."
            badge="Signature"
          />
          {/* Tokyo Pulse Hoodie */}
          <Card
            title="Tokyo Pulse Hoodie"
            city="Tokyo"
            blurb="Energy without noise. Smooth lines, crisp structure, studio calm."
          />
          {/* Kyoto Still Crewneck */}
          <Card
            title="Kyoto Still Crewneck"
            city="Kyoto"
            blurb="Serenity through simplicity. Soft curves, warm balance."
          />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="border-t border-white/10 bg-[#0D0D0D]">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Be first to know</h3>
            <p className="mt-3 text-white/80 max-w-md">Join the list for early access to First Light. No noise. Just calm drops and quiet stories.</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-2xl bg-white text-[#0B0B0B] placeholder-[#0B0B0B]/50 focus:outline-none"/>
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#E10600] text-white hover:opacity-90">
              <Mail className="w-4 h-4"/> Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="tracking-[0.2em] font-semibold">NIHON</span>
            <span className="-mt-3 text-xs">47</span>
            <span className="text-xs ml-2 opacity-80">日本</span>
          </div>
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Nihon47 — Wear the cities of Japan.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Instagram" className="hover:opacity-80"><Instagram className="w-5 h-5"/></a>
            <a href="#" aria-label="Shop" className="hover:opacity-80"><ShoppingBag className="w-5 h-5"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({ title, city, blurb, badge }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
      <div className="aspect-[4/5] p-6 flex flex-col justify-between">
        {/* Mock product frame with studio feel */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity" style={{
          background: `linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)`
        }} />
        <div className="flex items-start justify-between">
          <span className="text-xs tracking-widest text-white/60">{city}</span>
          {badge && <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/20">{badge}</span>}
        </div>
        <div className="flex-1 flex items-center justify-center">
          {/* Shirt silhouette with red sun */}
          <div className="relative w-44 h-52 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full" style={{ background: colors.sunRed }} />
            <div className="absolute -bottom-3 text-[10px] tracking-[0.25em] opacity-90">NIHON<span className="align-super text-[9px]">47</span> <span className="ml-1">日本</span></div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="mt-2 text-sm text-white/75">{blurb}</p>
        </div>
      </div>
    </div>
  );
}
