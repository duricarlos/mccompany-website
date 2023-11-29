export const InputForm = ({ ...props }) => {
    const inputClass = 'text-base items-stretch rounded-lg p-2 my-2 '
        + props.extraClass
    return (
        <div className='grid grid-rows-1 w-full md:w-1/2 my-2'>
            <label htmlFor={props.id}> {props.placeholder} </label>
            <input
                placeholder={props.placeholder}
                type={props.type}
                id={props.inputId}
                className={inputClass} 
                onChange={props.onChange}/>
        </div>
    )
}