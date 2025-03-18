import { Link } from "wouter";
import { Container } from "@/components/ui/container";
import { navigationData } from "@/data/navigationData";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">MURETTA</h3>
            <p className="text-slate-400 mb-6">
              Leading provider of modern construction solutions for a sustainable and efficient built environment.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/muretta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/muretta_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/muretta.info/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/murettaca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/structural/sip" className="text-slate-400 hover:text-white transition-colors">
                  Structural Insulated Panels
                </Link>
              </li>
              <li>
                <Link href="/structural/csf" className="text-slate-400 hover:text-white transition-colors">
                  Cold-Formed Steel
                </Link>
              </li>
              <li>
                <Link href="/structural/timber" className="text-slate-400 hover:text-white transition-colors">
                  Timber Construction
                </Link>
              </li>
              <li>
                <Link href="/cladding/wpc" className="text-slate-400 hover:text-white transition-colors">
                  WPC Cladding
                </Link>
              </li>
              <li>
                <Link href="/cladding/aluminum" className="text-slate-400 hover:text-white transition-colors">
                  Aluminum Cladding
                </Link>
              </li>
              <li>
                <Link href="/solar-greenhouse" className="text-slate-400 hover:text-white transition-colors">
                  Solar Greenhouse
                </Link>
              </li>
              <li>
                <Link href="/prefabs" className="text-slate-400 hover:text-white transition-colors">
                  Prefab Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-slate-400 hover:text-white transition-colors">
                  Admin
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  4120 Ave. de Courtrai<br />Montréal Québec H3S 1C2
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-slate-400">1(833)-MURETTA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-slate-400">info@muretta.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-slate-400">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Muretta. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-slate-500 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
