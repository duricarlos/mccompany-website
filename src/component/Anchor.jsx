import { Link } from "react-router-dom"

export const Anchor = ({ extraClass = '', text, textFirst = true, iconSrc = '', href = '#', target = ''}) =>{
    const buttonClass =
        'justify-between items-stretch flex gap-2 px-6 py-4 rounded-lg max-md:px-5 hover:brightness-75 duration-300 transition '
        + extraClass
    const textContainer =
        <p className="text-neutral-100 text-center text-base font-thin leading-6">
            {text}
        </p>
    const showTextFirst = textFirst ? textContainer : ""
    const showTextSecond = textFirst ? "" : textContainer
    return (
        <Link className={buttonClass} to={href} target={target}>
            {showTextFirst}
            {iconSrc='' && 
            <img
                loading="lazy"
                src={iconSrc}
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            /> } 
            {showTextSecond}
        </Link>
    )
}