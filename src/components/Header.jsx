
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronDown, GraduationCap, Info, FileText } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isProgramsOpen, setProgramsOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Programs',
      href: '/programs',
      dropdown: [
        { name: 'CNA Program - Online', href: '/cna-program' },
        { name: 'HHA Program', href: '/programs' },
        { name: 'RNA Program', href: '/programs' },
        { name: 'LVN Program', href: '/programs' },
      ],
    },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Financial Aid', href: '/financial-aid' },
    { name: 'Knowledge Base', href: '/knowledge-base' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const activeLinkStyle = {
    color: '#3AAE8E',
    fontWeight: '600',
  };

  const MobileLink = ({ href, children, onNavigate }) => (
    <NavLink
      to={href}
      className="block text-lg py-2 text-gray-700 hover:text-lotus-green"
      onClick={onNavigate}
    >
      {children}
    </NavLink>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-lotus-green" />
            <span className="text-xl font-bold text-charcoal whitespace-nowrap">Lotus Medical</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  <NavLink
                    to={link.href}
                    className="flex items-center text-gray-600 hover:text-lotus-green transition-colors"
                    style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </NavLink>
                  <AnimatePresence>
                    {isProgramsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="text-gray-600 hover:text-lotus-green transition-colors"
                  style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                >
                  {link.name}
                </NavLink>
              )
            )}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-2">
            <a href="tel:909-625-8050">
              <Button variant="ghost">
                <Phone className="mr-2 h-4 w-4" />
                (909) 625-8050
              </Button>
            </a>
            <Link to="/wioa-friday">
              <Button className="bg-lotus-green text-white hover:bg-lotus-green/90 animate-pulse">
                Enroll Now
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="p-6">
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                       <MobileLink key={link.name} href={link.href} onNavigate={() => setMobileMenuOpen(false)}>
                         {link.name}
                       </MobileLink>
                    ))}
                  </nav>
                  <div className="mt-8 border-t pt-6 space-y-4">
                     <a href="tel:909-625-8050">
                      <Button variant="outline" className="w-full">
                        <Phone className="mr-2 h-4 w-4" />
                        (909) 625-8050
                      </Button>
                    </a>
                    <Link to="/wioa-friday" className="block">
                      <Button className="w-full bg-lotus-green text-white hover:bg-lotus-green/90" onClick={() => setMobileMenuOpen(false)}>
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
