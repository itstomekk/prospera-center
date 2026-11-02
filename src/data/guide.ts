/** Static content for the Duna Residences guidebook section of the information center. */

export const SITE = {
  name: "Próspera Center",
  building: "Duna Residences",
  tagline:
    "Duna Residences (also known as Duna Tower) is a modern aparthotel inside Próspera, a special economic zone on Roatán, Honduras. This guide helps residents and guests get the most out of their stay.",
  instagram: "https://instagram.com/dunaresidences",
  discord: "https://discord.gg/FKSGnQWxXp",
  prospera: "https://prospera.co",
  eventsSource: "https://prospera.place",
};

export interface Contact {
  name: string;
  detail?: string;
  phone?: string;
  email?: string;
  note?: string;
  link?: { label: string; href: string };
  hours?: string[];
}

export const communityChannels: Contact[] = [
  {
    name: "Duna Community",
    detail: "WhatsApp group chat",
    note: "Building updates and neighbour chatter",
  },
  {
    name: "Prosperians on Ground",
    detail: "WhatsApp group chat",
    note: "The broader Próspera community",
  },
  {
    name: "Próspera Discord",
    detail: "Discord server",
    note: "International community",
    link: { label: "Join server", href: SITE.discord },
  },
  {
    name: "Duna Instagram",
    detail: "@dunaresidences",
    note: "Social media",
    link: { label: "Open Instagram", href: SITE.instagram },
  },
];

export const frontDesk: Contact = {
  name: "Duna Front Desk",
  phone: "+504 9296-8581",
  note: "Available through WhatsApp, Signal and Telegram",
  email: "desk@dunaresidences.com",
  hours: ["Mon–Fri: 9:00 AM – 5:00 PM", "Sat–Sun: 9:00 AM – 5:00 PM"],
};

export const emergencyContacts: Contact[] = [
  {
    name: "Emergency Services",
    phone: "911",
    note: "Police, fire, or medical emergencies",
  },
  {
    name: "Duna Security Post",
    phone: "+504 9362-1813",
    note: "Security support and access control",
  },
];

export const clinics: Contact[] = [
  {
    name: "Hospital Cemesa",
    phone: "+504 9446-0097",
    link: {
      label: "View on Google Maps",
      href: "https://www.google.com/maps/search/Hospital+Cemesa+Roatan",
    },
  },
  {
    name: "Centro Medico Ramos",
    phone: "+504 3325-2911",
    link: {
      label: "View on Google Maps",
      href: "https://www.google.com/maps/search/Centro+Medico+Ramos+Roatan",
    },
  },
  {
    name: "Ad Astra Clinic",
    phone: "+504 8998-8979",
    note: "Located in the Duna lobby",
  },
];

/* ---------------- Tower guide: essentials ---------------- */

export interface KeyValue {
  label: string;
  value: string;
  hint?: string;
}

export const platforms = [
  {
    name: "Rentals Platform",
    platform: "DoorLoop",
    description:
      "Booking dates and lease information, maintenance requests, invoices and payments.",
  },
  {
    name: "Utilities Platform",
    platform: "Utilities Portal",
    description:
      "Energy and water consumption. Contact support@sjbec.com for assistance.",
  },
  {
    name: "Feedback Platform",
    platform: "Canny",
    description:
      "Where Duna owners and residents submit, vote on, and track improvements for shared community spaces.",
  },
];

