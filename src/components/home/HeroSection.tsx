import React from 'react';
import { ArrowRight, Star, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  const stats = [
    { label: 'Active Vendors', value: '10K+', icon: TrendingUp },
    { label: 'Products', value: '500K+', icon: Star },
    { label: 'Happy Customers', value: '1M+', icon: Shield },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🎉 New vendors joining daily
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Amazing
              <span className="block gradient-accent bg-clip-text text-transparent">
                Products
              </span>
              from Trusted Vendors
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Shop from thousands of verified vendors offering quality products with secure payments and fast delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white bg-white/20 text-black/20 hover:bg-white/10">
                Become a Vendor
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-6 w-6 text-white/80 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroBanner}
                alt="Hero Banner"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live Orders</span>
              </div>
              <div className="text-2xl font-bold text-primary">247</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">4.9/5 Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;