import { Container } from "@/components/ui/container";
import { Building, User, Award, Globe } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor: string;
  iconColor: string;
}

const StatItem = ({ icon, value, label, bgColor, iconColor }: StatItemProps) => (
  <div className="flex flex-col items-center">
    <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mb-4`}>
      <div className={`${iconColor}`}>{icon}</div>
    </div>
    <h3 className="text-lg font-semibold mb-1">{value}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm">{label}</p>
  </div>
);

export default function Stats() {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatItem
          icon={<Building className="h-6 w-6" />}
          value="15+ Years"
          label="Industry Experience"
          bgColor="bg-primary-100 dark:bg-primary-900"
          iconColor="text-primary-600 dark:text-primary-400"
        />
        <StatItem
          icon={<User className="h-6 w-6" />}
          value="500+"
          label="Happy Clients"
          bgColor="bg-secondary-100 dark:bg-secondary-900"
          iconColor="text-secondary-600 dark:text-secondary-400"
        />
        <StatItem
          icon={<Award className="h-6 w-6" />}
          value="50+"
          label="Industry Awards"
          bgColor="bg-accent-100 dark:bg-accent-900"
          iconColor="text-accent-600 dark:text-accent-400"
        />
        <StatItem
          icon={<Globe className="h-6 w-6" />}
          value="10+"
          label="Countries Served"
          bgColor="bg-slate-100 dark:bg-slate-800"
          iconColor="text-slate-600 dark:text-slate-400"
        />
      </div>
    </Container>
  );
}
