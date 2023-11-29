



const ImageCard = ({ ...props }) => {
    return (
      <div className="md:p-3 rounded-2xl flex grow flex-col w-full max-md:w-full max-md:ml-0">
        <div className="bg-mc-secondary bg-opacity-10 items-stretch self-stretch bg-transparent flex w-full grow flex-col mx-auto pt-6 pb-12 px-3 rounded-2xl max-md:mt-8 max-md:px-5">
          <img
            loading="lazy"
            srcSet={props.img}
            className="p-10 md:p-0 object-center w-full overflow-hidden drop-shadow-xl"
          />
          <div className="text-mc-black text-xl font-thin text-center leading-6 mt-4">
            {props.title}
          </div>
        </div>
      </div>
    )
  }

export default ImageCard