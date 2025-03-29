// import model1 from '../assets/prefab/model1/model1.jpg'
// import model1plan from '../assets/prefab/model1/plan.jpg'
import {model1, model1plan, model2, model2plan, model3, model3plan, model4, model4plan, model5, model5plan, model6, model6plan, model7, model7plan, model8, model8plan} from './index'
const prefabLocation = ["Location Unavalible at the moment", "canada"]

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
    title: "Modern Two-Story Prefab Home",
    location: prefabLocation[0],
    shortDescription: "A modern two-story prefab home with 3 bedrooms, 2.5 baths, and an open living space.",
    description: "This 2,971 sq. ft. two-level prefab home features an open-concept living, dining, and kitchen area, a spacious family room, and a garage. The first level includes two bedrooms, while the second level offers an additional bedroom with a private bath and closet. Designed for both functionality and comfort, this home is perfect for families seeking a modern layout with ample space.",
    images: {
      before: model1,
      after: model1plan
    },
    category: "residential",
    services: ["Prefab Construction", "Architecture", "Interior Design"]
  },
  {
    id: "model-02",
    title: "Contemporary Two-Story Prefab Home",
    location: prefabLocation[0],
    shortDescription: "A sleek and spacious 3-bedroom, 3.5-bath prefab home with open living areas and modern amenities.",
    description: "This 2,842 sq. ft. two-story prefab home offers a well-designed layout with an open-concept kitchen, living, and dining area on the first level. It includes a garage, a bedroom, and essential utility spaces. The second level features two additional bedrooms with en-suite baths, a dedicated utility area, and ample closet space. With a modern design and functional space distribution, this home is ideal for comfortable living.",
    images: {
      before: model2,
      after: model2plan
    },
    category: "residential",
    services: ["Prefab Construction", "Architecture", "Interior Design"]
  },
  {
    id: "model-03",
    title: "Modern Two-Story Prefab with Deck",
    location: prefabLocation[0],
    shortDescription: "A stylish 3-bedroom, 2.5-bath prefab home featuring open-concept living and spacious decks.",
    description: "This 2,890 sq. ft. two-story prefab home offers a contemporary design with an open-concept living, kitchen, and dining area on the first level, along with a laundry room, utility space, and garage. The second level includes three bedrooms, a sitting area, and two full baths, with access to a private deck for outdoor relaxation. Designed for both comfort and elegance, this home is ideal for modern living.",
    images: {
      before: model3,
      after: model3plan
    },
    category: "residential",
    services: ["Prefab Construction", "Architecture", "Interior Design"]
  },
  {
    id: "model-04",
    title: "Single-Level Prefab with Breezeway",
    location: prefabLocation[0],
    shortDescription: "A 2-bedroom, 2-bath prefab home featuring an open layout and functional attic storage.",
    description: "This 1,714 sq. ft. single-level prefab home is designed with a seamless open-concept kitchen, living, and dining area. A central breezeway enhances natural ventilation and connectivity between spaces. The home includes two bedrooms, two full baths, and a dedicated utility area. Additionally, an attic with vaulted ceilings provides extra storage or utility space, making it a practical and stylish choice for modern living.",
    images: {
      before: model4,
      after: model4plan
    },
    category: "residential",
    services: ["Prefab Construction", "Architecture", "Interior Design"]
  },
  {
    id: "model-05",
    title: "A compact 3-bedroom, 2-bath prefab home with an open living area and vaulted attic storage.",
    location: prefabLocation[0],
    shortDescription: "Modern prefab kit house featuring Passive House principles and SIP construction, offering elegant living spaces and a rooftop terrace.",
    description: "This 1,493 sq. ft. single-level prefab home offers a functional and efficient design featuring an open-concept kitchen, living, and dining space. It includes three bedrooms, two full baths, a pantry, and a linen closet. A spacious deck and entry porch enhance outdoor living. The attic level provides additional storage with a vaulted ceiling, making it a versatile and practical choice for modern homeowners.",
    images: {
      before: model5,
      after: model5plan
    },
    category: "residential",
    services: ["Prefab Construction", "Architecture", "Interior Design"]
  },
  {
    id: "model-06",
    title: "Eco-Friendly Prefab with Green Roof",
    location: prefabLocation[0],
    shortDescription: "A 2-bedroom, 2.5-bath prefab home featuring an open-concept living space and a sustainable green roof.",
    description: "This 1,945 sq. ft. single-level prefab home is designed for modern and eco-conscious living. It features an open-concept kitchen, living, and dining area, two bedrooms, two full baths, and a powder room. A spacious carport adds convenience, while the highlight of this home is its expansive green roof, promoting energy efficiency and sustainability. The home blends functionality with environmentally friendly design.",
    images: {
      before: model6,
      after: model6plan
    },
    
    category: "residential",
    services: ["Prefab Construction", "Architecture", "Interior Design"]
  },
  {
    id: "model-07",
    title: "Modern Prefab with Green Roof",
    location: prefabLocation[0],
    shortDescription: "A spacious 3-bedroom, 3.5-bath prefab home featuring an open living area and an eco-friendly green roof.",
    description: "This 2,387 sq. ft. single-level prefab home is designed for modern and sustainable living. It features an open-concept kitchen, living, and dining space, three bedrooms, and 3.5 baths. Functional additions like a mudroom, utility spaces, and a garage enhance practicality. The highlight is the expansive green roof, offering energy efficiency and environmental benefits while adding aesthetic appeal.",
    images: {
      before: model7,
      after: model7plan
    },
    
    category: "residential",
    services: ["Prefab Construction", "Architecture", "Interior Design"]
  },
  {
    id: "model-08",
    title: "Two-Story Prefab with Green Roof",
    location: prefabLocation[0],
    shortDescription: "A spacious 3-bedroom, 3.5-bath modern prefab home featuring multiple decks and an eco-friendly green roof.",
    description: "This 3,120 sq. ft. two-story prefab home is designed for modern living with an open-concept kitchen, dining, and living area. It includes three bedrooms, 3.5 baths, and functional utility spaces. The home features multiple decks for outdoor relaxation and a sustainable green roof for improved energy efficiency. A garage and porch add to its convenience and aesthetic appeal.",
    images: {
      before: model8,
      after: model8plan
    },
    
    category: "residential",
    services: ["Prefab Construction", "Architecture", "Interior Design"]
  }
];
