import React, { useMemo, useState } from "react";
import { ShieldCheck, Radar, Battery, Sun, Moon, Video, MapPinned, Phone, Mail, Check, BellRing, ScanEye, Timer, ArrowRight, Building2, Factory, Warehouse, Car, Trees, Construction } from "lucide-react";

const Pill = ({ children }) => (
  <span className="rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3 py-1 text-xs font-medium">
    {children}
  </span>
);

const CTAButton = ({ children, href="#demo", onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition shadow-lg shadow-emerald-600/20"
  >
    {children} <ArrowRight className="size-4" />
  </a>
);

const GhostButton = ({ children, href="#" }) => (
  <a href={href} className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition">
    {children}
  </a>
);

const Section = ({ id, eyebrow, title, subtitle, children, className="" }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="mx-auto max-w-6xl px-4">
      {(eyebrow || title) && (
        <div className="mb-10">
          {eyebrow && <p className="uppercase tracking-widest text-xs text-white/60 mb-2">{eyebrow}</p>}
          {title && <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3">{title}</h2>}
          {subtitle && <p className="text-white/70 text-lg md:text-xl max-w-3xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

// ROI Calculator
function ROICalculator() {
  const [guardWage, setGuardWage] = useState(22);
  const [hoursPerDay, setHoursPerDay] = useState(12);
  const [daysPerWeek, setDaysPerWeek] = useState(7);
  const [posts, setPosts] = useState(1);
  const [droneAnnual, setDroneAnnual] = useState(65000);

  const {
    guardAnnual,
    guardMonthly,
    droneMonthly,
    savingsAnnual,
    equivalentHourly,
  } = useMemo(() => {
    const annualHours = hoursPerDay * daysPerWeek * 52;
    const guardAnnual = guardWage * annualHours * posts;
    const guardMonthly = guardAnnual / 12;
    const droneMonthly = droneAnnual / 12;
    const savingsAnnual = Math.max(0, guardAnnual - droneAnnual);
    const equivalentHourly = droneAnnual / (365 * 24);
    return { guardAnnual, guardMonthly, droneMonthly, savingsAnnual, equivalentHourly };
  }, [guardWage, hoursPerDay, daysPerWeek, posts, droneAnnual]);

  const fmt = (n) => n.toLocaleString(undefined, { maximumFractionDigits: 0 });
  const fmt2 = (n) => n.toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="grid grid-cols-2 gap-4">
          <label className="col-span-2">Guard hourly wage ($)
            <input type="range" min={15} max={60} value={guardWage} onChange={(e)=>setGuardWage(+e.target.value)} className="w-full"/>
            <div className="text-sm text-white/70">${fmt(guardWage)} / hr</div>
          </label>
          <label>Hours per day
            <input type="range" min={4} max={24} value={hoursPerDay} onChange={(e)=>setHoursPerDay(+e.target.value)} className="w-full"/>
            <div className="text-sm text-white/70">{hoursPerDay} h</div>
          </label>
          <label>Days per week
            <input type="range" min={1} max={7} value={daysPerWeek} onChange={(e)=>setDaysPerWeek(+e.target.value)} className="w-full"/>
            <div className="text-sm text-white/70">{daysPerWeek} d</div>
          </label>
          <label>Number of posts
            <input type="range" min={1} max={6} value={posts} onChange={(e)=>setPosts(+e.target.value)} className="w-full"/>
            <div className="text-sm text-white/70">{posts}</div>
          </label>
          <label className="col-span-2">Drone annual cost ($)
            <input type="range" min={30000} max={120000} step={1000} value={droneAnnual} onChange={(e)=>setDroneAnnual(+e.target.value)} className="w-full"/>
            <div className="text-sm text-white/70">${fmt(droneAnnual)} / yr</div>
          </label>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 p-6">
        <h4 className="text-white/90 text-lg font-semibold mb-4">Estimated Cost Comparison</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-black/30 p-4 border border-white/10">
            <p className="text-xs uppercase tracking-wider text-white/50">Guards (annual)</p>
            <p className="text-2xl font-semibold text-white">${fmt(guardAnnual)}</p>
            <p className="text-xs text-white/60">≈ ${fmt(guardMonthly)} / month</p>
          </div>
          <div className="rounded-xl bg-black/30 p-4 border border-white/10">
            <p className="text-xs uppercase tracking-wider text-white/50">Drone (annual)</p>
            <p className="text-2xl font-semibold text-white">${fmt(droneAnnual)}</p>
            <p className="text-xs text-white/60">≈ ${fmt(droneMonthly)} / month</p>
          </div>
          <div className="rounded-xl bg-black/30 p-4 border border-white/10 col-span-2">
            <p className="text-xs uppercase tracking-wider text-white/50">Projected annual savings</p>
            <p className="text-2xl font-semibold text-emerald-300">${fmt(savingsAnnual)}</p>
            <p className="text-xs text-white/60">Equivalent drone hourly cost: ${fmt2(equivalentHourly)}/hr (editable inputs)</p>
          </div>
        </div>
        <p className="text-xs text-white/50 mt-3">* Calculator is an estimate for planning only; actual pricing varies by site size, risk profile, and integrations.</p>
      </div>
    </div>
  );
}

const faqs = [
  { q: "What exactly is AI drone security?", a: "Autonomous drones patrol pre-defined routes, detect anomalies with onboard and cloud AI, and send real‑time alerts to your team or security partner." },
  { q: "Does it work at night or in bad weather?", a: "Yes. Thermal and low‑light sensors enable night operations. Weather tolerances depend on the airframe — we help scope per site." },
  { q: "Is this a replacement for guards?", a: "Often it reduces or replaces overnight posts while augmenting daytime coverage. Many clients redeploy staff to higher‑value tasks." },
  { q: "How fast is deployment?", a: "Most sites go live within a few weeks after site survey and approvals. We handle planning, training, and hand‑off." },
  { q: "Can it integrate with my cameras or VMS?", a: "We support alerts and video sharing with leading VMS and incident workflows. We'll review your stack during scoping." },
];

const useCases = [
  { icon: <Car className="size-6"/>, title: "Auto Dealerships", text: "Deter lot theft and catalytic converter crews with visible aerial patrols." },
  { icon: <Construction className="size-6"/>, title: "Construction Sites", text: "Watch materials yards after hours; document incidents from above." },
  { icon: <Factory className="size-6"/>, title: "Industrial Parks", text: "Rapid response across large footprints without adding posts." },
  { icon: <Warehouse className="size-6"/>, title: "Warehouses & Logistics", text: "Perimeter sweeps, gate checks, and dock monitoring on schedule." },
  { icon: <Building2 className="size-6"/>, title: "Campuses & Offices", text: "Smart patrols tied to access events and after‑hours activity." },
  { icon: <Trees className="size-6"/>, title: "Farms & Estates", text: "Cover hundreds of acres with a single system." },
];

const features = [
  { icon: <Radar className="size-5"/>, title: "Autonomous Patrols", text: "Pre‑planned routes with dynamic reroutes on detection." },
  { icon: <ScanEye className="size-5"/>, title: "AI Detection", text: "Detect people, vehicles, and motion anomalies in real time." },
  { icon: <BellRing className="size-5"/>, title: "Instant Alerts", text: "Mobile and email alerts with live video on tap." },
  { icon: <Timer className="size-5"/>, title: "Rapid Response", text: "Point‑to‑point sprints across large perimeters in seconds." },
  { icon: <Battery className="size-5"/>, title: "Smart Docking", text: "Auto‑charge, auto‑launch, and weather‑aware operations." },
  { icon: <MapPinned className="size-5"/>, title: "Site Mapping", text: "High‑res site maps and evidence clips at your fingertips." },
];

export default function App() {
  const [dark, setDark] = useState(true);
  const CALENDLY_URL = "https://calendly.com/securitydrones/demo?hide_event_type_details=1&hide_gdpr_banner=1";

  return (
    <div className={`${dark ? "bg-slate-950 text-white" : "bg-white text-slate-900"} min-h-screen font-sans`}>
      <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/70 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="size-6 text-emerald-400"/>
            <span>SecurityDrones.info</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#use-cases" className="hover:text-white">Use cases</a>
            <a href="#roi" className="hover:text-white">ROI</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={()=>setDark(!dark)} className="rounded-full p-2 border border-white/10 hover:bg-white/10" aria-label="Toggle theme">
              {dark ? <Sun className="size-4"/> : <Moon className="size-4"/>}
            </button>
            <CTAButton href="#demo">Book a demo</CTAButton>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(16,185,129,0.25),rgba(0,0,0,0))]"/>
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Pill>Autonomous</Pill>
              <Pill>24/7</Pill>
              <Pill>Real‑time alerts</Pill>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Replace guesswork with <span className="text-emerald-400">always‑on aerial security</span>
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-xl">
              AI‑powered patrols, thermal detection, and instant notifications — covering large sites at a fraction of traditional costs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTAButton href="#demo">Book a demo</CTAButton>
              <GhostButton href="#roi">See your ROI</GhostButton>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
              <Check className="size-4 text-emerald-400"/> No long videos — 15‑sec product overview
              <Check className="size-4 text-emerald-400"/> Deployed in weeks, not months
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
              {/* Replace src with your hero clip */}
              <video className="w-full h-full" src="/media/hero.mp4" autoPlay muted loop playsInline poster="/media/hero-poster.jpg"/>
              <div className="p-4 border-t border-white/10 text-sm text-white/70 flex items-center gap-2">
                <Video className="size-4 text-emerald-300"/> Drop your demo reel here (MP4)
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 border-y border-white/5 bg-white/5">
        <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-center gap-6 text-white/50 text-xs uppercase tracking-widest">
          <span className="opacity-70">Perimeter Patrol</span>
          <span className="opacity-70">Thermal Vision</span>
          <span className="opacity-70">Incident Clips</span>
          <span className="opacity-70">Cloud Alerts</span>
          <span className="opacity-70">Smart Dock</span>
        </div>
      </div>

      <Section id="features" eyebrow="Platform" title="Smarter than a patrol, faster than a truck" subtitle="Everything you need to deter, detect, and act — from a single autonomous system.">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 mb-3 text-emerald-300">{f.icon}<h3 className="font-semibold">{f.title}</h3></div>
              <p className="text-white/70">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="use-cases" eyebrow="Industries" title="Built for large properties" subtitle="High‑impact coverage for sites where seconds and acres matter.">
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((u, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <div className="flex items-center gap-3 mb-2 text-emerald-300">{u.icon}<h3 className="font-semibold">{u.title}</h3></div>
              <p className="text-white/70">{u.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="See it in action" title="Your footage, repackaged as scroll‑stopping clips" subtitle="Drop in 5–15 second clips to match each use case. Perfect for Meta ads and landing pages.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <video className="w-full" src="/media/clip1.mp4" autoPlay muted loop playsInline poster="/media/clip1.jpg"/>
            <div className="p-3 border-t border-white/10 text-xs text-white/60">Auto‑patrol perimeter sweep</div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <video className="w-full" src="/media/clip2.mp4" autoPlay muted loop playsInline poster="/media/clip2.jpg"/>
            <div className="p-3 border-t border-white/10 text-xs text-white/60">Thermal/low‑light detection</div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <video className="w-full" src="/media/clip3.mp4" autoPlay muted loop playsInline poster="/media/clip3.jpg"/>
            <div className="p-3 border-t border-white/10 text-xs text-white/60">Incident clip & mobile alert</div>
          </div>
        </div>
      </Section>

      <Section id="roi" eyebrow="ROI" title="See the savings in minutes" subtitle="Adjust the sliders to compare guard posts versus an autonomous drone system.">
        <ROICalculator />
      </Section>

      <Section eyebrow="Why now" title="Traditional guards vs. Autonomous drone" className="pt-0">
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="min-w-full text-sm">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4"></th>
                <th className="text-left p-4 font-semibold">Guards</th>
                <th className="text-left p-4 font-semibold">Autonomous Drone</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Coverage per hour", "Walkable perimeter only", "Acres in minutes via flight"],
                ["Night performance", "Varies by site and staff", "Thermal/low‑light detection"],
                ["Incident evidence", "Manual notes and cams", "Auto‑saved aerial clips"],
                ["Scalability", "Add posts and payroll", "Add routes — same system"],
                ["Availability", "Breaks and call‑outs", "Always‑on scheduling"],
                ["Operating cost", "Ongoing hourly + overtime", "Predictable annual contract"],
              ].map((row, i) => (
                <tr key={i} className="odd:bg-white/0 even:bg-white/5">
                  <td className="p-4 text-white/70">{row[0]}</td>
                  <td className="p-4">{row[1]}</td>
                  <td className="p-4 text-emerald-200">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="demo" eyebrow="Get started" title="Book a live demo" subtitle="See a 15‑minute walkthrough with pricing ranges and a site‑fit checklist.">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-semibold mb-4">Request a callback</h4>
            <form
              onSubmit={(e)=>{
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get('name');
                const phone = data.get('phone');
                const email = data.get('email');
                const msg = data.get('message');
                const mailto = `mailto:info@securitydrones.info?subject=Demo%20request%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`Phone: ${phone}\nEmail: ${email}\n\n${msg}`)}`;
                window.location.href = mailto;
              }}
              className="grid gap-3"
            >
              <input name="name" required placeholder="Full name" className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500/50"/>
              <input name="email" required type="email" placeholder="Work email" className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500/50"/>
              <input name="phone" placeholder="Phone (optional)" className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500/50"/>
              <textarea name="message" rows={4} placeholder="Tell us about your site (acres, cameras, posts, goals)" className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500/50"/>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition">Send request <ArrowRight className="size-4"/></button>
              <p className="text-xs text-white/60">Prefer a link? <a className="underline" href={CALENDLY_URL} target="_blank" rel="noreferrer">Book via Calendly</a>.</p>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6">
            <h4 className="font-semibold mb-4">Schedule instantly</h4>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20">
              <iframe
                title="Calendly booking"
                src={CALENDLY_URL}
                className="w-full h-[620px]"
                frameBorder="0"
              />
            </div>
            <div className="mt-3 text-xs text-white/60">Embedded Calendly is private by default; attendees receive a calendar invite automatically.</div>
          </div>
        </div>
      </Section>

      <Section id="faq" eyebrow="Answers" title="Frequently asked questions">
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer text-white/90 font-medium">{f.q}</summary>
              <p className="mt-2 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white/80">
            <ShieldCheck className="size-5 text-emerald-400"/>
            <span className="font-semibold">SecurityDrones.info</span>
            <span className="text-white/50">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-5 text-white/70">
            <a className="flex items-center gap-2 hover:text-white" href="tel:+1-000-000-0000"><Phone className="size-4"/> +1 (000) 000‑0000</a>
            <a className="flex items-center gap-2 hover:text-white" href="mailto:info@securitydrones.info"><Mail className="size-4"/> info@securitydrones.info</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
