import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  MapPin,
  Send,
  Check,
  Activity,
  Server,
  Shield,
  GraduationCap,
  Network as NetworkIcon,
  Router,
  Lock,
  Cpu,
  Gauge,
  Wifi,
  CircleDot,
  MessageCircle,
  Instagram,
  User,
} from 'lucide-react';

const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const STATS = [
  { k: '4+', v: 'Years Experience', sub: 'NOC Specialist in ISP' },
  { k: 'ISP', v: 'Network Scale', sub: 'Production infrastructure' },
  { k: 'NOC', v: 'Mentoring', sub: 'Guiding next-gen engineers' },
  { k: 'Solid', v: 'Fundamentals', sub: 'Strong networking core' },
];

const EXPERTISE = [
  {
    icon: Activity,
    title: 'Network Operations & Troubleshooting',
    desc: 'First-line NOC for an ISP — handling client complaints end to end: VPN between sites, web access, slow connections, email issues, and routing between sites.',
    tags: ['NOC', 'Troubleshooting', 'VPN', 'Client Support', 'ISP Infrastructure'],
  },
  {
    icon: Server,
    title: 'Systems & Virtualization',
    desc: 'Building and testing network topologies in virtual labs before they ever touch production. Reproducible, safe, and fast.',
    tags: ['GNS3', 'VMware', 'Virtualization', 'Lab Design'],
  },
  {
    icon: Shield,
    title: 'Security & Network Hardening',
    desc: 'Currently leveling up — network security, firewall configuration, and secure VPN setups to harden infrastructure end to end.',
    tags: ['Network Security', 'Firewall', 'VPN', 'Hardening'],
  },
  {
    icon: GraduationCap,
    title: 'Technical Education',
    desc: 'Teaching networking and infrastructure to students and community groups — turning complex protocols into clear, hands-on lessons.',
    tags: ['Instructor', 'Curriculum', 'Workshops', 'Community'],
  },
];

const TIMELINE = [
  {
    period: '2021 — Present',
    role: 'NOC Specialist',
    org: 'Internet Service Provider',
    type: 'Work',
    desc: 'First-line NOC handling client complaints and keeping the ISP network healthy — from VPN and web access issues to email and routing between sites.',
    points: [
      'Triage client complaints: VPN between sites, web access, slow connections',
      'Troubleshoot email issues and routing between sites',
      'Monitor network health and escalate when needed',
    ],
  },
  {
    period: '2022 — Present',
    role: 'NOC Mentor & Educator',
    org: 'Community & Training',
    type: 'Teaching',
    desc: 'Helping the next generation of NOC engineers get up to speed — sharing the fundamentals, troubleshooting mindset, and hands-on lab work.',
    points: [
      'Mentor junior NOC engineers on real-world troubleshooting',
      'Run hands-on GNS3 lab sessions for fundamentals',
      'Guide students through networking core concepts',
    ],
  },
  {
    period: '2024 — Present',
    role: 'Security & Hardening Focus',
    org: 'Self-Driven Learning',
    type: 'Growth',
    desc: 'Expanding into network security — firewall setup, VPN architecture, and infrastructure hardening as a next career step.',
    points: [
      'Studying firewall & VPN configurations',
      'Practicing network hardening in lab environments',
      'Bridging NOC operations with security mindset',
    ],
  },
];

const SOCIALS = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/6289654411835', handle: '+62 896-5441-1835' },
  { icon: Instagram, label: 'Instagram', href: '#', handle: 'Hudzal' },
  { icon: User, label: 'LinkedIn', href: '#', handle: 'Hudzal Ruquelme F' },
  { icon: Mail, label: 'Email', href: 'mailto:22hudzalrf@gmail.com', handle: '22hudzalrf@gmail.com' },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('hudzal-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    localStorage.setItem('hudzal-theme', dark ? 'dark' : 'light');
  }, [dark]);
  return [dark, setDark] as const;
}

