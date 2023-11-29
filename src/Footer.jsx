


const Footer = ({ info, socials, lang }) => {

    return (
      <footer className='justify-between md:justify-center items-center  flex w-full gap-5 px-40 py-20 max-md:max-w-full max-md:px-5'>
        <div className='flex flex-col text-left'>
          <span className="text-mc-black font-normal text-3xl p-5 md:px-20 leading-4 self-center whitespace-nowrap min-w-lg">
            {lang.footer_contactstitle}
          </span>
          <ul className="items-start self-stretch flex justify-between max-md:justify-center flex-col">
            {info.map(item => {
              return (
                <li key={item} className="text-mc-black text-base leading-6 self-center my-auto hover:underline">
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='flex flex-col text-left'>
          <span className="text-mc-black font-normal text-3xl p-5 md:px-20 leading-4 self-center min-w-lg">
          {lang.footer_socialstitle}
          </span>
          <ul className="items-start self-stretch flex justify-between max-md:justify-center flex-col">
            {socials.map(item => {
              return (
                <li key={item} className="text-mc-black text-base leading-6 self-center my-auto hover:underline">
                  <a href={item.url}>
                    <img src={item.svg} alt="item.name" width='25'/>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </footer>
    )
  }

export default Footer