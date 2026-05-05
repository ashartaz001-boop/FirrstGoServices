import { useState } from "react";
import { Code2, Briefcase, Users, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { useFadeIn } from "@/hooks/useFadeIn";
import { toast } from "sonner";
import { z } from "zod";

const industries = [
  "IT & Technology", "Healthcare", "FMCG & Retail", "Aviation",
  "Oil & Gas", "BFSI", "Real Estate", "Telecom & Logistics",
  "Automobile", "Building Materials",
];

const services = [
  { num: "01", icon: Code2, title: "IT Solutions", body: "Elite talent sourcing across IT and consulting ecosystems — high-impact roles in development, data, cloud, and cybersecurity, building future-ready teams that accelerate digital transformation." },
  { num: "02", icon: Briefcase, title: "Non-IT Solutions", body: "Specialized recruitment across FMCG, Aviation, Oil & Gas, Manufacturing, BFSI, and more — ensuring talent fits both the role and culture for long-term organizational success." },
  { num: "03", icon: Users, title: "Contractual Hiring", body: "Flexible, project-ready professionals tailored to your business needs — delivering speed, quality, and adaptability, scaling your workforce precisely when and how you need it." },
];

const approach = [
  { num: "01", title: "One-on-One Evaluation", body: "Every candidate undergoes rigorous personal assessment — beyond the CV to understand potential, character, and true fit." },
  { num: "02", title: "Culture-Fit Hiring", body: "We match talent to values, culture, and long-term vision — not just the job description." },
  { num: "03", title: "Quality Over Quantity", body: "Every submission is a deliberate, high-quality recommendation backed by our team's judgment." },
  { num: "04", title: "Long-Term Value", body: "Our success is measured by lasting placement impact — not just the hire, but value created for years to come." },
];

const brand = [
  { label: "Values Alignment", title: "Hire for Vision", body: "We don't just hire for roles — we hire for vision. Every candidate is aligned with your brand's values, culture, and long-term strategic goals." },
  { label: "Strong Execution", title: "People & Precision", body: "Our strength lies in deep industry understanding and a team that delivers precision, quality, and consistency across every engagement." },
  { label: "Transparency", title: "Excellent Execution", body: "A transparent, collaborative hiring process — from sourcing to placement — ensuring seamless communication and trust at every step." },
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional(),
  need: z.string().min(1, "Select a category"),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const Index = () => {
  useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", company: "", need: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    toast.success("Enquiry sent. We'll be in touch shortly.");
    setForm({ name: "", email: "", company: "", need: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-deep text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[5vw] py-3.5 bg-deep/95 backdrop-blur-xl border-b border-primary/20">
        <a href="#" className="no-underline"><Logo /></a>
        <ul className="hidden md:flex gap-9 list-none">
          {["About", "Services", "Industries", "Approach", "Contact"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-text-muted text-[0.8rem] tracking-[0.1em] uppercase font-medium no-underline hover:text-primary transition-colors">{l}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="bg-primary text-primary-foreground px-6 py-2.5 text-[0.78rem] tracking-[0.1em] uppercase font-medium hover:bg-primary-light hover:-translate-y-0.5 transition-all rounded-sm no-underline">Connect With Us</a>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-[5vw] pt-36 pb-20 relative overflow-hidden bg-gradient-to-br from-deep to-brand-dark">
        <div className="absolute rounded-full opacity-[0.06] bg-primary w-[580px] h-[580px] -right-20 -top-20 pointer-events-none" />
        <div className="absolute rounded-full opacity-[0.04] bg-primary w-[280px] h-[280px] right-[250px] bottom-16 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--primary) / 0.045) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.045) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage: "radial-gradient(ellipse at 70% 50%, black 5%, transparent 65%)",
          }}
        />
        <div className="relative max-w-[740px]">
          <div className="inline-flex items-center gap-2.5 text-[0.7rem] tracking-[0.22em] uppercase text-primary font-medium mb-7">
            <span className="block w-9 h-0.5 bg-primary rounded-sm" />
            Global Recruitment & Staffing Consultancy
          </div>
          <h1 className="font-display font-bold leading-[1.1] mb-7 text-white" style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)" }}>
            You hire the best.<br />We <em className="text-primary not-italic" style={{ fontStyle: "italic" }}>find them</em><br />for you.
          </h1>
          <p className="text-[0.98rem] text-text-muted leading-[1.9] max-w-[540px] mb-11 font-light">
            Redefining how businesses connect with exceptional talent. Precision-driven hiring solutions that are fast, intelligent, and globally aligned — across IT and non-IT domains.
          </p>
          <div className="flex gap-5 flex-wrap items-center">
            <a href="#services" className="bg-primary text-primary-foreground px-9 py-3.5 text-[0.82rem] tracking-[0.1em] uppercase font-medium hover:bg-primary-light hover:-translate-y-0.5 transition-all rounded-sm no-underline">Explore Our Services</a>
            <a href="#about" className="bg-transparent text-text-muted border border-white/20 px-7 py-3.5 text-[0.82rem] hover:border-primary hover:text-primary transition-all rounded-sm no-underline inline-flex items-center gap-2">
              Our Story <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex absolute right-[5vw] top-1/2 -translate-y-1/2 flex-col gap-10">
          {[
            { num: "5", sup: "+", label: "Years of Expertise" },
            { num: "1,300", sup: "+", label: "Professionals Placed" },
            { num: "10", sup: "+", label: "Industries Served" },
          ].map((s) => (
            <div key={s.label} className="text-right pr-5 border-r-[3px] border-primary">
              <div className="font-display text-[2.6rem] font-bold text-white leading-none">
                {s.num}<sup className="text-primary text-[1.4rem]">{s.sup}</sup>
              </div>
              <div className="text-[0.66rem] tracking-[0.15em] uppercase text-text-dim mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-brand-blue overflow-hidden border-y border-white/5 py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...industries, ...industries].map((ind, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-8 text-[0.68rem] tracking-[0.2em] uppercase text-white/45 font-medium flex-shrink-0">
              <span className="text-primary">◆</span>{ind}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="px-[5vw] py-28 bg-dark">
        <div className="grid md:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
          <div className="bg-surface border border-primary/20 p-12 relative overflow-hidden rounded-sm fu">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <p className="font-display text-[1.1rem] italic text-white/85 leading-[1.75] mb-5">
              "We slash through the vines to forge new paths to success, each time creating a unique client experience."
            </p>
            <div className="text-[0.68rem] tracking-[0.18em] uppercase text-text-dim">— First Go Services Philosophy</div>
            <div className="flex justify-center mt-8">
              <Logo size="lg" />
            </div>
          </div>
          <div className="fu">
            <div className="sec-label">Who We Are</div>
            <h2 className="sec-title">A consultancy that <em>redefines</em> talent acquisition</h2>
            <p className="sec-body mb-5">
              We are a global recruitment and staffing consultancy with a strong presence across IT and non-IT domains. Backed by over 5 years of deep expertise and a proven track record of placing more than 1,300 high-quality professionals, we bring a refined approach where strategy meets execution.
            </p>
            <p className="sec-body">We don't just fill positions. We build teams that lead, innovate, and create lasting impact.</p>
            <div className="flex flex-wrap gap-2 mt-9">
              {["Strategy-Led Hiring", "Global Reach", "1,300+ Placements", "IT & Non-IT", "5+ Years Strong"].map((p) => (
                <span key={p} className="border border-primary/30 px-4 py-1.5 text-[0.74rem] text-text-muted tracking-[0.06em] rounded-sm bg-primary/5">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-[5vw] py-28 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-6 fu">
            <div>
              <div className="sec-label">What We Do</div>
              <h2 className="sec-title">Our <em>services</em></h2>
            </div>
            <p className="sec-body">From contractual staffing to permanent placement, every talent need — covered with precision.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.num} className="group bg-surface-2 p-10 border border-white/5 rounded-sm relative overflow-hidden hover:bg-surface-3 hover:-translate-y-1 transition-all fu">
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="text-[0.7rem] text-primary tracking-[0.12em] mb-6 opacity-75">{s.num} — {s.title}</div>
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 rounded-sm">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-[1.28rem] font-bold text-white mb-3 leading-snug">{s.title}</h3>
                <p className="text-[0.85rem] text-text-muted leading-[1.85] font-light">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="px-[5vw] py-28 bg-dark">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-20 items-start max-w-7xl mx-auto">
          <div className="fu">
            <div className="sec-label">Sectors We Serve</div>
            <h2 className="sec-title">Deep industry <em>knowledge</em></h2>
            <p className="sec-body">With in-depth market understanding built over years of engagement, we serve a diverse range of industries — bringing sector-specific insight to every search mandate.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-white/10 rounded-sm overflow-hidden fu">
            {industries.map((ind) => (
              <div key={ind} className="px-5 py-4 border-b border-r border-white/5 text-[0.82rem] text-text-muted flex items-center gap-2.5 bg-surface hover:bg-surface-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-65 flex-shrink-0" />
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-primary py-20 px-[5vw] text-center relative overflow-hidden">
        <span className="absolute -top-16 left-4 font-display text-[20rem] font-bold text-white/[0.08] leading-none pointer-events-none select-none">"</span>
        <p className="font-display text-white font-bold max-w-3xl mx-auto mb-5 leading-[1.35] relative" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          Recruitment is not a transaction — it's a partnership. Every client becomes part of our extended ecosystem.
        </p>
        <div className="text-[0.74rem] tracking-[0.2em] uppercase text-white/60 font-medium relative">— Our Philosophy</div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="px-[5vw] py-28 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="fu">
            <div className="sec-label">How We Work</div>
            <h2 className="sec-title">Our <em>approach</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {approach.map((a) => (
              <div key={a.num} className="p-9 bg-surface-2 rounded-sm border border-white/5 border-t-[3px] border-t-transparent hover:border-t-primary transition-colors fu">
                <div className="font-display text-[3.2rem] font-bold text-primary/10 leading-none mb-5">{a.num}</div>
                <h4 className="font-display text-[1.05rem] text-white mb-2.5">{a.title}</h4>
                <p className="text-[0.83rem] text-text-muted leading-[1.8] font-light">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="grid md:grid-cols-2 min-h-[460px]">
        <div className="bg-dark border-r border-white/5 px-[5vw] py-24 flex flex-col justify-center fu">
          <div className="sec-label">Our Vision</div>
          <h3 className="sec-title">Building ecosystems of <em>trust, precision & performance</em></h3>
          <p className="sec-body">Every client we work with becomes part of our extended ecosystem, where trust, precision, and performance define every engagement.</p>
        </div>
        <div className="bg-brand-blue px-[5vw] py-24 flex flex-col justify-center fu">
          <div className="sec-label">Our Mission</div>
          <h3 className="sec-title">Driving client success through <em>innovation</em></h3>
          <p className="sec-body">To drive client success by enhancing corporate value through innovative hiring solutions, people-first strategies, and consistent delivery of measurable results.</p>
        </div>
      </section>

      {/* BRAND */}
      <section className="px-[5vw] py-28 bg-surface-2">
        <div className="max-w-7xl mx-auto">
          <div className="fu">
            <div className="sec-label">Our Strengths</div>
            <h2 className="sec-title">Brand <em>alignment</em> at every step</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {brand.map((b) => (
              <div key={b.title} className="p-10 bg-surface border border-white/5 rounded-sm hover:border-primary/40 transition-colors fu">
                <div className="text-[0.65rem] tracking-[0.24em] uppercase text-primary mb-3">{b.label}</div>
                <h4 className="font-display text-[1.18rem] text-white mb-3.5">{b.title}</h4>
                <p className="text-[0.84rem] text-text-muted leading-[1.85] font-light">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-[5vw] py-28 bg-deep text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary" />
        <div className="max-w-2xl mx-auto pt-16 fu">
          <div className="sec-label justify-center"><span>Get in Touch</span></div>
          <h2 className="sec-title">Let's build your <em>team</em></h2>
          <p className="sec-body mx-auto">We are a global consultancy dedicated to transforming businesses through the power of exceptional talent.</p>


          <form onSubmit={onSubmit} className="mt-14 grid gap-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.68rem] tracking-[0.16em] uppercase text-text-dim">Your Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required className="bg-surface border border-white/10 text-foreground px-4 py-3 text-[0.88rem] outline-none focus:border-primary transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.68rem] tracking-[0.16em] uppercase text-text-dim">Email Address</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required placeholder="name@company.com" className="bg-surface border border-white/10 text-foreground px-4 py-3 text-[0.88rem] outline-none focus:border-primary transition-colors rounded-sm" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.68rem] tracking-[0.16em] uppercase text-text-dim">Company</label>
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={150} className="bg-surface border border-white/10 text-foreground px-4 py-3 text-[0.88rem] outline-none focus:border-primary transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.68rem] tracking-[0.16em] uppercase text-text-dim">Hiring Need</label>
                <select value={form.need} onChange={(e) => setForm({ ...form, need: e.target.value })} required className="bg-surface border border-white/10 text-foreground px-4 py-3 text-[0.88rem] outline-none focus:border-primary transition-colors rounded-sm appearance-none cursor-pointer">
                  <option value="">Select a category</option>
                  <option>IT / Technology Hiring</option>
                  <option>Non-IT / Domain Hiring</option>
                  <option>Contractual Staffing</option>
                  <option>Strategic Consulting</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.68rem] tracking-[0.16em] uppercase text-text-dim">Message</label>
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} required className="bg-surface border border-white/10 text-foreground px-4 py-3 text-[0.88rem] outline-none focus:border-primary transition-colors rounded-sm resize-none" />
            </div>
            <button type="submit" className="bg-primary text-primary-foreground px-9 py-4 text-[0.82rem] tracking-[0.1em] uppercase font-medium hover:bg-primary-light hover:-translate-y-0.5 transition-all rounded-sm mt-2 justify-self-start">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-dark border-t border-white/8 px-[5vw] py-9 flex justify-between items-center flex-wrap gap-4">
        <Logo size="sm" showTagline={false} />
        <ul className="flex gap-7 list-none">
          {["About", "Services", "Industries", "Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="text-[0.74rem] text-white/40 no-underline tracking-[0.08em] hover:text-primary transition-colors">{l}</a></li>
          ))}
        </ul>
        <div className="text-[0.74rem] text-white/30 tracking-[0.06em]">© 2025 First Go Services. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Index;
