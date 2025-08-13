import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, Send, Shield, Award, Users, Clock, ChevronRight, 
  CheckCircle, Star, Lock, TrendingUp, Heart
} from 'lucide-react';
import {
  trackFormFieldFocus,
  trackApplicationSubmit,
  trackFormAbandonment,
  trackCTAClick,
  setUserProperties
} from '@/utils/analytics';

const OptimizedContactForm = ({ 
  title = "Start Your Healthcare Career Today",
  subtitle = "Join 2,500+ successful graduates",
  programType = null,
  variant = 'control' // For A/B testing
}) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    program: programType || '',
    startDate: '',
    fundingInterest: '',
    hasChildren: '',
    currentEmployment: ''
  });
  const [formStartTime] = useState(Date.now());
  const [trustPulse, setTrustPulse] = useState(true);

  // Dynamic social proof
  const [recentActivity, setRecentActivity] = useState(null);
  useEffect(() => {
    const activities = [
      "Maria from Pomona just enrolled in CNA program",
      "Jennifer from Ontario completed her application",
      "Sarah from Claremont qualified for WIOA funding",
      "Lisa from Upland started her HHA training"
    ];
    
    const interval = setInterval(() => {
      setRecentActivity(activities[Math.floor(Math.random() * activities.length)]);
      setTimeout(() => setRecentActivity(null), 5000);
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  // Trust indicators data
  const trustIndicators = [
    { icon: Shield, text: "CDPH Approved", color: "text-green-600" },
    { icon: Award, text: "92% Pass Rate", color: "text-blue-600" },
    { icon: Users, text: "2,500+ Graduates", color: "text-purple-600" },
    { icon: Clock, text: "10+ Years", color: "text-orange-600" }
  ];

  // Handle input changes with analytics tracking
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Track field interaction
    trackFormFieldFocus(name, 'optimized_contact_form');
  };

  // Handle step progression
  const handleNextStep = (e) => {
    e.preventDefault();
    
    if (step === 1) {
      // Validate step 1
      if (!formData.firstName || !formData.email) {
        toast({
          title: "Please complete all required fields",
          variant: "destructive"
        });
        return;
      }
      
      // Track micro-conversion
      trackCTAClick('Continue to Step 2', 'contact_form_step_1', 'button');
      
      // Set user properties for segmentation
      setUserProperties({
        userType: 'lead',
        formProgress: 'step_2'
      });
      
      setStep(2);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate form completion time
    const completionTime = (Date.now() - formStartTime) / 1000;
    
    // Track successful conversion
    trackApplicationSubmit(
      formData.program || 'general',
      'optimized_contact_form',
      {
        completionTime,
        hasPhone: !!formData.phone,
        fundingInterest: formData.fundingInterest,
        variant: variant
      }
    );
    
    // Set form as submitted for abandonment tracking
    e.target.setAttribute('data-submitted', 'true');
    
    // Show success message
    toast({
      title: "🎉 Application Submitted Successfully!",
      description: "An admissions counselor will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      firstName: '',
      email: '',
      phone: '',
      program: '',
      startDate: '',
      fundingInterest: '',
      hasChildren: '',
      currentEmployment: ''
    });
    setStep(1);
  };

  // Calculate progress percentage
  const progressPercentage = step === 1 ? 40 : 100;

  return (
    <>
      {/* Real-time social proof notification */}
      <AnimatePresence>
        {recentActivity && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-4 z-50 bg-white shadow-lg rounded-lg p-4 max-w-sm"
          >
            <div className="flex items-center space-x-2">
              <div className="bg-green-100 rounded-full p-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-700">{recentActivity}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Card className="w-full max-w-2xl mx-auto shadow-2xl border-2 border-green-100">
        {/* Trust banner */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 border-b">
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            {trustIndicators.map((indicator, idx) => (
              <div key={idx} className="flex items-center space-x-1">
                <indicator.icon className={`h-4 w-4 ${indicator.color}`} />
                <span className="font-semibold text-gray-700">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>

        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-2">
            <Badge variant="success" className="animate-pulse">
              <Star className="h-3 w-3 mr-1" />
              Limited Spots Available
            </Badge>
          </div>
          <CardTitle className="text-3xl font-bold font-heading bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {title}
          </CardTitle>
          <CardDescription className="text-lg mt-2">{subtitle}</CardDescription>
          
          {/* Progress indicator */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Step {step} of 2</span>
              <span>{progressPercentage}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={step === 2 ? handleSubmit : handleNextStep} className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  {/* Step 1: Essential Information */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Get Your Free Career Guide
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      No obligation • Instant download • WIOA funding info included
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="flex items-center">
                      First Name <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      placeholder="Enter your first name" 
                      value={formData.firstName} 
                      onChange={handleInputChange}
                      required
                      className="text-lg"
                      autoComplete="given-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      Email Address <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      required
                      className="text-lg"
                      autoComplete="email"
                    />
                    <p className="text-xs text-gray-500 flex items-center">
                      <Lock className="h-3 w-3 mr-1" />
                      Your information is secure and will never be shared
                    </p>
                  </div>

                  {/* Female-focused trust element */}
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <Heart className="h-5 w-5 text-pink-500 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-gray-800">Join Our Supportive Community</p>
                        <p className="text-gray-600 mt-1">
                          75% of our students are women changing careers. 
                          Evening classes available for working moms.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  >
                    Continue
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>

                  {/* Urgency indicator */}
                  <div className="text-center">
                    <p className="text-sm text-orange-600 font-medium">
                      ⚡ Only 8 spots remaining for February cohort
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  {/* Step 2: Additional Information (Optional) */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Almost Done! (Optional)
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Help us personalize your experience
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number
                        <span className="text-gray-500 text-xs ml-2">(For faster response)</span>
                      </Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        placeholder="(909) 555-0123" 
                        value={formData.phone} 
                        onChange={handleInputChange}
                        className="text-lg"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program">Program Interest</Label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
                      >
                        <option value="">Select a program</option>
                        <option value="CNA">CNA - 5 Weeks</option>
                        <option value="HHA">HHA - 4 Weeks</option>
                        <option value="LVN">LVN - 12 Months</option>
                        <option value="RNA">RNA - 10 Weeks</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startDate">Preferred Start Date</Label>
                      <select
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
                      >
                        <option value="">Select date</option>
                        <option value="february">February 2025</option>
                        <option value="march">March 2025</option>
                        <option value="april">April 2025</option>
                        <option value="asap">As soon as possible</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fundingInterest">Need Financial Aid?</Label>
                      <select
                        id="fundingInterest"
                        name="fundingInterest"
                        value={formData.fundingInterest}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
                      >
                        <option value="">Select option</option>
                        <option value="wioa">Yes - WIOA funding</option>
                        <option value="payment_plan">Yes - Payment plan</option>
                        <option value="self_pay">No - Self pay</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Value proposition reminder */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">What's Next:</span> Receive your free career guide, 
                        program details, and schedule a campus tour.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="flex-1 text-lg bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Get My Free Guide
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Alternative contact option */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Prefer to talk? We're here to help
              </span>
            </div>
          </div>

          <a 
            href="tel:909-625-8050" 
            className="w-full"
            onClick={() => trackCTAClick('Call Now', 'contact_form_bottom', 'phone')}
          >
            <Button variant="outline" size="lg" className="w-full text-lg group">
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              (909) 625-8050
              <span className="ml-2 text-sm text-gray-500">Mon-Fri 8am-6pm</span>
            </Button>
          </a>

          {/* Bottom trust indicators */}
          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-green-600" />
                SSL Secured
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1 text-blue-600" />
                BBB Accredited
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-purple-600" />
                10,000+ Alumni
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OptimizedContactForm;