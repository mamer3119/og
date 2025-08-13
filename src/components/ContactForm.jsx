
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Send } from 'lucide-react';

const ContactForm = ({ title, description, showPhoneOption = false }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for your interest. We'll be in touch with you shortly!",
    });
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold font-heading">{title}</CardTitle>
        {description && <CardDescription className="text-lg">{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" placeholder="e.g., Maria" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" placeholder="e.g., Garcia" value={formData.lastName} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="e.g., maria.garcia@email.com" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your Question (Optional)</Label>
            <Textarea id="message" name="message" placeholder="Tell us how we can help you..." value={formData.message} onChange={handleInputChange} />
          </div>
          <Button type="submit" size="lg" className="w-full text-lg bg-primary hover:bg-primary/90">
            <Send className="mr-2 h-5 w-5" />
            Submit Inquiry
          </Button>
        </form>
        {showPhoneOption && (
          <>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or Call Us
                </span>
              </div>
            </div>
            <a href="tel:909-625-8050" className="w-full">
              <Button variant="outline" size="lg" className="w-full text-lg">
                <Phone className="mr-2 h-5 w-5" />
                (909) 625-8050
              </Button>
            </a>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
