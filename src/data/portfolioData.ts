export interface HighlightItem {
  id: string;
  indexLabel: string;
  title: string;
  cardSubtitle: string;
  cardPeriod: string;
  modalSubtitle: string;
  image: string;
  imageAlt: string;
  bullets: string[];
}

export interface ExperienceLedgerItem {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface SkillToolItem {
  name: string;
  icon: 'grid' | 'spreadsheet' | 'document' | 'design' | 'video';
}

export interface CoreStrengthItem {
  number: string;
  title: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  program?: string;
  period: string;
}

export interface AchievementItem {
  title: string;
  detail: string;
  year: string;
}

export const PORTFOLIO_DATA = {
  nav: {
    brand: 'S1 TEKNIK INFORMATIKA · IT PLN',
    year: '2026',
    links: [
      { label: 'EXPERIENCE', href: '#experience' },
      { label: 'CAPABILITIES', href: '#capabilities' },
      { label: 'EDUCATION', href: '#education' },
      { label: 'ACHIEVEMENTS', href: '#achievements' },
      { label: 'CONTACT', href: '#contact' },
    ],
  },
  hero: {
    eyebrow: 'INFORMATICS ENGINEERING STUDENT',
    headlineLines: [
      'MAHASISWA BARU',
      'INSTITUT TEKNOLOGI PLN',
      'JURUSAN S1 TEKNIK INFORMATIKA',
    ],
    about:
      'I am a first-year Informatics Engineering student with a strong drive to learn, grow, and contribute through education. I actively participate in various organizational activities that have honed my communication, teamwork, and sense of responsibility. I also have a keen interest in technology and design.',
    signatureLines: ['ALYA RAFIFAH', 'SHABIRA'],
    portraitUrl: '/src/assets/images/regenerated_image_1795249400439.jpg',
    portraitAlt: 'Editorial studio portrait of Alya Rafifah Shabira',
  },
  highlights: [
    {
      id: 'pik-r',
      indexLabel: '01',
      title: 'PIK-R CHAIRPERSON',
      cardSubtitle: 'SMA NEGERI 1 ACEH BARAT DAYA',
      cardPeriod: '2025 – 2026',
      modalSubtitle: 'SMA Negeri 1 Aceh Barat Daya · 2025 – 2026',
      image:
        'https://lh3.googleusercontent.com/aida/ALJJyrCwGMUNvGkcBORPErdbD3JksPRoZzOulX4lrjqsG3qmcY4ArXEEUj0L6RtXdlMo1w5fv2Qgx8hbtPDFzBW-GNyt6SDAz5PXRupn7_197TK3jtwhLEAuhNpv7rO38XSEybcrvsI-nNClgwb-roTna4j5ZDApklVkFGQQI-nKMN5r5-RL2hhX8815xh-Xoe0PasRB-6PqN3QjwDlR3QpsTo0aOLsjuaVHyJ-O4i8MZmffHTOlZg',
      imageAlt: 'PIK-R Chairperson educational leadership',
      bullets: [
        'lead the program dean of Pik r activities',
        'Organizing educational activities regarding adolescent health and character development.',
      ],
    },
    {
      id: 'student-council',
      indexLabel: '02',
      title: 'GENERAL SECRETARY',
      cardSubtitle: 'STUDENT COUNCIL · SMAN 1 ABDYA',
      cardPeriod: '2025 – 2026',
      modalSubtitle: 'SMA Negeri 1 Aceh Barat Daya · 2025 – 2026',
      image:
        'https://lh3.googleusercontent.com/aida/ALJJyrAl_FdgYj6p-IiwFm2dURAz431JXzjnMEa6FBYum5tr5eu8PsL14CDOJinGMiGSUQ6ISjWZpA3Qdy-P9ErENtjuupdY_LC77nXonxoajdTXgcFvARQlVQIQO-WkwJraJ1VKzcmBWV6kUz35bWHEVgXKwpqrhBy64UG6qyELMlKsePtNSjE0VxuA1PNKb14kKaFUV3AEcCT7s2VdFXtOy_yZc-XeaXdDMDPzUrfefbV0mtbNBXg8IA5B1oew_K4',
      imageAlt: 'General Secretary of the Student Council governance',
      bullets: [
        'Manage organizational administration, including correspondence and documentation. Prepare proposals, activity reports, and meeting minutes.',
        'Coordinate with the Student Council board and the supervising teacher in the implementation of work programs.',
      ],
    },
    {
      id: 'international-summit',
      indexLabel: '03',
      title: 'INTERNATIONAL SUMMIT',
      cardSubtitle: 'YOUTH INNOVATION SUMMIT',
      cardPeriod: 'MALAYSIA & SINGAPORE · 2026',
      modalSubtitle: 'Global Youthpreneur Nusantara Foundation · 2026',
      image:
        'https://lh3.googleusercontent.com/aida/ALJJyrBjTdy5yKhvQK2RynRmRXvPz37GmSSQRaHdB7TwA2AVEy2jjMiUKUDLN14OXTXOuc3F2VAeOd-1wUGfqQ5W0oeeEJGRKCwxmnnc0Jvz9PaHzlbF5jTPlsOKjljT5P11LYFkDTKGTrsUvBUtESdZQyKe7NXnC1jGR08DhXxpylDOkwreBCkUFZ36wGPosANVyNBOFI_8FSiSaQYzWAUrXou-zm11JuNgsjoeBN26M5B-pIGGIqHqEt1othcxK4RNMHo',
      imageAlt: 'International Youth Innovation Summit Malaysia and Singapore',
      bullets: [
        'Certification Of PartiCiPation - Selection Process Internasional Youth innavation Summit ( Capter Malaysia & Singapore)',
      ],
    },
    {
      id: 'olympiad-finalist',
      indexLabel: '04',
      title: 'OLYMPIAD FINALIST',
      cardSubtitle: 'ISO & SOE EDUEXPO · MEDICAL',
      cardPeriod: 'NATIONAL & INTL · 2025',
      modalSubtitle: 'National & International · 2025',
      image:
        'https://lh3.googleusercontent.com/aida/ALJJyrBlfb15uIiq7LH2V5ggYWiW-DMYVmGMOwhDYtGBYgqCYiJ44hgFrXQSvkxubzKA-k6N_A4tYizBV4ZXctMcvEzsOkMZc7osGuX22yVixJqanzlZYMTnJ0kmiON8VjbX_iLic56xqVg5Rv5I9Z7oKhy2t7VzQj8KuYVNW-zouL6Zoicl-sRyP0oPpn-NTA7udYvIQUQ4WuOg7I9cP4RBNIj7H1lkIFPFCKkhmSrcN3-Iij8mSgbFGS2x1rB2fm0vyw',
      imageAlt: 'ISO and SOE EDUEXPO Science Olympiad Finalist',
      bullets: [
        'Finalist–International Science Olympiad (ISO)– 9th EDUEXPO — English Subject | Score: A',
        'Bronze Medal – National Medical Studies Competition — National Competition',
        'Finalist– Student Oliympiad Expo (soe)– EDUEXPO — Chemistry Subject | Score: B+',
      ],
    },
  ] satisfies HighlightItem[],
  experienceLedger: [
    {
      role: 'PIK-R Chairperson',
      organization: 'SMA Negeri 1 Aceh Barat Daya',
      period: '2025 – 2026',
      bullets: [
        'lead the program dean of Pik r activities',
        'Organizing educational activities regarding adolescent health and character development.',
      ],
    },
    {
      role: 'General Secretary of the Student Council',
      organization: 'SMA Negeri 1 Aceh Barat Daya',
      period: '2025 – 2026',
      bullets: [
        'Manage organizational administration, including correspondence and documentation. Prepare proposals, activity reports, and meeting minutes.',
        'Coordinate with the Student Council board and the supervising teacher in the implementation of work programs.',
      ],
    },
  ] satisfies ExperienceLedgerItem[],
  skillsTools: [
    { name: 'Management Skills', icon: 'grid' },
    { name: 'Microsoft Excel (Intermediate)', icon: 'spreadsheet' },
    { name: 'Microsoft Word ( Intermediate)', icon: 'document' },
    { name: 'Canva Design', icon: 'design' },
    { name: 'Editor Vidio', icon: 'video' },
  ] satisfies SkillToolItem[],
  coreStrengths: [
    {
      number: '01',
      title: 'CRITICAL THINKING',
      description: 'Analytical problem-solving rooted in Informatics Engineering principles.',
    },
    {
      number: '02',
      title: 'COMMUNICATION SKILLS',
      description: 'Effective public engagement, coordination, and educational outreach.',
    },
    {
      number: '03',
      title: 'ADMINISTRATION & GOVERNANCE',
      description: 'Structured correspondence, proposals, activity reports, and meeting minutes.',
    },
    {
      number: '04',
      title: 'TECHNOLOGY & DESIGN',
      description: 'Combining digital tools, video editing, and visual design to create impact.',
    },
  ] satisfies CoreStrengthItem[],
  capabilitiesFeature: {
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrAQ3uawF9RUETPk_wOqWlZNGeVeHcrPZkxkGPnJ-cTIue4FJNuo25GFUZ-bqp4dXkmpuqF3PY4fvv3mamirCuw_jpG_thL_rO1a77rwYqvnSPTddMhgkhXtYYfiLhZAbANxZhoEq54qE2OMmAJUGJiOKdzp8McOcywjBAO8b4g4xbsGJkN_wGo7792Ccpz1n-Xemo_gkf9o3hlNHsVKXEsr1_ofOMalxxAHzpaYtB5jJxQlfMk3lRiS6gPj',
    imageAlt: 'Alya Rafifah Shabira studying in a sunlit architectural space',
    quote:
      'WITH A STRONG DRIVE TO LEARN, GROW, AND CONTRIBUTE THROUGH EDUCATION, TECHNOLOGY, AND DESIGN.',
    initials: 'A.R.S.',
  },
  skillTags: [
    'Management Skills',
    'Microsoft Excel (Intermediate)',
    'Microsoft Word ( Intermediate)',
    'Critical Thinking',
    'Communication Skills',
    'Editor Vidio',
    'Canva Design',
  ],
  education: [
    {
      institution: 'Institun Teknologi PLN',
      program: 'Jurusan S1 Teknik Informatika',
      period: '2026 - sekarang',
    },
    {
      institution: 'SMA Negeri 1 Aceh Barat Daya',
      period: '2022 - 2026',
    },
    {
      institution: 'SMPIT Rabbani Qur’an School',
      period: '2019 – 2022',
    },
    {
      institution: 'Mim Muhammadiya',
      period: '2013 - 2019',
    },
  ] satisfies EducationItem[],
  achievements: [
    {
      title: 'Finalist–International Science Olympiad (ISO)– 9th EDUEXPO',
      detail: 'English Subject | Score: A',
      year: '2025',
    },
    {
      title: 'Bronze Medal – National Medical Studies Competition',
      detail: 'National Competition',
      year: '2025',
    },
    {
      title: 'Finalist– Student Oliympiad Expo (soe)– EDUEXPO',
      detail: 'Chemistry Subject | Score: B+',
      year: '2025',
    },
  ] satisfies AchievementItem[],
  certificates: [
    {
      title:
        'Certification Of PartiCiPation - Selection Process Internasional Youth innavation Summit ( Capter Malaysia & Singapore)',
      issuer: 'Global Youthpreneur Nusantara Foundation',
      year: '2026',
    },
  ],
  contact: {
    phone: '+6285382888921',
    email: 'alya.shabira1@gmail.com',
    address: 'desa pinang kec. susoh kabupaten aceh barat daya',
    affiliation: 'Institut Teknologi PLN — S1 Teknik Informatika',
    watermark: 'A/S',
    copyright: '© 2026 ALYA RAFIFAH SHABIRA',
  },
};
