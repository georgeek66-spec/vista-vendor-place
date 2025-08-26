import React from 'react';
import { Package, DollarSign, TrendingUp, ShoppingCart, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Vendor = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$18,420',
      change: '+15.2%',
      icon: DollarSign,
      color: 'text-green-600',
    },
    {
      title: 'Products Listed',
      value: '48',
      change: '+3',
      icon: Package,
      color: 'text-blue-600',
    },
    {
      title: 'Orders This Month',
      value: '127',
      change: '+18.7%',
      icon: ShoppingCart,
      color: 'text-purple-600',
    },
    {
      title: 'Conversion Rate',
      value: '3.8%',
      change: '+0.5%',
      icon: TrendingUp,
      color: 'text-orange-600',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: '$299.99',
      stock: 24,
      sales: 156,
      status: 'active',
    },
    {
      id: 2,
      name: 'Gaming Mechanical Keyboard',
      price: '$159.99',
      stock: 0,
      sales: 89,
      status: 'out_of_stock',
    },
    {
      id: 3,
      name: 'Professional Camera Lens',
      price: '$849.99',
      stock: 12,
      sales: 34,
      status: 'active',
    },
    {
      id: 4,
      name: 'Smartphone Case Pro',
      price: '$29.99',
      stock: 156,
      sales: 203,
      status: 'active',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'out_of_stock':
        return <Badge variant="destructive">Out of Stock</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Vendor Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, TechGear Store!</p>
          </div>
          <Button variant="accent">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="shadow-md border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                Add New Product
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Package className="mr-2 h-4 w-4" />
                Manage Inventory
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="mr-2 h-4 w-4" />
                View Earnings
              </Button>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Order #1234</p>
                    <p className="text-xs text-muted-foreground">Premium Headphones</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Shipped</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Order #1235</p>
                    <p className="text-xs text-muted-foreground">Gaming Keyboard</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Order #1236</p>
                    <p className="text-xs text-muted-foreground">Camera Lens</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Confirmed</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Performance</CardTitle>
              <CardDescription>Your store metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Store Rating</span>
                  <span className="text-sm font-medium">4.8/5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Response Time</span>
                  <span className="text-sm font-medium">2.4 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Return Rate</span>
                  <span className="text-sm font-medium">2.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Completion Rate</span>
                  <span className="text-sm font-medium">98.7%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Table */}
        <Card className="shadow-md border-0">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Your Products</CardTitle>
                <CardDescription>Manage your product listings</CardDescription>
              </div>
              <Button variant="outline">View All Products</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Product</th>
                    <th className="text-left py-3 px-4 font-medium">Price</th>
                    <th className="text-left py-3 px-4 font-medium">Stock</th>
                    <th className="text-left py-3 px-4 font-medium">Sales</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td className="py-3 px-4">
                        <div className="font-medium">{product.name}</div>
                      </td>
                      <td className="py-3 px-4">{product.price}</td>
                      <td className="py-3 px-4">{product.stock}</td>
                      <td className="py-3 px-4">{product.sales}</td>
                      <td className="py-3 px-4">{getStatusBadge(product.status)}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Vendor;