export const paymentMethods: {
  title: string;
  intro?: string;
  bullets?: string[];
  rows?: KeyValue[];
  link?: { label: string; href: string };
}[] = [
  {
    title: "Pay with crypto — no fees",
    intro: "We currently accept USDC/USDT, Bitcoin, Solana and Ethereum.",
    link: {
      label: "Crypto payment instructions",
      href: "https://airtable.com/appGP9MkTkTlZLXvz/pagSXorU9vrOnC6H4/form",
    },
  },
  {
    title: "American bank transfer (ACH / domestic wire)",
    intro:
      "Use the following instructions to send ACH or domestic wires to your Brex business account.",
    rows: [
      { label: "ABA / routing number", value: "121145349" },
      { label: "Account number", value: "871728697290669" },
      { label: "Account type", value: "Business Checking" },
      {
        label: "Recipient / beneficiary",
        value: "Saint John's Bay Development Company LLC",
        hint: "Use this exact name as the recipient of the wire",
      },
      {
        label: "Beneficiary address",
        value: "1875 Connecticut Ave NW FL 10, Washington, DC 20009",
      },
      { label: "Bank name", value: "Column NA — Brex" },
      {
        label: "Bank address",
        value:
          "1 Letterman Drive Building A, Suite A4-700, San Francisco, CA 94129",
      },
    ],
  },
  {
    title: "Honduran bank transfer",
    rows: [
      { label: "Account number (USD)", value: "200018075047" },
      { label: "Account number (HNL)", value: "200018074868" },
      { label: "Type of account", value: "Savings" },
      { label: "Bank", value: "Ficohsa" },
      { label: "Holder name", value: "Pristine Services SA de CV" },
      { label: "Identification / RTN", value: "05019022453772" },
      { label: "Address", value: "Pristine Bay Rd, Roatán, Honduras. 34101" },
    ],
  },
];

export const wifi = {
  ssid: "Duna Tower One",
  password: "HODLbitcoin",
  privateNote:
    "Enjoy a dedicated Wi-Fi connection exclusively for your room. For optimal security and speed we provide a separate network for your personal devices — look for the QR code on your refrigerator to connect.",
};

export const potableWater = {
  intro:
    "Drinking water (5 gallon jugs) can be purchased by making a request through your DoorLoop account:",
  options: [
    { label: "Pick up at lobby", value: "$3" },
    { label: "Delivered to your unit", value: "$5" },
  ],
};

export const shuttle = {
  intro:
    "Purchase the shuttle card in the Duna lobby from +504 9296-8581. Liberty Line runs the Próspera shuttle service.",
  route: "Duna → Eldons → Pristine Bay (and reverse)",
  daily: [
    {
      leg: "Duna → Eldons",
      times: [
        "08:00 (08:15)",
        "09:30 (09:45)",
        "11:00 (11:15)",
        "12:30 (12:45)",
        "14:00 (14:15)",
        "15:30 (15:45)",
        "17:00 (17:15)",
      ],
    },
    {
      leg: "Eldons → Pristine Bay",
      times: [
        "08:20 (08:35)",
        "09:50 (10:05)",
        "11:20 (11:35)",
        "12:50 (13:05)",
        "14:20 (14:35)",
        "15:50 (16:05)",
        "17:20 (17:35)",
      ],
    },
    {
      leg: "Pristine Bay → Eldons",
      times: [
        "08:40 (08:55)",
        "10:10 (10:25)",
        "11:40 (11:55)",
        "13:10 (13:25)",
        "14:40 (14:55)",
        "16:10 (16:25)",
        "17:40 (17:55)",
      ],
    },
    {
      leg: "Eldons → Duna",
      times: [
        "09:00 (09:15)",
        "10:30 (10:45)",
        "12:00 (12:15)",
        "13:30 (13:45)",
        "15:00 (15:15)",
        "16:30 (16:45)",
        "18:00 (18:15)",
      ],
    },
  ],
  weekend:
    "Saturday & Sunday — complete round-trip service at 10:00 AM, 1:00 PM and 6:00 PM (full route each time).",
};

export const maintenance = {
  text: "For maintenance requests or repairs, log them in DoorLoop or contact building management. Our team will reach out promptly to schedule your service.",
  schedule: "Facilities OPS team: Mon–Fri 7AM–4PM · Sat–Sun 7AM–12PM",
};

export const billingNote =
  "Since Duna is within Próspera ZEDE, which operates under its own jurisdictional framework, we cannot issue invoices with RTN (registro tributario nacional) or CAI (código de autorización de impresión) numbers, as these are specific to Honduras' national tax system. Our billing and payment processes fully comply with Próspera ZEDE's regulations.";

/* ---------------- Tower guide: building map ---------------- */

export interface MapItem {
  name: string;
  detail: string;
  bitcoin?: boolean;
}

