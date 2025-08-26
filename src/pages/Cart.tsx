import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import phoneImage from '@/assets/product-phone.jpg';
import headphonesImage from '@/assets/product-headphones.jpg';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Smartphone Pro',
      vendor: 'TechGear Store',
      price: 899.99,
      quantity: 1,
      image: phoneImage,
      inStock: true,
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      vendor: 'AudioMax',
      price: 299.99,
      quantity: 2,
      image: headphonesImage,
      inStock: true,
    },
    {
      id: 3,
      name: 'Smart Fitness Watch',
      vendor: 'HealthTech',
      price: 249.99,
      quantity: 1,
      image: phoneImage,
      inStock: false,
    },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15.99;
  const tax = subtotal * 0.08;
  const discount = promoCode === 'SAVE10' ? subtotal * 0.1 : 0;
  const total = subtotal + shipping + tax - discount;

  const applyPromoCode = () => {
    // Simple promo code logic
    if (promoCode === 'SAVE10') {
      // Already applied
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link to="/products">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Add some products to get started!</p>
            <Link to="/products">
              <Button variant="accent" size="lg">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">Sold by {item.vendor}</p>
                            {!item.inStock && (
                              <Badge variant="destructive" className="mt-1">
                                Out of Stock
                              </Badge>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={!item.inStock}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={!item.inStock}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-xl font-bold text-primary">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              ${item.price.toFixed(2)} each
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="shadow-md border-0 sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Promo Code */}
                  <div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={applyPromoCode}>
                        Apply
                      </Button>
                    </div>
                    {promoCode === 'SAVE10' && (
                      <p className="text-sm text-green-600 mt-1">Promo code applied!</p>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button 
                    variant="cart" 
                    size="lg" 
                    className="w-full"
                    disabled={cartItems.some(item => !item.inStock)}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>

                  {cartItems.some(item => !item.inStock) && (
                    <p className="text-sm text-destructive text-center">
                      Remove out-of-stock items to continue
                    </p>
                  )}

                  {/* Security Info */}
                  <div className="text-center text-sm text-muted-foreground">
                    <Lock className="inline h-3 w-3 mr-1" />
                    Secure checkout with SSL encryption
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;