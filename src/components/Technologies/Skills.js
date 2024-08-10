import { DiAndroid, DiTerminal, DiRust, DiHtml5, DiC } from "react-icons/di";
import {
  SiFirebase,
  SiGit,
  SiDart,
  SiCss3,
  SiMysql,
  SiAmazonaws,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  {
    slug: "kotlin",
    Component: TbBrandKotlin,
    title: "Kotlin",
    Description: () => <>Android apps and Lambda functions</>,
  },
  {
    slug: "Rust",
    Component: DiRust,
    title: "Rust",
    Description: () => <>Simple Task In CP</>,
  },
  {
    slug: "C++  ",
    Component: DiRust,
    title: "C++",
    Description: () => <>Simple Task In CP</>,
  },
  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling webpages</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Shell script</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentication, database and analytics</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
];
