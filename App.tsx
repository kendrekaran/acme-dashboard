import React from 'react';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { Sidebar } from './components/sidebar/Sidebar';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  return (
    <ErrorBoundary>
      <div className="flex bg-gray-50 min-h-screen font-sans">
        <Sidebar />
        <Dashboard />
      </div>
    </ErrorBoundary>
  );
}

export default App;