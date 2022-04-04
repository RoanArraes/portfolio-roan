import { OptionMenuHome } from "./interfaces/optionMenu.interface"
import LinkedinIcon from "../assets/icons/Linkedin.svg";

export const LABEL_MENU_OPTIONS: OptionMenuHome[] = [
  {label: "SOBRE", url: "/sobre", icon: "", targetUrl: "_self"},
  {label: "CURRÍCULO", url: "https://drive.google.com/file/d/1Q746falYmCCiuPTQ5j5jX301EhUgsDW_/view?usp=sharing", icon: "", targetUrl: "_blank"},
  {label: "PROJETOS", url: "/projetos", icon: "", targetUrl: "_self"},
  {label: "Roan Arraes", url: "https://www.linkedin.com/in/roan-arraes/", icon: LinkedinIcon,  targetUrl: "blank"},
]