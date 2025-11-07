
import React from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { productGrids } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <CategoryNav />
      <main className="max-w-screen-2xl mx-auto">
        <Hero />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 -mt-36 md:-mt-64 lg:-mt-80 relative z-10">
          {productGrids.map((grid, index) => (
            <ProductGrid key={index} title={grid.title} products={grid.products} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