function Navbar({ dark, onToggleDark }: { dark: boolean; onToggleDark: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-ink-50/70 dark:bg-ink-950/70 border-b border-ink-200/60 dark:border-ink-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink-900 text-accent-400 transition-transform duration-300 group-hover:scale-105 dark:bg-ink-100 dark:text-ink-950">
            <NetworkIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Hudzal</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors duration-300 hover:bg-ink-200/60 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800/60 dark:hover:text-ink-50"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleDark}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-200/70 text-ink-600 transition-all duration-300 hover:border-accent-400 hover:text-accent-500 dark:border-ink-800 dark:text-ink-300"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-ink-900 px-5 py-2 text-sm font-medium text-ink-50 transition-all duration-300 hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/20 sm:inline-flex dark:bg-ink-100 dark:text-ink-950 dark:hover:bg-accent-400 dark:hover:text-ink-950"
          >
            Let's talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-200/70 text-ink-700 md:hidden dark:border-ink-800 dark:text-ink-200"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden md:hidden transition-all duration-500 ${
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-ink-200/60 bg-ink-50/95 p-2 backdrop-blur-xl dark:border-ink-800/60 dark:bg-ink-950/95">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-200/60 dark:text-ink-200 dark:hover:bg-ink-800/60"
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl animate-blob dark:bg-accent-500/10" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-electric-500/15 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute inset-0 grain opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-ink-200/70 bg-ink-50/60 px-4 py-1.5 text-xs font-medium text-ink-600 backdrop-blur dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
          </span>
          Online — available for network & security projects
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Hudzal —{' '}
          <span className="bg-gradient-to-r from-accent-500 via-accent-400 to-electric-400 bg-clip-text text-transparent">
            Network Specialist
          </span>{' '}
          & Network enthusiast.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 text-balance dark:text-ink-300">
          <span className="font-mono text-base text-accent-600 dark:text-accent-400">
            4+ Years Experience as NOC Specialist in ISP
          </span>
          <span className="mx-2 text-ink-300 dark:text-ink-600">|</span>
          Educator & Network Instructor.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-500 dark:text-ink-400">
          I keep ISP infrastructure running, teach the next generation of network
          engineers, and I'm actively expanding into network security & hardening.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#expertise"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-ink-50 shadow-lg shadow-ink-900/10 transition-all duration-300 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/25 hover:-translate-y-0.5 dark:bg-ink-100 dark:text-ink-950 dark:hover:bg-accent-400"
          >
            Explore expertise
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-300/70 px-7 py-3.5 text-sm font-semibold text-ink-700 transition-all duration-300 hover:border-ink-900 hover:bg-ink-100 dark:border-ink-700 dark:text-ink-200 dark:hover:border-ink-500 dark:hover:bg-ink-900"
          >
            Get in touch
          </a>
        </div>
      </div>

      <Stats />
    </section>
  );
}

