import { BarChart3 } from 'lucide-react';
import ServicePage from './ServicePage';

const service = {
  id: 'trading',
  icon: BarChart3,
  tag: '04',
  title: 'Commodities Trading',
  tagline: 'Connecting producers to global markets.',
  description:
    'We are actively engaged in the trading of commodities, connecting producers to global markets. Our trading operations are guided by transparency, market intelligence, and strong partner relationships to create mutual value across international supply chains.',
  highlights: [
    'Commodities sourcing and procurement',
    'Global market connectivity',
    'Transparent trading practices',
    'Market intelligence and analysis',
    'Strong producer partnerships',
    'Reliable international supply chains',
  ],
  mainImgKey:   'trading',
  mainImgLabel: '/images/30.jpeg',
  gallery: [],
  color:  'bg-purple-50',
  accent: 'text-purple-600',
  border: 'border-purple-100',
};

export default function Trading() {
  return <ServicePage service={service} />;
}
