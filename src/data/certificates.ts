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
    title: 'MTCNA — MikroTik Training Certified Network Associate',
    issuer: 'MikroTik',
    date: '2023',
    description:
      'Fundamental MikroTik RouterOS: konfigurasi dasar, routing, firewall, NAT, bandwidth management, dan manajemen jaringan skala kecil-menengah.',
    image:
      'https://i.ibb.co.com/placeholders/mtcna-cert.jpg',
    credentialId: 'MTCNA-2023-XXXX',
    tags: ['RouterOS', 'Routing', 'Firewall', 'Bandwidth'],
  },
  {
    title: 'CCNA — Cisco Certified Network Associate',
    issuer: 'Cisco',
    date: '2024',
    description:
      'Fundamental jaringan Cisco: IP addressing, switching, routing protocols (OSPF, VLAN, STP), security fundamentals, dan automasi jaringan dasar.',
    image:
      'https://i.ibb.co.com/placeholders/ccna-cert.jpg',
    credentialId: 'CCNA-2024-XXXX',
    tags: ['Cisco IOS', 'OSPF', 'VLAN', 'STP', 'Security'],
  },
  {
    title: 'Network Security Fundamentals',
    issuer: 'Self-Driven / Lab Practice',
    date: '2024 — Present',
    description:
      'Pendalaman firewall configuration, VPN architecture (IPsec, L2TP, EoIP), dan infrastructure hardening sebagai langkah karir berikutnya.',
    image:
      'https://i.ibb.co.com/placeholders/security-cert.jpg',
    tags: ['Firewall', 'VPN', 'IPsec', 'Hardening'],
  },
  {
    title: 'GNS3 & Virtualization Lab Mastery',
    issuer: 'Self-Driven / Lab Practice',
    date: '2022',
    description:
      'Membangun dan menguji topologi jaringan di lab virtual sebelum diterapkan ke produksi. Reproducible, aman, dan cepat.',
    image:
      'https://i.ibb.co.com/placeholders/gns3-cert.jpg',
    tags: ['GNS3', 'VMware', 'Virtualization', 'Lab Design'],
  },
];
