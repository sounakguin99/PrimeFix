export const CATEGORIES = [
  { name: "For You", slug: "for-you", image: "/cat_for_you_1780466794130.png" },
  { name: "Car", slug: "car", image: "/cat_car_1780466806031.png" },
  { name: "Bike", slug: "bike", image: "/cat_bike_1780466819876.png" },
  { name: "Electrician", slug: "electrician", image: "/cat_electrician_1780466832249.png" },
  { name: "Plumbing", slug: "plumbing", image: "/cat_plumbing_1780498372112.png" },
  { name: "Cleaning", slug: "cleaning", image: "/cat_cleaning_1780498386063.png" },
  { name: "Painting", slug: "painting", image: "/cat_painting_1780498400850.png" },
  { name: "Carpentry", slug: "carpentry", image: "/cat_carpentry_1780498415312.png" },
];

export const ALL_SERVICES = [
  // Car Services
  {
    title: "Alternator Check",
    subtitle: "Improve your electrical system reliability",
    price: "₹499",
    description: "Our certified mechanics will perform a comprehensive diagnostic check of your car's alternator to ensure your electrical system is functioning reliably. We use advanced testing equipment to prevent unexpected breakdowns.",
    image: "/srv_alternator_1780466843971.png",
    categoryId: "car",
  },
  {
    title: "Battery Check",
    subtitle: "Detailed diagnostic for battery health",
    price: "₹299",
    description: "Get a detailed health report of your car's battery. We check the voltage, charging capacity, and terminal connections to help you avoid getting stranded with a dead battery.",
    image: "/srv_battery_check_1780466858596.png",
    categoryId: "car",
  },
  {
    title: "Battery Jump Start",
    subtitle: "Instant jump start service at home",
    price: "₹399",
    description: "Stuck with a dead battery? Our rapid response team will arrive at your location and safely jump start your car using professional-grade equipment.",
    image: "/srv_battery_jump_1780466870472.png",
    categoryId: "car",
  },
  {
    title: "Battery Replacement",
    subtitle: "Replace old battery with a new one",
    price: "₹4500",
    description: "Complete battery replacement service including removal of the old battery, cleaning of terminals, and installation of a brand-new, high-quality battery with warranty.",
    image: "/srv_battery_replace_1780466885462.png",
    categoryId: "car",
  },
  // Bike Services
  {
    title: "Bike Service",
    subtitle: "Keep your bike in top condition with expert servicing.",
    price: "₹899",
    description: "A full general service for your motorcycle including oil change, chain lubrication, brake adjustment, and a complete safety inspection to ensure a smooth ride.",
    image: "/srv_bike_service_1780466897797.png",
    categoryId: "bike",
  },
  // Plumbing
  {
    title: "Tap Repair & Replacement",
    subtitle: "Fix leaky taps or install new ones",
    price: "₹249",
    description: "Professional repair or replacement of dripping, leaking, or broken taps. We ensure a perfect seal and proper water pressure to save water and money.",
    image: "/srv_tap_repair_1780502601851.png",
    categoryId: "plumbing",
  },
  {
    title: "Pipe Blockage Clearing",
    subtitle: "Clear clogged drains and pipes fast",
    price: "₹499",
    description: "Fast and effective clearing of stubborn blockages in sinks, drains, or main pipelines using advanced snake tools and high-pressure methods.",
    image: "/srv_pipe_blockage_1780502616770.png",
    categoryId: "plumbing",
  },
  // Cleaning
  {
    title: "Sofa Deep Cleaning",
    subtitle: "Remove tough stains and dust mites",
    price: "₹699",
    description: "Deep shampoo and vacuum cleaning of your fabric or leather sofa to remove deep-seated dirt, stains, allergens, and dust mites, restoring its original fresh look.",
    image: "/srv_sofa_clean_1780502629293.png",
    categoryId: "cleaning",
  },
  {
    title: "Full Home Cleaning",
    subtitle: "Comprehensive top-to-bottom clean",
    price: "₹3499",
    description: "A complete top-to-bottom cleaning of your entire home by a team of professionals, including floors, windows, bathrooms, kitchen deep cleaning, and dusting of all surfaces.",
    image: "/srv_home_clean_1780502648361.png",
    categoryId: "cleaning",
  },
  // Painting
  {
    title: "Interior Wall Painting",
    subtitle: "Refresh your living space with premium colors",
    price: "₹5000",
    description: "Give your rooms a fresh new look with our professional interior painting service. We handle surface preparation, crack filling, and application of premium paints for a flawless finish.",
    image: "/srv_wall_paint_1780502666597.png",
    categoryId: "painting",
  },
  // Carpentry
  {
    title: "Furniture Assembly",
    subtitle: "Professional assembly of beds, wardrobes, etc.",
    price: "₹599",
    description: "Expert assembly of all types of flat-pack furniture including beds, wardrobes, and tables. We ensure sturdy construction and perfect alignment.",
    image: "/srv_furniture_1780502680395.png",
    categoryId: "carpentry",
  },
  // Electrician
  {
    title: "Switchboard Repair",
    subtitle: "Fix faulty switches and sockets",
    price: "₹199",
    description: "Safe and reliable repair or replacement of faulty switches, sockets, and wiring inside your switchboard to prevent electrical hazards.",
    image: "/srv_switchboard_1780502699147.png",
    categoryId: "electrician",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
  author: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'top-5-signs-your-car-needs-an-oil-change',
    title: 'Top 5 Signs Your Car Needs an Oil Change',
    excerpt: 'Don\'t wait until your engine starts making weird noises. Learn the early warning signs of low or dirty engine oil.',
    date: 'June 1, 2026',
    category: 'Car Maintenance',
    image: '/blue_sedan_1780416979748.png',
    author: 'Amit Kumar',
    readTime: '4 min read',
    content: `
      <p>Engine oil is the lifeblood of your vehicle. It lubricates the moving parts, reduces friction, absorbs heat, and keeps the engine running smoothly. Over time, however, engine oil breaks down and gets contaminated with dirt, dust, and debris from the engine and environment. When this happens, it loses its effectiveness, which can lead to accelerated wear and even catastrophic engine failure.</p>
      
      <h3>1. Dark and Dirty Oil</h3>
      <p>Fresh engine oil is clean, transparent, and has a light honey color. As it does its job, it collects particles and darkens. Checking your dipstick once a month is a great habit. If you can no longer see the dipstick metal through the oil, or if it feels gritty or looks black, it's time for a change.</p>

      <h3>2. Loud Engine Noise and Knocking</h3>
      <p>Oil provides a protective barrier between engine parts to avoid metal-on-metal contact. When the oil becomes thin, old, or dirty, you will start to hear increased engine noise. In severe cases, you may hear knocking or ticking sounds, which means the engine parts are wearing each other down due to lack of lubrication.</p>

      <h3>3. Oil Change Indicator or Check Engine Light</h3>
      <p>The most obvious warning will come directly from your car. Most modern vehicles have an oil change reminder or dashboard light that tracks mileage or oil quality. If the check engine or oil light illuminates, don't ignore it—schedule a doorstep checkup immediately.</p>

      <h3>4. Exhaust Smoke</h3>
      <p>While some translucent vapor is normal in cold weather, active smoke billowing from your exhaust pipe is a warning sign. It could indicate an oil leak inside your engine, which is burning off, or that the oil is too old to handle the operating temperature.</p>

      <h3>5. Oil Smell inside the Car</h3>
      <p>If you smell oil inside the cabin, it is often a sign of a leak. If the smell is mixed with the scent of gas or exhaust fumes, the engine may be overheating or burning oil. This requires prompt attention from a professional mechanic.</p>
    `
  },
  {
    slug: 'how-to-choose-the-right-mechanic-for-your-bike',
    title: 'How to Choose the Right Mechanic for Your Bike',
    excerpt: 'Finding a trustworthy mechanic is crucial for the longevity of your motorcycle. Here is what you should look for.',
    date: 'May 28, 2026',
    category: 'Bike Care',
    image: '/bike_service_1780417001875.png',
    author: 'Sagar Sen',
    readTime: '5 min read',
    content: `
      <p>A motorcycle is more than just a mode of transport; for many, it is a passion and a daily companion. Ensuring your bike is in top running condition is critical not only for performance but also for your safety on the road. Finding a reliable, professional bike mechanic makes all the difference. Here is our guide to choosing the right partner for your ride.</p>
      
      <h3>1. Look for Specialization</h3>
      <p>Not all bikes are built the same. A mechanic who excels at standard commuter scooters might not have the tools or experience for premium sports bikes, cruisers, or electric motorcycles. Ensure your chosen mechanic has specific experience with your bike's brand and model.</p>

      <h3>2. Certifications and Experience</h3>
      <p>Professional training shows commitment to the craft. Certified mechanics understand electrical systems, fuel injection systems, and modern engine mechanics. Don't hesitate to ask about their experience or look for service providers that guarantee vetted and certified experts.</p>

      <h3>3. Transparency in Estimations</h3>
      <p>A great service provider will inspect your vehicle and provide a clear, line-item quote before any work starts. They will explain why a part needs replacement and won't add hidden charges at the end of the service. Transparent pricing builds trust.</p>

      <h3>4. Convenience of Doorstep Servicing</h3>
      <p>In today's fast-paced world, taking half a day off to visit a crowded garage is highly inconvenient. Mobile bike service providers bring the workshop to your doorstep, allowing you to monitor the service yourself while saving valuable time.</p>
    `
  },
  {
    slug: 'electrical-safety-at-home-what-you-need-to-know',
    title: 'Electrical Safety at Home: What You Need to Know',
    excerpt: 'Protect your family from electrical hazards with these essential home safety tips from our certified electricians.',
    date: 'May 15, 2026',
    category: 'Home Safety',
    image: '/electrician_service_1780417023166.png',
    author: 'Rajesh Das',
    readTime: '6 min read',
    content: `
      <p>Electricity powers our lives, but it also carries significant risks if not handled with care. Every year, thousands of domestic accidents occur due to faulty wiring, overloaded circuits, or poor appliance maintenance. By implementing a few simple habits and conducting routine inspections, you can keep your home safe from electrical hazards.</p>
      
      <h3>1. Never Overload Outlets</h3>
      <p>Plugging too many high-power appliances into a single extension board or wall outlet can cause the wires to overheat. This is a common trigger for electrical fires. Distribute your appliances across different outlets and avoid daisy-chaining extension cords.</p>

      <h3>2. Check for Worn or Damaged Cords</h3>
      <p>Inspect appliance cords regularly. If you notice any fraying, exposed copper, or cracked protective coating, replace the appliance or have the cord repaired by a certified electrician immediately. Do not attempt temporary tape fixes on high-voltage lines.</p>

      <h3>3. Keep Electrical Equipment Away from Water</h3>
      <p>Water conducts electricity. Ensure all outlets in bathrooms and kitchens are dry and installed at a safe distance from sinks or taps. Never plug in or operate appliances with wet hands.</p>

      <h3>4. Know Your Circuit Breakers</h3>
      <p>Your circuit breaker panel is the safety valve of your home. Label each switch clearly so you can quickly turn off power to specific rooms in an emergency. If a breaker trips repeatedly, it indicates an overloaded circuit or a dangerous short circuit—get it checked by a professional.</p>
    `
  },
  {
    slug: 'the-future-of-mobile-vehicle-servicing',
    title: 'The Future of Mobile Vehicle Servicing',
    excerpt: 'Why taking your car to the garage is becoming a thing of the past. Explore the rise of on-demand home mechanic services.',
    date: 'May 5, 2026',
    category: 'Industry Trends',
    image: '/car_engine_banner_1780416961037.png',
    author: 'Vikram Bose',
    readTime: '4 min read',
    content: `
      <p>The automotive service industry is experiencing a massive paradigm shift. Traditional models of car maintenance—driving to a brick-and-mortar garage, waiting for hours, and coordinating alternative rides—are rapidly being replaced by on-demand doorstep servicing. Let's look at why this change is occurring and what the future holds.</p>
      
      <h3>1. The Value of Convenience</h3>
      <p>Time is the most valuable commodity in modern society. Doorstep servicing eliminates the hassle of taking a day off or spending weekends in noisy waiting rooms. The mechanic comes directly to your home or office, completing the service while you focus on what matters to you.</p>

      <h3>2. Complete Transparency</h3>
      <p>At traditional garages, your car is taken behind closed doors, leaving you with little oversight of what parts are replaced or if the work is actually completed. With mobile services, you can watch the mechanic perform the diagnostics and repair in your own driveway, ensuring peace of mind.</p>

      <h3>3. Technology-Driven Scheduling and Diagnostics</h3>
      <p>Modern mobile services use smart booking apps, digital health reports, and upfront automated quotes. By digitizing the workflow, customers get accurate tracking, transparent billing, and a record of their vehicle's service history in just a few clicks.</p>
    `
  }
];
