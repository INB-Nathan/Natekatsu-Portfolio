import type { Route } from "./+types/home";
import HeroPage from "../about/HeroPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Natekatsu.js" },
    { name: "Description", content: "This is my Portfolio!" },
  ];
}

export default function Home() {
  return <HeroPage />;
}
