import React from 'react';
import { motion } from 'framer-motion';
import { FAVORITES } from '@/constants/sidebarData';

export const FavoritesList: React.FC = () => {
  return (
    <motion.div
      className="mt-8 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-tight mb-3">Favorites</h3>
      <div className="space-y-3">
        {FAVORITES.map((fav, i) => (
          <motion.div
            key={`${fav.name}-${i}`}
            className="flex items-center justify-between group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
            role="button"
            tabIndex={0}
            aria-label={`${fav.name} - ${fav.type}`}
          >
            <div className="flex items-center gap-3">
              <motion.img
                src={fav.img}
                alt={`${fav.name} logo`}
                className="w-5 h-5 rounded-full object-cover"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              />
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{fav.name}</span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium uppercase font-mono">{fav.type}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

