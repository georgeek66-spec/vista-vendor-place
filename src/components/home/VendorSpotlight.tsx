import React from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const VendorSpotlight = () => {
  const vendors = [
    {
      id: 1,
      name: 'TechGear Pro',
      location: 'San Francisco, CA',
      rating: 4.9,
      reviews: 2547,
      products: 156,
      responseTime: '< 1 hour',
      featured: true,
      description: 'Premium electronics and gadgets from leading brands',
      specialties: ['Electronics', 'Gadgets', 'Accessories'],
    },
    {
      id: 2,
      name: 'AudioMax Store',
      location: 'New York, NY',
      rating: 4.8,
      reviews: 1823,
      products: 89,
      responseTime: '< 2 hours',
      featured: false,
      description: 'Professional audio equipment and sound solutions',
      specialties: ['Audio', 'Professional', 'Studio'],
    },
    {
      id: 3,
      name: 'Fashion Forward',
      location: 'Los Angeles, CA',
      rating: 4.7,
      reviews: 3156,
      products: 342,
      responseTime: '< 3 hours',
      featured: false,
      description: 'Trendy fashion and lifestyle products',
      specialties: ['Fashion', 'Lifestyle', 'Accessories'],
    },
    {
      id: 4,
      name: 'Home Essentials',
      location: 'Chicago, IL',
      rating: 4.6,
      reviews: 1456,
      products: 278,
      responseTime: '< 4 hours',
      featured: false,
      description: 'Quality home and garden products',
      specialties: ['Home', 'Garden', 'Decor'],
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Vendors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our top-rated vendors committed to providing exceptional products and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor) => (
            <Card key={vendor.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                {vendor.featured && (
                  <Badge variant="accent" className="mb-4">
                    ⭐ Featured Vendor
                  </Badge>
                )}
                
                <div className="text-center mb-4">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">
                      {vendor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{vendor.name}</h3>
                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {vendor.location}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center mb-4">
                  {vendor.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4 justify-center">
                  {vendor.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{vendor.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({vendor.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Products</span>
                    </div>
                    <span className="font-medium">{vendor.products}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Response</span>
                    </div>
                    <span className="font-medium text-green-600">{vendor.responseTime}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Visit Store
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg">
            Become a Vendor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VendorSpotlight;