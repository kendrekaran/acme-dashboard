import React from 'react';
import { motion } from 'framer-motion';
import { NavItem as NavItemType } from '@/constants/sidebarData';

export interface NavItemProps extends NavItemType {
  index: number;
}

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active, shortcut, index }) => {
  return (
    <motion.div
      className={`
        flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer group transition-colors
        ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'}
      `}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      role="button"
      tabIndex={0}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
    >
      <div className="flex items-center gap-3">
        {label === 'Search' ? (
          <img src="/search.svg" alt="" className="w-5 h-5" aria-hidden="true" />
        ) : (
          <Icon className={`w-5 h-5 ${active ? 'text-gray-900' : 'text-gray-900 group-hover:text-gray-600'}`} aria-hidden="true" />
        )}
        <span className="text-sm font-medium">{label}</span>
      </div>
      {shortcut && (
        <motion.span
          className="text-xs text-gray-900 shadow-sm px-2 py-0.5 rounded-md font-mono"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.05 }}
          aria-label={`Keyboard shortcut: ${shortcut}`}
        >
          {shortcut}
        </motion.span>
      )}
    </motion.div>
  );
};

