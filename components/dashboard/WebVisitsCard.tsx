import React from 'react';
import { motion } from 'framer-motion';
import { VisitsChart } from '@/components/charts/VisitsChart';
import { GrowthBadge } from './GrowthBadge';
import { WEB_VISITS_DATA } from '@/constants/dashboardData';

export const WebVisitsCard: React.FC = () => {
  const { value, growth, timeframe, growthBadges } = WEB_VISITS_DATA;
  const isPositive = growth > 0;

  return (
    <motion.div
      className="lg:col-span-7 bg-white p-8 rounded-xl border border-[#eeeeee] flex flex-col"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-gray-500 font-medium text-sm mb-1">Web Visits</h3>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-semibold text-gray-900 tracking-tight font-mono">{value}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-xs font-semibold flex items-center gap-0.5 font-mono ${isPositive ? 'text-status-green' : 'text-status-red'}`}>
              {Math.abs(growth)}% {isPositive ? '↑' : '↓'}
            </span>
            <span className="text-xs text-gray-400 font-mono">vs {timeframe}</span>
          </div>
        </div>

        <div className="flex gap-3">
          {growthBadges.map((badge, index) => (
            <GrowthBadge key={badge.label} {...badge} index={index} />
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-[200px] flex items-end">
        <VisitsChart />
      </div>
    </motion.div>
  );
};

