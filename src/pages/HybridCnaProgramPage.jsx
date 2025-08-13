
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import TestimonialCarousel from '@/components/wioa/TestimonialCarousel';
import JobOutlookChart from '@/components/charts/JobOutlookChart';
import Programs from '@/components/Programs'; 
import { CheckCircle, Clock, Monitor, Briefcase, Award, Phone, Users, CalendarDays, DollarSign, BookOpen, HeartPulse, Building, FileText, Zap, ShieldQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionCard = motion(Card);

const HybridCnaProgramPage = () => {
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

    const testimonials = [
        { name: 'Sofia R.', program: 'Hybrid CNA Graduate', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2', quote: "Balancing work and my family felt impossible, but the hybrid program made it happen. The online classes were so convenient, and the instructors were always there to help. I'm so proud of what I've accomplished." },
        { name: 'Miguel V.', program: 'Hybrid CNA Graduate', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a', quote: "I wanted a career change but couldn't afford to stop working. This program was the perfect solution. The clinicals gave me real confidence, and I got a job offer before I even took the state exam!" },
        { name: 'Emily C.', program: 'Hybrid CNA Graduate', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', quote: 'The support from Lotus Medical was incredible. They helped with everything from understanding the material online to preparing for job interviews. A truly life-changing experience.' },
    ];
    
    return (
        <>
            <Helmet>
                <title>31-Day Hybrid CNA Program Pomona | Lotus Medical</title>
                <meta name="description" content="Join our 31-day hybrid CNA training in Pomona with flexible evening classes online. Get certified fast and start your healthcare career. WIOA funding available." />
                <meta name="keywords" content="hybrid CNA training Pomona, evening CNA classes, 31-day CNA program, online CNA Pomona, Lotus Medical Career College" />
            </Helmet>

            <main className="bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-teal-600 to-emerald-700 text-white py-24 md:py-32">
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.h1 
                            className="text-4xl md:text-6xl font-extrabold font-heading mb-4"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                        >
                            Start Your Healthcare Career in 31 Days
                        </motion.h1>
                        <motion.p 
                            className="max-w-3xl mx-auto text-xl text-emerald-100"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Our Hybrid Online CNA Program is built for your life, your schedule, and your success.
                        </motion.p>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="bg-gray-50 py-8">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                <p className="text-3xl font-bold text-primary">31</p>
                                <p className="text-sm text-gray-600">Days to Certification</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                <p className="text-3xl font-bold text-primary">92%</p>
                                <p className="text-sm text-gray-600">State Exam Pass Rate</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                                <p className="text-3xl font-bold text-primary">$18-24</p>
                                <p className="text-sm text-gray-600">Starting Hourly Wage</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                                <p className="text-3xl font-bold text-primary">100%</p>
                                <p className="text-sm text-gray-600">Job Placement Support</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Program Phases */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <MotionCard className="card-hover" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <CardHeader className="flex-row items-center gap-4"><Monitor className="h-10 w-10 text-primary" /><CardTitle>Phase 1: Online Theory (10 Days)</CardTitle></CardHeader>
                                <CardContent><p>Learn from home with live, interactive evening classes via Zoom. Cover all 17 state-required modules with our expert instructors.</p></CardContent>
                            </MotionCard>
                            <MotionCard className="card-hover" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                                <CardHeader className="flex-row items-center gap-4"><HeartPulse className="h-10 w-10 text-primary" /><CardTitle>Phase 2: Clinicals (21 Days)</CardTitle></CardHeader>
                                <CardContent><p>Apply your knowledge with hands-on training at our partner healthcare facilities in Pomona. Gain real-world skills and confidence.</p></CardContent>
                            </MotionCard>
                        </div>
                    </div>
                </section>
                
                {/* Flexibility Text Section */}
                <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <p className="text-gray-800 text-lg leading-relaxed">
                                Discover the flexibility of our hybrid Certified Nursing Assistant (CNA) program at Lotus Medical Career College, designed to fit seamlessly into your busy life—whether you're a young professional launching your healthcare journey or a dedicated parent balancing family and work. This <strong>31-day evening program</strong> empowers you to complete the <strong>60-hour theory portion (10 days) entirely online</strong> from the comfort of your home via interactive Zoom sessions and Canvas platform, scheduled Monday through Friday from <strong>4:00 PM to 10:30 PM</strong>.
                            </p>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                This means no daytime disruptions, allowing you to maintain your job, studies, or family responsibilities while building essential skills like patient rights, vital signs, and infection control through engaging lectures, videos, and role-playing taught by experienced RNs and LVNs. The hands-on clinical component—<strong>102 hours over just 21 days</strong>—takes place in person at our partnered skilled nursing facilities in Pomona, CA, from 3:00 PM to 8:00 PM, ensuring you gain real-world confidence in compassionate care without a full-time commitment.
                            </p>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Perfect for our vibrant Pomona community, where family and hard work are core values, this structure supports Hispanic women and men alike in pursuing stable, rewarding careers. For those in their early 20s, it's an exciting gateway to healthcare with quick certification and growth opportunities; for mid-career adults, it offers a practical path to financial security and fulfillment, with starting wages of <strong>$18–$24 per hour</strong> and pathways to roles like LVN or RN.
                            </p>
                        </motion.div>
                    </div>
                </section>
                
                {/* Main CTA */}
                <section className="py-16 text-center">
                    <div className="container mx-auto px-4">
                        <motion.h2 className="text-3xl font-bold font-heading mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            Enroll today and transform your evenings into a brighter future.
                        </motion.h2>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                           <a href="tel:909-625-8050">
                                <Button size="lg" className="text-xl px-10 py-7 bg-primary hover:bg-primary/90 green-glow">
                                    <Phone className="mr-3 h-6 w-6" /> Contact Us at (909) 625-8050
                                </Button>
                            </a>
                        </motion.div>
                    </div>
                </section>
                
                {/* Curriculum & Compliance */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                             <h2 className="text-3xl font-bold font-heading mb-6">What You'll Learn</h2>
                             <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-sm">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="p-4 font-semibold">Full 17-Module Curriculum</AccordionTrigger>
                                    <AccordionContent className="p-4 pt-0">
                                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                                            {curriculumModules.map((mod) => (
                                                <li key={mod.title} className="flex items-center text-sm">
                                                    <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                                                    <span>{mod.title} ({mod.hours} hrs)</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                             </Accordion>
                        </div>
                        <div>
                             <h2 className="text-3xl font-bold font-heading mb-6">Program Requirements</h2>
                              <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-sm">
                                <AccordionItem value="item-1"><AccordionTrigger className="p-4 font-semibold">Eligibility</AccordionTrigger><AccordionContent className="p-4 pt-0">Must be at least 16 years of age (with parent/guardian authorization) and pass a health screening and background check.</AccordionContent></AccordionItem>
                                <AccordionItem value="item-2"><AccordionTrigger className="p-4 font-semibold">Technology</AccordionTrigger><AccordionContent className="p-4 pt-0">Any device with a camera (PC, tablet, smartphone) is required for online classes via Zoom, Canvas, and WhatsApp per AFL 20-89.1.</AccordionContent></AccordionItem>
                                <AccordionItem value="item-3"><AccordionTrigger className="p-4 font-semibold">Academics</AccordionTrigger><AccordionContent className="p-4 pt-0">Students must maintain a 75% minimum on all exams and demonstrate skill competency. 100% attendance is mandatory, with one excused absence and make-up session permitted.</AccordionContent></AccordionItem>
                                <AccordionItem value="item-4"><AccordionTrigger className="p-4 font-semibold">Compliance</AccordionTrigger><AccordionContent className="p-4 pt-0">Our program is fully approved by CDPH and BPPE, adhering to Title 22 §71835(n). Student records are maintained for 5 years per FERPA regulations.</AccordionContent></AccordionItem>
                             </Accordion>
                        </div>
                    </div>
                </section>

                {/* Job Outlook and Testimonials */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-5 gap-12">
                            <div className="lg:col-span-2">
                                <h2 className="text-3xl font-bold font-heading mb-6">Career Outlook</h2>
                                <Card>
                                    <CardContent className="pt-6">
                                        <JobOutlookChart />
                                        <p className="text-sm text-gray-600 mt-4">CNA employment is projected to grow 4% from 2023-2033, creating ~216,200 openings yearly. The average hourly wage is $19.84. (Source: BLS, May 2024)</p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl font-bold font-heading mb-6">What Our Students Say</h2>
                                <TestimonialCarousel testimonials={testimonials} />
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Other Programs */}
                <div className="bg-gray-50">
                    <Programs />
                </div>
            </main>
        </>
    );
};

export default HybridCnaProgramPage;
