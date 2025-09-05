import Barberplace from "@/assets/Images/BARBER.png"
import Hope from "@/assets/Images/Hope-Foundation.png"
import Coin from "@/assets/Images/coin-master.png"
import Forecast from "@/assets/Images/fitforecast.png"


interface ProjectType {
    image: string,
    title: string, 
    text: string,
    link: string,
    stack: string[]
}

export const projects: ProjectType[] = [
    {
        image: Coin.src,
        title: "CoinMaster",
        text: "A Real-time Cryptocurrency Price Tracker.",
        link: "https://coin-master-cm.vercel.app/",
        stack: ["React.JS", "Tailwind.CSS", "CoinGecko API"]
    },
    {
        image: Barberplace.src,
        title: "BarberPlace",
        text: "A Male Saloon with Appointment Booking Function.",
        link: "https://barber-place.vercel.app/",
        stack: ["React.JS", "TypeScript", "Tailwind.CSS"] 
    },
    {
        image: Hope.src,
        title: "Hope Foundation",
        text: "Charity Foundation Landing Page With a Payment Gateway.",
        link: "https://hope-foundation-two.vercel.app/",
        stack: ["React.JS", "TypeScript", "Tailwind.CSS", "Framer Motion", "FlutterWave"] 
    },
    {
        image: Forecast.src,
        title: "FitForecast",
        text: "Get Outfit Suggestions Alongside weather Forecast of the day.",
        link: "https://fitforecast-ff.vercel.app/",
        stack: ["React.JS", "TypeScript", "Tailwind.CSS", "OpenWeather API"] 
    },

]