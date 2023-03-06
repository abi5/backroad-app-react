import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Saving money",
    text: "You’re in control, with free cancellation and payment options to satisfy any plan or budget.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless hiking",
    text: "Endless hiking is one of the poineer adventure travel company and well established trekking.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing comfort",
    text: "High quality standards. Millions of reviews. A Tripadvisor company.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "See all the beauty of Tibet with this 15 day private tour that goes to several places, including Lhasa, Gyantse, Shigatse, Sakya, Mt.Everest, Old Tingri, Saga, Lake Manasarovar, Darchen, and Mt. Kailash.",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "Best of java",
    info: "Sunrise over the black sand desert around Mt. Bromo is one of Indonesia's most iconic sights. Experience its majesty without braving Cemara Lawang's bracing hotels on this private and convenient door-to-door tour.",
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "Visit the Hong Islands, part of Than Bok Horani National Park, with this group boat tour. You'll get the chance to snorkel in crystalline waters, sunbathe on white-sand beaches, and check out beautiful rock formations.",
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Spot free-roaming wildlife at the edge of Nairobi on a Nairobi National Park game drive in an open-top safari vehicle. An early-morning departure means cooler temperatures and the chance to see the animals when they're most active.",
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
