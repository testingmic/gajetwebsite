import { Truck } from 'lucide-react';
import ServicePage from './ServicePage';

const service = {
  id: 'logistics',
  icon: Truck,
  tag: '03',
  title: 'Logistics Services',
  tagline: 'Connecting supply chains — reliably and efficiently.',
  description:
    'We provide end-to-end logistics solutions covering transportation, haulage, storage, and supply chain coordination. Our logistics capability supports construction, mining, and trading operations with efficiency, reliability, and real-time responsiveness.',
  highlights: [
    'Transportation and haulage services',
    'Warehousing and storage solutions',
    'Supply chain coordination',
    'Real-time tracking and responsiveness',
    'Cross-sector logistics support',
    'Reliable last-mile delivery',
  ],
  mainImgKey:   'logistics',
  mainImgLabel: '/images/5.jpeg',
  gallery: [
    { key: 'logGallery1', label: '/images/33.jpeg', caption: 'Heavy haulage fleet' },
    { key: 'logGallery2', label: '/images/32.webp', caption: 'Warehouse and storage' },
    { key: 'logGallery3', label: '/images/34.png',  caption: 'Supply chain coordination' },
  ],
  color:  'bg-green-50',
  accent: 'text-green-600',
  border: 'border-green-100',
};

export default function Logistics() {
  return <ServicePage service={service} />;
}
