import React, { useState, useEffect } from 'react';
import type { Conversation, ReviewStatus } from './types';
import { mockConversations } from './mocks/mockData';
import { Sidebar } from './components/Sidebar';
import { ConversationDetails } from './components/ConversationDetails';

const App: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const [filter, setFilter] = useState<ReviewStatus | 'All'>('All');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Derived state for the sidebar and main view
  const filteredConversations = conversations.filter(c => 
    filter === 'All' ? true : c.status === filter
  );
  const selectedConv = conversations.find(c => c.id === selectedId);

  // Updates the review status of the active conversation
  const handleStatusChange = (newStatus: ReviewStatus) => {
    if (!selectedId) return;
    setConversations(prev => prev.map(c => 
      c.id === selectedId ? { ...c, status: newStatus, lastUpdated: new Date().toISOString() } : c
    ));
  };

  // Appends a new internal note to the active conversation
  const handleAddNote = (text: string) => {
    if (!selectedId) return;
    setConversations(prev => prev.map(c => {
      if (c.id === selectedId) {
        return {
          ...c,
          notes: [...c.notes, { id: Date.now().toString(), text, timestamp: new Date().toLocaleTimeString() }]
        };
      }
      return c;
    }));
  };

  return (
    // Responsive main layout: column on mobile, row on desktop
    <div className="flex flex-col md:flex-row h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans overflow-hidden transition-colors duration-200">
      
      {/* Theme toggle button */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 shadow hover:scale-105 transition-transform"
        title="Toggle Theme"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <Sidebar 
        conversations={filteredConversations} 
        selectedId={selectedId} 
        onSelect={setSelectedId}
        filter={filter}
        onFilterChange={setFilter}
      />

      {/* Main content area */}
      <main className="flex-1 flex flex-col relative bg-white dark:bg-gray-900 h-2/3 md:h-full overflow-hidden">
        {selectedConv ? (
          <ConversationDetails 
            conversation={selectedConv}
            onStatusChange={handleStatusChange}
            onAddNote={handleAddNote}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center p-8"> 
            <div className="text-center text-gray-500 dark:text-gray-400">
              <p className="mt-1 text-sm">Select an item from the sidebar to start reviewing.</p>
            </div>
          </div>
        )}
      </main>
      
    </div>
  );
};

export default App;