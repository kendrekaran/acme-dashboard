import React from 'react';
import { motion } from 'framer-motion';
import { SidebarLeft, ArrowUpDown } from '@/components/ui/Icons';
import { NavItem } from './NavItem';
import { FavoritesList } from './FavoritesList';
import { SearchesList } from './SearchesList';
import { NAV_ITEMS } from '@/constants/sidebarData';

export const Sidebar: React.FC = () => {
  return (
    <motion.aside
      className="w-64 flex-shrink-0 bg-white border-r border-[#eeeeee] flex flex-col h-screen fixed left-0 top-0 overflow-y-auto no-scrollbar z-20"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-label="Main navigation"
    >
      {/* Header */}
      <motion.div
        className="p-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            className="w-8 h-8 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <img src="image.png" alt="Acme Inc logo" className="w-full h-full object-cover" />
          </motion.div>
          <span className="font-medium text-gray-900">Acme Inc</span>
          <ArrowUpDown className="w-4 h-4 text-gray-900" aria-hidden="true" />
        </div>
        <motion.button
          className="text-gray-400 hover:text-gray-600"
          aria-label="Toggle sidebar"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <SidebarLeft className="w-4 h-4 text-gray-400" aria-hidden="true" />
        </motion.button>
      </motion.div>

      {/* Nav */}
      <nav className="px-3 space-y-1" aria-label="Main navigation">
        {NAV_ITEMS.map((item, index) => (
          <NavItem key={item.label} {...item} index={index} />
        ))}
      </nav>

      <FavoritesList />
      <SearchesList />

      {/* Upgrade CTA */}
      <motion.div
        className="mt-auto p-4 shadow-[0_-1px_0_0_rgba(0,0,0,0.05)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-medium text-gray-900 text-sm">Get 50% Discount</h4>
        </div>
        <p className="text-xs text-gray-500 mb-3">Upgrade your free-trial today</p>
        <motion.button
          className="w-full bg-gray-950 text-white text-xs font-medium py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400 }}
          aria-label="Upgrade to premium plan"
        >
          Upgrade now
        </motion.button>
      </motion.div>
    </motion.aside>
  );
};

