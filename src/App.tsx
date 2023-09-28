import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen font-body flex flex-col justify-between bg-gray-100">
      <div>
        <Header />

        <div className="w-full pt-2">
          <main className="max-w-4xl mx-auto pt-8">
            <Outlet />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
