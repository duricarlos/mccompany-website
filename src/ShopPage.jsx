import Header from "./Header"
import Footer from "./Footer"
import ListProducts from "./component/ListProducts"
import ProductCard from "./component/ProductCard"
import ContactForm from "./component/ContactForm"

import { LANGUAGE } from "./utils/const"
import { CONTACTS, LINKS, SOCIALS, PRODUCTS } from "./utils/db"




export default function ShopPage({currentLang, currentPath}){
    console.log('currentLang from shop page:' + currentLang)

  const lang = LANGUAGE[currentLang]

    return(
        <>
            <Header currentLang={currentLang} links={LINKS} currentPath={currentPath}/>
            <ListProducts lang={lang} title={lang.listproducts_title} description=''>
            {
                      PRODUCTS.map(item => {
                            return(
                                <ProductCard key={item.id} lang={lang} name={item.display[lang.lang].name} desc={item.display[lang.lang].desc} img={item.img} price={item.price} />
                            )
                      })
                }
            </ListProducts>
            <ContactForm lang={lang}/>
            <Footer lang={lang} info={CONTACTS} socials={SOCIALS}/>
        </>
    )

}