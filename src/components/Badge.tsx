import React from 'react';
import type { ReviewStatus } from '../types';

interface BadgeProps {
  status: ReviewStatus;
}
//displays a colored badge based on the current review status
export const Badge: React.FC<BadgeProps> = ({ status }) => {
  const colors = {
    'Approved': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Needs Fix': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    'Pending Review': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  };

  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[status]}`}>
      {status}
    </span>
  );
};