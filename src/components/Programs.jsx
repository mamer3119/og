
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Award, BookOpen } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Programs = () => {
  const { toast } = useToast();

  const handleLearnMore = (program) => {
    toast({
      title: `🚧 ${program} program details feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const programs = [
    {
      title: 'Certified Nursing Assistant (CNA)',
      duration: '6-8 weeks',
      schedule: 'Online & Clinical',
      description: 'Start your healthcare career with our comprehensive CNA program. Learn essential patient care skills and prepare for state certification.',
      features: ['Basic Patient Care', 'Vital Signs Monitoring', 'Medical Terminology', 'Clinical Rotations'],
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Home Health Aide (HHA)',
      duration: '4-6 weeks',
      schedule: 'Flexible Online',
      description: 'Provide compassionate care in home settings. Perfect for those wanting to help patients maintain independence in their homes.',
      features: ['Personal Care Assistance', 'Medication Reminders', 'Mobility Support', 'Documentation'],
      icon: BookOpen,
      color: 'bg-green-500'
    },
    {
      title: 'Registered Nursing Assistant (RNA)',
      duration: '10-12 weeks',
      schedule: 'Online Evenings',
      description: 'Advanced nursing assistant training with expanded scope of practice. Bridge your way to higher nursing roles.',
      features: ['Advanced Patient Care', 'Medication Administration', 'Wound Care', 'Leadership Skills'],
      icon: Award,
      color: 'bg-purple-500'
    },
    {
      title: 'Licensed Vocational Nurse (LVN)',
      duration: '12-18 months',
      schedule: 'Online Weekends',
      description: 'Our flagship program preparing you for a rewarding career as a Licensed Vocational Nurse with comprehensive training.',
      features: ['Pharmacology', 'Patient Assessment', 'IV Therapy', 'Clinical Supervision'],
      icon: Clock,
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 medical-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Other <span className="text-primary">Certification Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expand your skills and advance your career with our other state-approved programs.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="bg-white rounded-lg shadow-md mb-4">
              <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline">
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${program.color} rounded-full flex items-center justify-center mr-4`}>
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  {program.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Details:</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span><strong>Duration:</strong> {program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-primary" />
                      <span><strong>Format:</strong> {program.schedule}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
                  onClick={() => handleLearnMore(program.title)}
                >
                  Learn More About {program.title}
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Programs;
