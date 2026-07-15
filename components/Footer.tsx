import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  Mail,
  ArrowUpRight,
} from "lucide-react";


const socialLinks = [
  {
    name: "Github",
    icon: FaGithub,
    url: "#",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "#",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:example@gmail.com",
  },
];


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">

      <div className="container mx-auto flex flex-col gap-6 px-6">

        <div className="flex gap-4">

          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.url}
                className="
                flex items-center gap-2
                rounded-lg
                border border-white/10
                px-4 py-2
                text-gray-400
                hover:text-white
                transition
                "
              >

                <Icon size={20}/>

                <span>
                  {item.name}
                </span>

                <ArrowUpRight size={14}/>

              </a>
            );
          })}

        </div>


        <p className="text-sm text-gray-500">
          © 2026 All rights reserved.
        </p>

      </div>

    </footer>
  );
}