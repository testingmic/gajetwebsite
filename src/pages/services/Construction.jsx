import { Building2 } from 'lucide-react';
import ServicePage from './ServicePage';

const service = {
  id: 'construction',
  icon: Building2,
  tag: '01',
  title: 'Building & Roads Construction',
  tagline: 'From blueprint to completion — built to last.',
  description:
    'We undertake building and civil infrastructure projects, including residential, commercial, and road construction. Our construction services are delivered using modern engineering practices, skilled manpower, and strict quality control to ensure durability, safety, and timely delivery.',
  highlights: [
    'Residential and commercial building projects',
    'Road and civil infrastructure construction',
    'Modern engineering practices and equipment',
    'Strict quality control and safety standards',
    'Skilled manpower and project management',
    'Timely delivery and cost efficiency',
  ],
  mainImgKey:   'construction',
  mainImgLabel: '/images/23.jpg',
  gallery: [
    { key: 'conGallery1', label: '/images/14.png',   caption: 'Site preparation & foundations' },
    { key: 'conGallery2', label: '/images/21.jpeg',  caption: 'Structural works in progress' },
    { key: 'conGallery3', label: '/images/22.jpeg',  caption: 'Completed road project' },
  ],
  color:  'bg-blue-50',
  accent: 'text-blue-600',
  border: 'border-blue-100',
};

export default function Construction() {
  return <ServicePage service={service} />;
}
