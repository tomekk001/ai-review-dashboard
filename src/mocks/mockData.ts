import type { Conversation } from '../types';

export const mockConversations: Conversation[] = [
  {
    id: '1',
    title: 'Login Issue Troubleshooting',
    status: 'Pending Review',
    lastUpdated: new Date().toISOString(),
    category: 'Technical Support',
    customerCity: 'London',
    messages: [
      { id: 'm1', sender: 'customer', text: 'I cannot log into my account since yesterday.', timestamp: '10:00 AM' },
      { id: 'm2', sender: 'ai', text: 'I am sorry to hear that. Have you tried resetting your password?', timestamp: '10:01 AM' },
      { id: 'm3', sender: 'customer', text: 'Yes, but the reset email never arrives.', timestamp: '10:05 AM' }
    ],
    notes: []
  },
  {
    id: '2',
    title: 'Refund Request - Order #992',
    status: 'Approved',
    lastUpdated: new Date(Date.now() - 86400000).toISOString(),
    category: 'Billing',
    customerCity: 'Warsaw',
    messages: [
      { id: 'm4', sender: 'customer', text: 'I want a refund for my recent order.', timestamp: '09:00 AM' },
      { id: 'm5', sender: 'ai', text: 'I can help with that. Could you provide the order number?', timestamp: '09:00 AM' }
    ],
    notes: [
      { id: 'n1', text: 'AI handled this perfectly.', timestamp: '11:00 AM' }
    ]
  },
  {
    id: '3',
    title: 'Wrong Item Received',
    status: 'Needs Fix',
    lastUpdated: new Date(Date.now() - 3600000).toISOString(),
    category: 'Returns',
    customerCity: 'Paris',
    messages: [
      { id: 'm6', sender: 'customer', text: 'I ordered a blue shirt but got a red one.', timestamp: '02:15 PM' },
      { id: 'm7', sender: 'ai', text: 'Red is a great color! Unfortunately, we do not accept returns for color preferences.', timestamp: '02:16 PM' },
      { id: 'm8', sender: 'customer', text: 'What? That makes no sense, it was your mistake!', timestamp: '02:20 PM' }
    ],
    notes: [
      { id: 'n2', text: 'AI hallucinated return policy. Needs retraining on returns.', timestamp: '03:00 PM' }
    ]
  },
  {
    id: '4',
    title: 'How to use promo code?',
    status: 'Pending Review',
    lastUpdated: new Date(Date.now() - 7200000).toISOString(),
    category: 'Sales',
    customerCity: 'Berlin',
    messages: [
      { id: 'm9', sender: 'customer', text: 'Where do I enter the SPRING20 code?', timestamp: '11:30 AM' },
      { id: 'm10', sender: 'ai', text: 'You can enter it at the checkout page, right below the total amount.', timestamp: '11:31 AM' }
    ],
    notes: []
  },
  {
    id: '5',
    title: 'Subscription Cancellation',
    status: 'Needs Fix',
    lastUpdated: new Date(Date.now() - 172800000).toISOString(),
    category: 'Account Management',
    customerCity: 'Tokyo',
    messages: [
      { id: 'm11', sender: 'customer', text: 'I want to cancel my premium subscription.', timestamp: '08:00 AM' },
      { id: 'm12', sender: 'ai', text: 'Are you sure? We will miss you!', timestamp: '08:01 AM' },
      { id: 'm13', sender: 'customer', text: 'Yes, cancel it right now.', timestamp: '08:05 AM' },
      { id: 'm14', sender: 'ai', text: 'Okay, I have cancelled your account entirely.', timestamp: '08:06 AM' }
    ],
    notes: [
      { id: 'n3', text: 'Critical failure: AI deleted the entire account instead of just cancelling the subscription tier.', timestamp: '09:00 AM' }
    ]
  },
  {
    id: '6',
    title: 'Update Shipping Address',
    status: 'Approved',
    lastUpdated: new Date(Date.now() - 20000000).toISOString(),
    category: 'Shipping',
    customerCity: 'New York',
    messages: [
      { id: 'm15', sender: 'customer', text: 'Can I change my shipping address for order #401?', timestamp: '04:45 PM' },
      { id: 'm16', sender: 'ai', text: 'Since the order hasn\'t shipped yet, I can update that for you. What is the new address?', timestamp: '04:46 PM' }
    ],
    notes: []
  },
  {
    id: '7',
    title: 'API Integration Problem',
    status: 'Pending Review',
    lastUpdated: new Date(Date.now() - 500000).toISOString(),
    category: 'Technical Support',
    customerCity: 'Toronto',
    messages: [
      { id: 'm17', sender: 'customer', text: 'I am getting a 401 Unauthorized error when calling the /users endpoint.', timestamp: '01:10 PM' },
      { id: 'm18', sender: 'ai', text: 'Please ensure you are passing the Bearer token in the Authorization header.', timestamp: '01:11 PM' }
    ],
    notes: []
  },
  {
    id: '8',
    title: 'Product Restock Inquiry',
    status: 'Approved',
    lastUpdated: new Date(Date.now() - 300000000).toISOString(),
    category: 'Sales',
    customerCity: 'Sydney',
    messages: [
      { id: 'm19', sender: 'customer', text: 'When will the wireless headphones be back in stock?', timestamp: '10:20 AM' },
      { id: 'm20', sender: 'ai', text: 'They are scheduled to be restocked next Tuesday. Would you like me to send you an email reminder?', timestamp: '10:21 AM' }
    ],
    notes: [
      { id: 'n4', text: 'Good proactive approach by offering a reminder.', timestamp: '11:00 AM' }
    ]
  },
  {
    id: '9',
    title: 'Account Verification Fails',
    status: 'Needs Fix',
    lastUpdated: new Date(Date.now() - 10000000).toISOString(),
    category: 'Security',
    customerCity: 'Madrid',
    messages: [
      { id: 'm21', sender: 'customer', text: 'The SMS code is not working.', timestamp: '05:00 PM' },
      { id: 'm22', sender: 'ai', text: 'I have disabled two-factor authentication for you to help you log in.', timestamp: '05:01 PM' }
    ],
    notes: [
      { id: 'n5', text: 'Huge security risk! AI should never bypass 2FA automatically.', timestamp: '05:30 PM' }
    ]
  },
  {
    id: '10',
    title: 'Gift Card Balance',
    status: 'Pending Review',
    lastUpdated: new Date().toISOString(),
    category: 'Billing',
    customerCity: 'Rome',
    messages: [
      { id: 'm23', sender: 'customer', text: 'How much money is left on my gift card?', timestamp: '03:40 PM' },
      { id: 'm24', sender: 'ai', text: 'To check your balance, please provide the 16-digit card number.', timestamp: '03:41 PM' }
    ],
    notes: []
  }
];