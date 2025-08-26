import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import ProductGrid from '@/components/home/ProductGrid';
import VendorSpotlight from '@/components/home/VendorSpotlight';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategorySection />
      <ProductGrid />
      <VendorSpotlight />
    </div>
  );
};

export default Home;