import { HeroProps } from "@/interfaces";
import { AppWindowIcon, CpuIcon, LayoutPanelLeftIcon, LineChartIcon} from "lucide-react";

export const heroData: HeroProps = {
  summary:
    "I am a Business Graduate working as a Software Engineering Intern in Kuala Lumpur, Malaysia. Reach out, and let's start building something amazing!",
  expertise: "Business and IT Fresh Graduate",
  skills: [
    {
      name: "UI/UX Design",
      description: "I write production backend services.",
      icon: <LayoutPanelLeftIcon />,
    },
    {
      name: "Web Development",
      description: "I got an eye for design, just look at this!",
      icon: <AppWindowIcon />,
    },
    {
      name: "Product Management",
      description: "I develop IoT devices of my own.",
      icon: <LineChartIcon />,
    },
  ],
};
