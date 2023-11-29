import { Anchor } from "./Anchor"
import cart_svg from '../assets/svg/cart.svg'
import sebas_img from '../assets/img/sebas.png'

import 'animate.css';

const Hero = ({ lang }) => {

  return (
    <article className=" items-center  flex w-full flex-col px-5 py-12 max-md:max-w-full">
      <div className="w-full max-w-[1216px] my-12 max-md:max-w-full max-md:my-10 gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <section className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
          <hgroup className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <span className="animate__animated animate__fadeIn text-mc-text-title text-4xl self-stretch max-md:max-w-full font-bold md:text-8xl">
              {lang.hero_title}
            </span>
            <span className="animate__animated animate__fadeInDown self-stretch text-mc-black text-2xl font-thin leading-8 mt-8 max-md:max-w-full">
              {lang.hero_subtitle}
            </span>
            <div className="items-stretch flex w-[343px] max-w-full gap-4 mt-8 self-start">

              <Anchor
                extraClass="bg-mc-forth animate__animated animate__slideInDown"
                text={lang.hero_buttom}
                iconSrc={cart_svg}
                textFirst={false}
              />

            </div>
          </hgroup>
        </section>
        <section className="max-md:w-full max-md:ml-0 items-center w-full">
          <div className="flex justify-center">
            <img
              loading="lazy"
              // src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxyZXN0YXVyYW50fGVufDB8fHx8MTcwMDk5OTcxOHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1212&h=1328"
              src={sebas_img}
              width={350}
              className=" drop-shadow-xl  max-md:max-w-full max-md:mt-10"
              style={{ borderRadius: "50% 50% 0% 10% / 50% 50% 0% 0%  " }}
            />
          </div>
        </section>
      </div>
    </article>
  )
}

export default Hero