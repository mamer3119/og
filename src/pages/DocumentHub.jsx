
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, ShieldCheck, Gavel, BookOpen } from 'lucide-react';

const DocumentRow = ({ title, date, size, fileName, href }) => {
  const isExternalLink = href && href.startsWith('http');

  return (
    <div className="flex flex-wrap items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-4">
        <FileText className="h-6 w-6 text-lotus-green" />
        <div>
          <p className="font-semibold text-charcoal">{title}</p>
          <p className="text-sm text-gray-500">Last updated: {date}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        {size && <Badge variant="outline" className="font-mono">{size}</Badge>}
        {href ? (
            <Button asChild size="sm" className="bg-lotus-green text-white hover:bg-lotus-green/90">
                <a href={href} download={!isExternalLink} target={isExternalLink ? "_blank" : "_self"} rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Download
                </a>
            </Button>
        ) : (
             <Button size="sm" className="bg-lotus-green text-white hover:bg-lotus-green/90">
                <BookOpen className="mr-2 h-4 w-4" /> View Document
            </Button>
        )}
      </div>
    </div>
  );
};

const DocumentHub = () => {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <Helmet>
        <title>Document Hub - Lotus Medical Career College</title>
        <meta name="description" content="Access all official documents, forms, and handbooks for Lotus Medical Career College. Your central resource for regulatory disclosures and student information." />
      </Helmet>
      <main className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-4">Document Hub</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to your central resource for official college documents. All files are available for download.
          </p>
           <div className="mt-4 text-sm text-gray-500">
            <p className="flex items-center justify-center"><ShieldCheck className="h-4 w-4 mr-2 text-gray-400" /> All documents are provided in compliance with state and federal regulations.</p>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mb-8">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                        <h3 className="text-lg font-semibold text-blue-800">How to use this Hub:</h3>
                        <p className="text-sm text-blue-700 mt-1">
                            To add your own documents, place your PDF files into the `public/documents` folder in the project files. Then, update the links in this component to point to your new files.
                        </p>
                    </div>
                </div>
            </div>

          <Accordion type="multiple" defaultValue={['item-1']} className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg shadow-sm bg-white">
              <AccordionTrigger className="p-6 text-left hover:no-underline text-xl md:text-2xl font-semibold font-heading text-charcoal">
                Public Disclosures & Regulatory Documents
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <p className="text-gray-600 mb-6">
                  In compliance with California BPPE (Title 5 §71710) and CDPH NATP (Title 22 §71835) disclosure rules, the following documents are available to the public.
                </p>
                <div className="space-y-4">
                  <DocumentRow title="BPPE Approval Notice" date={today} size="150 KB" fileName="bppe-approval-notice.pdf" href="/documents/placeholder-document.pdf" />
                  <DocumentRow title="School Performance Fact Sheet" date={today} size="1.2 MB" fileName="fact-sheet.pdf" href="/documents/placeholder-document.pdf" />
                  <DocumentRow title="Student Catalog" date={today} size="2.5 MB" fileName="student-catalog.pdf" href="/documents/placeholder-document.pdf" />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border rounded-lg shadow-sm bg-white">
              <AccordionTrigger className="p-6 text-left hover:no-underline text-xl md:text-2xl font-semibold font-heading text-charcoal">
                <div className="flex items-center space-x-2">
                  <span>Enrollment Agreements</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                 <p className="text-gray-600 mb-6">
                  Please download and review the enrollment agreement for your chosen program.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <DocumentRow title="CNA Agreement" date={today} size="350 KB" fileName="cna-agreement.pdf" href="/documents/placeholder-document.pdf" />
                    <DocumentRow title="HHA Agreement" date={today} size="350 KB" fileName="hha-agreement.pdf" href="/documents/placeholder-document.pdf" />
                    <DocumentRow title="RNA Agreement" date={today} size="350 KB" fileName="rna-agreement.pdf" href="/documents/placeholder-document.pdf" />
                    <DocumentRow title="LVN Agreement" date={today} size="350 KB" fileName="lvn-agreement.pdf" href="/documents/placeholder-document.pdf" />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border rounded-lg shadow-sm bg-white">
              <AccordionTrigger className="p-6 text-left hover:no-underline text-xl md:text-2xl font-semibold font-heading text-charcoal">
                <div className="flex items-center space-x-2">
                  <Gavel className="h-5 w-5" />
                  <span>College Policies & Handbooks</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <p className="text-gray-600 mb-6">
                  Important information regarding student conduct, rights, and college policies.
                </p>
                <div className="space-y-4">
                  <DocumentRow title="Student Handbook" date={today} fileName="student-handbook.pdf" href="/documents/placeholder-document.pdf"/>
                  <DocumentRow title="Complaint Process Information" date={today} fileName="complaint-process.pdf" href="/documents/placeholder-document.pdf"/>
                  <DocumentRow title="Non-Discrimination Policy" date={today} fileName="non-discrimination-policy.pdf" href="/documents/placeholder-document.pdf"/>
                  <DocumentRow title="Privacy Policy (FERPA)" date={today} fileName="privacy-policy-ferpa.pdf" href="/documents/placeholder-document.pdf"/>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </main>
    </>
  );
};

export default DocumentHub;