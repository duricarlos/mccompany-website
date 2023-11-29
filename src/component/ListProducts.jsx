import { Anchor } from "./Anchor"


const ListProducts = ({ ...props }) => {
  const shopBtn = <Anchor
    extraClass="bg-zinc-700 self-center mt-10"
    text={props.lang.listproducts_buttom}
    iconSrc='https://cdn.builder.io/api/v1/image/assets/TEMP/3b6237eb-3014-4b57-bbf8-cad37df558c1?'
    href='/shop'
  />
  return (
    <article className="px-5 py-20 max-md:max-w-full justify-center">
      <div className=" my-6 max-md:max-w-full">
        <div className="text-center flex flex-col">
          <span className="text-mc-black font-bold text-5xl py-5 text-center ">
            {props.title}
          </span>
        <span className="self-center text-mc-black text-center text-2xl font-medium leading-8 max-w-[592px] mt-2 max-md:max-w-full">
          {props.description}
        </span>
        </div>
        <section className="self-stretch mt-10 max-md:max-w-full">
          <hgroup className="gap-5 grid md:grid-cols-3 grid-cols-1 items-stretch max-md:gap-0">
            {props.children}
          </hgroup>
        </section>{" "}
        <div className="max-md:max-w-full justify-center flex flex-col items-center">
        {props.showShopBtn && shopBtn}
        </div>
      </div>
    </article>
  )
}

export default ListProducts