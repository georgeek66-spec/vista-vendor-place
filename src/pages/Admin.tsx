import React from 'react';
import { BarChart3, Users, Package, DollarSign, TrendingUp, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Admin = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,562',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600',
    },
    {
      title: 'Active Vendors',
      value: '1,247',
      change: '+8.2%',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: 'Total Products',
      value: '25,431',
      change: '+15.1%',
      icon: Package,
      color: 'text-purple-600',
    },
    {
      title: 'Orders Today',
      value: '342',
      change: '+23.4%',
      icon: ShoppingCart,
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your marketplace efficiently</p>
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

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your marketplace</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Manage Vendors
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Package className="mr-2 h-4 w-4" />
                Review Products
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest marketplace updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New vendor approved</p>
                    <p className="text-xs text-muted-foreground">TechGear Store</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Product review pending</p>
                    <p className="text-xs text-muted-foreground">Gaming Laptop Pro</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Payment dispute opened</p>
                    <p className="text-xs text-muted-foreground">Order #12345</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Platform Health</CardTitle>
              <CardDescription>System status overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Server Status</span>
                  <span className="text-sm text-green-600 font-medium">Operational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Payment Gateway</span>
                  <span className="text-sm text-green-600 font-medium">Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Database</span>
                  <span className="text-sm text-yellow-600 font-medium">High Load</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">CDN</span>
                  <span className="text-sm text-green-600 font-medium">Optimal</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly revenue over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/50 rounded-lg">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
                <span className="ml-4 text-muted-foreground">Chart placeholder</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Top Categories</CardTitle>
              <CardDescription>Best performing product categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Electronics</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Fashion</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">72%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Home & Garden</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div className="bg-success h-2 rounded-full" style={{ width: '58%' }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">58%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Sports</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div className="bg-warning h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">45%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;