import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { navigationData } from "@/data/navigationData";
import ThemeToggle from "./ThemeToggle";
import { DropdownMenuNavigation } from "@/components/ui/dropdown-menu-navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import LogoPng from '../../assets/logo.png'
import LogoWhitePng from '../../assets/logo-white.png'
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-sm shadow-sm"
          : "bg-background"
      } border-b border-border`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer min-h-[32px] min-w-[32px]">
                <img
                  src={LogoPng}
                  alt="Muretta Logo"
                  className="h-8 w-auto min-h-[32px] min-w-[32px] object-contain block dark:hidden"
                />
                <img
                  src={LogoWhitePng}
                  alt="Muretta Logo"
                  className="h-8 w-auto min-h-[32px] min-w-[32px] object-contain hidden dark:block"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <DropdownMenuNavigation items={navigationData} />
            <Button variant="default" asChild>
              <Link href="/contact">
                {t('navigation.getQuote')}
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            {/* <LanguageSwitcher /> */}
            <ThemeToggle />
            
            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <MobileMenu items={navigationData} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
