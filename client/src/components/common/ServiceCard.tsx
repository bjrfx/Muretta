import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 card-hover">
      <div className="h-48 relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
          {service.title}
        </h3>
      </div>
      <CardContent className="p-6">
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {service.description}
        </p>
        {service.subItems ? (
          <div className="grid grid-cols-1 gap-2">
            {service.subItems.map((subItem) => (
              <Link key={subItem.href} href={subItem.href}>
                <a className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                  <span>{subItem.title}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <Link href={service.href}>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
