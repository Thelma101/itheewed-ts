import React from 'react';
import { showToast } from '../components/SimpleToast';

const ToastTestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Toast Notification Test Page
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-4">
              Click the buttons below to test different types of toast notifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Success Toast */}
            <button
              onClick={() => {
                console.log('Success toast clicked');
                showToast('This is a success message! 🎉', 'success');
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Success Toast
            </button>

            {/* Error Toast */}
            <button
              onClick={() => {
                console.log('Error toast clicked');
                showToast('This is an error message! ❌', 'error');
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Error Toast
            </button>

            {/* Info Toast */}
            <button
              onClick={() => {
                console.log('Info toast clicked');
                showToast('This is an info message! ℹ️', 'info');
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Info Toast
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Multiple Toasts */}
            <button
              onClick={() => {
                console.log('Multiple toasts clicked');
                showToast('First toast!', 'success');
                setTimeout(() => showToast('Second toast!', 'error'), 500);
                setTimeout(() => showToast('Third toast!', 'info'), 1000);
              }}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Multiple Toasts
            </button>

            {/* Long Message */}
            <button
              onClick={() => {
                console.log('Long message toast clicked');
                showToast('This is a very long message to test how the toast handles longer text content. It should wrap properly and still look good!', 'info');
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Long Message
            </button>
          </div>

          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Toasts will appear in the top-right corner of the screen
            </p>
            <p className="text-xs text-gray-400 mt-2">
              You can click on toasts to dismiss them early
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="text-blue-500 hover:text-blue-700 underline"
          >
            ← Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToastTestPage; 