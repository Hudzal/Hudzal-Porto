import { useEffect, useRef, useState } from 'react';
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
  Linkedin,
  Calendar,
  Layers,
  GitBranch,
  RefreshCw,
  Scale,
} from 'lucide-react';

const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Mentoring', href: '#mentoring' },
  { label: 'Contact', href: '#contact' },
];

const STATS = [
  { k: '4+', v: 'Years Experience', sub: 'NOC Specialist in ISP' },
  { k: '8', v: 'Vendor Platforms', sub: 'Multi-vendor hardware' },
  { k: 'NOC', v: 'Mentoring', sub: 'Guiding next-gen engineers' },
  { k: 'Solid', v: 'Fundamentals', sub: 'Strong networking core' },
];

const EXPERTISE = [
  {
    icon: Activity,
    title: 'Network Operations & Troubleshooting',
    desc: 'First-line NOC for an ISP — handling client complaints end to end: VPN between sites, web access, slow connections, email issues, and routing between sites, up to the end-device level.',
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

const VENDORS = [
  { name: 'MikroTik', role: 'Main CPE Specialist', level: 'Expert' },
  { name: 'Cisco', role: 'Routing & Switching', level: 'Proficient' },
  { name: 'Ruijie', role: 'Enterprise Access', level: 'Proficient' },
  { name: 'UniFi', role: 'Wireless & Edge', level: 'Proficient' },
  { name: 'Huawei', role: 'Carrier-grade', level: 'Proficient' },
  { name: 'Grandstream (GWN)', role: 'Wireless & VoIP', level: 'Proficient' },
  { name: 'SonicWall', role: 'Security & Firewall', level: 'Familiar' },
  { name: 'Fortigate', role: 'Next-Gen Firewall', level: 'Basic / Familiar' },
];

const NOC_DEPLOYMENTS = [
  {
    icon: Layers,
    title: 'VLAN Deployment & Realignment',
    desc: 'Pelurusan VLAN dan segmentasi jaringan untuk isolasi traffic, keamanan, dan performa optimal.',
  },
  {
    icon: GitBranch,
    title: 'Advanced Routing & Failover',
    desc: 'Konfigurasi routing lanjutan dan manajemen failover untuk memastikan konektivitas tanpa downtime.',
  },
  {
    icon: Lock,
    title: 'Site-to-Site Tunneling & VPN',
    desc: 'IPsec, L2TP, GRE, dan EoIP untuk menghubungkan site secara aman melalui jaringan publik.',
  },
  {
    icon: Scale,
    title: 'Load Balancing & Redundancy',
    desc: 'Sistem load balancing dan redundancy untuk distribusi link ISP yang efisien dan reliabel.',
  },
];

const MENTORING = [
  {
    title: 'NOC Fundamental & Infrastructure Training',
    date: 'May 30, 2026',
    desc: 'Sesi training fundamental NOC dan infrastruktur jaringan untuk calon engineer.',
    imgComment: 'Taruh Direct Link Foto Slide Presentasi Training Disini',
  },
  {
    title: 'Advanced Custom 1-on-1 NOC Mentorship',
    date: 'April 14, 2026',
    desc: 'Mentorship privat 1-on-1 yang dipersonalisasi untuk pendalaman skill NOC tingkat lanjut.',
    imgComment: 'Taruh Direct Link Foto Sesi Mentorship Disini',
  },
  {
    title: 'Customer Support Operations & Network Escalation Training',
    date: 'April 24, 2026',
    desc: 'Training operasi customer support dan eskalasi jaringan untuk penanganan tiket efektif.',
    imgComment: 'Taruh Direct Link Foto Training Eskalasi Disini',
  },
];

const PROJECTS = [
  {
    title: 'High-Availability Network Deployment (VRRP, PPPoE & DHCP)',
    date: 'July 08, 2026',
    desc: 'Successfully deployed and configured VRRP (Virtual Router Redundancy Protocol) for Hotspot network environment to ensure seamless automatic failover between Master and Backup routers. Combined with PPPoE Server, DHCP Setup, and implemented Load Balancing via PBR (Policy Based Routing) to optimize ISP link distribution.',
    tags: ['VRRP', 'PPPoE', 'DHCP', 'PBR', 'Load Balancing', 'Failover'],
    imgComment: 'Taruh Direct Link Screenshot Winbox VRRP Disini',
  },
];

const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hudzal-ruquelme-f-574a37214/', handle: 'Hudzal Ruquelme F' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/6289654411835', handle: '+62 896-5441-1835' },
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
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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

        <VendorBelt />
      </div>
    </section>
  );
}

