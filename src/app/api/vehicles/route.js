const vehicles = [
  {
    id: 1,
    name: "Lincoln MKT Stretch Limousine",
    images: [
      "https://rpclimo.com/wp-content/uploads/2023/12/2-1024x571.png",
      "https://rpclimo.com/wp-content/uploads/2023/12/1-1024x571.png",
      "https://rpclimo.com/wp-content/uploads/2023/12/2-1024x571.png",
      "https://rpclimo.com/wp-content/uploads/2023/12/1-1024x571.png",
    ],
    description:
      "Step into the world of luxury with the Lincoln MKT Stretch Limousine, a perfect choice for those who seek elegance and spacious comfort in their travels. Whether it’s a special celebration or a sophisticated corporate event, this limousine enhances every occasion with its style and luxury.",
    passengerCapacity: "7-8",
    luggageCapacity: "5 bags",
    features: [
      "Spacious Interior for Comfort: Designed to comfortably seat up to 7 passengers, the interior of the Lincoln MKT Stretch Limousine is a blend of elegance and practicality, ensuring every journey is a memorable one.",
      "Ample Luggage Space: With the capacity to hold up to 5 pieces of luggage, this limousine is ideal for airport transfers, business travel, or special events where you need to carry extra baggage without compromising on style.",
      "Luxury Meets Technology: Immerse yourself in the luxurious amenities, including advanced infotainment systems, climate control for personalized comfort, and ambient lighting to set the mood.",
      "Performance and Safety Combined: Experience the smooth power of its engine, ensuring a tranquil journey, while relying on comprehensive safety features for a secure ride every time.",
    ],
  },
  {
    id: 2,
    name: "Mercedes-Benz Sprinter Crew Van 2500",
    images: [
      "https://rpclimo.com/wp-content/uploads/2023/12/1-1-1024x750.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/2-1-1024x750.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/1-1-1024x750.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/2-1-1024x750.jpg",
    ],
    description:
      "The Mercedes-Benz Sprinter Crew Van 2500 is a versatile vehicle perfect for transporting teams or small groups. Combining practicality with luxury, it provides comfort and advanced features for every journey.",
    passengerCapacity: "12-15",
    luggageCapacity: "8 bags",
    features: [
      "Spacious Seating: Accommodates up to 15 passengers with comfortable seating arrangements.",
      "Large Cargo Space: Designed to handle luggage or equipment efficiently, making it suitable for long-distance travel.",
      "Modern Interior: Equipped with advanced infotainment systems and climate control to ensure a pleasant ride.",
      "Superior Safety: Includes driver assistance features like lane-keeping assist and blind-spot monitoring for added security.",
    ],
  },
  {
    id: 3,
    name: "Lincoln Navigator",
    images: [
      "https://rpclimo.com/wp-content/uploads/2023/12/3-1.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/2-2.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/3-1.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/2-2.jpg",
    ],
    description:
      "The Lincoln Navigator combines elegance, performance, and technology into one exceptional SUV. Perfect for family trips, business travel, or special events.",
    passengerCapacity: "7",
    luggageCapacity: "4 bags",
    features: [
      "Premium Comfort: Offers plush leather seating and ample space for passengers.",
      "Advanced Tech: Comes with a touchscreen infotainment system, navigation, and voice control.",
      "Powerful Performance: Equipped with a twin-turbocharged engine for smooth and powerful rides.",
      "Safety Features: Includes adaptive cruise control, collision warning, and parking assist.",
    ],
  },
  {
    id: 4,
    name: "SUV Cadillac Escalade",
    images: [
      "https://rpclimo.com/wp-content/uploads/2023/12/4-1.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/5-1.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/4-1.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/5-1.jpg",
    ],
    description:
      "The Cadillac Escalade is the epitome of luxury SUVs, blending a commanding presence with state-of-the-art technology and unmatched comfort.",
    passengerCapacity: "8",
    luggageCapacity: "6 bags",
    features: [
      "Refined Luxury: Boasts premium materials, ambient lighting, and a spacious cabin.",
      "Cutting-Edge Tech: Includes an OLED curved display, augmented reality navigation, and Wi-Fi hotspot.",
      "Powerful Engine: Provides strong performance with its V8 engine and smooth handling.",
      "Enhanced Safety: Features like night vision, automatic emergency braking, and lane-change assist.",
    ],
  },
  {
    id: 5,
    name: "Mercedes Benz S580",
    images: [
      "https://rpclimo.com/wp-content/uploads/2023/12/7-1.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/6-1.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/7-1.jpg",
      "https://rpclimo.com/wp-content/uploads/2023/12/6-1.jpg",
    ],
    description:
      "The Mercedes Benz S580 sets the standard for luxury sedans, offering supreme comfort, advanced technology, and remarkable performance.",
    passengerCapacity: "5",
    luggageCapacity: "3 bags",
    features: [
      "Opulent Interior: Features leather seating, a panoramic sunroof, and customizable ambient lighting.",
      "Innovative Technology: Includes MBUX infotainment, a 3D driver display, and voice-activated controls.",
      "Smooth Performance: Equipped with a hybrid V8 engine for seamless acceleration and reduced emissions.",
      "Comprehensive Safety: Comes with advanced driver-assistance features like active lane-keeping assist and adaptive cruise control.",
    ],
  },
];
export const GET = () => {
  return Response.json(vehicles);
};
