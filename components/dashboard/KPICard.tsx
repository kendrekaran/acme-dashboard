import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown2, ArrowUp2 } from '@/components/ui/Icons';
import { KPIData } from '@/constants/dashboardData';

export interface KPICardProps extends KPIData {
  isFirst?: boolean;
  isLast?: boolean;
  index?: number;
}

/**
 * KPI Card component displaying a key performance indicator with growth metrics
 * @param props - KPI card properties including title, value, growth, and styling flags
 */
export const KPICard: React.FC<KPICardProps> = React.memo(({
  title,
  value,
  growth,
  timeframe,
  suffix,
  isFirst = false,
  isLast = false,
  index = 0,
}) => {
  const isPositive = growth > 0;
  const roundedClasses = isFirst ? 'rounded-l-3xl' : isLast ? 'rounded-r-3xl' : '';
  const dividerClass = !isLast ? 'border-r border-[#eeeeee]' : '';

  return (
    <motion.div
      className={`bg-white p-6 flex flex-col justify-between min-h-[160px] ${roundedClasses} ${dividerClass}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      aria-label={`${title}: ${value}${suffix || ''}, ${Math.abs(growth)}% ${isPositive ? 'increase' : 'decrease'} vs ${timeframe}`}
    >
      <div>
        <motion.h3
          className="text-gray-500 font-medium text-sm mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.div
          className="flex items-baseline gap-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
        >
          <span className="text-3xl font-semibold text-gray-900 font-mono">{value}</span>
          {suffix && <span className="text-sm font-medium text-gray-400 font-mono">{suffix}</span>}
        </motion.div>
      </div>
      <motion.div
        className="flex items-center gap-2 text-xs font-medium mt-4"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        <span className={`flex items-center gap-0.5 font-mono ${isPositive ? 'text-status-green' : 'text-status-red'}`}>
          {Math.abs(growth)}%
          {isPositive ? (
            <ArrowUp2 className="w-4 h-4 text-status-green" aria-hidden="true" />
          ) : (
            <ArrowDown2 className="w-4 h-4 text-status-red" aria-hidden="true" />
          )}
          <span className="text-gray-400 font-mono">vs {timeframe}</span>
        </span>
      </motion.div>
    </motion.div>
  );
});

KPICard.displayName = 'KPICard';

