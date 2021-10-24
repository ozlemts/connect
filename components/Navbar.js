import Logo from "@/components/Logo";
import Link from "next/link";
import Menu from "@/components/Menu";
import { useRouter } from "next/router";
import React, { useState } from "react";

const menuElements = [
  { name: "Hackathon Challenge", targetUrl: "https://troopl.com/challenges/shout-out-generator" },
  { name: "About Me", targetUrl: "/aboutme" },
];
function NavBar() {
  const [mobile, setMobile] = useState(true);

  return (
    <nav>
      <div className="flex items-center justify-between py-3 bg-white shadow-sm px-3 md:px-12 lg:px-36">
        <Logo />
        <div className="grid justify-start items-center grid-flow-col gap-4 font-semibold">
          {menuElements.map((e, index) => (
            <Link href={e.targetUrl} key={index} target="_blank">
              <p
                className={`'/' +  ${
                  e.targetUrl === useRouter().pathname
                    ? "text-green-400"
                    : "text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-purple-600"
                } hidden md:block hover:text-green-500 cursor-pointer text-sm lg:text-base`}
              >
                {e.name}
              </p>
            </Link>
          ))}
          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              type="button"
              className="w-10 h-10 flex justify-center items-center rounded"
              onClick={() => setMobile(!mobile)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg text-right font-semibold">
        <div className={mobile ? "hidden" : "block"}>
          {menuElements.map((e, index) => (
            <Link href={e.targetUrl} key={index}>
              <p
                className={`'/' +  ${
                  e.targetUrl === useRouter().pathname
                    ? "text-green-500"
                    : "text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-purple-600"
                } hover:text-green-500 cursor-pointer  p-3`}
              >
                {e.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;