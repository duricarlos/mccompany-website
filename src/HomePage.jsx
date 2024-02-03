
import Header from "./Header"
import Hero from "./component/Hero"
import ImageCard from "./component/ImageCard"
import ProductCard from "./component/ProductCard"
import ListProducts from "./component/ListProducts"
import ImagesDisplay from "./component/ImagesDisplay"
import ContactForm from "./component/ContactForm"
import Footer from "./Footer"

import restaurant_img from './assets/img/restaurant-img.avif'
import kitchen_img from './assets/img/kitchen-img.avif'
import commercial_img from './assets/img/commercial-img.avif'


import { LANGUAGE } from "./utils/const"
import { CONTACTS, LINKS, SOCIALS } from "./utils/db"

import { redirect } from "react-router-dom"
import { useEffect, useState } from "react"


async function fetchProducts() {
    const response = await fetch('https://mccompanysebasprodus.com/api/products', );
    const products = await response.json();
    return products;
}




export default function HomePage({ currentLang = 'en', currentPath = '/' }) {
    const [apiProducts, setApiProducts] = useState([])

    const lang = LANGUAGE[currentLang]
    useEffect(() => {
        fetchProducts().then((products) => {
            setApiProducts(products)
        })
    } , [currentLang])

    return (
        <>
            <Header links={LINKS} currentLang={currentLang} currentPath={currentPath} />

            <Hero lang={lang} />
            <ListProducts lang={lang} title={lang.featured_products_title} description={lang.featured_products_desc} showShopBtn={true} >
                {
                    apiProducts.map(item => {
                        if (item.highlight) {
                            return (
                                <ProductCard key={item.id} pricetext={lang.price} lang={lang} name={item.display[lang.lang].name} desc={item.display[lang.lang].desc} img={item.img} lowprice={item.lowprice} highprice={item.highprice} linktoProduct={'/product/' + item.id} />
                            )
                        }
                    })
                }
            </ListProducts>

            <ImagesDisplay title={lang.imagesdisplay_title} >
                <ImageCard title={lang.imagesdisplay_restaurant} img={restaurant_img} />
                <ImageCard title={lang.imagesdisplay_kitchen} img={kitchen_img} />
                <ImageCard title={lang.imagesdisplay_commercial} img={commercial_img} />
            </ImagesDisplay>

            <ContactForm lang={lang} />
            <Footer lang={lang} info={CONTACTS} socials={SOCIALS} />
        </>
    )
}