export const buildingMap: { level: string; items: MapItem[] }[] = [
  {
    level: "Lobby",
    items: [
      { name: "Main Entrance", detail: "24/7 access with security personnel" },
      { name: "Building Management Office", detail: "We're here to help" },
      {
        name: "Bitcoin ATM",
        detail:
          "Converts Bitcoin to physical USD currency and vice versa. Available 24/7",
        bitcoin: true,
      },
      { name: "Fitness Center", detail: "Open 24/7" },
      { name: "Ad Astra Clinic", detail: "Contact: +504 8998-8979" },
    ],
  },
  {
    level: "P1 Level",
    items: [
      { name: "Parking Lot", detail: "Cars and motorcycles" },
      { name: "Relay Human Cloud", detail: "Authorized personnel only" },
      {
        name: "Make.DIY Makerspace",
        detail:
          "Community workshop with shared tools, equipment and expertise. Available 24/7",
      },
    ],
  },
  {
    level: "P2 and P3 Levels",
    items: [
      { name: "Parking Lot", detail: "Cars and motorcycles" },
      { name: "Flexible Spaces", detail: "Available for rent" },
    ],
  },
  {
    level: "Level 1",
    items: [
      {
        name: "Infinita Coworking Space",
        detail: "24/7 access with Builder's Pass",
        bitcoin: true,
      },
      {
        name: "Spirit Animal Coffee",
        detail: "Mon–Fri 7AM–3PM · Sat 8AM–12PM · Closed Sundays",
        bitcoin: true,
      },
      {
        name: "2 Cans Convenience Store",
        detail: "Open 24/7 with self-checkout, accepts $LIVES or PayPal",
      },
    ],
  },
  {
    level: "Level 8",
    items: [
      {
        name: "Infinity Pool",
        detail:
          "Mon–Wed 7AM–7PM · Thu–Sun open 24 hours · Quiet hours from 10:00 PM ($150 late fee for violations)",
      },
      { name: "Sauna", detail: "Available 24/7" },
      { name: "BBQ Grills", detail: "Available during pool hours, booking required" },
    ],
  },
  {
    level: "Terrace",
    items: [{ name: "Rooftop", detail: "Perfect to watch the sunset" }],
  },
];

/* ---------------- Tower guide: rules ---------------- */

export interface RuleBlock {
  subtitle?: string;
  text?: string;
  bullets?: string[];
}

export interface Rule {
  title: string;
  warning?: boolean;
  blocks: RuleBlock[];
}

