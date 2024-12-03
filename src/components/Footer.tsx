import React from 'react';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="container mx-auto text-center">
        <p>© {year} John Doe. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}