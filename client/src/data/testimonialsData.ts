export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Daniel Robertson",
    role: "Project Developer",
    company: "Urbania",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    testimonial: "Muretta's SIP construction solution saved us months on our development timeline. The quality and energy efficiency of the final product exceeded our expectations. Highly recommend their team for any modern construction project."
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Architect",
    company: "Modernize Studios",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    testimonial: "The aluminum cladding system from Muretta transformed our commercial project. Not only does it look stunning, but the thermal performance and durability are outstanding. Their team was professional from design to installation."
  },
  {
    id: "3",
    name: "Michael Williams",
    role: "CEO",
    company: "EcoGrow Farms",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    rating: 4.5,
    testimonial: "Muretta's solar greenhouse technology has revolutionized our agricultural business. Energy costs are down 65%, and crop yield is up significantly. The structure itself is beautiful and has become a showcase for sustainable farming."
  },
  {
    id: "4",
    name: "Emma Rodriguez",
    role: "Development Manager",
    company: "Urban Heights",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    testimonial: "We've worked with Muretta on multiple residential projects, and their timber construction systems have consistently delivered excellent results. The quality of craftsmanship and attention to detail is impressive."
  },
  {
    id: "5",
    name: "James Liu",
    role: "Sustainability Director",
    company: "GreenBuild Developments",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    testimonial: "Muretta helped us achieve LEED Platinum certification through their innovative WPC cladding solution. The material performance and installation support were exceptional. We'll definitely be working with them again."
  }
];
