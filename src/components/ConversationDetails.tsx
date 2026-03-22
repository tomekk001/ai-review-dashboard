import React, { useState } from 'react';
import type { Conversation, ReviewStatus } from '../types';
import { useWeather } from '../hooks/useWeather';
import { Badge } from './Badge';

interface ConversationDetailsProps {
  conversation: Conversation;
  onStatusChange: (status: ReviewStatus) => void;
  onAddNote: (noteText: string) => void;
}

// Displays the full conversation history, weather data, and handles review actions (status updates, notes)
export const ConversationDetails: React.FC<ConversationDetailsProps> = ({ 
  conversation, 
  onStatusChange, 
  onAddNote 
}) => {
  const [noteInput, setNoteInput] = useState('');
  const [noteError, setNoteError] = useState(false);
  const { weather, loading: weatherLoading, error: weatherError } = useWeather(conversation.customerCity);

  const handleSaveNote = () => {
    if (!noteInput.trim()) {
      setNoteError(true);
      return;
    }
    setNoteError(false);
    onAddNote(noteInput);
    setNoteInput('');
  };

  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-gray-900 transition-colors duration-200 overflow-hidden relative">
      {/* HEADER */}
      <header className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0 transition-colors duration-200">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white truncate">{conversation.title}</h2>
            <Badge status={conversation.status} />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Category: {conversation.category} • City: {conversation.customerCity}
          </p>
        </div>
        
        {/* WEATHER WIDGET WITH API */}
        <div className="text-right bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 min-w-[120px] shadow-sm transition-colors mr-9"> {/* <-- DODANA KLASA mr-10 */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Current Weather</p>
          {weatherLoading && <span className="text-sm text-blue-500 dark:text-blue-400 animate-pulse">Loading...</span>}
          {weatherError && <span className="text-sm text-red-500 dark:text-red-400">Failed to load</span>}
          {!weatherLoading && !weatherError && weather && <span className="text-sm font-medium text-gray-900 dark:text-white">{weather}</span>}
        </div>
      </header>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {conversation.messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] md:max-w-[70%] p-3 rounded-lg shadow-sm ${
              msg.sender === 'customer' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none border border-gray-200 dark:border-gray-600'
            }`}>
              <p className={`text-xs mb-1 opacity-70 uppercase font-medium ${msg.sender === 'customer' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                {msg.sender} • {msg.timestamp}
              </p>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* REVIEW ACTIONS & NOTES */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 md:p-6 flex flex-col gap-4 shrink-0 transition-colors duration-200">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          
          {/* Notes Section */}
          <div className="flex-1 w-full md:mr-4">
            <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Reviewer Notes</h4>
            <div className="max-h-24 overflow-y-auto mb-3 space-y-2 pr-2">
              {conversation.notes.length === 0 && (
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">No notes yet.</p>
              )}
              {conversation.notes.map(note => (
                <div key={note.id} className="text-sm bg-white dark:bg-gray-700 p-2.5 rounded border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 shadow-sm">
                   <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1 font-medium">{note.timestamp}</span>
                   {note.text}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="text" 
                value={noteInput}
                onChange={(e) => {
                  setNoteInput(e.target.value);
                  if (noteError) setNoteError(false);
                }}
                placeholder="Add an internal note..."
                className={`flex-1 bg-white dark:bg-gray-900 border ${
                  noteError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } rounded p-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
              />
              <button 
                onClick={handleSaveNote} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
              >
                Save Note
              </button>
            </div>
            {noteError && <p className="text-red-500 text-xs mt-1">Note cannot be empty.</p>}
          </div>

          {/* Actions Section */}
          <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto min-w-[150px]">
            <p className="text-sm font-semibold mb-1 text-gray-900 dark:text-white hidden md:block">Update Status</p>
            <button 
              onClick={() => onStatusChange('Approved')}
              className="flex-1 md:flex-none bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors shadow-sm"
            >
              Approve
            </button>
            <button 
              onClick={() => onStatusChange('Needs Fix')}
              className="flex-1 md:flex-none bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors shadow-sm"
            >
              Mark Needs Fix
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};