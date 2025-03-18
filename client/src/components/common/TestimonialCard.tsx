import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/data/testimonialsData";
import { Star, StarHalf } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Generate star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 text-yellow-400 fill-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 text-yellow-400 fill-yellow-400" />);
    }

    return stars;
  };

  return (
    <Card className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 p-8 card-hover">
      <CardContent className="p-0">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-slate-500 dark:text-slate-400">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
        <div className="flex mb-6">
          {renderStars(testimonial.rating)}
        </div>
        <blockquote className="text-slate-600 dark:text-slate-300 italic">
          "{testimonial.testimonial}"
        </blockquote>
      </CardContent>
    </Card>
  );
}
