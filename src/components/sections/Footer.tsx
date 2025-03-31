
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";

interface FooterProps {
  onSubmit: (e: React.FormEvent) => void;
}

const Footer: React.FC<FooterProps> = ({ onSubmit }) => {
  const links = [
    { title: "Home", href: "#" },
    { title: "Services", href: "#" },
    { title: "Case Studies", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ];
  
  const legalLinks = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms & Conditions", href: "#" },
  ];
  
  const contactInfo = [
    { icon: <Globe className="h-5 w-5" />, text: "leadsobtainer.com", href: "https://leadsobtainer.com" },
    { icon: <Mail className="h-5 w-5" />, text: "info@leadsobtainer.com", href: "mailto:info@leadsobtainer.com" },
    { icon: <Phone className="h-5 w-5" />, text: "(XXX) XXX-XXXX", href: "tel:+1XXXXXXXXXX" },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-agency-blue">Leads Obtainer</h3>
            <p className="text-gray-600 mb-6">
              Empowering Local Businesses to 4x Growth in 90 Days.
            </p>
            
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="flex items-center gap-3 text-gray-700 hover:text-agency-blue transition-colors"
                  >
                    <span className="text-agency-blue">{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-agency-blue flex items-center gap-2 transition-colors"
                  >
                    <ArrowRight className="h-3 w-3" />
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-gray-800">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-agency-blue flex items-center gap-2 transition-colors"
                  >
                    <ArrowRight className="h-3 w-3" />
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 text-gray-800">Get Growth Tips</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for weekly marketing tips.
            </p>
            
            <form onSubmit={onSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-agency-blue"
                />
                <button
                  type="submit"
                  className="bg-agency-blue text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>
        </div>
        
        {/* Social and Copyright */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Leads Obtainer. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-agency-blue hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5 flex items-center justify-center">
                    {social.charAt(0).toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
