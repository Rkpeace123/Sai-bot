import { NavItem, NewsItem, BusRoute, FeeType, PlacementStat } from './types';
import { BookOpen, Users, Trophy, Globe, GraduationCap, Microscope, Lightbulb, Activity } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '/about',
    children: [
      { label: 'Sairam in Focus', href: '/about' },
      { label: 'Vision & Mission', href: '/about' },
      { label: 'Leadership', href: '/about' },
    ]
  },
  { 
    label: 'Academics', 
    href: '/academics',
    children: [
      { label: 'School of Computing & AI', href: '/academics' },
      { label: 'School of Electronics', href: '/academics' },
      { label: 'School of Mechanical', href: '/academics' },
      { label: 'School of Management', href: '/academics' },
    ]
  },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Placements', href: '/placements' },
  { label: 'Research', href: '/research' },
  { label: 'Campus Life', href: '/campus' },
  { label: 'Contact', href: '/contact' },
];

export const HERO_STATS = [
  { label: 'Years of Excellence', value: '30+', icon: Trophy },
  { label: 'Students', value: '25,000+', icon: Users },
  { label: 'Programs Offered', value: '65+', icon: BookOpen },
  { label: 'Global Partners', value: '150+', icon: Globe },
  { label: 'Alumni Network', value: '50,000+', icon: GraduationCap },
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 1,
    date: 'Oct 15, 2023',
    category: 'Research',
    title: 'Sairam University secures ₹2 Cr grant for AI Research Lab',
    image: 'https://picsum.photos/400/250?random=1'
  },
  {
    id: 2,
    date: 'Oct 12, 2023',
    category: 'Campus Life',
    title: 'Inter-college Cultural Fest "SaiFest 2023" dates announced',
    image: 'https://picsum.photos/400/250?random=2'
  },
  {
    id: 3,
    date: 'Oct 10, 2023',
    category: 'Placements',
    title: 'Record breaking placements: Highest package hits ₹45 LPA',
    image: 'https://picsum.photos/400/250?random=3'
  }
];

export const BUS_ROUTES: BusRoute[] = [
  // West Tambaram / Campus
  { id: '1', routeNumber: 'R-45', driver: 'Ramesh Kumar', phone: '9876543210', status: 'On Time', nextStop: 'Kishkinta Rd', eta: '5 mins', occupancy: 'High', coordinates: { lat: 12.9606, lng: 80.0556 } },
  // Near Airport
  { id: '2', routeNumber: 'R-12', driver: 'Suresh Babu', phone: '9876543211', status: 'Delayed', nextStop: 'Tirusulam', eta: '25 mins', occupancy: 'Medium', coordinates: { lat: 12.9806, lng: 80.1636 } },
  // City Center
  { id: '3', routeNumber: 'R-08', driver: 'Muthu Vel', phone: '9876543212', status: 'Arrived', nextStop: 'Adyar Depot', eta: 'Now', occupancy: 'Low', coordinates: { lat: 13.0012, lng: 80.2565 } },
];

export const STUDENT_FEES: FeeType[] = [
  { id: 'tuition', name: 'Tuition Fee (Sem 5)', amount: 85000, dueDate: '2023-11-15' },
  { id: 'hostel', name: 'Hostel & Mess Fee', amount: 45000, dueDate: '2023-11-30' },
  { id: 'transport', name: 'Transport Fee', amount: 12000, dueDate: '2023-11-20' },
];

export const PLACEMENT_DATA: PlacementStat[] = [
  { year: 2019, highest: 12, average: 4.5, placedPercentage: 88 },
  { year: 2020, highest: 18, average: 5.2, placedPercentage: 91 },
  { year: 2021, highest: 24, average: 6.1, placedPercentage: 94 },
  { year: 2022, highest: 32, average: 6.8, placedPercentage: 96 },
  { year: 2023, highest: 45, average: 7.5, placedPercentage: 98 },
];

export const RESEARCH_PROJECTS = [
  {
    title: "Autonomous Drone Swarm for Agriculture",
    agency: "DRDO",
    amount: "₹ 45 Lakhs",
    status: "Ongoing",
    pi: "Dr. A. Sharma"
  },
  {
    title: "AI in Healthcare Diagnostics",
    agency: "ICMR",
    amount: "₹ 25 Lakhs",
    status: "Completed",
    pi: "Dr. B. Raman"
  },
  {
    title: "Sustainable Concrete Materials",
    agency: "DST",
    amount: "₹ 30 Lakhs",
    status: "Ongoing",
    pi: "Dr. C. Priya"
  }
];

export const DEPARTMENT_DATA = {
  id: 'cse',
  name: 'Computer Science & Engineering',
  tagline: 'Innovating the Digital Future',
  description: 'The Department of CSE is committed to providing world-class education in computing technologies, fostering research, and nurturing innovation.',
  stats: [
    { label: 'Students', value: '1200+' },
    { label: 'Faculty', value: '65+' },
    { label: 'Labs', value: '12' },
    { label: 'Publications', value: '450+' }
  ],
  faculty: [
    { name: 'Dr. S. Kumar', designation: 'Professor & Head', area: 'AI & Machine Learning' },
    { name: 'Dr. R. Anita', designation: 'Associate Professor', area: 'Cloud Computing' },
    { name: 'Mr. K. Raj', designation: 'Assistant Professor', area: 'Cyber Security' },
    { name: 'Mrs. P. Lakshmi', designation: 'Assistant Professor', area: 'Data Science' },
  ],
  labs: [
    'Artificial Intelligence Lab',
    'Cloud Computing Centre',
    'IoT & Robotics Lab',
    'Data Analytics Lab',
    'Virtual Reality Studio'
  ]
};

export const FACILITIES = [
  { name: 'Central Library', desc: '100k+ Books & Digital Resources', icon: BookOpen },
  { name: 'Smart Hostels', desc: 'AC Rooms with Wi-Fi', icon: Users },
  { name: 'Research Park', desc: '24/7 Innovation Hub', icon: Microscope },
  { name: 'Sports Complex', desc: 'Indoor & Outdoor Stadiums', icon: Activity },
  { name: 'Innovation Cell', desc: 'Startup Incubation', icon: Lightbulb },
];

export const ALUMNI_DATA = [
  { name: "Sundar Pichai (Mock)", role: "CEO, Google", batch: "1993", image: "https://picsum.photos/200/200?random=201" },
  { name: "Indra Nooyi (Mock)", role: "Former CEO, PepsiCo", batch: "1976", image: "https://picsum.photos/200/200?random=202" },
  { name: "Satya Nadella (Mock)", role: "CEO, Microsoft", batch: "1988", image: "https://picsum.photos/200/200?random=203" }
];