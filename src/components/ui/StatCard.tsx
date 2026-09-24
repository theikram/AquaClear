import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  light?: boolean;
}

export default function StatCard({ icon, value, label, light = false }: StatCardProps) {
  return (
    <div className={`flex items-center gap-4 p-5 rounded-xl ${
      light ? 'bg-white/10 backdrop-blur-sm' : 'bg-white border border-border'
    }`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
        light ? 'bg-white/15' : 'bg-light-blue'
      }`}>
        <div className={light ? 'text-white' : 'text-secondary-blue'}>{icon}</div>
      </div>
      <div>
        <p className={`text-xl font-bold ${light ? 'text-white' : 'text-deep-blue'}`}>
          {value}
        </p>
        <p className={`text-sm ${light ? 'text-blue-200' : 'text-muted'}`}>{label}</p>
      </div>
    </div>
  );
}
