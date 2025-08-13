import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import TestimonialCarousel from '@/components/wioa/TestimonialCarousel';
import ContactForm from '@/components/ContactForm';
import { 
    CheckCircle, 
    DollarSign, 
    Clock, 
    Users, 
    FileText, 
    HelpCircle, 
    Briefcase, 
    Monitor, 
    MapPin,
    Award,
    Shield,
    Heart,
    Star,
    BookOpen,
    Calendar,
    Phone,
    ExternalLink
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

const OnlineCnaProgramPage = () => {
    const { toast } = useToast();

    // Official 17-module curriculum from Program_Data_Master
    const curriculum17Modules = [
        "Introduction to Nurse Assistant",
        "Patient/Resident Rights", 
        "Communication/Interpersonal Skills",
        "Prevention and Management of Catastrophe and Unusual Occurrences",
        "Body Mechanics",
        "Medical and Surgical Asepsis",
        "Weights and Measures",
        "Patient Care Skills",
        "Patient Care Procedures", 
        "Vital Signs",
        "Nutrition",
        "Emergency Procedures",
        "Long Term Care Patient/Resident",
        "Rehabilitative Nursing",
        "Observation and Charting",
        "Death and Dying",
        "Patient/Resident Abuse"
    ];

    // Official upcoming cohorts from Program_Data_Master
    const upcomingCohorts = [
        { cohort: "NA84", start: "02/04/25", end: "03/19/25", spotsLeft: 8 },
        { cohort: "NA85", start: "03/20/25", end: "05/01/25", spotsLeft: 12 },
        { cohort: "NA86", start: "05/02/25", end: "06/16/25", spotsLeft: 15 },
        { cohort: "NA87", start: "06/17/25", end: "07/30/25", spotsLeft: 15 },
        { cohort: "NA88", start: "07/31/25", end: "09/12/25", spotsLeft: 15 },
        { cohort: "NA89", start: "09/15/25", end: "10/27/25", spotsLeft: 15 }
    ];

    // Clinical partner facilities
    const clinicalSites = [
        "Pomona Vista Care Center",
        "Chino Valley Health Care Center", 
        "Inland Empire Rehabilitation Center",
        "Claremont Care Center"
    ];

    // Complete pricing breakdown
    const pricingBreakdown = [
        { item: "Registration Fee", amount: "$250.00", note: "non-refundable" },
        { item: "Tuition", amount: "$2,200.00", note: "" },
        { item: "Supplies & Equipment", amount: "$95.00", note: "mask, gloves, BP kit" },
        { item: "Textbook/Online Media", amount: "$90.00", note: "" },
        { item: "Uniform & Badge", amount: "$65.00", note: "non-refundable" },
        { item: "CPR Course", amount: "$90.00", note: "" },
        { item: "Fingerprinting/Live-Scan", amount: "$85.00", note: "" },
        { item: "State Exam Fee", amount: "$120.00", note: "refunded when scheduled" }
    ];

    const testimonials = [
        { 
            name: 'Maria G.', 
            program: 'CNA Graduate 2024', 
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2', 
            quote: "As a working mom, I needed flexibility. The evening schedule was perfect - I could work during the day and attend classes at night. Now I'm a CNA at Pomona Valley Hospital making $22/hour!" 
        },
        { 
            name: 'Sofia R.', 
            program: 'CNA Graduate 2024', 
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', 
            quote: "I was nervous about going back to school after 15 years, but the instructors were so supportive. The online classes made me feel comfortable, and I passed the state exam on my first try!" 
        },
        { 
            name: 'Carmen L.', 
            program: 'CNA Graduate 2024', 
            image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8', 
            quote: "This program changed my life. I went from minimum wage to $20/hour in just 31 days. My family finally has financial security, and I love helping patients every day." 
        }
    ];

    const faqs = [
        {
            q: "Do I need previous healthcare experience?",
            a: "No! Our program is designed for beginners with no prior healthcare experience. We'll teach you everything you need to know, from basic patient care to advanced clinical skills."
        },
        {
            q: "What technology do I need for online classes?",
            a: "You can use any device (laptop, desktop, smartphone, or tablet) with a camera. We use Zoom for live classes, Canvas for coursework, and WhatsApp for communication. All platforms are user-friendly."
        },
        {
            q: "Can I work while attending this program?",
            a: "Yes! Our evening schedule (4:00-10:30 PM theory, 3:00-8:00 PM clinical) is specifically designed for working adults. Many students maintain day jobs while completing the program."
        },
        {
            q: "What happens if I miss a class?",
            a: "Attendance is mandatory (100% required by CDPH). We allow one documented absence with required make-up. We work with students to ensure they meet all requirements."
        },
        {
            q: "What's your state exam pass rate?",
            a: "We maintain a 92% state exam pass rate, which is significantly above the 73% state average. Our comprehensive exam preparation includes practice tests and mock skills evaluations."
        },
        {
            q: "Do you help with job placement?",
            a: "Yes! We provide resume writing support, interview preparation, job referrals, and connections with local healthcare employers. Most graduates receive job offers within 2 weeks."
        }
    ];

    const handleCDPHLink = (form) => {
        toast({
            title: "Opening CDPH Form " + form,
            description: "You'll be redirected to the official California Department of Public Health website."
        });
    };

    const programSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": "Certified Nursing Assistant (CNA) Program",
        "description": "Complete 31-day CNA training program in Pomona, CA. 162 hours total: 60 theory + 102 clinical. 92% pass rate. WIOA funding available.",
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
        "timeToComplete": "P31D",
        "occupationalCategory": "31-1131",
        "offers": {
            "@type": "Offer",
            "price": "2995",
            "priceCurrency": "USD"
        }
    };

    return (
        <>
            <Helmet>
                <title>CNA Program Pomona | 31-Day Certification | 92% Pass Rate | Lotus Medical</title>
                <meta name="description" content="Join our CDPH-approved CNA program in Pomona. 31-day evening schedule, 92% pass rate, WIOA funding available. Start your healthcare career today!" />
                <meta name="keywords" content="CNA program Pomona, nursing assistant training, CNA classes evening, CDPH approved, WIOA funding, healthcare career" />
                <script type="application/ld+json">{JSON.stringify(programSchema)}</script>
            </Helmet>

            <main className="bg-white">
                {/* Hero Section - Female-focused messaging */}
                <section className="relative bg-gradient-to-br from-lotus-green via-emerald-500 to-teal-600 text-white py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                                <Award className="h-4 w-4 mr-2" />
                                CDPH Approved Since 2015
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6">
                                Launch Your Healthcare Career in 31 Days
                            </h1>
                            <p className="text-xl md:text-2xl font-semibold mb-4 text-emerald-100">
                                Join 4,000+ Women Who've Built Stable, Rewarding Careers
                            </p>
                            <p className="max-w-3xl mx-auto text-lg text-emerald-100 mb-8">
                                Evening classes designed for working mothers and career-changers. Flexible online theory + hands-on clinical training in Pomona.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button 
                                    size="lg" 
                                    className="bg-white text-lotus-green hover:bg-gray-50 font-bold text-lg px-8 py-4"
                                >
                                    Check WIOA Eligibility
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
                                <div className="text-4xl md:text-5xl font-bold text-lotus-green mb-2">92%</div>
                                <div className="font-semibold">State Exam Pass Rate</div>
                                <div className="text-xs text-gray-400">Above 73% state average</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-lotus-green mb-2">4,000+</div>
                                <div className="font-semibold">Graduates</div>
                                <div className="text-xs text-gray-400">Since 2015</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-lotus-green mb-2">31</div>
                                <div className="font-semibold">Days to Complete</div>
                                <div className="text-xs text-gray-400">Evening schedule</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-lotus-green mb-2">$18-24</div>
                                <div className="font-semibold">Starting Hourly Wage</div>
                                <div className="text-xs text-gray-400">Pomona area</div>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* Program Structure */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Two Schedule Options to Fit Your Life
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Choose the schedule that works best for your family and current commitments
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* PM Evening Program */}
                            <Card className="border-2 border-lotus-green shadow-lg">
                                <CardHeader className="bg-lotus-green text-white text-center py-6">
                                    <div className="mx-auto bg-white/20 p-3 rounded-full w-fit mb-3">
                                        <Monitor className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold">FastTrack Online CNA Program</CardTitle>
                                    <p className="text-emerald-100">Perfect for Working Parents</p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Clock className="h-6 w-6 text-lotus-green mt-1" />
                                            <div>
                                                <h4 className="font-semibold">31 Days Total</h4>
                                                <p className="text-gray-600 text-sm">Evening schedule fits around work</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Monitor className="h-6 w-6 text-lotus-green mt-1" />
                                            <div>
                                                <h4 className="font-semibold">10 Days Online Theory</h4>
                                                <p className="text-gray-600 text-sm">Mon-Fri, 4:00-10:30 PM via Zoom/Canvas</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Users className="h-6 w-6 text-lotus-green mt-1" />
                                            <div>
                                                <h4 className="font-semibold">21 Days Clinical Training</h4>
                                                <p className="text-gray-600 text-sm">Mon-Fri, 3:00-8:00 PM at partner facilities</p>
                                            </div>
                                        </div>
                                        <div className="bg-lotus-green/5 p-4 rounded-lg">
                                            <p className="text-sm font-semibold text-lotus-green">
                                                ✓ Keep your day job while training
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* AM In-Person Program */}
                            <Card className="border-2 border-gray-300 shadow-lg">
                                <CardHeader className="bg-gray-600 text-white text-center py-6">
                                    <div className="mx-auto bg-white/20 p-3 rounded-full w-fit mb-3">
                                        <Users className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold">In-Person CNA Program</CardTitle>
                                    <p className="text-gray-100">Traditional Classroom Experience</p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Clock className="h-6 w-6 text-gray-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">27 Days Total</h4>
                                                <p className="text-gray-600 text-sm">Accelerated morning schedule</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <BookOpen className="h-6 w-6 text-gray-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">10 Days In-Person Theory</h4>
                                                <p className="text-gray-600 text-sm">Mon-Fri, 8:00 AM-2:30 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Users className="h-6 w-6 text-gray-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">17 Days Clinical Training</h4>
                                                <p className="text-gray-600 text-sm">Mon-Fri, 7:00 AM-1:30 PM</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm font-semibold text-gray-600">
                                                ✓ Traditional classroom interaction
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
                                Complete 17-Module CDPH-Approved Curriculum
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                162 total hours: 60 hours theory + 102 hours clinical training
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Card>
                                <CardContent className="p-8">
                                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                        {curriculum17Modules.map((module, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                viewport={{ once: true }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle className="h-5 w-5 text-lotus-green mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">
                                                    <span className="font-semibold">Module {index + 1}:</span> {module}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-8 p-6 bg-lotus-green/5 rounded-lg">
                                        <h4 className="font-semibold text-lg mb-3 text-charcoal">
                                            <FileText className="inline h-5 w-5 mr-2" />
                                            Required Skills Completion
                                        </h4>
                                        <div className="text-sm text-gray-700 space-y-2">
                                            <p>Students must complete all skills listed on official CDPH forms:</p>
                                            <div className="flex flex-wrap gap-4">
                                                <Button 
                                                    variant="outline" 
                                                    size="sm"
                                                    className="border-lotus-green text-lotus-green hover:bg-lotus-green/10"
                                                    onClick={() => handleCDPHLink('E276A')}
                                                >
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    CDPH Form E276A
                                                </Button>
                                                <Button 
                                                    variant="outline" 
                                                    size="sm"
                                                    className="border-lotus-green text-lotus-green hover:bg-lotus-green/10"
                                                    onClick={() => handleCDPHLink('E276C')}
                                                >
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    CDPH Form E276C
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Clinical Training Sites */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Clinical Training at Premier Pomona Area Facilities
                            </h2>
                            <p className="text-lg text-gray-600">
                                Gain hands-on experience at our carefully selected partner facilities
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {clinicalSites.map((site, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full">
                                        <CardContent className="p-6 text-center">
                                            <MapPin className="h-8 w-8 text-lotus-green mx-auto mb-4" />
                                            <h3 className="font-semibold text-lg">{site}</h3>
                                            <p className="text-gray-600 text-sm mt-2">
                                                Professional healthcare facility partnership
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Card className="max-w-2xl mx-auto">
                                <CardContent className="p-6">
                                    <Shield className="h-8 w-8 text-lotus-green mx-auto mb-4" />
                                    <h3 className="font-semibold text-lg mb-2">Campus Location</h3>
                                    <p className="text-gray-700">
                                        1460 E. Holt Avenue, Suite 176A<br />
                                        Pomona, CA 91767<br />
                                        <strong>(909) 625-8050</strong>
                                    </p>
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
                                Complete Program Investment: $2,995
                            </h2>
                            <p className="text-lg text-gray-600">
                                All-inclusive pricing with no hidden fees. Everything you need to succeed.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Card>
                                <CardContent className="p-8">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="text-left py-3 font-semibold text-charcoal">Item</th>
                                                    <th className="text-right py-3 font-semibold text-charcoal">Amount</th>
                                                    <th className="text-left py-3 font-semibold text-charcoal pl-4">Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {pricingBreakdown.map((item, index) => (
                                                    <tr key={index} className="border-b border-gray-100">
                                                        <td className="py-3">{item.item}</td>
                                                        <td className="py-3 text-right font-mono">{item.amount}</td>
                                                        <td className="py-3 pl-4 text-sm text-gray-600">{item.note}</td>
                                                    </tr>
                                                ))}
                                                <tr className="border-t-2 border-lotus-green bg-lotus-green/5">
                                                    <td className="py-4 font-bold text-lg">Total Program Cost</td>
                                                    <td className="py-4 text-right font-bold text-lg font-mono">$2,995.00</td>
                                                    <td className="py-4 pl-4 text-sm font-semibold text-lotus-green">All-inclusive</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                                        <div className="bg-white p-6 rounded-lg border">
                                            <h4 className="font-semibold text-lg mb-3 text-lotus-green">
                                                <DollarSign className="inline h-5 w-5 mr-2" />
                                                WIOA Funding Available
                                            </h4>
                                            <p className="text-gray-700 text-sm mb-4">
                                                Most students qualify for government funding through WIOA that can cover the entire program cost.
                                            </p>
                                            <Button size="sm" className="bg-lotus-green text-white hover:bg-lotus-green/90">
                                                Check Eligibility
                                            </Button>
                                        </div>
                                        <div className="bg-white p-6 rounded-lg border">
                                            <h4 className="font-semibold text-lg mb-3 text-charcoal">
                                                <Calendar className="inline h-5 w-5 mr-2" />
                                                Payment Plans
                                            </h4>
                                            <p className="text-gray-700 text-sm mb-4">
                                                Flexible payment options available. Split your investment into manageable installments.
                                            </p>
                                            <Button size="sm" variant="outline" className="border-charcoal text-charcoal">
                                                Learn More
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Technology Requirements */}
                <Section>
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Technology Requirements
                            </h2>
                            <p className="text-lg text-gray-600">
                                Simple tech requirements - use any device you already have
                            </p>
                        </div>

                        <Card>
                            <CardContent className="p-8">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="bg-lotus-green/10 p-4 rounded-full w-fit mx-auto mb-4">
                                            <Monitor className="h-8 w-8 text-lotus-green" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Any Device</h3>
                                        <p className="text-sm text-gray-600">
                                            Laptop, desktop, smartphone, or tablet with camera
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-lotus-green/10 p-4 rounded-full w-fit mx-auto mb-4">
                                            <Users className="h-8 w-8 text-lotus-green" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Zoom Classes</h3>
                                        <p className="text-sm text-gray-600">
                                            Daily live interactive classes
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-lotus-green/10 p-4 rounded-full w-fit mx-auto mb-4">
                                            <BookOpen className="h-8 w-8 text-lotus-green" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Canvas LMS</h3>
                                        <p className="text-sm text-gray-600">
                                            Curriculum, schedule, modules & tests
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                                    <p className="text-sm text-yellow-800">
                                        <strong>BPPE Compliance Note:</strong> Per AFL 20-89.1, technology hardware and software requirements for students to access and complete the program include any device with camera capability and access to Zoom, Canvas LMS, and WhatsApp for communication.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Section>

                {/* Upcoming Cohorts */}
                <Section className="bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Upcoming Cohorts - Limited Spots Available
                            </h2>
                            <p className="text-lg text-gray-600">
                                Secure your spot today. Classes fill quickly!
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Card>
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-lotus-green text-white">
                                                <tr>
                                                    <th className="text-left p-4 font-semibold">Cohort</th>
                                                    <th className="text-left p-4 font-semibold">Start Date</th>
                                                    <th className="text-left p-4 font-semibold">End Date</th>
                                                    <th className="text-center p-4 font-semibold">Spots Left</th>
                                                    <th className="text-center p-4 font-semibold">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {upcomingCohorts.map((cohort, index) => (
                                                    <tr key={cohort.cohort} className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="p-4 font-semibold text-lotus-green">{cohort.cohort}</td>
                                                        <td className="p-4">{cohort.start}</td>
                                                        <td className="p-4">{cohort.end}</td>
                                                        <td className="p-4 text-center">
                                                            <Badge 
                                                                variant={cohort.spotsLeft <= 5 ? "destructive" : "secondary"}
                                                                className={cohort.spotsLeft <= 5 ? "animate-pulse" : ""}
                                                            >
                                                                {cohort.spotsLeft} left
                                                            </Badge>
                                                        </td>
                                                        <td className="p-4 text-center">
                                                            <Button 
                                                                size="sm" 
                                                                className="bg-lotus-green text-white hover:bg-lotus-green/90"
                                                                disabled={cohort.spotsLeft === 0}
                                                            >
                                                                Reserve Spot
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Success Stories - Female-focused */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Join Our Family of Successful Women
                            </h2>
                            <p className="text-lg text-gray-600">
                                Real stories from graduates who transformed their lives and careers
                            </p>
                        </div>
                        <TestimonialCarousel testimonials={testimonials} />
                    </div>
                </Section>

                {/* FAQ Section */}
                <Section className="bg-gray-50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Your Questions Answered
                            </h2>
                            <p className="text-lg text-gray-600">
                                Everything you need to know about our CNA program
                            </p>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <HelpCircle className="h-5 w-5 text-lotus-green flex-shrink-0" />
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
                <Section className="bg-gradient-to-r from-lotus-green to-emerald-600 text-white">
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
                                    Your Healthcare Career Starts Here
                                </h2>
                                <p className="text-xl max-w-3xl mx-auto mb-8">
                                    Join thousands of women who've built stable, rewarding careers in healthcare. 
                                    Your future patients are waiting for your compassionate care.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button 
                                        size="lg" 
                                        className="bg-white text-lotus-green hover:bg-gray-50 font-bold text-lg px-8 py-4"
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
                                <p className="text-sm mt-4 text-emerald-100">
                                    ✓ WIOA funding available ✓ Evening classes ✓ Job placement assistance
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* Contact Form Section */}
                <Section>
                    <div className="container mx-auto px-4">
                        <ContactForm 
                            title="Ready to Change Your Life?"
                            description="Get personalized program information and check your WIOA eligibility"
                            showPhoneOption={true}
                        />
                    </div>
                </Section>
            </main>
        </>
    );
};

export default OnlineCnaProgramPage;