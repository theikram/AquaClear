import type { Job, Department } from '@/types';

export const departments: Department[] = [
  {
    name: 'Delivery',
    description:
      'Our delivery team ensures every bottle reaches customers on time, safely, and with a smile. They are the backbone of our service promise.',
    icon: 'Truck',
  },
  {
    name: 'Operations',
    description:
      'The operations team manages the purification plant, quality checks, bottling, and packaging — ensuring every drop meets our standards.',
    icon: 'Factory',
  },
  {
    name: 'Sales',
    description:
      'Our sales professionals build lasting relationships with customers, helping them find the right water solutions for their needs.',
    icon: 'TrendingUp',
  },
  {
    name: 'Marketing',
    description:
      'The marketing team drives brand awareness, creates engaging content, and connects Aqua Clear with communities across Pakistan.',
    icon: 'Megaphone',
  },
  {
    name: 'Accounts',
    description:
      'Our accounts team manages financial operations, billing, vendor relationships, and ensures smooth business transactions.',
    icon: 'Calculator',
  },
  {
    name: 'Customer Support',
    description:
      'The support team handles inquiries, complaints, and feedback — making sure every customer experience is positive and professional.',
    icon: 'Headphones',
  },
  {
    name: 'Plant Operations',
    description:
      'Our plant operations team oversees the water treatment facility, maintaining equipment and upholding the highest safety standards.',
    icon: 'Wrench',
  },
];

// PLACEHOLDER: All job data is sample content for demonstration
export const jobs: Job[] = [
  {
    id: 'delivery-driver',
    title: 'Delivery Driver',
    department: 'Delivery',
    location: 'Islamabad / Rawalpindi',
    type: 'Full-time',
    description:
      'We are looking for reliable delivery drivers to join our team. You will be responsible for delivering water products to homes and businesses across the twin cities area.',
    requirements: [
      'Valid driving license (LTV)',
      'Minimum 2 years driving experience',
      'Knowledge of Islamabad/Rawalpindi routes',
      'Good physical fitness',
      'Excellent customer service skills',
    ],
    responsibilities: [
      'Deliver water products to assigned routes',
      'Maintain delivery vehicle in good condition',
      'Collect payments and manage delivery receipts',
      'Handle customer inquiries professionally',
      'Report any delivery issues to dispatch',
    ],
    postedDate: '2026-09-01',
  },
  {
    id: 'customer-support-rep',
    title: 'Customer Support Representative',
    department: 'Customer Support',
    location: 'Islamabad',
    type: 'Full-time',
    description:
      'Join our customer support team to help customers with orders, inquiries, and service requests. You will be the voice of Aqua Clear.',
    requirements: [
      'Excellent communication in Urdu and English',
      'Experience with customer service (1+ year preferred)',
      'Computer literacy',
      'Calm and professional demeanor',
      'Ability to handle complaints gracefully',
    ],
    responsibilities: [
      'Handle incoming calls and WhatsApp inquiries',
      'Process orders and schedule deliveries',
      'Resolve customer complaints',
      'Maintain customer records',
      'Coordinate with delivery team',
    ],
    postedDate: '2026-09-05',
  },
  {
    id: 'sales-representative',
    title: 'Sales Representative',
    department: 'Sales',
    location: 'Islamabad / Rawalpindi',
    type: 'Full-time',
    description:
      'We are looking for motivated sales professionals to expand our customer base. You will visit businesses, offices, and communities to build relationships.',
    requirements: [
      'Minimum 1 year sales experience',
      'Own transport preferred',
      'Strong negotiation skills',
      'Familiarity with B2B sales',
      'Goal-oriented mindset',
    ],
    responsibilities: [
      'Generate new business leads',
      'Visit potential corporate clients',
      'Present product portfolio to prospects',
      'Meet monthly sales targets',
      'Build and maintain client relationships',
    ],
    postedDate: '2026-09-10',
  },
  {
    id: 'plant-operator',
    title: 'Plant Operator',
    department: 'Plant Operations',
    location: 'Islamabad',
    type: 'Full-time',
    description:
      'We need skilled plant operators to manage our water purification and bottling facility. You will ensure smooth day-to-day operations of the plant.',
    requirements: [
      'Experience in water treatment or food processing',
      'Understanding of RO/UV purification systems',
      'Attention to detail and safety protocols',
      'Physical fitness for plant work',
      'Basic quality control knowledge',
    ],
    responsibilities: [
      'Operate purification and bottling equipment',
      'Monitor water quality parameters',
      'Perform routine equipment maintenance',
      'Follow safety and hygiene protocols',
      'Report production metrics',
    ],
    postedDate: '2026-09-08',
  },
  {
    id: 'accounts-assistant',
    title: 'Accounts Assistant',
    department: 'Accounts',
    location: 'Islamabad',
    type: 'Full-time',
    description:
      'Join our finance team to support bookkeeping, invoicing, and financial reporting. A great opportunity for early-career finance professionals.',
    requirements: [
      'B.Com or equivalent qualification',
      'Proficiency in MS Excel',
      'Experience with accounting software preferred',
      'Attention to detail',
      'Strong organizational skills',
    ],
    responsibilities: [
      'Maintain daily financial records',
      'Prepare invoices and receipts',
      'Assist with monthly financial reports',
      'Manage vendor payments',
      'Support auditing processes',
    ],
    postedDate: '2026-09-12',
  },
  {
    id: 'marketing-executive',
    title: 'Marketing Executive',
    department: 'Marketing',
    location: 'Islamabad',
    type: 'Full-time',
    description:
      'We are looking for a creative marketing professional to manage our digital presence, create content, and drive brand engagement.',
    requirements: [
      'Degree in Marketing or related field',
      'Experience with social media management',
      'Basic graphic design skills (Canva/Photoshop)',
      'Understanding of digital marketing',
      'Strong writing skills in English and Urdu',
    ],
    responsibilities: [
      'Manage social media accounts',
      'Create marketing content and campaigns',
      'Coordinate with design and sales teams',
      'Track marketing KPIs',
      'Plan and execute promotional events',
    ],
    postedDate: '2026-09-15',
  },
];

export const getJobById = (id: string): Job | undefined =>
  jobs.find((j) => j.id === id);