export const rules: Rule[] = [
  {
    title: "Próspera ZEDE — important information",
    blocks: [
      {
        subtitle: "Visitor permits & residency",
        text: "All visitors to Próspera ZEDE and our building are required to have a permit number. You can apply for a visitor permit at prospera.co/visitor-pass. As your needs evolve you may upgrade to e-residency or full residency status. To maintain the highest safety standards, all residents will have their Próspera e-Residency scanned upon every entry to the zone and buildings. Think of it as your key to our secure community — our guards are always happy to help.",
      },
      {
        subtitle: "Billing information",
        text: "Duna Tower is located within Próspera ZEDE, which operates under its own jurisdictional framework separate from the standard Honduran legal system. We cannot issue invoices with RTN or CAI numbers — these are specific to Honduras' national tax system and not applicable in Próspera ZEDE. Our billing and payment processes fully comply with Próspera ZEDE's regulations. If you have questions about billing or documentation, please contact the management office.",
      },
    ],
  },
  {
    title: "Emergency instructions",
    blocks: [
      {
        subtitle: "Emergency preparedness",
        text: "We recommend all residents and visitors familiarize themselves with emergency exits, assembly points and the location of fire extinguishers. Keeping a first aid kit handy is strongly recommended.",
      },
      {
        subtitle: "Evacuation",
        bullets: [
          "Use the stairs and follow the lighted exit signs",
          "Do NOT use elevators during an emergency",
          "Move quickly but calmly to avoid causing panic",
          "If you have mobility issues, seek assistance from building staff",
          "Proceed to the designated assembly point in the front parking area",
        ],
      },
      {
        subtitle: "Fire emergency",
        bullets: [
          "If you discover a fire, activate the nearest fire alarm",
          "Call building security at +504 9362-1813 and report the location",
          "If the fire is small and contained, use the nearest fire extinguisher",
          "Feel doors before opening — if hot, do not open and find another exit route",
          "Stay low to the ground to avoid smoke inhalation",
          "Cover your mouth and nose with a damp cloth if possible",
        ],
      },
      {
        subtitle: "Smoke or gas detection",
        bullets: [
          "If you smell gas or see unusual smoke, report it immediately",
          "Do not turn electrical equipment on or off",
          "Open windows if safe to do so",
          "Evacuate the area and alert building management",
        ],
      },
      {
        subtitle: "Medical emergencies",
        bullets: [
          "Call 911 immediately",
          "Contact building security for assistance while waiting for emergency services",
          "Don't move an injured person unless they're in immediate danger",
          "If trained, provide first aid until help arrives",
          "First aid kits are at the security desk and on each floor by the elevator",
        ],
      },
    ],
  },
  {
    title: "Non-smoking policy",
    warning: true,
    blocks: [
      {
        text: "Duna Tower is a non-smoking facility. Smoking is strictly prohibited in all indoor areas.",
        bullets: [
          "Smoking is not permitted in apartments or any indoor common areas",
          "This includes cigarettes, e-cigarettes, vaporizers and any other smoking devices",
          "Designated smoking areas are outside the building, at least 25 feet from any entrance",
          "Violation results in a $150 fee. If repeated, it results in lease termination",
        ],
      },
    ],
  },
  {
    title: "Noise policy",
    blocks: [
      {
        bullets: [
          "Quiet hours 7:00 PM – 7:00 AM (Sunday through Thursday)",
          "Quiet hours 10:00 PM – 7:00 AM (Friday and Saturday)",
          "Keep television, music and conversations at a reasonable volume at all times",
          "Contact security if you experience disturbances from neighbours. Violation results in a $150 fee",
        ],
      },
    ],
  },
  {
    title: "Pool rules and guidelines",
    blocks: [
      {
        bullets: [
          "Follow the pool hours schedule",
          "No lifeguard on duty — swim at your own risk",
          "Children under 13 must be accompanied by an adult",
          "No glass containers in the pool area",
          "Shower before entering the pool",
          "No diving in the shallow areas",
          "Please be courteous of other residents",
          "Quiet hours 7:00 PM – 7:00 AM",
          "Clean up after yourself — remove all personal items, bottles, trash and cigarette butts",
        ],
      },
    ],
  },
  {
    title: "BBQ rules and guidelines",
    blocks: [
      {
        bullets: [
          "BBQ areas must be reserved through the booking system",
          "Clean the grill and surrounding area after use",
          "Do not leave the grill unattended while in use",
          "Keep a safe distance from flammable materials",
          "Only use the grills in designated areas",
        ],
      },
    ],
  },
  {
    title: "Visitor policy",
    blocks: [
      {
        bullets: [
          "All visitors must check in at the front desk",
          "Residents should pre-authorize expected guests by contacting the security post",
          "Visitors may park in designated guest parking spaces (maximum 24 hours)",
          "Overnight visitors staying longer than 7 days must be registered with management",
        ],
      },
    ],
  },
  {
    title: "Waste disposal",
    blocks: [
      {
        bullets: [
          "Each floor has a trash receptacle behind the stairs door, emptied daily",
          "Break down cardboard boxes before disposing",
          "Electronic waste and hazardous materials require special handling — contact management",
        ],
      },
    ],
  },
  {
    title: "Package & delivery protocol",
    blocks: [
      {
        bullets: [
          "Packages are received at the front desk and logged in our system",
          "You'll receive a notification when a package arrives",
          "Pick up packages during front desk hours",
          "Food deliveries: delivery personnel must wait in the lobby",
        ],
      },
      {
        subtitle: "Mailing address",
        text: "Duna Tower #1, Unit ____, St. John's Bay Próspera ZEDE, Roatán, IB, Honduras, 34101",
      },
    ],
  },
  {
    title: "Pet policy",
    blocks: [
      {
        text: "Even though we love pets, we are not trained nor do we have the necessary resources within the building to accept pets. For owners only:",
        bullets: [
          "Maximum of one pet per apartment",
          "Weight limit: 25 pounds per pet",
          "All pets must be registered with management",
          "Dogs must be leashed in all common areas",
          "Please clean up after your pets",
          "No barking",
        ],
      },
    ],
  },
];

/* ---------------- City guide ---------------- */

export interface Place {
  name: string;
  bitcoin?: boolean;
  phone: string;
  link: { label: string; href: string };
  hours: string;
  location: string;
  description: string;
}

