import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Top 10 Tech Gadgets for 2024',
      excerpt: 'Discover the most innovative and game-changing tech products that are reshaping how we work and live.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Technology',
      featured: true,
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Laptop for Your Needs',
      excerpt: 'A comprehensive guide to selecting the right laptop based on your budget, performance requirements, and use case.',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Buying Guide',
      featured: false,
    },
    {
      id: 3,
      title: 'Sustainable Shopping: Eco-Friendly Product Choices',
      excerpt: 'Learn about environmentally conscious shopping and how to make sustainable product choices that benefit the planet.',
      author: 'Emma Wilson',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Sustainability',
      featured: false,
    },
    {
      id: 4,
      title: 'The Rise of Smart Home Technology',
      excerpt: 'Explore the latest trends in smart home automation and how IoT devices are transforming modern living spaces.',
      author: 'David Rodriguez',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Smart Home',
      featured: false,
    },
    {
      id: 5,
      title: 'Fashion Trends 2024: What\'s Hot This Season',
      excerpt: 'Stay ahead of the curve with our comprehensive guide to the biggest fashion trends dominating 2024.',
      author: 'Lisa Park',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Fashion',
      featured: false,
    },
    {
      id: 6,
      title: 'Building Your Home Office: Essential Equipment Guide',
      excerpt: 'Create the perfect productive workspace with our expert recommendations for home office equipment and setup.',
      author: 'James Miller',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Workspace',
      featured: false,
    },
  ];

  const categories = ['All', 'Technology', 'Buying Guide', 'Sustainability', 'Smart Home', 'Fashion', 'Workspace'];
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">VistaMarket Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, guides, and insights from the world of e-commerce
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Card className="mb-12 overflow-hidden shadow-lg border-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-primary h-64 md:h-auto flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Badge variant="accent" className="mb-4">Featured</Badge>
                  <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
                  <p className="text-white/90">Don't miss our top pick for this week</p>
                </div>
              </div>
              
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-3">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6 text-lg">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="accent">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-card flex items-center justify-center">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-muted-foreground">Article Preview</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 gradient-primary text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-white/90 mb-6 text-lg">
              Subscribe to our newsletter for the latest articles, product updates, and exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-black"
              />
              <Button variant="accent" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;