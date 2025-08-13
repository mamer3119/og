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
    Home,
    Heart,
    Star,
    BookOpen,
    Calendar,
    Phone,
    Award,
    Shield,
    TrendingUp,
    User,
    MapPin
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

const HhaProgramPage = () => {
    const { toast } = useToast();

    // HHA Program modules from Program_Data_Master
    const hhaModules = [
        { module: 1, title: "Introduction to Aide and Agency Role", hours: 2 },
        { module: 2, title: "Interpretation of Medical and Social Needs", hours: 5 },
        { module: 3, title: "Personal Care Services", hours: 5 },
        { module: 4, title: "Nutrition", hours: 5 },
        { module: 5, title: "Cleaning and Care Tasks", hours: 3 }
    ];

    // What's included in the $850 program
    const programIncludes = [
        { item: "40 hours of expert instruction", value: "" },
        { item: "Comprehensive textbook and study guide", value: "$80 value" },
        { item: "Professional uniform and protective equipment", value: "$50 value" },
        { item: "All lab supplies and materials", value: "$60 value" },
        { item: "State certification exam fee", value: "$120 value - WE PAY THIS" },
        { item: "CPR training and certification", value: "" },
        { item: "Job placement assistance", value: "" }
    ];

    // Career opportunities for HHAs
    const careerOpportunities = [
        {
            title: "Home Healthcare Agencies",
            description: "Highest demand - personalized one-on-one care",
            icon: Home
        },
        {
            title: "Private Duty Nursing Companies", 
            description: "Premium pay for specialized clients",
            icon: User
        },
        {
            title: "Hospice Organizations",
            description: "Compassionate end-of-life care",
            icon: Heart
        },
        {
            title: "IHSS Programs",
            description: "State-funded in-home supportive services", 
            icon: Shield
        }
    ];

    const testimonials = [
        {
            name: 'Ana M.',
            program: 'HHA Graduate 2024',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
            quote: "I loved being a CNA but wanted more autonomy. As an HHA, I work with the same clients every week, make $6 more per hour, and have a regular schedule. It's perfect for my family life!"
        },
        {
            name: 'Rosa G.',
            program: 'HHA Graduate 2024', 
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            quote: "The weekend clinicals were genius! I could keep my CNA job during the week and train on weekends. Now I'm making $25/hour doing private duty HHA work. Best career decision ever!"
        },
        {
            name: 'Patricia L.',
            program: 'HHA Graduate 2024',
            image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8',
            quote: "Working in someone's home feels more personal and meaningful. I help my clients maintain their independence and dignity. The emotional rewards are incredible, and the pay is much better too."
        }
    ];

    const faqs = [
        {
            q: "Do I need to be a CNA first?",
            a: "Yes, active CNA certification is required before enrolling in our HHA program. This advanced training builds upon your foundational CNA skills and knowledge, ensuring you're fully prepared for the specialized aspects of home health care."
        },
        {
            q: "Why are clinical rotations on weekends?", 
            a: "Weekend clinicals allow working CNAs to advance their careers without leaving current jobs. You can maintain weekday employment while completing your HHA certification. This schedule has helped hundreds of CNAs transition to higher-paying HHA positions seamlessly."
        },
        {
            q: "How much more can I earn as an HHA?",
            a: "HHAs typically earn $3-6 more per hour than facility CNAs. Starting wages range from $18-25/hour in home health, with premium pay for specialized clients. Most graduates recoup their $850 investment within 2-3 weeks of HHA work."
        },
        {
            q: "What's the difference between CNA and HHA work?",
            a: "While CNAs typically work in hospitals or nursing homes with multiple patients, HHAs provide personalized, one-on-one care in clients' homes. HHAs develop deeper relationships, manage home environments, prepare meals, and often become trusted companions."
        },
        {
            q: "Do you help with job placement?",
            a: "Yes! Our career services include resume development, interview preparation, direct connections to hiring agencies, and ongoing placement support. 90% of our HHA graduates receive job offers within 2 weeks of graduation."
        },
        {
            q: "Is state certification really necessary?",
            a: "State certification through the CNA/HHA Competency Evaluation ensures you meet California's highest standards. This certification makes you more competitive, qualifies you for higher-paying positions, and demonstrates your professional commitment to quality care."
        }
    ];

    const scheduleOptions = [
        {
            title: "Morning Theory Schedule",
            time: "Monday-Friday, 8:00 AM - 12:00 PM",
            description: "Perfect for afternoon workers or those with evening commitments",
            icon: BookOpen
        },
        {
            title: "Evening Theory Schedule", 
            time: "Monday-Friday, 5:00 PM - 9:00 PM",
            description: "Ideal for day shift workers who want to advance their careers",
            icon: Clock
        }
    ];

    const programSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": "Home Health Aide (HHA) Certification Program",
        "description": "3-week HHA program for CNAs. 40 hours total: 20 theory + 20 clinical. State exam fee included. Weekend clinicals available.",
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
        "timeToComplete": "P21D",
        "occupationalCategory": "31-1131",
        "offers": {
            "@type": "Offer",
            "price": "850",
            "priceCurrency": "USD"
        }
    };

    return (
        <>
            <Helmet>
                <title>HHA Program Pomona | Home Health Aide Certification | CNAs Earn $3-6 More/Hour</title>
                <meta name="description" content="Advance your CNA career with our 3-week HHA program. Weekend clinicals, state exam included, $3-6/hour pay increase. Perfect for working CNAs." />
                <meta name="keywords" content="HHA program Pomona, home health aide certification, CNA advancement, weekend clinical training, higher paying healthcare jobs" />
                <script type="application/ld+json">{JSON.stringify(programSchema)}</script>
            </Helmet>

            <main className="bg-white">
                {/* Hero Section - Female-focused messaging */}
                <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                                <TrendingUp className="h-4 w-4 mr-2" />
                                Advance Your CNA Career
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6">
                                Home Health Aide Certification
                            </h1>
                            <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-100">
                                Earn $3-6 More Per Hour While Helping Clients Stay Home
                            </p>
                            <p className="max-w-3xl mx-auto text-lg text-blue-100 mb-8">
                                Perfect for CNAs seeking more autonomy, better pay, and meaningful one-on-one relationships with clients. Weekend clinicals fit your schedule.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button 
                                    size="lg" 
                                    className="bg-white text-purple-700 hover:bg-gray-50 font-bold text-lg px-8 py-4"
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
                                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">3</div>
                                <div className="font-semibold">Weeks to Complete</div>
                                <div className="text-xs text-gray-400">40 total hours</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$3-6</div>
                                <div className="font-semibold">More Per Hour</div>
                                <div className="text-xs text-gray-400">Than facility CNAs</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">90%</div>
                                <div className="font-semibold">Job Placement Rate</div>
                                <div className="text-xs text-gray-400">Within 2 weeks</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$850</div>
                                <div className="font-semibold">All-Inclusive Price</div>
                                <div className="text-xs text-gray-400">State exam included</div>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* Program Structure */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Flexible Schedule for Working CNAs
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Keep your current job while advancing your career with our evening and weekend schedule
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Theory Week */}
                            <Card className="border-2 border-blue-500 shadow-lg">
                                <CardHeader className="bg-blue-500 text-white text-center py-6">
                                    <div className="mx-auto bg-white/20 p-3 rounded-full w-fit mb-3">
                                        <BookOpen className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-xl font-bold">Week 1: Theory</CardTitle>
                                    <p className="text-blue-100">20 Hours Classroom</p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        {scheduleOptions.map((schedule, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <schedule.icon className="h-6 w-6 text-blue-500 mt-1" />
                                                <div>
                                                    <h4 className="font-semibold">{schedule.title}</h4>
                                                    <p className="text-sm text-gray-600">{schedule.time}</p>
                                                    <p className="text-xs text-gray-500 mt-1">{schedule.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Clinical Weeks */}
                            <Card className="border-2 border-green-500 shadow-lg">
                                <CardHeader className="bg-green-500 text-white text-center py-6">
                                    <div className="mx-auto bg-white/20 p-3 rounded-full w-fit mb-3">
                                        <Users className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-xl font-bold">Weeks 2-3: Clinical</CardTitle>
                                    <p className="text-green-100">20 Hours Hands-On</p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Calendar className="h-6 w-6 text-green-500 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Weekend Schedule</h4>
                                                <p className="text-sm text-gray-600">Saturday & Sunday</p>
                                                <p className="text-sm text-gray-600">7:00 AM - 3:30 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-6 w-6 text-green-500 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Real Client Settings</h4>
                                                <p className="text-sm text-gray-600">Partner agencies in Pomona area</p>
                                                <p className="text-xs text-gray-500 mt-1">Within 20 miles of campus</p>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <p className="text-sm font-semibold text-green-700">
                                                ✓ Keep your weekday CNA job
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Prerequisites */}
                            <Card className="border-2 border-purple-500 shadow-lg">
                                <CardHeader className="bg-purple-500 text-white text-center py-6">
                                    <div className="mx-auto bg-white/20 p-3 rounded-full w-fit mb-3">
                                        <Shield className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-xl font-bold">Prerequisites</CardTitle>
                                    <p className="text-purple-100">CNA Required</p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-6 w-6 text-purple-500 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Active CNA Certification</h4>
                                                <p className="text-sm text-gray-600">Must remain active throughout program</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-6 w-6 text-purple-500 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Weekend Availability</h4>
                                                <p className="text-sm text-gray-600">For clinical rotations</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-6 w-6 text-purple-500 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Physical Ability</h4>
                                                <p className="text-sm text-gray-600">Lift/transfer clients safely</p>
                                            </div>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <p className="text-sm font-semibold text-purple-700">
                                                ✓ Out-of-state CNAs welcome
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Complete Curriculum */}
                <Section className="bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Comprehensive 5-Module Curriculum
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Building on your CNA foundation with specialized home health skills
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Card>
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        {hhaModules.map((module, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                                            >
                                                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                                                    {module.module}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-lg">{module.title}</h3>
                                                    <p className="text-blue-600 font-medium">{module.hours} hours</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Career Opportunities */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                High-Demand Career Opportunities
                            </h2>
                            <p className="text-lg text-gray-600">
                                HHAs are in tremendous demand across multiple healthcare settings
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
                                                <div className="bg-blue-500/10 p-3 rounded-full">
                                                    <opportunity.icon className="h-8 w-8 text-blue-500" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-2">{opportunity.title}</h3>
                                                    <p className="text-gray-600">{opportunity.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Card className="max-w-2xl mx-auto border-2 border-green-500">
                                <CardContent className="p-6">
                                    <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-4" />
                                    <h3 className="font-semibold text-lg mb-2">Career Advancement Opportunities</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p>• Care coordinator positions</p>
                                        <p>• Private duty assignments ($25-35/hour)</p>
                                        <p>• Agency supervisor roles</p>
                                        <p>• Pathway to LVN/RN programs</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Pricing & Investment */}
                <Section className="bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Complete Program Investment: $850
                            </h2>
                            <p className="text-lg text-gray-600">
                                All-inclusive with state exam fee covered - no hidden costs
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Card>
                                <CardContent className="p-8">
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-center mb-6 text-green-600">
                                            What's Included in Your $850 Investment:
                                        </h3>
                                        <div className="space-y-3">
                                            {programIncludes.map((item, index) => (
                                                <div key={index} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                                                    <div className="flex items-center gap-3">
                                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                                        <span className="font-medium">{item.item}</span>
                                                    </div>
                                                    {item.value && (
                                                        <span className="text-sm text-green-600 font-semibold">
                                                            {item.value}
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white p-6 rounded-lg border-2 border-blue-500">
                                            <h4 className="font-semibold text-lg mb-3 text-blue-600">
                                                <DollarSign className="inline h-5 w-5 mr-2" />
                                                WIOA Funding Available
                                            </h4>
                                            <p className="text-gray-700 text-sm mb-4">
                                                We're approved to accept WIOA funding, AJCC vouchers, and other workforce development programs.
                                            </p>
                                            <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-600">
                                                Check Eligibility
                                            </Button>
                                        </div>
                                        <div className="bg-white p-6 rounded-lg border-2 border-purple-500">
                                            <h4 className="font-semibold text-lg mb-3 text-purple-600">
                                                <Calendar className="inline h-5 w-5 mr-2" />
                                                Flexible Payment Plans
                                            </h4>
                                            <p className="text-gray-700 text-sm mb-4">
                                                $250 registration fee, remaining $600 can be paid in installments.
                                            </p>
                                            <Button size="sm" variant="outline" className="border-purple-500 text-purple-500">
                                                Learn More
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                                        <div className="text-center">
                                            <h4 className="font-bold text-lg text-green-700 mb-2">
                                                🎯 Return on Investment
                                            </h4>
                                            <p className="text-green-700">
                                                <strong>Most graduates recoup their $850 investment within 2-3 weeks</strong> of HHA work with the $3-6/hour pay increase!
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Success Stories */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                CNAs Who Advanced Their Careers
                            </h2>
                            <p className="text-lg text-gray-600">
                                Real stories from CNAs who increased their earning potential
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
                                                <p className="text-sm text-blue-600 font-semibold">{testimonial.program}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* FAQ Section */}
                <Section className="bg-gray-50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Common Questions About HHA Training
                            </h2>
                            <p className="text-lg text-gray-600">
                                Everything you need to know about advancing from CNA to HHA
                            </p>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <HelpCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
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
                <Section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
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
                                    Ready to Advance Your CNA Career?
                                </h2>
                                <p className="text-xl max-w-3xl mx-auto mb-8">
                                    Join hundreds of CNAs who've increased their earning potential and found more meaningful work in home health care. Your clients are waiting for your compassionate care.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button 
                                        size="lg" 
                                        className="bg-white text-purple-700 hover:bg-gray-50 font-bold text-lg px-8 py-4"
                                    >
                                        <Heart className="mr-2 h-5 w-5" />
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
                                <p className="text-sm mt-4 text-blue-100">
                                    ✓ Weekend clinicals ✓ State exam included ✓ Job placement assistance
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* Contact Form Section */}
                <Section>
                    <div className="container mx-auto px-4">
                        <ContactForm 
                            title="Ready to Earn $3-6 More Per Hour?"
                            description="Get personalized HHA program information and check your eligibility"
                            showPhoneOption={true}
                        />
                    </div>
                </Section>
            </main>
        </>
    );
};

export default HhaProgramPage;