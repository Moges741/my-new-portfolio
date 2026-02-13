import netflix from "@/assets/images/Netflix.png"
import amazon from "@/assets/images/amazon.png"
import forum from "@/assets/images/forum.png"
import realEstate from "@/assets/images/realestate.png"

export const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    short: "Frontend Netflix UI clone.",
    description:
      "Frontend Netflix replica with video streaming UI, movie browsing experience, and personalized recommendations layout.",
    category: "frontend",
    image: netflix,
    github_link: "https://github.com/Moges741/using-api",
    live_link: "https://trailer-app-clone.netlify.app/"
  },
  {
    id: 2,
    title: "Amazon Clone",
    short: "Full-stack ecommerce system.",
    description:
      "Full-stack Amazon clone with authentication, product listing system, cart logic, and checkout experience.",
    category: "fullstack",
    image: amazon,
    github_link: "https://github.com/Moges741/Amazon-Project",
    live_link: "https://amazon-gebeya.vercel.app/"
  },
  {
    id: 3,
    title: "Evangadi Forum",
    short: "Community discussion platform.",
    description:
      "Forum platform where users can post questions, answer discussions, and interact with the developer community.",
    category: "fullstack",
    image: forum,
    github_link: "https://github.com/Moges741/evangadi_forum",
    live_link: "https://studentsforum.vercel.app"
  },
  {
    id: 4,
    title: "RealEstate Platform",
    short: "Property listing system.",
    description:
      "Real estate platform with filtering, property search, listing management, and modern UI experience.",
    category: "fullstack",
    image: realEstate,
    github_link: "https://github.com/Moges741/realestate1",
    live_link: "https://emrealestate.vercel.app/"
  }
]
