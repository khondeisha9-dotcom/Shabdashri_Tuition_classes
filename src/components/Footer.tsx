import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import shabdashriLogo from '@/assets/shabdashri-logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src={shabdashriLogo} 
                alt="Shabdashri Tuition Classes" 
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Empowering students with quality education and personalized attention. 
              Excellence in academics through innovative teaching methodologies.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Clock size={16} />
              <span className="text-sm">Mon - Sat: 8:00 AM - 8:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/library" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  Behind Bus Stand,<br />
                  Near Satwa Mata Mandir,<br />
                  Saoner, Maharashtra - 441107
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <p className="text-primary-foreground/80 text-sm">9822925021 , 9823309877</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <p className="text-primary-foreground/80 text-sm">shabdaprakash88@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Shabdashri Tuition Classes. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            Developed by ishakhonde 👨‍💻
          </p>
        </div> */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
  <p className="text-primary-foreground/60 text-sm">
    © 2024 Shabdashri Tuition Classes. All rights reserved.
  </p>
  <p className="text-primary-foreground/60 text-sm mt-2">
    Developed by{' '}
    <a
      href="https://isha-khonde.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:underline font-medium"
    >
      ishakhonde 👨‍💻
    </a>
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;