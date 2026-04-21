import { createFileRoute } from "@tanstack/react-router";
import {
  Bot,
  BarChart3,
  Users,
  Cloud,
  ShieldCheck,
  Headphones,
  Check,
  Star,
  Play,
  ArrowRight,
  Send,
  Code2,
  Globe,
  Sparkles,
  UserPlus,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollToTop } from "@/components/landing/ScrollToTop";
import { Reveal, Counter } from "@/components/landing/Reveal";
import heroImg from "@/assets/hero-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Bot, title: "AI Task Automation", desc: "Automate repetitive workflows with intelligent agents that learn how you work." },
  { icon: BarChart3, title: "Smart Analytics", desc: "Real-time dashboards and predictive insights to drive better decisions." },
  { icon: Users, title: "Team Collaboration", desc: "Shared workspaces, comments and live cursors for seamless teamwork." },
  { icon: Cloud, title: "Cloud Sync", desc: "Your data, available anywhere — synced instantly across all devices." },
  { icon: ShieldCheck, title: "Secure Data", desc: "End-to-end encryption and SOC 2 compliance keep your work protected." },
  { icon: Headphones, title: "24/7 Support", desc: "A real human expert is one click away, any hour of the day." },
];

const steps = [
  { icon: UserPlus, title: "Sign Up", desc: "Create your free account in under 30 seconds — no credit card required." },
  { icon: Workflow, title: "Connect Your Workflow", desc: "Plug into 100+ apps including Slack, Notion, GitHub and Google Workspace." },
  { icon: Zap, title: "Let AI Handle Tasks", desc: "Sit back as NovaAI automates your busywork and surfaces what matters." },
];

const plans = [
  { name: "Starter", price: "Free", period: "forever", features: ["Up to 3 projects", "Basic AI automation", "Community support"], cta: "Start Free", featured: false },
  { name: "Pro", price: "$19", period: "/month", features: ["Unlimited projects", "Advanced AI workflows", "Priority email support", "Team collaboration (5 seats)"], cta: "Start Free Trial", featured: true },
  { name: "Business", price: "$49", period: "/month", features: ["Everything in Pro", "Unlimited seats", "SSO & advanced security", "Dedicated success manager"], cta: "Contact Sales", featured: false },
];

const testimonials = [
  { name: "Sarah Chen", role: "Head of Ops, Lumen", quote: "NovaAI doubled our team productivity. What used to take hours now happens in minutes." },
  { name: "Marcus Patel", role: "Engineering Lead, Drift", quote: "The automation engine is unreal. We replaced four internal tools with NovaAI in a week." },
  { name: "Elena Rossi", role: "Founder, Brightside", quote: "It feels like having three extra teammates. The ROI was immediate and obvious." },
];

const brands = ["Google", "Microsoft", "Amazon", "Netflix", "OpenAI"];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ScrollToTop />

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
          <div className="absolute top-20 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-glow/20 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>Introducing NovaAI 2.0</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              Work Smarter with{" "}
              <span className="text-gradient">AI Automation</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Boost productivity, automate workflows, and save time with our next-generation AI tools — built for students, developers and modern teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
                Start Free Trial <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" /> Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="bg-gradient-primary text-[10px] text-primary-foreground">
                      {String.fromCharCode(64 + i)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span>Loved by 50,000+ teams worldwide</span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative animate-float">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-primary opacity-30 blur-3xl" />
              <img
                src={heroImg}
                alt="NovaAI dashboard preview"
                width={1280}
                height={1024}
                className="rounded-3xl border border-border shadow-glow"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-y border-border bg-muted/30 py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by teams at
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {brands.map((b) => (
              <span key={b} className="text-xl font-semibold text-muted-foreground/70 transition-colors hover:text-foreground md:text-2xl">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Everything you need to <span className="text-gradient">ship faster</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A complete platform of AI-powered building blocks designed for modern teams.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-card transition-transform group-hover:scale-110">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">How it works</h2>
            <p className="mt-4 text-muted-foreground">Get up and running in three simple steps.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <Card className="relative h-full p-8">
                  <span className="absolute -top-4 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
                    {i + 1}
                  </span>
                  <s.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-muted-foreground">Start free. Upgrade when you're ready.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <Card
                  className={`relative h-full p-8 transition-all duration-300 hover:-translate-y-1 ${
                    p.featured
                      ? "border-transparent bg-gradient-primary text-primary-foreground shadow-glow scale-[1.02]"
                      : ""
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-semibold text-primary shadow-card">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{p.price}</span>
                    <span className={p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}>
                      {p.period}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-primary-foreground" : "text-primary"}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-8 w-full ${
                      p.featured
                        ? "bg-background text-primary hover:bg-background/90"
                        : "bg-gradient-primary text-primary-foreground hover:opacity-90"
                    }`}
                  >
                    {p.cta}
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-gradient-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Loved by modern teams</h2>
            <p className="mt-4 text-muted-foreground">Don't take our word for it — here's what they say.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <Card className="h-full p-6">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-8">
          {[
            { n: 50, suffix: "K+", label: "Active Users" },
            { n: 120, suffix: "+", label: "Countries" },
            { n: 99, suffix: "%", label: "Uptime" },
            { n: 1000000, suffix: "+", label: "Tasks Automated" },
          ].map((s) => (
            <Reveal key={s.label} className="text-center">
              <div className="text-4xl font-bold text-gradient md:text-5xl">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-4 pb-20 md:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero px-8 py-16 text-center text-primary-foreground shadow-glow md:px-16 md:py-20">
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <h2 className="relative text-3xl font-bold md:text-5xl">Ready to grow faster with AI?</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/90">
              Join 50,000+ teams already automating their work with NovaAI.
            </p>
            <Button size="lg" className="relative mt-8 bg-background text-primary hover:bg-background/90">
              Get Started Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-5xl">Get in touch</h2>
            <p className="mt-4 text-muted-foreground">
              Have questions about NovaAI? Our team would love to hear from you.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div><span className="font-semibold">Email: </span>hello@novaai.com</div>
              <div><span className="font-semibold">Support: </span>24/7 live chat</div>
              <div><span className="font-semibold">Office: </span>San Francisco · Berlin · Singapore</div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <Card className="p-6 md:p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! We'll be in touch soon.");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-sm font-medium" htmlFor="name">Name</label>
                  <input id="name" required className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="email">Email</label>
                  <input id="email" type="email" required className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="message">Message</label>
                  <textarea id="message" rows={4} required className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4 md:px-8">
          <div>
            <a href="#home" className="flex items-center gap-2 font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="text-gradient">NovaAI</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              AI-powered productivity for the modern team.
            </p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
            { title: "Resources", links: ["Docs", "Help Center", "Privacy", "Terms"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold">{col.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-foreground transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border px-4 pt-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} NovaAI Inc. All rights reserved.</span>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Send className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-foreground"><Code2 className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Globe className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
