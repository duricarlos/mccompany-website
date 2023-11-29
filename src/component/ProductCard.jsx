import { Anchor } from "./Anchor"
import 'animate.css';


const ProductCard = ({ ...props }) => {
    return (
      <div className="animate__animated animate__fadeIn">
        <div className="items-stretch self-stretch bg-mc-secondary bg-opacity-10 flex w-full grow flex-col mx-auto pt-6 pb-12 px-6 rounded-2xl max-md:mt-8 max-md:px-5">
          <img
            loading="lazy"
            srcSet={props.img}
            className="aspect-video object-contain object-center w-full overflow-hidden drop-shadow-xl"
          />{" "}
          <div className="text-mc-black text-lg leading-6">
            ${props.price}
          </div>
          <div className="text-mc-black text-xl font-bold leading-6 mt-4">
            {props.name}
          </div>
          <div className="overflow-hidden text-mc-black text-ellipsis font-thin leading-6 mt-2">
            {props.desc}
          </div>
          <div className="flex justify-between">
          <Anchor
            extraClass="bg-emerald-400 self-center mt-10 text-mc-black"
            text={props.lang.productcard_buttomwhatsapp}
            iconSrc='https://cdn.builder.io/api/v1/image/assets/TEMP/3b6237eb-3014-4b57-bbf8-cad37df558c1?'
            href={`https://wa.me/13053910750?text=${encodeURIComponent(props.lang.productcard_message+props.name)}`}
            target="_blank"
          />
          <Anchor
            extraClass="bg-gray-700 self-center mt-10"
            text={props.lang.productcard_buttomsms}
            iconSrc='https://cdn.builder.io/api/v1/image/assets/TEMP/3b6237eb-3014-4b57-bbf8-cad37df558c1?'
            href={`sms:+13053910750?body=${encodeURIComponent(props.lang.productcard_message+props.name)}` }
            target="_blank"
          />
          </div>
        </div>
      </div>
    )
  }

export default ProductCard