import Hope from "@/assets/Images/Hope-Foundation.png";
import Coin from "@/assets/Images/coin-master.png";
import Forecast from "@/assets/Images/fitforecast.png";
import Vestir from "@/assets/Images/Vestir.png";
import Chuks from "@/assets/Images/ChuksKitchen.png";
import synergist from "@/assets/Images/synergist.png";

interface ProjectType {
  image: string;
  title: string;
  text: string;
  link: string;
  stack: string[];
}

interface ExperienceType {
  id: number;
  date: string;
  role: string;
  type: string;
  company: string;
  description: string;
}

export const projects: ProjectType[] = [
  {
    image: synergist.src,
    title: "Personal Brand Platform For a Public Speaker",
    text: "Designed and developed a premium personal brand website for an entrepreneur, author, and public speaker. The platform showcases coaching services, books, testimonials, and provides seamless inquiry management.",
    link: "https://immanuelzever.vercel.app/",
    stack: ["Next.JS", "TypeScript", "Resend", "Framer Motion"],
  },
  {
    image: Chuks.src,
    title: "ChuksKitchen(E-commerce)",
    text: " Chuks Kitchen brings the rich culinary heritage of Nigeria right to your doorstep with a seamless ordering experience.",
    link: "https://chukskitchen-appetit.vercel.app/",
    stack: ["React.JS", "TypeScript", "Framer Motion"],
  },
  {
    image: Vestir.src,
    title: "Vestir(E-commerce)",
    text: "Dressing the modern shopper with style and convenience.",
    link: "https://vestir-sage.vercel.app/",
    stack: ["Next.JS", "TypeScript", "Material UI", "Zustand", "Framer Motion"],
  },
  {
    image: Forecast.src,
    title: "FitForecast",
    text: "Get Outfit Suggestions Alongside weather Forecast of the day.",
    link: "https://fitforecast-ff.vercel.app/",
    stack: ["Next.JS", "TypeScript", "Tailwind.CSS", "OpenWeather API"],
  },
  {
    image: Hope.src,
    title: "Hope Foundation",
    text: "A Charitable organization's landing page with integrated payment gateway.",
    link: "https://hope-foundation-two.vercel.app/",
    stack: [
      "React.JS",
      "TypeScript",
      "Tailwind.CSS",
      "Framer Motion",
      "FlutterWave",
    ],
  },
  {
    image: Coin.src,
    title: "CoinMaster",
    text: "A minimalistic Real-time Cryptocurrency Price Tracking web application.",
    link: "https://coin-master-cm.vercel.app/",
    stack: ["React.JS", "Tailwind.CSS", "CoinGecko API"],
  },
];

export const experiences: ExperienceType[] = [
  {
    id: 1,
    date: "April 2026",
    role: "Frontend Engineer",
    type: "Full-time",
    company: "Nexora",
    description:
      "Architected the platform's frontend, establishing service and state-management patterns adopted across the entire codebase. Designed data-visualization and interaction interfaces layered over real-time sentiment and trend analysis, for brand and creator users tracking their market presence. Engineered a resilient real-time data layer, combining WebSocket streaming with automatic fallback to keep the platform responsive under unstable network conditions."  },
  {
    id: 2,
    date: "February - April 2026",
    role: "Frontend Developer",
    type: "Intern",
    company: "TrueMinds",
    description:
      "Individual phase: engineered a responsive restaurant eCommerce SaaS platform from detailed Figma designs, delivering pixel-perfect, production-ready interfaces end-to-end as the sole frontend developer.Team phase: joined a cross-functional team to build an LMS — contributed frontend features, reusable UI components, and backend API integration within an agile workflow..",
  },
  {
    id: 3,
    date: "March - June 2025",
    role: "Frontend Developer",
    type: "Contract",
    company: "Mlooop",
    description:
      "Built and shipped multiple Vue.js/Nuxt.js components in a production-grade web app, reducing page load times by 30% through performance optimization. Translated complex Figma designs into pixel-perfect, responsive UIs, improving mobile usability scores by over 20%.",
  },
];