function Stats() {
  return (
    <div className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
      <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-200/70 bg-ink-200/40 sm:grid-cols-4 dark:border-ink-800 dark:bg-ink-800/40">
        {STATS.map((s) => (
          <div
            key={s.v}
            className="group bg-ink-50/80 p-6 transition-colors duration-500 hover:bg-ink-100/60 dark:bg-ink-950/80 dark:hover:bg-ink-900/60"
          >
            <div className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
              {s.k}
            </div>
            <div className="mt-1.5 text-sm font-semibold text-ink-700 dark:text-ink-200">
              {s.v}
            </div>
            <div className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="reveal text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              About
            </p>
            <h2 className="reveal mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              NOC engineer who mentors, and is stepping into security.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="reveal space-y-5 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              <p>
                I'm Hudzal — a Network Specialist with 4+ years working in a Network
                Operations Center for an Internet Service Provider. My day-to-day is
                handling client complaints end to end: VPN between sites, web access
                issues, slow connections, email problems, and routing between sites —
                the real work that keeps users online.
              </p>
              <p>
                Beyond the NOC, I mentor. I help the next generation of NOC engineers
                get up to speed — sharing fundamentals, a troubleshooting mindset, and
                hands-on lab work, because the best way to learn networking is to
                actually do it.
              </p>
              <p>
                Right now I'm leveling up into network security — firewalls, VPNs, and
                infrastructure hardening — building on a NOC mindset to secure networks
                before they break, not after.
              </p>
            </div>
            <div className="reveal mt-8 flex flex-wrap gap-2.5">
              {['Troubleshooting', 'VPN', 'Routing/Switching', 'GNS3', 'VMware', 'NOC', 'Firewall', 'Email', 'Mentoring'].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink-200/70 bg-ink-100/60 px-3.5 py-1.5 font-mono text-xs font-medium text-ink-600 transition-colors duration-300 hover:border-accent-400 hover:text-accent-600 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              Core Expertise
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What I do, and where I'm heading.
            </h2>
          </div>
          <p className="max-w-sm text-ink-500 dark:text-ink-400">
            From handling ISP operations to mentoring the next wave of NOC engineers —
            with security as the next frontier.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {EXPERTISE.map((s) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-ink-50/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent-400/60 hover:shadow-2xl hover:shadow-accent-500/5 dark:border-ink-800 dark:bg-ink-900/40"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-400/10 blur-2xl transition-opacity duration-500 group-hover:bg-accent-400/20" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-accent-400 transition-all duration-500 group-hover:bg-accent-500 group-hover:text-ink-950 dark:bg-ink-100 dark:text-ink-950">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-ink-600 dark:text-ink-400">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-ink-200/50 px-2.5 py-1 font-mono text-xs font-medium text-ink-600 dark:bg-ink-800/60 dark:text-ink-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <Toolbelt />
      </div>
    </section>
  );
}

function Toolbelt() {
  const tools = [
    { icon: Activity, label: 'NOC Monitoring' },
    { icon: Wifi, label: 'VPN' },
    { icon: Router, label: 'Routing' },
    { icon: Cpu, label: 'GNS3' },
    { icon: Server, label: 'VMware' },
    { icon: Lock, label: 'Firewall' },
    { icon: Gauge, label: 'Troubleshooting' },
    { icon: Shield, label: 'Hardening' },
  ];
  return (
    <div className="reveal mt-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
        Toolbelt
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {tools.map((t) => (
          <div
            key={t.label}
            className="inline-flex items-center gap-2 rounded-2xl border border-ink-200/70 bg-ink-50/60 px-4 py-2.5 text-sm font-medium text-ink-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/60 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-200"
          >
            <t.icon className="h-4 w-4 text-accent-500" />
            {t.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            Experience & Journey
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The path so far.
          </h2>
          <p className="mt-4 max-w-xl text-ink-500 dark:text-ink-400">
            Four years in the NOC handling client issues, mentoring along the way, and
            now stepping into security. Here's the timeline.
          </p>
        </div>

        <div className="relative mt-14 pl-8 sm:pl-10">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/60 via-ink-300/50 to-transparent sm:left-4 dark:via-ink-700/60" />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="reveal relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Node */}
                <span className="absolute -left-[1.55rem] top-1.5 grid h-6 w-6 place-items-center rounded-full border border-accent-400/50 bg-ink-50 dark:bg-ink-950 sm:-left-[1.8rem]">
                  <CircleDot className="h-3.5 w-3.5 text-accent-500" />
                </span>

                <div className="group rounded-3xl border border-ink-200/70 bg-ink-50/60 p-6 transition-all duration-500 hover:border-accent-400/50 hover:shadow-xl hover:shadow-accent-500/5 sm:p-7 dark:border-ink-800 dark:bg-ink-900/40">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-sm text-ink-500 dark:text-ink-400">{item.org}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-accent-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                        {item.type}
                      </span>
                      <span className="font-mono text-xs text-ink-500 dark:text-ink-400">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-ink-600 dark:text-ink-300">{item.desc}</p>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    formRef.current?.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-ink-200/70 bg-ink-100/40 p-8 sm:p-12 lg:p-16 dark:border-ink-800 dark:bg-ink-900/40">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-electric-500/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
                Contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Let's connect on network, security, or education.
              </h2>
              <p className="mt-5 text-ink-600 dark:text-ink-300">
                Whether it's a network project, a security review, a teaching
                collaboration, or just a networking question — I'm happy to talk.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:22hudzalrf@gmail.com"
                  className="group flex items-center gap-3 text-ink-700 dark:text-ink-200"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-ink-200/70 transition-colors group-hover:border-accent-400 group-hover:text-accent-600 dark:border-ink-800">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">22hudzalrf@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-ink-700 dark:text-ink-200">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-ink-200/70 dark:border-ink-800">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">Indonesia — remote worldwide</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                  Find me online
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="group flex items-center gap-3 rounded-2xl border border-ink-200/70 bg-ink-50/60 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/60 dark:border-ink-800 dark:bg-ink-900/60"
                    >
                      <s.icon className="h-4 w-4 text-ink-500 transition-colors group-hover:text-accent-600 dark:text-ink-400 dark:group-hover:text-accent-400" />
                      <span className="text-sm">
                        <span className="block font-medium">{s.label}</span>
                        <span className="block text-xs text-ink-400">{s.handle}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                </div>
                <Field label="Subject" name="subject" placeholder="Network project, security review, teaching…" />
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your network, your goals, or what you'd like to discuss…"
                    className="w-full resize-none rounded-2xl border border-ink-200/70 bg-ink-50/60 px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-400 transition-all duration-300 focus:border-accent-400 focus:outline-none focus:ring-4 focus:ring-accent-400/10 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-100 dark:placeholder:text-ink-500"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink-900 px-7 py-4 text-sm font-semibold text-ink-50 shadow-lg transition-all duration-300 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/25 hover:-translate-y-0.5 disabled:opacity-70 dark:bg-ink-100 dark:text-ink-950 dark:hover:bg-accent-400 sm:w-auto"
                  disabled={sent}
                >
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" />
                      Message sent — thank you!
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
                <p className="text-xs text-ink-400">
                  This demo form confirms locally — connect it to your inbox or a backend
                  to start receiving messages.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-200">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-ink-200/70 bg-ink-50/60 px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-400 transition-all duration-300 focus:border-accent-400 focus:outline-none focus:ring-4 focus:ring-accent-400/10 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-100 dark:placeholder:text-ink-500"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-200/60 py-10 dark:border-ink-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink-900 text-accent-400 dark:bg-ink-100 dark:text-ink-950">
            <NetworkIcon className="h-4 w-4" />
          </span>
          <span className="text-sm text-ink-500 dark:text-ink-400">
            © {new Date().getFullYear()} Hudzal Ruquelme F. Network Specialist & Educator.
          </span>
        </div>
        <div className="flex items-center gap-5">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-ink-400 transition-colors duration-300 hover:text-accent-600 dark:hover:text-accent-400"
            >
              <s.icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [dark, setDark] = useDarkMode();
  useReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar dark={dark} onToggleDark={() => setDark((v) => !v)} />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
