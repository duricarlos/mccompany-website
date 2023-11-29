


const ImagesDisplay = ({ ...props }) => {
    return (
      <article className=" items-center flex w-full flex-col px-5 py-20 max-md:max-w-full">
        <div className="flex w-full max-w-[1216px] flex-col my-6 max-md:max-w-full">
          <span className="text-mc-black font-bold text-3xl py-5 self-center text-center">
            {props.title}
          </span>
          <section className="self-stretch mt-10 max-md:max-w-full">
            <hgroup className="grid grid-cols-1 md:grid-cols-3 max-md:items-stretch max-md:gap-5">
              {props.children}
            </hgroup>
          </section>
        </div>
      </article>
    )
  }

export default ImagesDisplay