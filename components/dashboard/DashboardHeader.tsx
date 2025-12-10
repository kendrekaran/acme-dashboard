import React from 'react';
import { motion } from 'framer-motion';

export interface DashboardHeaderProps {
  title: string;
  totalLeads: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, totalLeads }) => {
  return (
    <motion.header
      className="px-8 py-6 flex items-end gap-3 border-b border-[#eeeeee] sticky top-0 bg-white/90 backdrop-blur-sm z-10"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl font-medium text-gray-900">{title}</h1>
      <span className="text-xs font-medium text-gray-400 pb-1 uppercase tracking-wide font-mono" aria-label={`Total leads: ${totalLeads}`}>
        {totalLeads}
      </span>
    </motion.header>
  );
};

