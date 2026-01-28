import Barberplace from "@/assets/Images/BARBER.png"
import Hope from "@/assets/Images/Hope-Foundation.png"
import Coin from "@/assets/Images/coin-master.png"
import Forecast from "@/assets/Images/fitforecast.png"
import Vestir from "@/assets/Images/Vestir.png"


interface ProjectType {
    image: string,
    title: string, 
    text: string,
    link: string,
    stack: string[]
}

export const projects: ProjectType[] = [
    {
        image: Vestir.src,
        title: "Vestir",
        text: "Dressing the modern shopper with style and convenience.",
        link: "https://vestir-sage.vercel.app/",
        stack: ["Next.JS", "TypeScript", "Material UI", "Zustand", "Framer Motion"]
    },
    {
        image: Forecast.src,
        title: "FitForecast",
        text: "Get Outfit Suggestions Alongside weather Forecast of the day.",
        link: "https://fitforecast-ff.vercel.app/",
        stack: ["Next.JS", "TypeScript", "Tailwind.CSS", "OpenWeather API"]
    },
    {
        image: Coin.src,
        title: "CoinMaster",
        text: "A minimalistic Real-time Cryptocurrency Price Tracking web application.",
        link: "https://coin-master-cm.vercel.app/",
        stack: ["React.JS", "Tailwind.CSS", "CoinGecko API"]
    },
    {
        image: Hope.src,
        title: "Hope Foundation",
        text: "A Charitable organization's landing page with integrated payment gateway.",
        link: "https://hope-foundation-two.vercel.app/",
        stack: ["React.JS", "TypeScript", "Tailwind.CSS", "Framer Motion", "FlutterWave"] 
    },
]