import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/components/ui/use-toast';
import JobOutlookChart from '@/components/charts/JobOutlookChart';
import {
  HeartPulse, Award, Users, BookOpen, Calendar, MapPin, Target, CheckSquare,
  DollarSign, ShieldCheck, TrendingUp, FileText, BadgeCheck, MessageSquare, Briefcase,
  Building, GraduationCap, Globe, Tv, Smartphone, Info, GitBranch, ShieldQuestion,
  BookUser, FileUp, Zap, Clock
} from 'lucide-react';

const Section = ({ id, icon: Icon, title, children, className = "" }) => (
  <motion.section
    id={id}
    className={`py-16 md:py-20 ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-start mb-12">
        <div className="flex-shrink-0 bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center">
            <Icon className="h-8 w-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading ml-6">{title}</h2>
      </div>
      {children}
    </div>
  </motion.section>
);

const CnaProgramPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const curriculumModules = [
    { title: "Introduction to Nurse Assisting", hours: 4 },
    { title: "Patient Rights", hours: 3 },
    { title: "Communication", hours: 4 },
    { title: "Infection Control", hours: 5 },
    { title: "Safety Procedures", hours: 5 },
    { title: "Basic Nursing Skills", hours: 8 },
    { title: "Personal Care", hours: 8 },
    { title: "Body Mechanics", hours: 3 },
    { title: "Nutrition", hours: 3 },
    { title: "Elimination", hours: 3 },
    { title: "Vital Signs", hours: 4 },
    { title: "Rehabilitative Nursing", hours: 2 },
    { title: "Observation & Charting", hours: 2 },
    { title: "Death & Dying", hours: 1 },
    { title: "Patient Abuse", hours: 1 },
    { title: "Emergency Care", hours: 2 },
    { title: "Long-Term Care", hours: 2 },
  ];

  const eligibility = [
    "At least 16 years of age (with parent/guardian authorization)",
    "Valid Social Security Number (SSN) or ITIN",
    "Pass a health screening and physical exam",
    "Clear a background check (Live Scan)",
    "No prior healthcare experience required!"
  ];
  
  const upcomingCohorts = [
    { cohort: "NA84", start: "02/04/25", end: "03/19/25", format: "Online CNA Program" },
    { cohort: "NA85", start: "03/20/25", end: "05/01/25", format: "Online CNA Program" },
    { cohort: "NA86", start: "05/02/25", end: "06/16/25", format: "Online CNA Program" },
    { cohort: "NA87", start: "06/17/25", end: "07/30/25", format: "Online CNA Program" },
    { cohort: "NA88", start: "07/31/25", end: "09/12/25", format: "Online CNA Program" },
    { cohort: "NA89", start: "09/15/25", end: "10/27/25", format: "Online CNA Program" },
    { cohort: "NA90", start: "10/28/25", end: "12/10/25", format: "Online CNA Program" },
    { cohort: "NA91", start: "12/11/25", end: "01/27/26", format: "Online CNA Program" },
  ];

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Inquiry Submitted!",
      description: "Thank you for your interest. A representative will contact you shortly.",
    });
    e.target.reset();
  };
  
  return (
    <>
      <Helmet>
        <title>CNA Program in Pomona | Lotus Medical Career College</title>
        <meta name="description" content="Start your CNA training in Pomona with our 5-6 week, CDPH-approved program. Offering online and in-person formats, job placement support, and full compliance with BPPE." />
        <meta name="keywords" content="CNA training Pomona, Online CNA program, Fast Track CNA program Pomona, Lotus Medical Career College" />
      </Helmet>
      
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white bg-gray-800">
           <div className="absolute inset-0 z-0 overflow-hidden bg-black">
              <img  class="w-full h-full object-cover opacity-40" alt="Diverse group of nursing students smiling in a modern classroom" src="https://images.unsplash.com/photo-1676046261150-063cf0de59dd" />
           </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold font-heading mb-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            >
              Ready to Start Your CNA Journey?
            </motion.h1>
            <motion.p 
              className="max-w-3xl mx-auto text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              Transform your passion for helping others into a rewarding career in just 5-6 weeks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-6 green-glow" onClick={() => navigate('/wioa-friday')}>
                Enroll Now
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* What is a CNA Section */}
        <section id="what-is-cna" className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className={`relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden p-8 md:p-12`} style={{ backgroundImage: "linear-gradient(to right, rgba(249, 250, 251, 0.4) 0%, rgba(249, 250, 251, 1) 40%), url('https://images.unsplash.com/photo-1603813636495-2575e0399136?q=80&w=2070')" }}>
                    <div className="md:w-1/2 md:ml-auto">
                         <div className="flex items-center justify-start mb-6">
                            <div className="flex-shrink-0 bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center">
                                <HeartPulse className="h-8 w-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading ml-6">What is a CNA?</h2>
                        </div>
                        <p className="text-gray-700 text-lg mb-4">A Certified Nursing Assistant (CNA) is a vital healthcare team member who provides basic patient care and assists with daily living activities under RN or LVN supervision in hospitals, nursing homes, and long-term care facilities.</p>
                        <p className="text-gray-600">CNAs serve as the primary point of contact for patients, ensuring their comfort, dignity, and well-being. The role is in high demand due to an aging population and expanding healthcare needs, making it a stable and fulfilling career choice with pathways to advanced roles like LVN or RN.</p>
                    </div>
                </div>
            </div>
        </section>


        {/* History & Mission Section */}
        <Section id="history-mission" icon={Building} title="Our Foundation">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <Card><CardHeader><CardTitle>History</CardTitle></CardHeader><CardContent>Founded in 2015 by Asima Jabbar to provide accessible, high-quality healthcare education to the community.</CardContent></Card>
                <Card><CardHeader><CardTitle>Mission</CardTitle></CardHeader><CardContent>To empower aspiring healthcare professionals with the knowledge and skills for compassionate, competent care.</CardContent></Card>
                <Card><CardHeader><CardTitle>Ownership</CardTitle></CardHeader><CardContent>A for-profit corporation owned by Asima Jabbar, committed to student success and workforce development.</CardContent></Card>
            </div>
        </Section>
        
        {/* Job Outlook Section */}
        <Section id="job-outlook" icon={Briefcase} title="CNA Job Outlook and Demand" className="bg-gray-50">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-lg text-gray-700 mb-4">According to the U.S. Bureau of Labor Statistics, employment for nursing assistants is projected to grow 4% from 2023 to 2033. This translates to about <strong>216,200 openings each year</strong>, driven by an aging population and the need to replace workers who transfer or exit the labor force.</p>
                    <p className="text-gray-600 mb-4">While overall job growth is average, the healthcare sector as a whole is booming, outpacing industries like manufacturing and retail. This resilience makes healthcare a secure field for a long-term career.</p>
                    <p className="text-sm text-gray-500">Source: U.S. Bureau of Labor Statistics, Occupational Outlook Handbook (May 2024). Median wage for Nursing Assistants: $36,220 per year.</p>
                </div>
                <div>
                    <Card><CardContent className="pt-6"><JobOutlookChart /></CardContent></Card>
                </div>
            </div>
        </Section>
        
        {/* Curriculum Section */}
        <Section id="curriculum" icon={BookOpen} title="Comprehensive Curriculum">
          <p className="text-center max-w-3xl mx-auto mb-8">Our 162-hour program is divided into 60 hours of theory and 102 hours of clinicals, covering 17 essential modules.</p>
          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-6">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {curriculumModules.map((mod) => (
                  <li key={mod.title} className="flex items-center">
                    <CheckSquare className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <span>{mod.title} ({mod.hours} hrs)</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Section>

        {/* Schedules Section */}
        <Section id="schedules" icon={Calendar} title="Upcoming Program Schedules" className="bg-gray-50">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingCohorts.map((cohort, index) => (
              <motion.div 
                key={cohort.cohort}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader><CardTitle className="text-primary">{cohort.cohort}</CardTitle></CardHeader>
                  <CardContent>
                    <p><strong>Start:</strong> {cohort.start}</p>
                    <p><strong>End:</strong> {cohort.end}</p>
                    <p className="mt-2 text-sm bg-gray-100 inline-block px-2 py-1 rounded">{cohort.format}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">Note: 'Fast Track CNA Program' (in-person) schedules are available upon request. Please contact us for details.</p>
        </Section>
        
        {/* Eligibility, Costs, and Requirements Section */}
        <Section id="requirements" icon={Target} title="Requirements & Costs">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <Card>
              <CardHeader><CardTitle>Eligibility</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibility.map((req, i) => <li key={i} className="flex"><BadgeCheck className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5"/><span>{req}</span></li>)}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Program Investment</CardTitle></CardHeader>
              <CardContent>
                <table className="w-full text-left mb-4">
                    <tbody>
                        <tr><td className="py-2">Itemized Fees</td><td className="py-2 font-bold text-right">$2,995.00</td></tr>
                        <tr className="border-t"><td className="py-2 font-bold">Total Cost</td><td className="py-2 font-bold text-right text-primary text-lg">$2,995.00</td></tr>
                    </tbody>
                </table>
                <p className="text-sm text-gray-600 mt-2">Includes: Tuition, registration, books, uniform, Live Scan, and state exam fee.</p>
                <p className="text-sm text-gray-600 mt-4">Financial aid and payment plans are available. <Link to="/financial-aid" className="text-primary underline">Learn more</Link>.</p>
                <Button className="w-full mt-4" onClick={() => navigate('/wioa-friday')}>Check WIOA Eligibility</Button>
              </CardContent>
            </Card>
             <Card>
              <CardHeader><CardTitle>Academic & Tech</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3">
                    <li className="flex"><GraduationCap className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5"/><span>75% minimum on all exams & skill completion.</span></li>
                    <li className="flex"><Calendar className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5"/><span>100% attendance is mandatory (one excused absence with make-up allowed).</span></li>
                    <li className="flex"><Smartphone className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5"/><span>Device with camera & internet for Zoom, Canvas, WhatsApp per AFL 20-89.1.</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Training Format Options */}
        <Section id="training-formats" icon={GitBranch} title="Training Format Options">
            <div className="grid md:grid-cols-2 gap-8 text-center">
                <Card className="card-hover">
                    <CardHeader>
                        <div className="mx-auto bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                            <Zap className="h-8 w-8" />
                        </div>
                        <CardTitle>Fast Track CNA Program</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Our accelerated in-person program. Get certified quickly with hands-on training from day one. Perfect for learners who thrive in a traditional classroom setting.</p>
                        <p className="font-bold mt-2">Format: 100% In-Person</p>
                    </CardContent>
                </Card>
                <Card className="card-hover">
                    <CardHeader>
                        <div className="mx-auto bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                             <Clock className="h-8 w-8" />
                        </div>
                        <CardTitle>Online CNA Program + Clinicals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>The ultimate flexibility. Complete your theory coursework online at your own pace, then join us for required in-person clinicals. Ideal for busy schedules.</p>
                         <p className="font-bold mt-2">Format: Online Theory + In-Person Clinicals</p>
                    </CardContent>
                </Card>
            </div>
        </Section>

        {/* Policies & Disclosures */}
        <Section id="policies" icon={ShieldCheck} title="Policies & Disclosures" className="bg-gray-50">
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-sm">
            <AccordionItem value="item-1"><AccordionTrigger>Privacy & Student Records (FERPA)</AccordionTrigger><AccordionContent>We are FERPA-compliant. Student records are maintained for 5 years and are available to students or the CDPH upon request. Your privacy is protected.</AccordionContent></AccordionItem>
            <AccordionItem value="item-2"><AccordionTrigger>Regulatory Citations</AccordionTrigger><AccordionContent>Our program complies with BPPE regulations and CDPH standards, including California Code of Regulations, Title 22, §71835(n) and Health & Safety Code §1337. Job Classification (SOC): 31-1131.</AccordionContent></AccordionItem>
            <AccordionItem value="item-3"><AccordionTrigger>Program Updates & Transcripts</AccordionTrigger><AccordionContent>We will notify the CDPH of any significant program changes 30 days prior. Students will be notified in writing and updates posted here. Transcripts can be requested at any time.</AccordionContent></AccordionItem>
            <AccordionItem value="item-4"><AccordionTrigger>Transfer Credits & Articulation</AccordionTrigger><AccordionContent>Lotus Medical Career College does not accept transfer credits from other institutions, nor do we have articulation agreements. All required program hours must be completed with us.</AccordionContent></AccordionItem>
          </Accordion>
        </Section>
        
        {/* Get Started CTA Section */}
        <Section id="get-started" icon={FileText} title="Get Started: Reach Out for More Information">
            <Card className="max-w-4xl mx-auto shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4">Request Information</h3>
                        <form onSubmit={handleInquirySubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" name="firstName" type="text" placeholder="John" required />
                            </div>
                            <div>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" name="lastName" type="text" placeholder="Doe" required />
                            </div>
                            <div>
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                            </div>
                            <div>
                                <Label htmlFor="program">Program Interested In</Label>
                                <select id="program" name="program" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                    <option>CNA Program</option>
                                    <option>HHA Program</option>
                                    <option>LVN Program</option>
                                    <option>RNA Program</option>
                                </select>
                            </div>
                            <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 transition-transform hover:scale-105">Submit Inquiry</Button>
                        </form>
                    </div>
                    <div className="hidden md:flex bg-primary text-white p-8 items-center justify-center">
                        <div className="text-center">
                            <GraduationCap className="h-20 w-20 mx-auto mb-4" />
                            <h3 className="text-3xl font-extrabold">Unlock Your Healthcare Career!</h3>
                        </div>
                    </div>
                </div>
            </Card>
        </Section>
        
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            <Button size="lg" className="rounded-full p-4 h-16 w-16 bg-primary green-glow" aria-label="Chat with an advisor" onClick={() => toast({ title: "🚧 Chat feature coming soon!" })}>
                <MessageSquare className="h-8 w-8 text-white" />
            </Button>
        </div>
      </div>
    </>
  );
};

export default CnaProgramPage;