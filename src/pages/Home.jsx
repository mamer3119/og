import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ShieldCheck, Clock, Users, BookOpen, Heart, Stethoscope, Award, Calendar, Monitor, Briefcase, Zap, Star, GraduationCap, TrendingUp, DollarSign } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import StudentSuccess from '@/components/StudentSuccess';
import WhyFridayFillsFastSection from '@/components/wioa/WhyFridayFillsFastSection';
import EnrollmentTracker from '@/components/wioa/EnrollmentTracker';

const Home = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [wioaSpots, setWioaSpots] = useState(12);

  useEffect(() => {
    const savedSpots = localStorage.getItem('wioaSpots');
    if (savedSpots) {
      setWioaSpots(parseInt(savedSpots, 10));
    }

    const interval = setInterval(() => {
      setWioaSpots(prev => {
        const newSpots = prev > 0 ? prev - (Math.random() > 0.8 ? 1 : 0) : 0;
        localStorage.setItem('wioaSpots', newSpots);
        return newSpots;
      });
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      title: "HHA Certification",
      icon: Heart,
      description: "Advance your CNA career. Earn $3-6 more per hour in home health settings.",
      link: "/hha-program",
    },
    {
      title: "LVN Program", 
      icon: Stethoscope,
      description: "Take the next step. Become a licensed nurse with leadership opportunities.",
      link: "/programs",
    },
    {
      title: "RNA Training",
      icon: Award,
      description: "Specialize in rehabilitation. Help patients regain independence and dignity.",
      link: "/rna-program",
    },
  ];

  const successMetrics = [
    { value: "92%", label: "Pass Rate", sublabel: "Your Success is Our Mission" },
    { value: "4,000+", label: "Working Graduates", sublabel: "Join Our Family of Healthcare Heroes" },
    { value: "10+ Years", label: "CDPH‑Approved", sublabel: "Trusted Since 2015", isSmaller: true },
  ];

  const hybridProgramDetails = [
    {
      icon: Monitor,
      title: "Study From Home",
      description: "Complete theory online after the kids are asleep. Learn at your own pace with 24/7 access to materials."
    },
    {
      icon: Users,
      title: "Hands-On Training",
      description: "21 days of real clinical experience in top Pomona Valley hospitals where you'll likely work after graduation."
    },
    {
      icon: Clock,
      title: "Evening & Weekend Options",
      description: "Keep your day job while training. We offer schedules that work for busy moms and working adults."
    },
    {
      icon: Zap,
      title: "Free Training Available",
      description: "$0 out of pocket for most students through WIOA funding. We help with the entire application process!"
    }
  ];

  const complianceInfo = {
    techRequirements: "Any device with internet + Zoom, Canvas, and WhatsApp",
    gradingStandards: "75% minimum to pass | One retake opportunity | Academic support included",
    programCost: "$2,995 all-inclusive | Payment plans available | WIOA funding covers 100%",
    attendance: "100% attendance required | Make-up sessions available | Evening and weekend options"
  };

  return (
    <>
      <Helmet>
        <title>CNA Training Pomona | Transform Your Life in 31 Days | Lotus Medical Career College</title>
        <meta name="description" content="Join 4,000+ successful graduates. Recession-proof healthcare career with 92% pass rate. Evening classes for working moms. WIOA funding available - $0 out of pocket. CDPH approved since 2015." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-24 md:pt-28 md:pb-32 text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="success" className="mb-4 text-base py-1 px-4 animate-pulse">
              <Star className="h-4 w-4 mr-2" /> Most Students Pay $0 with WIOA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-charcoal mb-4">
              Your Recession-Proof Healthcare Career Starts Here
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-lotus-green mb-6">
              Join 4,000+ Women Who Transformed Their Lives in Just 31 Days
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-6">
              Perfect for busy moms and career-changers. Evening and weekend schedules available. 
              Start earning $35,000-$50,000 annually while making a meaningful difference in patients' lives.
            </p>
            <p className="text-sm text-gray-500 mb-10 max-w-2xl mx-auto">
              No healthcare experience needed • Financial aid available • 92% of our students pass on their first try
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-lotus-green text-white hover:bg-lotus-green/90 text-lg px-10 py-6" onClick={() => navigate('/free-cna-training-wioa')}>
                Check If You Qualify for Free Training
              </Button>
              <Link to="/cna-program">
                <Button size="lg" variant="outline" className="border-lotus-green text-lotus-green hover:bg-lotus-green/10 text-lg px-10 py-6">
                  View Next Start Date
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-charcoal text-white py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-2">
            <p className="text-xs text-gray-400">CDPH Approved Since 2015 | BPPE Licensed | Your Success is Our Mission</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`font-bold text-lotus-green mb-2 ${metric.isSmaller ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'}`}>
                  {metric.value}
                </div>
                <div className="font-semibold text-lg">{metric.label}</div>
                <div className={`text-gray-400 mt-1 ${metric.isSmaller ? 'text-xs md:text-sm' : 'text-sm'}`}>
                  {metric.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Compliance Banner */}
      <section className="bg-green-50 border-y border-green-200 py-6">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-sm">
            <div>
              <ShieldCheck className="h-5 w-5 text-green-600 mx-auto mb-1" />
              <p className="font-semibold text-gray-800">Technology Needed</p>
              <p className="text-gray-600">{complianceInfo.techRequirements}</p>
            </div>
            <div>
              <Award className="h-5 w-5 text-green-600 mx-auto mb-1" />
              <p className="font-semibold text-gray-800">Grading Standards</p>
              <p className="text-gray-600">{complianceInfo.gradingStandards}</p>
            </div>
            <div>
              <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-1" />
              <p className="font-semibold text-gray-800">Total Investment</p>
              <p className="text-gray-600">{complianceInfo.programCost}</p>
            </div>
            <div>
              <Calendar className="h-5 w-5 text-green-600 mx-auto mb-1" />
              <p className="font-semibold text-gray-800">Attendance Policy</p>
              <p className="text-gray-600">{complianceInfo.attendance}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Education That Fits Your Life, Not the Other Way Around</h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto text-lg">
              We understand you're juggling family, work, and dreams. Our program is designed by working moms, for working moms.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hybridProgramDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto bg-lotus-green/10 p-4 rounded-full w-fit mb-4">
                  <detail.icon className="h-8 w-8 text-lotus-green" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{detail.title}</h3>
                <p className="text-gray-600">{detail.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add new Trust Building Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-heading mb-4">Why Healthcare is Your Smartest Career Move</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <TrendingUp className="h-10 w-10 text-lotus-green mx-auto mb-3" />
                    <h4 className="font-bold mb-2">AI Can't Replace Compassion</h4>
                    <p className="text-sm text-gray-600">While other jobs disappear to automation, healthcare needs human touch more than ever</p>
                  </div>
                  <div>
                    <Briefcase className="h-10 w-10 text-lotus-green mx-auto mb-3" />
                    <h4 className="font-bold mb-2">216,200 Jobs Annually</h4>
                    <p className="text-sm text-gray-600">Healthcare is adding jobs while retail and manufacturing decline. Job security guaranteed.</p>
                  </div>
                  <div>
                    <Heart className="h-10 w-10 text-lotus-green mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Come Home Proud</h4>
                    <p className="text-sm text-gray-600">Be the angel families pray for. Your compassion literally saves lives every day.</p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-green-50 rounded-lg text-center">
                  <p className="text-sm text-green-800">
                    <strong>From Minimum Wage to Middle Class:</strong> Our graduates report earning $35,000-$50,000 annually within their first year
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Badge className="mb-4 bg-cyan-400 text-slate-900">Limited Time Offer</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                Friday Express Enrollment - Skip the Wait!
              </h2>
              <p className="text-slate-300 text-lg mb-6">
                Our Friday enrollment events are designed for busy moms who need to start quickly. Get your WIOA funding approved faster and begin your new career sooner. These exclusive spots fill within hours of opening.
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Same-day WIOA approval assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Priority placement in next cohort</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">One-on-one financial aid counseling</span>
                </li>
              </ul>
              <Button size="lg" className="bg-cyan-400 text-slate-900 hover:bg-cyan-300 font-bold" onClick={() => navigate('/wioa-friday')}>
                Reserve Your Friday Spot
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <EnrollmentTracker 
                spots={wioaSpots} 
                onReserveSpot={() => navigate('/wioa-friday')}
                onNextCohort={() => navigate('/wioa-friday')}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <WhyFridayFillsFastSection />

      <StudentSuccess />

      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Continue Your Journey: Advanced Certifications</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Your CNA certification is just the beginning. Advance your career and increase your earnings with specialized training.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover text-center">
                  <CardHeader>
                    <div className="mx-auto bg-lotus-green/10 p-4 rounded-full w-fit mb-2">
                      <program.icon className="h-8 w-8 text-lotus-green" />
                    </div>
                    <CardTitle className="font-heading text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-gray-600 mb-6 flex-grow">{program.description}</p>
                    <Link to={program.link}>
                      <Button variant="outline" className="w-full border-lotus-green text-lotus-green hover:bg-lotus-green/10 mt-auto">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add final CTA section */}
      <section className="bg-lotus-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            You Deserve Better Than Minimum Wage
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            4,000 women have already transformed their lives. Your family's financial security is just 31 days away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lotus-green hover:bg-gray-100" onClick={() => navigate('/free-cna-training-wioa')}>
              Start Your Application Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/contact')}>
              Talk to a Graduate Like You
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-90">
            Questions? Call us at (909) 625-8050 • Hablamos Español
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;