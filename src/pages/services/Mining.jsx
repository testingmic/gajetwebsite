import { Pickaxe } from 'lucide-react';
import ServicePage from './ServicePage';

const service = {
  id: 'mining',
  icon: Pickaxe,
  tag: '02',
  title: 'Mining Services',
  tagline: 'Responsible resource development — done right.',
  description:
    'Our mining services cover exploration support, mine development, extraction, and operational support services. We emphasize operational efficiency, safety, and environmental responsibility across all mining operations while supporting sustainable resource development.',
  highlights: [
    'Geological exploration and support',
    'Mine development and infrastructure',
    'Extraction and operational services',
    'Environmental responsibility and compliance',
    'Safety-first operational culture',
    'Sustainable resource development',
  ],
  mainImgKey:   'mining',
  mainImgLabel: '/images/3.jpeg',
  gallery: [
    { key: 'minGallery1', label: '/images/26.jpg', caption: 'Exploration and survey work' },
    { key: 'minGallery2', label: '/images/28.jpg', caption: 'Mine development operations' },
    { key: 'minGallery3', label: '/images/27.jpg', caption: 'Extraction and processing' },
  ],
  color:  'bg-amber-50',
  accent: 'text-amber-600',
  border: 'border-amber-100',
};

export default function Mining() {
  return <ServicePage service={service} />;
}