function VendorBelt() {
  return (
    <div className="reveal mt-14">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
            Multi-Vendor Hardware
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
            Network vendors I work with.
          </h3>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {VENDORS.map((v) => (
          <div
            key={v.name}
            className="group relative overflow-hidden rounded-2xl border border-ink-200/70 bg-ink-50/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/60 hover:shadow-lg hover:shadow-accent-500/5 dark:border-ink-800 dark:bg-ink-900/60"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-900 font-display text-sm font-bold text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-ink-950 dark:bg-ink-100 dark:text-ink-950">
                {v.name.charAt(0)}
              </span>
              <span className="rounded-full bg-accent-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                {v.level}
              </span>
            </div>
            <h4 className="mt-3 font-display text-base font-semibold tracking-tight">
              {v.name}
            </h4>
            <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{v.role}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 rounded-2xl border border-ink-200/70 bg-ink-100/40 px-5 py-4 text-sm text-ink-600 dark:border-ink-800 dark:bg-ink-900/40 dark:text-ink-300">
        Capable of adapting swiftly to any network vendor hardware based on strong
        network fundamentals.
      </p>
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
            now stepping into security.
          </p>
        </div>

        {/* NOC Specialist — 2-column layout */}
        <div className="reveal mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="rounded-full bg-accent-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                  Work
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  NOC Specialist
                </h3>
                <p className="text-sm text-ink-500 dark:text-ink-400">
                  Internet Service Provider
                </p>
              </div>
              <span className="font-mono text-xs text-ink-500 dark:text-ink-400">
                2021 — Present
              </span>
            </div>

            <p className="mt-5 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              Handling end-to-end ISP infrastructure operations, network deployment,
              and complex troubleshooting up to the end-device level.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {NOC_DEPLOYMENTS.map((d) => (
                <div
                  key={d.title}
                  className="group rounded-2xl border border-ink-200/70 bg-ink-50/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/60 dark:border-ink-800 dark:bg-ink-900/40"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink-900 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-ink-950 dark:bg-ink-100 dark:text-ink-950">
                    <d.icon className="h-4 w-4" />
                  </div>
                  <h4 className="mt-3 font-display text-sm font-semibold tracking-tight">
                    {d.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-ink-100/40 dark:border-ink-800 dark:bg-ink-900/40">
              {/* Taruh Direct Link Foto Lab/Kantor Maxindo Disini */}
              <img
                src="https://images.pexels.com/photos/4421502/pexels-photo-4421502.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="NOC Lab / Maxindo office"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 via-ink-950/30 to-transparent p-5">
                <p className="text-sm font-semibold text-ink-50">NOC Operations Floor</p>
                <p className="text-xs text-ink-200">ISP infrastructure & deployment lab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            Production Projects
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Real deployments in the field.
          </h2>
          <p className="mt-4 max-w-xl text-ink-500 dark:text-ink-400">
            Highlighted production projects — engineered, deployed, and validated in
            live ISP environments.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-ink-50/60 p-7 transition-all duration-500 hover:border-accent-400/60 hover:shadow-2xl hover:shadow-accent-500/5 sm:p-9 dark:border-ink-800 dark:bg-ink-900/40"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-ink-500 dark:text-ink-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="font-mono">{p.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-ink-600 dark:text-ink-300">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-ink-200/50 px-2.5 py-1 font-mono text-xs font-medium text-ink-600 dark:bg-ink-800/60 dark:text-ink-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="group/img relative overflow-hidden rounded-2xl border border-ink-200/70 bg-ink-100/40 dark:border-ink-800 dark:bg-ink-900/40">
                    {/* Taruh Direct Link Screenshot Winbox VRRP Disini */}
                    <img
                      src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=900"
                      alt="Winbox VRRP Screenshot"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 via-ink-950/30 to-transparent p-4">
                      <p className="text-sm font-semibold text-ink-50">
                        Winbox — VRRP Configuration
                      </p>
                      <p className="text-xs text-ink-200">Master / Backup failover</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mentoring() {
  return (
    <section id="mentoring" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            Mentoring & Journey
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Teaching the next generation of network engineers.
          </h2>
          <p className="mt-4 max-w-xl text-ink-500 dark:text-ink-400">
            Hands-on training sessions and mentorship programs — sharing the NOC
            mindset with students and community groups.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENTORING.map((m) => (
            <article
              key={m.title}
              className="reveal group overflow-hidden rounded-3xl border border-ink-200/70 bg-ink-50/60 transition-all duration-500 hover:-translate-y-1 hover:border-accent-400/60 hover:shadow-2xl hover:shadow-accent-500/5 dark:border-ink-800 dark:bg-ink-900/40"
            >
              <div className="relative overflow-hidden">
                {/* {m.imgComment} */}
                <img
                  src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt={m.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 rounded-full bg-ink-950/80 px-3 py-1 text-[11px] font-semibold text-ink-50 backdrop-blur">
                  <span className="font-mono">{m.date}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Self-Driven Learning sub-section */}
        <div className="reveal mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-ink-200/70 bg-gradient-to-br from-accent-400/10 to-electric-500/10 p-7 sm:p-9 dark:border-ink-800">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent-400/15 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                  <Shield className="h-3.5 w-3.5" />
                  Growth
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                  Self-Driven Learning: Security & Hardening Focus
                </h3>
                <p className="mt-3 font-mono text-xs text-ink-500 dark:text-ink-400">
                  2024 — Present
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-ink-600 dark:text-ink-300">
                  Expanding into network security — firewall setup, VPN architecture,
                  and infrastructure hardening as a next career step. Bridging NOC
                  operations with a security mindset to secure networks before they
                  break, not after.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    'Studying firewall & VPN configurations',
                    'Practicing network hardening in lab environments',
                    'Bridging NOC operations with security mindset',
                  ].map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
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
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
              <form
                ref={formRef}
                onSubmit={onSubmit}
                method="POST"
                action="https://formspree.io"
                className="space-y-5"
              >
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-400 transition-colors duration-300 hover:text-accent-600 dark:hover:text-accent-400"
            >
              <s.icon className="h-4 w-4" />
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
        <Projects />
        <Mentoring />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
