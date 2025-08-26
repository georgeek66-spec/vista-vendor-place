import React, { useState } from 'react';
import { Send, Smile, Paperclip, Phone, Video, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(1);

  const conversations = [
    {
      id: 1,
      name: 'TechGear Store',
      lastMessage: 'Your order has been shipped!',
      time: '2 min ago',
      unread: 2,
      online: true,
      type: 'vendor',
    },
    {
      id: 2,
      name: 'Customer Support',
      lastMessage: 'How can I help you today?',
      time: '1 hour ago',
      unread: 0,
      online: true,
      type: 'support',
    },
    {
      id: 3,
      name: 'AudioMax',
      lastMessage: 'Thank you for your purchase!',
      time: '3 hours ago',
      unread: 1,
      online: false,
      type: 'vendor',
    },
    {
      id: 4,
      name: 'HealthTech',
      lastMessage: 'Your warranty has been extended',
      time: '1 day ago',
      unread: 0,
      online: false,
      type: 'vendor',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'TechGear Store',
      content: 'Hello! Thank you for your order. We\'re processing it now.',
      time: '10:30 AM',
      isOwn: false,
    },
    {
      id: 2,
      sender: 'You',
      content: 'Great! When can I expect delivery?',
      time: '10:32 AM',
      isOwn: true,
    },
    {
      id: 3,
      sender: 'TechGear Store',
      content: 'Your order will be delivered within 2-3 business days. You\'ll receive a tracking number shortly.',
      time: '10:35 AM',
      isOwn: false,
    },
    {
      id: 4,
      sender: 'TechGear Store',
      content: 'Your order #1234 has been shipped! 📦',
      time: '2:15 PM',
      isOwn: false,
    },
    {
      id: 5,
      sender: 'You',
      content: 'Awesome, thanks for the update!',
      time: '2:16 PM',
      isOwn: true,
    },
  ];

  const sendMessage = () => {
    if (message.trim()) {
      // Logic to send message would go here
      setMessage('');
    }
  };

  const currentChat = conversations.find(conv => conv.id === selectedChat);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
          {/* Conversations List */}
          <Card className="lg:col-span-1 shadow-md border-0">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Messages</h2>
                <Badge variant="secondary">
                  {conversations.filter(c => c.unread > 0).length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedChat(conv.id)}
                    className={`p-4 cursor-pointer transition-colors hover:bg-muted/50 ${
                      selectedChat === conv.id ? 'bg-muted border-r-2 border-primary' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="gradient-primary text-white">
                            {conv.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {conv.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium truncate">{conv.name}</h3>
                          <span className="text-xs text-muted-foreground">{conv.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground truncate">
                            {conv.lastMessage}
                          </p>
                          {conv.unread > 0 && (
                            <Badge variant="accent" className="text-xs">
                              {conv.unread}
                            </Badge>
                          )}
                        </div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {conv.type === 'vendor' ? 'Vendor' : 'Support'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-3 shadow-md border-0 flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="gradient-primary text-white">
                      {currentChat?.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{currentChat?.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {currentChat?.online ? 'Online' : 'Last seen 1 hour ago'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.isOwn
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button variant="accent" size="icon" onClick={sendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Chat Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-md border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Get help anytime with our round-the-clock customer support
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Video Calls</h3>
              <p className="text-sm text-muted-foreground">
                Connect face-to-face with vendors for better communication
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Instant Messaging</h3>
              <p className="text-sm text-muted-foreground">
                Real-time communication for quick responses and updates
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;