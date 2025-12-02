export type Project = {
  id: number;
  name: string;
  year: string;
  type: string;
  desc: string;
  link: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "ArtisanAlly",
    year: "2K25",
    type: "Full Stack Web App",
    desc:
      "The platform for cross-functional work of selling, making connections and community building of local artisans. Fosters effective communication within online communities.",
    link:
      "https://github.com/amanvermaa01/artisanAlly---A-One-Stop-Solution-for-Local-Artisans",
    image: "/projects/artisanAlly.png",
  },
  {
    id: 2,
    name: "Will It Rain",
    year: "2K25",
    type: "Weather Prediction Tool",
    desc:
      "A smart weather-forecasting web app that predicts rain chances for any location using real NASA satellite datasets. Built with fast APIs, an intuitive UI, and real-time updates.",
    link: "https://github.com/amanvermaa01/will-it-rain-on-my-parade-NASA-2025",
    image: "/projects/willItRain.png",
  },
  {
    id: 3,
    name: "Spacifyer",
    year: "2K24",
    type: "Information Website",
    desc:
      "Spacifyer is an immersive 3D experience that visualizes real-time geomagnetic storms and auroras. Built with React and Three.js, it transforms complex NASA data into a stunning journey.",
    link: "https://spacifyer-a-geomagnetic-experience.vercel.app/",
    image: "/projects/spacifyer.png",
  },
];