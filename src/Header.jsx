import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";



import { LANGUAGE } from "./utils/const"
import { LINKS } from "./utils/db";

import logo_svg from './assets/svg/logo.svg'



export default function Header ({ currentLang, currentPath }) {
  const lang = LANGUAGE[currentLang]
  const nextLang = currentLang === 'es' ? 'en' : 'es'



  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={` ${!top && `shadow-lg`} mc-bg  duration-500 transition fixed top-0 z-50 justify-between items-center  flex w-full gap-5 px-20 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5`}>
      <img
        loading="lazy"
        src={logo_svg}
        className="aspect-[2.66] object-contain object-center w-[150px] overflow-hidden shrink-0 max-w-full my-auto"
      />
      <nav className="items-start self-stretch flex justify-between gap-5 max-md:justify-center">
        {LINKS.map(item => {
          console.log(LINKS)
          return (
            <Link key={item.name} to={item.url+lang.lang} className="text-mc-black text-base leading-6 self-center my-auto hover:underline">
              {item.display[lang.lang]}
            </Link>
          )
        })}
        <Link to={currentPath+nextLang} className="text-mc-black uppercase text-base leading-6 self-center my-auto hover:underline">
          {nextLang}
        </Link>
      </nav>
    </header>
  )
}

