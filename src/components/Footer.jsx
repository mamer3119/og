
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Phone, MapPin, Clock, Facebook, Instagram, Mail, FileText, Shield } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();
  const location = useLocation();

  if (location.pathname === '/wioa-free-cna-training') {
    return (
      <footer className="bg-slate-900 text-slate-400">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>© 2025 Lotus Medical Career College. All rights reserved.</p>
          <p className="text-xs mt-2">1460 E Holt Ave Suite 176A, Pomona, CA 91767 | (909) 625-8050</p>
        </div>
      </footer>
    );
  }

  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} link isn't set up yet!`,
    });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Online CNA Program', path: '/cna-program' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Financial Aid', path: '/financial-aid' },
    { name: 'Knowledge Base', path: '/knowledge-base' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-primary">Lotus Medical Career College</h3>
            <p className="text-gray-300 mb-4 flex items-start">
              <MapPin className="mr-3 h-5 w-5 text-primary mt-1 shrink-0" />
              <span>1460 E Holt Ave Suite 176A, <br />Pomona, CA 91767</span>
            </p>
            <div className="space-y-3">
              <p className="flex items-center"><Phone className="mr-3 h-4 w-4 text-primary" /> (909) 625-8050</p>
              <p className="flex items-center"><Mail className="mr-3 h-4 w-4 text-primary" /> admissions@lotusmed.com</p>
              <p className="flex items-center"><Clock className="mr-3 h-4 w-4 text-primary" /> Mon–Fri 9:00 AM–5:00 PM</p>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-primary">Compliance & Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/knowledge-base" className="flex items-center hover:text-primary transition-colors"><Shield className="h-4 w-4 mr-2"/> BPPE & CDPH Approval</Link></li>
              <li><a href="/documents/placeholder-document.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors"><FileText className="h-4 w-4 mr-2"/> School Performance Fact Sheet</a></li>
              <li><a href="/documents/placeholder-document.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors"><FileText className="h-4 w-4 mr-2"/> Student Catalog</a></li>
              <li><Link to="/knowledge-base" className="flex items-center hover:text-primary transition-colors"><FileText className="h-4 w-4 mr-2"/> Transfer Credit Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-primary">Connect With Us</h3>
             <div className="flex space-x-4 mb-4">
              <button onClick={() => handleSocialClick('Facebook')} aria-label="Facebook" className="text-white hover:text-primary transition-transform hover:scale-110">
                <Facebook className="h-6 w-6" />
              </button>
              <button onClick={() => handleSocialClick('Instagram')} aria-label="Instagram" className="text-white hover:text-primary transition-transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </button>
            </div>
            <p className="text-sm text-gray-400">Follow us for updates and student stories.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-sm text-gray-400">
          <p className="mb-4 text-center">
            <strong>Non-Discrimination Policy:</strong> Lotus Medical Career College is an equal opportunity employer and education provider. We do not discriminate on the basis of race, color, national origin, sex, disability, or age in our programs and activities. We are committed to providing an accessible and inclusive environment for all students and staff.
          </p>
           <p className="mb-4 text-center">
            <strong>Transfer of Credits:</strong> Lotus Medical Career College does not accept the transfer of credits from other institutions, nor do we have articulation agreements. All program hours must be completed with us to ensure compliance and quality standards.
          </p>
          <p className="text-center">© 2025 Lotus Medical Career College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