export const prosperaSpaces: Place[] = [
  {
    name: "The Green Cilantro",
    bitcoin: true,
    phone: "+504 9923-9697",
    link: { label: "Menu", href: "https://www.google.com/search?q=The+Green+Cilantro+Prospera+Roatan" },
    hours: "Mon–Sat 7AM–7PM · Sun closed",
    location: "Beta Building, Próspera",
    description: "Local restaurant across from Duna, founded by Mrs. Virginia Mann.",
  },
  {
    name: "Beta Hostal",
    bitcoin: true,
    phone: "+504 9738-3311",
    link: { label: "infinita.city", href: "https://infinita.city" },
    hours: "Mon–Fri 8AM–5PM · Sat–Sun 8AM–12PM",
    location: "Beta Residences, Próspera",
    description: "Budget-friendly communal lodging for builders.",
  },
  {
    name: "The Beach Club",
    bitcoin: true,
    phone: "+504 3287-1229",
    link: { label: "pristinebay.com", href: "https://pristinebay.com" },
    hours: "Daily 8AM–9PM",
    location: "Pristine Bay District, Próspera",
    description: "White-sand beach, water park, kids zone and sports fields.",
  },
  {
    name: "Las Verandas Hotel & Villas",
    bitcoin: true,
    phone: "+504 3288-5020",
    link: { label: "lasverandasroatan.com", href: "https://lasverandasroatan.com" },
    hours: "Daily 7AM–9PM",
    location: "Pristine Bay District, Próspera",
    description: "Elegant resort with rooms and private villas, beach and golf course.",
  },
  {
    name: "AmityAge Academy — Bitcoin Center",
    phone: "+504 8798-3343",
    link: { label: "amityage.com", href: "https://amityage.com" },
    hours: "Mon–Fri 8AM–5PM · Sat–Sun closed",
    location: "Sky Building, Pristine Bay District, Próspera",
    description: "Bitcoin education center — learn, buy, sell.",
  },
  {
    name: "The Scuba Shop",
    phone: "+504 9463-4293",
    link: { label: "scuba.shop", href: "https://scuba.shop" },
    hours: "Mon–Sat 9AM–5PM · Sun by appointment",
    location: "Bitcoin Beach, Pristine Bay District, Próspera",
    description: "World-class dives on the second largest coral reef.",
  },
  {
    name: "Pergolas Restaurant",
    phone: "+504 3145-7996",
    link: { label: "View menu", href: "https://lasverandasroatan.com" },
    hours: "Daily 7AM–9PM",
    location: "Las Verandas Hotel, Pristine Bay District, Próspera",
    description: "Elegant international and local cuisine with ocean views.",
  },
  {
    name: "Pete's Place",
    phone: "+504 8789-0098",
    link: { label: "Menu", href: "https://pristinebay.com" },
    hours: "Daily 7AM–9PM",
    location: "Pristine Bay District, Próspera",
    description: "Casual sports bar with ocean-view golf amenities.",
  },
  {
    name: "GARM Clinic",
    phone: "+504 9123-4567",
    link: { label: "garmclinic.com", href: "https://garmclinic.com" },
    hours: "Mon–Fri 8AM–5PM · Sat–Sun emergency only",
    location: "Parrot Tree, Roatán",
    description: "Full-service medical clinic — emergency, general and specialized care.",
  },
  {
    name: "BiFat Center",
    phone: "+504 9876-5432",
    link: { label: "bifat.life", href: "https://bifat.life" },
    hours: "Mon–Fri 6AM–9PM · Sat 8AM–6PM · Sun 9AM–2PM",
    location: "Beta Building, Próspera",
    description: "Modern fitness center with trainers and classes.",
  },
  {
    name: "Pristine Academy",
    phone: "+504 9567-8901",
    link: { label: "pristineacademy.co", href: "https://pristineacademy.co" },
    hours: "Mon–Fri 8AM–4PM · Sat–Sun closed",
    location: "Pristine Bay District, Próspera",
    description: "International school, preschool through high school.",
  },
  {
    name: "Roatan Woods Carpentry",
    phone: "+504 9234-5678",
    link: { label: "roatanwoods.carpentry", href: "https://roatanwoods.carpentry" },
    hours: "Mon–Fri 8AM–5PM · Sat 8AM–12PM · Sun closed",
    location: "Pristine Bay District, Próspera",
    description: "Custom furniture in tropical hardwoods and sustainable materials.",
  },
];

