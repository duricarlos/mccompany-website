import { Anchor } from "./Anchor"
import 'animate.css';
import share_svg from '../assets/svg/share.svg';


import { Link } from "react-router-dom";


function outStock(text) {
  console.log('test')
  return (
    <div className="overflow-hidden dropshadow-md text-red-200 text-ellipsis font-thin leading-6 mt-2">
      {text}
    </div>
  )
}


const ProductCard = ({ ...props }) => {
  const productpage = props.productpage ? 'yes' : 'no';
  const linktoProduct = '/product/' + props.idproduct
  console.log('ProductPage: ' + productpage)

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={`${props.productpage ? `` : `bg-mc-secondary bg-opacity-10`} items-stretch self-stretch flex w-full grow flex-col mx-auto pt-6 pb-12 px-6 rounded-2xl max-md:mt-8 max-md:px-5`}>
        <section className="flex flex-row items-start">

          <img
            loading="lazy"
            srcSet={props.img}
            className="aspect-video object-contain object-center w-full overflow-hidden drop-shadow-xl"
          />
          <button onClick={async () => {
            const shareData = {
              title: props.name,
              text: "Check this out!",
              url: "https://"+window.location.hostname+linktoProduct,
            };
            try {
              await navigator.share(shareData);
            } catch (err) {
              window.location.href = "https://"+window.location.hostname+linktoProduct
            }
          }}>
            <img
              srcSet={share_svg}
              className="w-10 md:w-15"
            />
          </button>
        </section>
        <p className="text-mc-black text-lg leading-6">
          <span>{props.pricetext}:</span> {/*NOTE: Add language var */}
          <strong className="px-2 font-sans">${parseFloat(props.lowprice).toFixed(2).toLocaleString()}</strong>
          <s className="text-sm font-sans">${parseFloat(props.highprice).toFixed(2).toLocaleString()}</s>
        </p>
        <div className="text-mc-black text-xl font-bold leading-6 mt-4">
          {props.name}
        </div>
        <div className="overflow-hidden text-mc-black text-ellipsis font-thin leading-6 mt-2">
          {props.desc}
        </div>
        {props.stock ? '' : outStock(props.stockText)}
        <div className="flex justify-between">
          <Anchor
            extraClass="bg-emerald-400 self-center mt-10 text-mc-black"
            text={props.lang.productcard_buttomwhatsapp}
            iconSrc='https://cdn.builder.io/api/v1/image/assets/TEMP/3b6237eb-3014-4b57-bbf8-cad37df558c1?'
            href={`https://wa.me/13053910750?text=${encodeURIComponent(props.lang.productcard_message + props.name)}`}
            target="_blank"
          />
          <Anchor
            extraClass="bg-gray-700 self-center mt-10"
            text={props.lang.productcard_buttomsms}
            iconSrc='https://cdn.builder.io/api/v1/image/assets/TEMP/3b6237eb-3014-4b57-bbf8-cad37df558c1?'
            href={`sms:+13053910750?body=${encodeURIComponent(props.lang.productcard_message + props.name)}`}
            target="_blank"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard