import React from 'react';
import { motion } from 'framer-motion';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { GrowthBadge } from './GrowthBadge';
import { SALES_REVENUE_DATA } from '@/constants/dashboardData';

export const SalesRevenueCard: React.FC = () => {
  const { value, growth, timeframe, growthBadges } = SALES_REVENUE_DATA;
  const isPositive = growth > 0;

  return (
    <motion.div
      className="flex-1 bg-white p-8 rounded-xl border border-[#eeeeee]"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex flex-wrap items-start justify-between w-full gap-4 mb-2">
        <div>
          <h3 className="text-gray-500 font-medium text-sm mb-1">Sales Revenue</h3>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-semibold text-gray-900 tracking-tight font-mono">{value}</span>
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
      <RevenueChart />
    </motion.div>
  );
};

