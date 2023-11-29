
export const Button = ({...props}) =>{
    const buttonClass =
        'items-stretch gap-2 px-6 py-2 rounded-lg max-md:px-5 hover:brightness-75 duration-300 transition text-center '
        + props.extraClass
    return (
        <button className={buttonClass}>
            {props.children}
        </button>
    )
}