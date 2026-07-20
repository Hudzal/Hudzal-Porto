export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialId?: string;
  tags: string[];
};

export const CERTIFICATES: Certificate[] = [
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    date: 'Februari — 2026',
    description:
      'Konfigurasi, pengamanan, dan troubleshooting jaringan enterprise skala kecil-menengah meliputi arsitektur VLAN, protokol redundansi (STP/EtherChannel), keamanan LAN, dan infrastruktur WLAN.',
    image:
      'https://i.ibb.co.com/GQtCgBKJ/ccna-swre.png',
    credentialId: 'd58deb4e-9d38-46ed-a221-18d7ec620c92',
    tags: ['Cisco', 'Routing', 'Access security', 'First-Hop Redudancy', 'Switching Protocols', 'Wireless Lan Controller', 'Vlan'],
  },
  {
    title: 'MTCNA — MikroTik Training Certified Network Associate',
    issuer: 'MikroTik',
    date: 'Januari — 2025',
    description:
      'Fundamental MikroTik RouterOS: konfigurasi dasar, routing, firewall, NAT, bandwidth management, dan manajemen jaringan skala kecil-menengah.',
    image:
      'https://i.ibb.co.com/tM7mxCSV/mtcna.png',
    credentialId: 'MTCNA-2026-08 - 2601NA3772',
    tags: ['RouterOS', 'Routing', 'Firewall', 'Bandwidth'],
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    date: 'November — 2025',
    description:
      'Pemahaman dasar arsitektur jaringan, pemetaan model OSI, skema pengalamatan IPv4/IPv6, serta konfigurasi dasar switch, router, dan keamanan pada jaringan skala kecil.r.',
    image:
      'https://i.ibb.co.com/qH7VdmZ/ccna-itn.png',
    credentialId: '79c2b2fa-961d-4e90-a0e3-c4573a56e5a9',
    tags: ['Cisco IOS', 'OSI Model', 'IPV4', 'IPV6', 'Switching', 'Routing', 'Network Security'],
  },
  {
    title: 'CCNA: Networking Devices and Initial Configuration',
    issuer: 'Cisco',
    date: 'Augustus — 2025',
    description:
      'Pemahaman dasar arsitektur jaringan, pemetaan model OSI, skema pengalamatan IPv4/IPv6, serta konfigurasi dasar switch, router, dan keamanan pada jaringan skala kecil.',
    image:
      'https://i.ibb.co.com/fz6H51YS/ccna-networking-device-initial-config.png',
    credentialId: 'ff456f0d-f587-446a-a2d0-d1f04ed90ee5',
    tags: ['Cisco IOS', 'OSI Model', 'ARP', 'DHCP', 'DNS', 'Ethernet Operates', 'IPv4 Subnetting', 'Virtualization and Cloud Services'],
  },
  {
    title: 'Tp-link : Omada Certified Network Administrator (OCNA) Wireless',
    issuer: 'Tp-link',
    date: 'Juli — 2025',
    description:
      'Implementasi dan manajemen jaringan nirkabel berbasis cloud Omada, meliputi perancangan jaringan Wi-Fi enterprise, optimalisasi sinyal, manajemen AP, serta konfigurasi portal autentikasi.',
    image:
      'https://i.ibb.co.com/TDVbtZf0/Tplink-OMADA.png',
    credentialId: '07043CF561B7441E',
    tags: ['TP-Link Omada', 'Wireless LAN', 'Cloud Management', 'Access Point', 'Wi-Fi Optimization', 'Network Admin'],
  },
  {
    title: 'Network Security Fundamentals',
    issuer: 'Self-Driven / Lab Practice',
    date: '2025 — Present',
    description:
      'Pendalaman firewall configuration, VPN architecture (IPsec, L2TP, EoIP), dan infrastructure hardening sebagai langkah karir berikutnya.',
    image:
      'https://i.ibb.co.com/placeholders/security-cert.jpg',
    tags: ['Firewall', 'VPN', 'IPsec', 'Hardening'],
  },
  {
    title: 'CCNA: Networking Basics',
    issuer: 'Cisco',
    date: 'May — 2023',
    description:
      'Pemahaman fundamental mengenai konsep dasar jaringan, cara kerja internet, pengenalan perangkat keras jaringan, serta dasar-dasar konektivitas IP untuk pemula.',
    image:
      'https://i.ibb.co.com/s9wH5s6D/ccna-networking.png',
    credentialId: '35005539-d016-4f62-9b6b-b9cf4f454900',
    tags: ['Networking Fundamentals', 'Cisco', 'IP Connectivity', 'Network Devices', 'Internet Basics'],
  },
  {
    title: 'Teknik Ethical Hacking dan mengatasi Peretesan IT menggunakan Ilmu Ethical Hacking',
    issuer: 'Course-Net',
    date: 'April — 2023',
    description:
      'Pelatihan berbasis SKKNI bidang SOC yang mencakup deteksi kerentanan aset TI, analisis ancaman (Threat Intelligence), serta manajemen krisis dan prosedur penanganan insiden keamanan siber.',
    image:
      'https://i.ibb.co.com/Vn9mNtY/Sertifikat-Penyelesaian-Technical-Hacking.png',
    credentialId: '2304/PK-00128',
    tags: ['Networking Fundamentals', 'Incident Response', 'Threat Intelligence', 'Cyber Security', 'Vulnerability Assessment'],
  },
  {
    title: 'Manajemen INfrastruktur dan Teknologi Informasi',
    issuer: 'Universitas Indonesia - Massive Open Online Course (MOOC)',
    date: 'Maret — 2023',
    description:
      'Pembelajaran tingkat universitas mengenai pengelolaan software dan hardware modern, perancangan arsitektur serta pola infrastruktur TI organisasi berbasis framework dan implementasi perangkat lunak.',
    image:
      'https://i.ibb.co.com/6078rm92/UI-MMMOI.png',
    credentialId: 'SERT-774/UN2.CIL/PDP.01.03/2023',
    tags: ['IT Infrastructure', 'IT Management', 'Infrastructure Design', 'Universitas Indonesia', 'Enterprise IT'],
  },
  {
    title: 'Junior Network Administrator',
    issuer: 'Vocational School Graduate Academy',
    date: 'Maret — 2023',
    description:
      'Pelatihan intensif mengenai pengalamatan jaringan, konfigurasi perangkat switch, jaringan nirkabel, serta implementasi perutean statis maupun dinamis baik di dalam maupun antar Autonomous System (AS).',
    image:
      'https://i.ibb.co.com/2Yf3VWHW/Digitalent-VSGA.png',
    credentialId: 'SERT-774/UN2.CIL/PDP.01.03/2023',
    tags: ['Network Administration', 'Routing & Switching', 'IP Addressing', 'Wireless Network', 'Kominfo Digitalent'],
  },
  {
    title: 'IT Support Google',
    issuer: 'Google - Coursera',
    date: 'Januari — 2023',
    description:
      'Program profesional 5 modul yang memvalidasi kemampuan troubleshooting sistem, manajemen infrastruktur TI, administrasi jaringan dan sistem operasi (Linux/Windows), serta implementasi keamanan siber dasar.',
    image:
      'https://i.ibb.co.com/1J4wHrN7/Google-IT-support.png',
    credentialId: 'dd15c89c-9cfb-46bf-ac6e-f0bb7577ea4a',
    tags: ['IT Support', 'Network & System Administration', 'Operating Systems', 'Technical Troubleshooting', 'Google'],
  },
  {
    title: 'A Guide To Cyber Security For Beginners',
    issuer: 'Niagahoster',
    date: 'September — 2022',
    description:
      'Pembelajaran mengenai konsep dasar keamanan siber, proteksi infrastruktur digital, serta langkah-langkah preventif untuk mengamankan data dan meminimalkan celah kerentanan bagi pemula.',
    image:
      'https://i.ibb.co.com/nqGLJf8S/Niagahoster-A-guide-to-cybersec.png',
    credentialId: 'dd15c89c-9cfb-46bf-ac6e-f0bb7577ea4a',
    tags: ['Cybersecurity Basics', 'Digital Protection', 'Information Security', 'Technical Troubleshooting', 'Niagahoster'],
  },
  {
    title: 'A Guide To Cyber Security For Beginners',
    issuer: 'Dewaweb',
    date: 'Desember — 2021',
    description:
      'Edukasi mengenai praktik terbaik keamanan siber personal, perlindungan identitas digital, serta langkah-langkah preventif dalam mengamankan perangkat dan data pribadi dari ancaman siber.',
    image:
      'https://i.ibb.co.com/NgcXfSQ1/dewaweb-personal-security.png',
    tags: ['Cybersecurity Basics', 'Personal Security', 'Digital Privacy', 'Dewaweb'],
  },
  {
    title: 'Security Insights & Tips From the Frontline',
    issuer: 'Dewaweb',
    date: 'Desember — 2021',
    description:
      'Pemaparan studi kasus nyata mengenai lanskap ancaman keamanan siber di industri, analisis taktik serangan siber modern, serta tips praktis dari praktisi untuk memperkuat pertahanan sistem.',
    image:
      'https://i.ibb.co.com/NgcXfSQ1/dewaweb-personal-security.png',
    tags: ['Cybersecurity Insights', 'Security Practices', 'Incident Mitigation', 'Dewaweb'],
  },
  {
    title: 'GNS3 & Virtualization Lab Mastery',
    issuer: 'Self-Driven / Lab Practice',
    date: '2021 — Present',
    description:
      'Membangun dan menguji topologi jaringan di lab virtual sebelum diterapkan ke produksi. Reproducible, aman, dan cepat.',
    image:
      'https://i.ibb.co.com/Q3kwmn0H/Topologi-lapangan.png',
    tags: ['GNS3', 'VMware', 'Virtualization', 'Lab Design'],
  },
];
