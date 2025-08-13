import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ContactForm from '@/components/ContactForm';
import { 
    CheckCircle, 
    DollarSign, 
    Clock, 
    Users, 
    FileText, 
    HelpCircle, 
    Activity,
    Heart,
    Star,
    BookOpen,
    Calendar,
    Phone,
    Award,
    Shield,
    TrendingUp,
    Zap,
    Target,
    Brain,
    Dumbbell
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Section = ({ children, className = "", id = "" }) => (
    <motion.section 
        id={id}
        className={`py-20 ${className}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
    >
        {children}
    </motion.section>
);

const RnaProgramPage = () => {
    const { toast } = useToast();

    // RNA Program modules from Program_Data_Master
    const rnaModules = [
        { module: 1, title: "Introduction to Restorative Nursing", hours: 4, icon: BookOpen },
        { module: 2, title: "Role of the Nursing Assistant in Restorative Care", hours: 6, icon: Users },
        { module: 3, title: "Anatomy and Physiology Related to Restorative Care", hours: 5, icon: Brain },
        { module: 4, title: "Range of Motion Procedures", hours: 6, icon: Activity },
        { module: 5, title: "Activities of Daily Living", hours: 6, icon: Heart },
        { module: 6, title: "Ambulation Procedures", hours: 6, icon: Dumbbell },
        { module: 7, title: "Restorative Feeding Programs", hours: 6, icon: Target },
        { module: 8, title: "Overview of Dementia", hours: 5, icon: Brain },
        { module: 9, title: "Communication", hours: 6, icon: Users }
    ];

    // What sets RNA apart from regular CNAs
    const rnaSpecialties = [
        {
            title: "Range of Motion Exercises",
            description: "Implement therapeutic exercises to maintain and improve patient mobility",
            icon: Activity
        },
        {
            title: "Adaptive Equipment Training",
            description: "Assist patients in using devices to promote independence",
            icon: Target
        },
        {
            title: "Restorative Feeding Programs",
            description: "Help patients regain and maintain eating independence",
            icon: Heart
        },
        {
            title: "Ambulation Support",
            description: "Guide patients in walking and mobility exercises",
            icon: Dumbbell
        },
        {
            title: "Dementia Care Techniques",
            description: "Specialized approaches for patients with cognitive challenges",
            icon: Brain
        },
        {
            title: "ADL Restoration",
            description: "Support patients in regaining daily living skills",
            icon: Users
        }
    ];

    // Career opportunities for RNAs
    const careerOpportunities = [
        {
            title: "Skilled Nursing Facilities",
            description: "Work with rehabilitation teams to restore patient function",
            icon: Shield,
            payRange: "$22-28/hour"
        },
        {
            title: "Rehabilitation Centers", 
            description: "Specialized restorative care in post-acute settings",
            icon: TrendingUp,
            payRange: "$24-30/hour"
        },
        {
            title: "Long-Term Care Communities",
            description: "Maintain resident independence and quality of life",
            icon: Heart,
            payRange: "$21-27/hour"
        },
        {
            title: "Memory Care Units",
            description: "Specialized dementia and Alzheimer's care",
            icon: Brain,
            payRange: "$23-29/hour"
        }
    ];

    const testimonials = [
        {
            name: 'Laura S.',
            program: 'RNA Graduate 2024',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
            quote: "I love seeing patients regain their independence. Yesterday, a stroke patient I worked with for weeks finally walked across the room on her own. That's why I became an RNA - to make a real difference in recovery."
        },
        {
            name: 'Jennifer M.',
            program: 'RNA Graduate 2024', 
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            quote: "The $4 per hour increase was nice, but what I love most is working as part of the rehab team. I feel like a true healthcare professional now, not just someone who does basic care."
        },
        {
            name: 'Diana R.',
            program: 'RNA Graduate 2024',
            image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8',
            quote: "RNA training taught me skills I use every day. Working with dementia patients requires special techniques, and now I feel confident helping families through difficult times while maintaining dignity and respect."
        }
    ];

    const faqs = [
        {
            q: "Do I need to be a CNA first?",
            a: "Yes, active CNA certification is required before enrolling in the RNA program. This advanced training builds upon your foundational CNA skills and knowledge. Your CNA must remain active throughout the program."
        },
        {
            q: "Why is there no clinical component required?", 
            a: "The RNA certification builds upon your existing CNA clinical experience. The 50 hours of focused theory provides the specialized knowledge needed for restorative care, while your current CNA practice already provides the hands-on patient care foundation."
        },
        {
            q: "What is QCHF certification?",
            a: "Quality Care Health Foundation (QCHF) certification is recognized by healthcare facilities throughout California. While not a state license like CNA, it's widely accepted and often required by employers for restorative care positions."
        },
        {
            q: "How much more can I earn as an RNA?",
            a: "RNAs typically earn $2-5 more per hour than CNAs. With an investment of just $685.50, most graduates recoup their costs within the first month of RNA work. Plus, you'll qualify for specialized positions with better schedules and working conditions."
        },
        {
            q: "Can I use WIOA or other funding?",
            a: "Absolutely! LMCC is approved to accept WIOA funding, AJCC vouchers, and other workforce development programs. Our staff will help you navigate the application process to make your education affordable."
        },
        {
            q: "What are the career advancement opportunities?",
            a: "RNA certification opens doors to rehabilitation technician roles, restorative care coordinator positions, specialized dementia care roles, physical therapy aide positions, and serves as a pathway to LVN/RN programs."
        }
    ];

    const scheduleOptions = [
        {
            title: "Morning Schedule",
            time: "Monday-Friday, 8:00 AM - 12:00 PM",
            description: "Perfect for evening workers or afternoon commitments",
            duration: "2.5 weeks",
            icon: BookOpen
        },
        {
            title: "Evening Schedule", 
            time: "Monday-Friday, 5:00 PM - 9:00 PM",
            description: "Ideal for day shift workers advancing their careers",
            duration: "2.5 weeks",
            icon: Clock
        }
    ];

    const programSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": "Restorative Nurse Assistant (RNA) Certification Program",
        "description": "2.5-week RNA program for CNAs. 50 hours theory-focused training. QCHF certification preparation. $2-5/hour pay increase.",
        "provider": {
            "@type": "CollegeOrUniversity",
            "name": "Lotus Medical Career College",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "1460 E. Holt Avenue, Suite 176A",
                "addressLocality": "Pomona", 
                "addressRegion": "CA",
                "postalCode": "91767",
                "addressCountry": "US"
            }
        },
        "programType": "Certificate",
        "timeToComplete": "P18D",
        "occupationalCategory": "31-1131",
        "offers": {
            "@type": "Offer",
            "price": "685.50",
            "priceCurrency": "USD"
        }
    };

    return (
        <>
            <Helmet>
                <title>RNA Program Pomona | Restorative Nurse Assistant | Earn $2-5 More/Hour</title>
                <meta name="description" content="Specialize in restorative care with our 50-hour RNA program. QCHF certification, $2-5/hour increase, flexible schedule. Perfect for CNAs seeking advancement." />
                <meta name="keywords" content="RNA program Pomona, restorative nurse assistant, CNA specialization, QCHF certification, rehabilitation nursing, dementia care training" />
                <script type="application/ld+json">{JSON.stringify(programSchema)}</script>
            </Helmet>

            <main className="bg-white">
                {/* Hero Section - Female-focused messaging */}
                <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                                <Activity className="h-4 w-4 mr-2" />
                                Specialized Restorative Care
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6">
                                Restorative Nurse Assistant Certification
                            </h1>
                            <p className="text-xl md:text-2xl font-semibold mb-4 text-emerald-100">
                                Help Patients Regain Independence & Dignity
                            </p>
                            <p className="max-w-3xl mx-auto text-lg text-emerald-100 mb-8">
                                Specialize in rehabilitation techniques that make a real difference in patients' lives. Theory-focused program builds on your CNA foundation with flexible scheduling options.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button 
                                    size="lg" 
                                    className="bg-white text-teal-700 hover:bg-gray-50 font-bold text-lg px-8 py-4"
                                >
                                    Check Eligibility
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline" 
                                    className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4"
                                >
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call (909) 625-8050
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Trust Metrics Bar */}
                <Section className="bg-charcoal text-white !py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">2.5</div>
                                <div className="font-semibold">Weeks to Complete</div>
                                <div className="text-xs text-gray-400">50 total hours</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">$2-5</div>
                                <div className="font-semibold">More Per Hour</div>
                                <div className="text-xs text-gray-400">Than regular CNAs</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">QCHF</div>
                                <div className="font-semibold">Certification</div>
                                <div className="text-xs text-gray-400">Recognized statewide</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">$685</div>
                                <div className="font-semibold">Total Investment</div>
                                <div className="text-xs text-gray-400">All-inclusive</div>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* Program Structure */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Theory-Focused Training for Working CNAs
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Build on your existing clinical experience with specialized theoretical knowledge
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {scheduleOptions.map((schedule, index) => (
                                <Card key={index} className="border-2 border-emerald-500 shadow-lg">
                                    <CardHeader className="bg-emerald-500 text-white text-center py-6">
                                        <div className="mx-auto bg-white/20 p-3 rounded-full w-fit mb-3">
                                            <schedule.icon className="h-8 w-8" />
                                        </div>
                                        <CardTitle className="text-xl font-bold">{schedule.title}</CardTitle>
                                        <p className="text-emerald-100">{schedule.duration}</p>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <Clock className="h-6 w-6 text-emerald-500 mt-1" />
                                                <div>
                                                    <h4 className="font-semibold">Schedule</h4>
                                                    <p className="text-sm text-gray-600">{schedule.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Target className="h-6 w-6 text-emerald-500 mt-1" />
                                                <div>
                                                    <h4 className="font-semibold">Perfect For</h4>
                                                    <p className="text-sm text-gray-600">{schedule.description}</p>
                                                </div>
                                            </div>
                                            <div className="bg-emerald-50 p-4 rounded-lg">
                                                <p className="text-sm font-semibold text-emerald-700">
                                                    ✓ 50 hours theory only - no clinical required
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Card className="max-w-2xl mx-auto border-2 border-blue-500">
                                <CardContent className="p-6">
                                    <Shield className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                                    <h3 className="font-semibold text-lg mb-2">Why No Clinical Component?</h3>
                                    <p className="text-gray-700 text-sm">
                                        RNA certification builds upon your existing CNA clinical experience. The 50 hours of focused theory provides the specialized knowledge for restorative care, while your current practice provides the hands-on foundation.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Complete Curriculum - 9 Modules */}
                <Section className="bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Comprehensive 9-Module Curriculum
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Specialized training in restorative techniques and rehabilitation support
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {rnaModules.map((module, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="h-full hover:shadow-lg transition-shadow">
                                            <CardContent className="p-6">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                                                        {module.module}
                                                    </div>
                                                    <div className="bg-emerald-500/10 p-2 rounded-lg">
                                                        <module.icon className="h-6 w-6 text-emerald-500" />
                                                    </div>
                                                </div>
                                                <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                                                <p className="text-emerald-600 font-medium text-sm">{module.hours} hours</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* RNA Specialties - What Makes RNA Different */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Specialized Skills You'll Master
                            </h2>
                            <p className="text-lg text-gray-600">
                                Go beyond basic CNA care with advanced restorative techniques
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {rnaSpecialties.map((specialty, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full text-center hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="bg-emerald-500/10 p-4 rounded-full w-fit mx-auto mb-4">
                                                <specialty.icon className="h-8 w-8 text-emerald-500" />
                                            </div>
                                            <h3 className="font-semibold text-lg mb-2">{specialty.title}</h3>
                                            <p className="text-gray-600 text-sm">{specialty.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Career Opportunities */}
                <Section className="bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                High-Demand Career Opportunities
                            </h2>
                            <p className="text-lg text-gray-600">
                                RNAs are in demand across specialized healthcare settings
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {careerOpportunities.map((opportunity, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="bg-emerald-500/10 p-3 rounded-full">
                                                    <opportunity.icon className="h-8 w-8 text-emerald-500" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-lg mb-2">{opportunity.title}</h3>
                                                    <p className="text-gray-600 mb-3">{opportunity.description}</p>
                                                    <Badge className="bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20">
                                                        {opportunity.payRange}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Pricing & Investment */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Complete Program Investment: $685.50
                            </h2>
                            <p className="text-lg text-gray-600">
                                All-inclusive specialized training with no hidden fees
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Card>
                                <CardContent className="p-8">
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-center mb-6 text-emerald-600">
                                            What's Included in Your Investment:
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                                <span className="font-medium">50 hours of expert instruction</span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                                    <span className="font-medium">Comprehensive textbook and study guide</span>
                                                </div>
                                                <span className="text-sm text-emerald-600 font-semibold">$85.50 value</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                                <span className="font-medium">Access to all specialized equipment</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                                <span className="font-medium">Skills lab practice time</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                                <span className="font-medium">QCHF certification exam</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                                <span className="font-medium">Certificate of completion</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white p-6 rounded-lg border-2 border-emerald-500">
                                            <h4 className="font-semibold text-lg mb-3 text-emerald-600">
                                                <DollarSign className="inline h-5 w-5 mr-2" />
                                                WIOA Funding Available
                                            </h4>
                                            <p className="text-gray-700 text-sm mb-4">
                                                LMCC is approved to accept WIOA funding, AJCC vouchers, and other workforce development programs.
                                            </p>
                                            <Button size="sm" className="bg-emerald-500 text-white hover:bg-emerald-600">
                                                Check Eligibility
                                            </Button>
                                        </div>
                                        <div className="bg-white p-6 rounded-lg border-2 border-teal-500">
                                            <h4 className="font-semibold text-lg mb-3 text-teal-600">
                                                <Calendar className="inline h-5 w-5 mr-2" />
                                                Flexible Payment Plans
                                            </h4>
                                            <p className="text-gray-700 text-sm mb-4">
                                                $250 registration fee, remaining balance can be paid in installments.
                                            </p>
                                            <Button size="sm" variant="outline" className="border-teal-500 text-teal-500">
                                                Learn More
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                                        <div className="text-center">
                                            <h4 className="font-bold text-lg text-emerald-700 mb-2">
                                                🎯 Quick Return on Investment
                                            </h4>
                                            <p className="text-emerald-700">
                                                <strong>Most graduates recoup their costs within the first month</strong> of RNA work with the $2-5/hour pay increase!
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Success Stories */}
                <Section className="bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                CNAs Who Specialized in Restorative Care
                            </h2>
                            <p className="text-lg text-gray-600">
                                Discover how RNA certification transformed their careers
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full shadow-lg">
                                        <CardContent className="p-6 flex flex-col items-center text-center">
                                            <img 
                                                alt={`${testimonial.name} - ${testimonial.program}`}
                                                className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
                                                src={testimonial.image}
                                            />
                                            <p className="text-gray-700 italic mb-4 flex-1">"{testimonial.quote}"</p>
                                            <div>
                                                <p className="font-bold text-charcoal">{testimonial.name}</p>
                                                <p className="text-sm text-emerald-600 font-semibold">{testimonial.program}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* FAQ Section */}
                <Section>
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Common Questions About RNA Training
                            </h2>
                            <p className="text-lg text-gray-600">
                                Everything you need to know about specializing in restorative care
                            </p>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <HelpCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                            <span className="font-semibold">{faq.q}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4">
                                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </Section>

                {/* Conversion CTA */}
                <Section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Star className="h-12 w-12 text-yellow-300 mx-auto mb-6" />
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                    Ready to Specialize in Restorative Care?
                                </h2>
                                <p className="text-xl max-w-3xl mx-auto mb-8">
                                    Make a deeper impact in patients' lives while advancing your career and earning potential. Help people regain their independence and dignity every single day.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button 
                                        size="lg" 
                                        className="bg-white text-emerald-700 hover:bg-gray-50 font-bold text-lg px-8 py-4"
                                    >
                                        <Activity className="mr-2 h-5 w-5" />
                                        Start Your Application
                                    </Button>
                                    <Button 
                                        size="lg" 
                                        variant="outline" 
                                        className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4"
                                    >
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call (909) 625-8050
                                    </Button>
                                </div>
                                <p className="text-sm mt-4 text-emerald-100">
                                    ✓ WIOA funding available ✓ Flexible schedule ✓ QCHF certification
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* Contact Form Section */}
                <Section>
                    <div className="container mx-auto px-4">
                        <ContactForm 
                            title="Ready to Specialize in Restorative Care?"
                            description="Get personalized RNA program information and check your eligibility"
                            showPhoneOption={true}
                        />
                    </div>
                </Section>
            </main>
        </>
    );
};

export default RnaProgramPage;