import React from 'react';
import { motion } from 'framer-motion';
import { DashboardHeader } from './DashboardHeader';
import { KPICard } from './KPICard';
import { SalesRevenueCard } from './SalesRevenueCard';
import { SegmentationCard } from './SegmentationCard';
import { LeadsStatusCard } from './LeadsStatusCard';
import { WebVisitsCard } from './WebVisitsCard';
import { KPI_DATA, DASHBOARD_HEADER_DATA } from '@/constants/dashboardData';

export const Dashboard: React.FC = () => {
  return (
    <motion.main
      className="flex-1 ml-64 bg-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardHeader {...DASHBOARD_HEADER_DATA} />

      <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
        {/* Top KPIs */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden rounded-3xl border border-[#eeeeee] bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {KPI_DATA.map((kpi, index) => (
            <KPICard
              key={kpi.title}
              {...kpi}
              isFirst={index === 0}
              isLast={index === KPI_DATA.length - 1}
              index={index}
            />
          ))}
        </motion.div>

        {/* Row 2: Revenue & Segmentation */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SalesRevenueCard />
          <SegmentationCard />
        </motion.div>

        {/* Row 3: Leads Status & Web Visits */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <LeadsStatusCard />
          <WebVisitsCard />
        </motion.div>
      </div>
    </motion.main>
  );
};

