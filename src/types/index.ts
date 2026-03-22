export type ReviewStatus = 'Pending Review' | 'Approved' | 'Needs Fix';
export type SenderType = 'customer' | 'ai';

export interface Message {
  id: string;
  sender: SenderType;
  text: string;
  timestamp: string;
}

export interface ReviewNote {
  id: string;
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  title: string;
  status: ReviewStatus;
  lastUpdated: string;
  category: string;
  customerCity: string;
  messages: Message[];
  notes: ReviewNote[];
}