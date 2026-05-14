import Hope from "@/assets/Images/Hope-Foundation.png";
import Coin from "@/assets/Images/coin-master.png";
import Forecast from "@/assets/Images/fitforecast.png";
import Vestir from "@/assets/Images/Vestir.png";
import Chuks from "@/assets/Images/ChuksKitchen.png";

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
      "Engineered and refined production-grade frontend features for a confidential web application, focusing on performant, responsive, and accessible user interfaces. Translated high-fidelity designs into pixel-accurate components and integrated backend APIs to enable dynamic, data-driven workflows. Collaborated within an agile development environment to deliver features iteratively alongside cross-functional teams."  },
  {
    id: 2,
    date: "Febuary - April 2026",
    role: "Frontend Developer",
    type: "Intern",
    company: "TrueMinds",
    description:
      "Engineered a responsive restaurant eCommerce SaaS platform from detailed Figma designs during an individual development phase, delivering pixel-perfect UI implementation and scalable frontend architecture. Transitioned into a collaborative team environment where responsibilities included frontend feature development, reusable component implementation, and seamless backend API integration to support production-ready user workflows.",
  },
  {
    id: 3,
    date: "March - June 2025",
    role: "Frontend Developer",
    type: "Contract",
    company: "Mlooop",
    description:
      "Developed and optimized components for a production-scale application, achieving a 30% reduction in load times. Implemented pixel-perfect, responsive UIs from Figma designs. Collaborated with cross-functional teams via Git and agile tools to consistently deliver features ahead of sprint deadlines.",
  },
];
