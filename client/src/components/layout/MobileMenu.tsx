import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/data/navigationData";
import { useTranslation } from "react-i18next";
import Logo from "@/assets/logo.svg";

interface MobileMenuProps {
  items: NavItem[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="px-2">
        {/* <img src={Logo} alt="Muretta Logo" className="h-8 w-auto" /> */}
      </div>
      
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <div key={item.title}>
            {item.children ? (
              <Accordion type="single" collapsible>
                <AccordionItem value={item.title} className="border-none">
                  <AccordionTrigger className="py-2 px-2 hover:bg-muted rounded-md font-medium">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="pl-6">
                    <div className="flex flex-col gap-1 pt-1">
                      {item.children.map((child) => (
                        <Link key={child.title} href={child.href} className="py-2 px-2 rounded-md hover:bg-muted font-medium block">
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link href={item.href} className="py-2 px-2 rounded-md hover:bg-muted font-medium block">
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      
      <div className="px-2 mt-4">
        <Button className="w-full" asChild>
          <Link href="/contact">{t('navigation.getQuote')}</Link>
        </Button>
      </div>
    </div>
  );
}
