import React from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import phoneImage from '@/assets/product-phone.jpg';
import headphonesImage from '@/assets/product-headphones.jpg';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Smartphone Pro',
      vendor: 'TechGear Store',
      price: 899.99,
      originalPrice: 1199.99,
      rating: 4.8,
      reviews: 245,
      image: phoneImage,
      badge: 'Best Seller',
      badgeVariant: 'accent' as const,
    },
    {
      id: 2,
      name: 'Wireless Noise-Canceling Headphones',
      vendor: 'AudioMax',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.9,
      reviews: 156,
      image: headphonesImage,
      badge: 'New',
      badgeVariant: 'success' as const,
    },
    {
      id: 3,
      name: 'Smart Fitness Watch',
      vendor: 'HealthTech',
      price: 249.99,
      originalPrice: 349.99,
      rating: 4.7,
      reviews: 89,
      image: phoneImage,
      badge: 'Sale',
      badgeVariant: 'destructive' as const,
    },
    {
      id: 4,
      name: 'Professional Camera Kit',
      vendor: 'PhotoPro',
      price: 1299.99,
      originalPrice: 1599.99,
      rating: 4.9,
      reviews: 67,
      image: headphonesImage,
      badge: 'Premium',
      badgeVariant: 'secondary' as const,
    },
    {
      id: 5,
      name: 'Gaming Mechanical Keyboard',
      vendor: 'GameGear',
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.6,
      reviews: 134,
      image: phoneImage,
      badge: 'Hot',
      badgeVariant: 'accent' as const,
    },
    {
      id: 6,
      name: 'Ultra-Portable Laptop',
      vendor: 'CompuWorld',
      price: 1099.99,
      originalPrice: 1399.99,
      rating: 4.8,
      reviews: 203,
      image: headphonesImage,
      badge: 'Featured',
      badgeVariant: 'default' as const,
    },
  ];

  const discountPercentage = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products from top vendors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Badge */}
                <Badge 
                  variant={product.badgeVariant} 
                  className="absolute top-3 left-3"
                >
                  {product.badge}
                </Badge>
                
                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <Badge 
                    variant="destructive"
                    className="absolute top-3 right-3"
                  >
                    -{discountPercentage(product.originalPrice, product.price)}%
                  </Badge>
                )}

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="cart" className="rounded-full">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">by {product.vendor}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button variant="cart" className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;