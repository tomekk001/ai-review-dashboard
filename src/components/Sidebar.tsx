import React from 'react';
import type { Conversation, ReviewStatus } from '../types';
import { Badge } from './Badge';

interface SidebarProps {
  conversations: Conversation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  filter: ReviewStatus | 'All';
  onFilterChange: (filter: ReviewStatus | 'All') => void;
}

// Renders the sidebar containing status filters and a selectable list of conversations
export const Sidebar: React.FC<SidebarProps> = ({ conversations, selectedId, onSelect, filter, onFilterChange }) => {
  const filters: (ReviewStatus | 'All')[] = ['All', 'Pending Review', 'Approved', 'Needs Fix'];

  return (
    <aside className="w-full md:w-80 flex flex-col border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shrink-0 h-1/3 md:h-full overflow-hidden">
      
      {/* Sidebar header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI Dashboard</h1>
        
        {/* Status filtering */}
        <div className="flex flex-wrap gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={`text-xs px-2 py-1 rounded border transition-colors ${
                filter === f 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      
      {/* Scrollable list of conversations */}
      <div className="flex-1 overflow-y-auto">
        
        {/* Empty state */}
        {conversations.length === 0 && (
          <p className="p-4 text-sm text-gray-500 text-center">No conversations found.</p>
        )}
        
        {/* Conversation item card */}
        {conversations.map(conv => (
          <div 
            key={conv.id} 
            onClick={() => onSelect(conv.id)}
            className={`p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer transition-colors ${
              selectedId === conv.id 
                ? 'bg-blue-50 dark:bg-gray-700' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
            }`}
          >
            <h3 className="font-semibold text-gray-900 dark:text-white truncate">{conv.title}</h3>
            
            {/* Status badge and date */}
            <div className="flex justify-between items-center mt-2 text-sm">
              <Badge status={conv.status} />
              <span className="text-gray-500 dark:text-gray-400 text-xs">{new Date(conv.lastUpdated).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};