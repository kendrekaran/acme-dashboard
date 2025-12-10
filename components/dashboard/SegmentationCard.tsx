import React from 'react';
import { motion } from 'framer-motion';
import { ChannelRow } from './ChannelRow';
import { SEGMENTATION_DATA } from '@/constants/dashboardData';

export const SegmentationCard: React.FC = () => {
  const { totalCustomers, segments, channels } = SEGMENTATION_DATA;

  return (
    <motion.div
      className="lg:w-[38%] bg-white p-8 rounded-xl border border-[#eeeeee] flex flex-col"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h3 className="text-gray-500 font-medium text-sm mb-4">Segmentation</h3>
      <div className="mb-6">
        <span className="text-3xl font-semibold text-gray-900 tracking-tight font-mono">{totalCustomers.toLocaleString()}</span>
        <span className="text-gray-400 text-sm ml-2">total customers</span>
      </div>

      {/* Segment Bar */}
      <div className="flex h-3 overflow-hidden space-x-1 w-full mb-4" role="progressbar" aria-label="Customer segmentation">
        {segments.map((segment, index) => (
          <div
            key={segment.label}
            className={`${segment.color} rounded-full`}
            style={{ width: `${segment.percentage}%` }}
            aria-label={`${segment.label}: ${segment.percentage}%`}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-evenly w-full gap-4 mb-8">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${segment.color}`} aria-hidden="true" />
            <span className="text-xs text-gray-600 font-medium font-mono">{segment.label}</span>
          </div>
        ))}
      </div>

      {/* Channels List */}
      <div className="flex-1">
        <div className="flex justify-between text-xs text-gray-400 font-medium mb-3 tracking-wide">
          <span>Channels</span>
          <div className="flex gap-8">
            <span className="w-12 text-right">Number</span>
            <span className="w-12 text-right">Total</span>
          </div>
        </div>
        <div className="space-y-1">
          {channels.map((channel, index) => (
            <ChannelRow key={channel.name} {...channel} index={index} />
          ))}
        </div>
      </div>

      <motion.button
        className="w-full mt-6 py-2 border border-[#eeeeee] rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
        whileTap={{ scale: 0.98 }}
        aria-label="View full reports"
      >
        Full reports
      </motion.button>
    </motion.div>
  );
};