export const shopping: Place[] = [
  {
    name: "RGB Prints",
    phone: "+504 9613-0230",
    link: { label: "Facebook page", href: "https://facebook.com/search/top?q=RGB%20Prints%20Roatan" },
    hours: "Mon–Fri 9AM–5PM · Sat 9AM–1PM · Sun closed",
    location: "French Harbor",
    description: "Professional printing — business cards, banners, flyers, documents.",
  },
  {
    name: "Tropic Consolidators",
    phone: "+504 9542-5777",
    link: { label: "tropicconsolidators.com", href: "https://tropicconsolidators.com" },
    hours: "Mon–Fri 8AM–5PM · Sat 9AM–1PM · Sun closed",
    location: "French Harbor",
    description: "Freight forwarding and shipping, imports and exports.",
  },
  {
    name: "MAX Shipping",
    phone: "+504 8800-6965",
    link: { label: "Facebook page", href: "https://facebook.com/search/top?q=MAX%20Shipping%20Roatan" },
    hours: "Mon–Fri 8AM–6PM · Sat 9AM–2PM · Sun closed",
    location: "French Harbor",
    description: "Shipping and logistics, cargo transport to and from Roatán.",
  },
  {
    name: "Megaplaza Roatan",
    phone: "+504 9988-7766",
    link: { label: "View on map", href: "https://www.google.com/maps/search/Megaplaza+Roatan" },
    hours: "Daily 9AM–7PM",
    location: "French Harbor",
    description: "Roatán's premier shopping mall — retail and restaurants.",
  },
  {
    name: "Eldon's Supermarket",
    phone: "+504 9876-5432",
    link: { label: "View on map", href: "https://www.google.com/maps/search/Eldons+Supermarket+Roatan" },
    hours: "Daily 7AM–8PM",
    location: "French Harbor",
    description: "Large supermarket with local and imported groceries.",
  },
];

/* ---------------- Events (snapshot, live feed lives on prospera.place) ---------------- */

export interface EventItem {
  title: string;
  description: string;
  date: string;
  recurrence?: string;
  time: string;
  venue: string;
  organizer?: string;
  tags: string[];
  link?: string;
}

export const recurringEvents: EventItem[] = [
  {
    title: "Wild Game Night",
    description: "Board games, cards and new faces — a Próspera staple.",
    date: "Every Monday",
    recurrence: "weekly",
    time: "7:00 PM – 10:00 PM",
    venue: "Próspera",
    tags: ["community", "games"],
  },
  {
    title: "Coworking Tuesday @ Bitcoin Center",
    description: "Open coworking day at the AmityAge Bitcoin Center.",
    date: "Every Tuesday",
    recurrence: "weekly",
    time: "9:00 AM – 5:00 PM",
    venue: "Sky Building, Pristine Bay",
    organizer: "AmityAge",
    tags: ["bitcoin", "coworking"],
  },
  {
    title: "Yoga at Dharma",
    description: "Morning flow, all levels welcome.",
    date: "Every Wednesday",
    recurrence: "weekly",
    time: "7:30 AM – 8:30 AM",
    venue: "Dharma, Próspera",
    tags: ["wellness"],
  },
  {
    title: "Cigar Club at Pérgolas",
    description: "Evening cigar and conversation club.",
    date: "Every Thursday",
    recurrence: "weekly",
    time: "7:00 PM – late",
    venue: "Pérgolas, Las Verandas",
    tags: ["social"],
  },
  {
    title: "Karaoke at Herby's",
    description: "Island karaoke night.",
    date: "Every Friday",
    recurrence: "weekly",
    time: "8:00 PM – late",
    venue: "Herby's",
    tags: ["nightlife", "music"],
  },
  {
    title: "Satoshi Saturdays",
    description: "Bitcoin meetup — talks, payments in practice, newcomers welcome.",
    date: "Every Saturday",
    recurrence: "weekly",
    time: "4:00 PM – 7:00 PM",
    venue: "Bitcoin Beach, Pristine Bay",
    tags: ["bitcoin", "meetup"],
  },
];
