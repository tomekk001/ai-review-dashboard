# AI Conversation Review Dashboard

This is a single-page application for reviewing AI-generated customer conversations, built as a frontend coding task.

## 🚀 Live Demo

(https://aireviewdashboard.netlify.app/)

## 🛠 Tech Stack

* **React 18**
* **TypeScript**
* **Vite**
* **Tailwind CSS**

## 📦 How to run the project locally

1. Clone the repository:

```bash
git clone https://github.com/tomekk001/ai-review-dashboard.git
```

2. Navigate to the project directory:

```bash
cd ai-review-dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit:

```
http://localhost:5173
```

## 🧠 Approach & Architecture

The primary focus was on building a clean, maintainable, and responsive UI. Key technical decisions include:

**State Management:**
React's local state (`useState`, `useEffect`) handles conversations, active filters, and UI states. Since no backend mutations are required, all updates (status changes, adding notes) are kept in-memory.

**Component Structure:**
The application is divided into logical, reusable components (Sidebar, ConversationDetails, Badge) to keep the main `App.tsx` file clean and focused on global state distribution.

**API Integration:**
A public weather API (wttr.in) is integrated via a custom `useWeather` hook. It asynchronously fetches the weather based on the customer's city, gracefully handling both loading and error states.

**UI/UX & "Nice to Haves":**

* Mobile-first responsive design
* Dark/Light mode switch utilizing Tailwind's class strategy
* Status filtering system within the sidebar
* Proper handling of edge cases:

  * empty states (no conversation selected)
  * validation (preventing empty notes)
  * loading and error states

All initial data (conversations, users, messages) is fully mocked per the requirements.
