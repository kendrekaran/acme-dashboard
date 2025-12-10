import React from 'react';
import { motion } from 'framer-motion';
import { SEARCHES } from '@/constants/sidebarData';

export const SearchesList: React.FC = () => {
  return (
    <motion.div
      className="mt-8 px-6 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.4 }}
    >
      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Searches</h3>
      <div className="space-y-3">
        {SEARCHES.map((search, i) => (
          <motion.div
            key={`${search.name}-${i}`}
            className="flex items-center gap-3 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
            role="button"
            tabIndex={0}
            aria-label={`Search: ${search.name}`}
          >
            <motion.div
              className={`w-5 h-5 rounded-md ${search.color} flex items-center justify-center inner-shadow`}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
              aria-hidden="true"
            >
              <img src={search.icon} alt="" className="w-3 h-3 brightness-0 invert" />
            </motion.div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{search.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

