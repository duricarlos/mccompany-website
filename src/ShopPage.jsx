import Header from "./Header"
import Footer from "./Footer"
import ListProducts from "./component/ListProducts"
import ProductCard from "./component/ProductCard"
import ContactForm from "./component/ContactForm"

import { LANGUAGE } from "./utils/const"
import { CONTACTS, LINKS, SOCIALS } from "./utils/db"

import { useEffect, useState } from "react"

async function fetchProducts() {
    const response = await fetch('https://mccompanysebasprodus.com/api/products', );
    const products = await response.json();
    return products;
}


export default function ShopPage({currentLang = 'en', currentPath = '/shop/'}){
    const [apiProducts, setApiProducts] = useState([])
    console.log('currentLang from home page:' + currentLang)

  const lang = LANGUAGE[currentLang]
  useEffect(() => {
    fetchProducts().then((products) => {
        setApiProducts(products)
    })
} , [currentLang])

    return(
        <>
            <Header currentLang={currentLang} links={LINKS} currentPath={currentPath}/>
            <ListProducts lang={lang} title={lang.listproducts_title} description=''>
            {
                      apiProducts.map(item => {
                            return(
                                <ProductCard key={item.id} idproduct={item.id} lang={lang} stock={item.stock} stockText={item.display[lang.lang].stock} name={item.display[lang.lang].name} desc={item.display[lang.lang].desc} img={item.img} pricetext={lang.price} lowprice={item.lowprice} highprice={item.highprice} />
                            )
                      })
                }
            </ListProducts>
            <ContactForm lang={lang}/>
            <Footer lang={lang} info={CONTACTS} socials={SOCIALS}/>
        </>
    )

}