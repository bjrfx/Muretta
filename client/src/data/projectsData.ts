export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  shortDescription: string;
  images: {
    before: string;
    after: string;
  };
  category: 'residential' | 'commercial' | 'specialized';
  services: string[];
}

export const projects: Project[] = [
  {
    id: "model-01",
    title: "Model 01",
    location: "Custom Location",
    shortDescription: "Modern prefab kit house featuring Passive House principles and SIP construction, offering elegant living spaces and a rooftop terrace.",
    description: "Step into a home where light weaves through every room, and form flows gracefully with function. This prefab kit house, with its south-facing façade, invites the sun to embrace every corner, guided by the harmony of Passive House principles for unmatched comfort and energy efficiency. Built with Structural Insulated Panels (SIPs), it stands as a quiet guardian of sustainability, offering both strength and peace. The open living spaces flow effortlessly, each room a canvas of contemporary design, offering seamless connection and refined elegance. Above, the master bedroom, perched on the second level, opens to a rooftop terrace—a private sanctuary where the sky stretches endlessly and nature becomes your companion. This home is more than just a living space; it's a timeless expression of beauty, balance, and modern tranquility.",
    images: {
      before: "https://static.wixstatic.com/media/2cd8d1_067d014fa65a44f0b8a9c3c4d67b8747~mv2.jpg",
      after: "https://static.wixstatic.com/media/2cd8d1_67bec74bc97d42b88a0236248dcddc09~mv2.jpg"
    },
    category: "residential",
    services: ["SIP Construction", "Passive House Design", "Rooftop Terrace"]
  },
  {
    id: "model-02",
    title: "Model 02",
    location: "Custom Location",
    shortDescription: "Modern prefab kit house featuring Passive House principles and SIP construction, offering elegant living spaces and a rooftop terrace.",
    description: "Step into a home where light weaves through every room, and form flows gracefully with function. This prefab kit house, with its south-facing façade, invites the sun to embrace every corner, guided by the harmony of Passive House principles for unmatched comfort and energy efficiency. Built with Structural Insulated Panels (SIPs), it stands as a quiet guardian of sustainability, offering both strength and peace. The open living spaces flow effortlessly, each room a canvas of contemporary design, offering seamless connection and refined elegance. Above, the master bedroom, perched on the second level, opens to a rooftop terrace—a private sanctuary where the sky stretches endlessly and nature becomes your companion. This home is more than just a living space; it's a timeless expression of beauty, balance, and modern tranquility.",
    images: {
      before: "https://static.wixstatic.com/media/2cd8d1_067d014fa65a44f0b8a9c3c4d67b8747~mv2.jpg",
      after: "https://static.wixstatic.com/media/2cd8d1_67bec74bc97d42b88a0236248dcddc09~mv2.jpg"
    },
    category: "residential",
    services: ["SIP Construction", "Passive House Design", "Rooftop Terrace"]
  },
  {
    id: "model-03",
    title: "Model 03",
    location: "Custom Location",
    shortDescription: "Modern prefab kit house featuring Passive House principles and SIP construction, offering elegant living spaces and a rooftop terrace.",
    description: "Step into a home where light weaves through every room, and form flows gracefully with function. This prefab kit house, with its south-facing façade, invites the sun to embrace every corner, guided by the harmony of Passive House principles for unmatched comfort and energy efficiency. Built with Structural Insulated Panels (SIPs), it stands as a quiet guardian of sustainability, offering both strength and peace. The open living spaces flow effortlessly, each room a canvas of contemporary design, offering seamless connection and refined elegance. Above, the master bedroom, perched on the second level, opens to a rooftop terrace—a private sanctuary where the sky stretches endlessly and nature becomes your companion. This home is more than just a living space; it's a timeless expression of beauty, balance, and modern tranquility.",
    images: {
      before: "https://static.wixstatic.com/media/2cd8d1_067d014fa65a44f0b8a9c3c4d67b8747~mv2.jpg",
      after: "https://static.wixstatic.com/media/2cd8d1_67bec74bc97d42b88a0236248dcddc09~mv2.jpg"
    },
    category: "residential",
    services: ["SIP Construction", "Passive House Design", "Rooftop Terrace"]
  },
  {
    id: "model-04",
    title: "Model 04",
    location: "Custom Location",
    shortDescription: "Modern prefab kit house featuring Passive House principles and SIP construction, offering elegant living spaces and a rooftop terrace.",
    description: "Step into a home where light weaves through every room, and form flows gracefully with function. This prefab kit house, with its south-facing façade, invites the sun to embrace every corner, guided by the harmony of Passive House principles for unmatched comfort and energy efficiency. Built with Structural Insulated Panels (SIPs), it stands as a quiet guardian of sustainability, offering both strength and peace. The open living spaces flow effortlessly, each room a canvas of contemporary design, offering seamless connection and refined elegance. Above, the master bedroom, perched on the second level, opens to a rooftop terrace—a private sanctuary where the sky stretches endlessly and nature becomes your companion. This home is more than just a living space; it's a timeless expression of beauty, balance, and modern tranquility.",
    images: {
      before: "https://static.wixstatic.com/media/2cd8d1_067d014fa65a44f0b8a9c3c4d67b8747~mv2.jpg",
      after: "https://static.wixstatic.com/media/2cd8d1_67bec74bc97d42b88a0236248dcddc09~mv2.jpg"
    },
    category: "residential",
    services: ["SIP Construction", "Passive House Design", "Rooftop Terrace"]
  },
  {
    id: "model-05",
    title: "Model 05",
    location: "Custom Location",
    shortDescription: "Modern prefab kit house featuring Passive House principles and SIP construction, offering elegant living spaces and a rooftop terrace.",
    description: "Step into a home where light weaves through every room, and form flows gracefully with function. This prefab kit house, with its south-facing façade, invites the sun to embrace every corner, guided by the harmony of Passive House principles for unmatched comfort and energy efficiency. Built with Structural Insulated Panels (SIPs), it stands as a quiet guardian of sustainability, offering both strength and peace. The open living spaces flow effortlessly, each room a canvas of contemporary design, offering seamless connection and refined elegance. Above, the master bedroom, perched on the second level, opens to a rooftop terrace—a private sanctuary where the sky stretches endlessly and nature becomes your companion. This home is more than just a living space; it's a timeless expression of beauty, balance, and modern tranquility.",
    images: {
      before: "https://static.wixstatic.com/media/2cd8d1_067d014fa65a44f0b8a9c3c4d67b8747~mv2.jpg",
      after: "https://static.wixstatic.com/media/2cd8d1_67bec74bc97d42b88a0236248dcddc09~mv2.jpg"
    },
    category: "residential",
    services: ["SIP Construction", "Passive House Design", "Rooftop Terrace"]
  },
  {
    id: "model-06",
    title: "Model 06",
    location: "Custom Location",
    shortDescription: "Modern prefab kit house featuring Passive House principles and SIP construction, offering elegant living spaces and a rooftop terrace.",
    description: "Step into a home where light weaves through every room, and form flows gracefully with function. This prefab kit house, with its south-facing façade, invites the sun to embrace every corner, guided by the harmony of Passive House principles for unmatched comfort and energy efficiency. Built with Structural Insulated Panels (SIPs), it stands as a quiet guardian of sustainability, offering both strength and peace. The open living spaces flow effortlessly, each room a canvas of contemporary design, offering seamless connection and refined elegance. Above, the master bedroom, perched on the second level, opens to a rooftop terrace—a private sanctuary where the sky stretches endlessly and nature becomes your companion. This home is more than just a living space; it's a timeless expression of beauty, balance, and modern tranquility.",
    images: {
      before: "https://static.wixstatic.com/media/2cd8d1_067d014fa65a44f0b8a9c3c4d67b8747~mv2.jpg",
      after: "https://static.wixstatic.com/media/2cd8d1_67bec74bc97d42b88a0236248dcddc09~mv2.jpg"
    },
    category: "residential",
    services: ["SIP Construction", "Passive House Design", "Rooftop Terrace"]
  }
];
