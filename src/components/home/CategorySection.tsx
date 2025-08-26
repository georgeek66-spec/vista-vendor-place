import React from 'react';
import { Smartphone, Headphones, Laptop, Watch, Camera, Gamepad2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CategorySection = () => {
  const categories = [
    {
      name: 'Smartphones',
      icon: Smartphone,
      count: '1,234',
      color: 'bg-blue-500',
    },
    {
      name: 'Audio',
      icon: Headphones,
      count: '856',
      color: 'bg-purple-500',
    },
    {
      name: 'Laptops',
      icon: Laptop,
      count: '642',
      color: 'bg-green-500',
    },
    {
      name: 'Wearables',
      icon: Watch,
      count: '425',
      color: 'bg-orange-500',
    },
    {
      name: 'Cameras',
      icon: Camera,
      count: '318',
      color: 'bg-red-500',
    },
    {
      name: 'Gaming',
      icon: Gamepad2,
      count: '567',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of product categories from trusted vendors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} products</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;