
import Header from "./Header"
import ProductCard from "./component/ProductCard"
import ListProducts from "./component/ListProducts"
import Footer from "./Footer"


import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet';

import { LANGUAGE } from "./utils/const"
import { CONTACTS, LINKS, SOCIALS } from "./utils/db"
import { useState, useEffect } from "react"


async function fetchProducts() {
    const response = await fetch('https://mccompanysebasprodus.com/api/products', );
    const products = await response.json();
    return products;
}


export default function HomePage({ currentLang = 'en', currentPath = '/' }) {

    const { productId } = useParams()
    const lang = LANGUAGE[currentLang]
    const defaultProduct = {
        id: 1,
        img: " ",
        lowprice: 0.00,
        highprice: 0.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Loading...',
                stock: 'Loading...',
                desc: 'Loading...'
            },
            'es': {
                name: 'Cargando...',
                stock: 'Cargando...',
                desc: 'Cargando...'
            }
        },
    }
    const [product, setProduct] = useState(defaultProduct)
    useEffect(() => {
        fetchProducts().then((products) => {
            setProduct(products[productId - 1])
        })
    } , [])
    return (
        <>
            <Helmet>


                <title>{'Product: '+productId}</title>
                <meta name="description" content="undefined" />

                <meta property="og:url" content="https://hq7lb0bp-5173.use2.devtunnels.ms/product/"{...productId} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="MC Company | Sebastian Mejia" />
                <meta property="og:description" content="undefined" />
                <meta property="og:image" content="https://cdn.corporatefinanceinstitute.com/assets/products-and-services.jpeg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="hq7lb0bp-5173.use2.devtunnels.ms" />
                <meta property="twitter:url" content="https://hq7lb0bp-5173.use2.devtunnels.ms/product/"{...productId} />
                <meta name="twitter:title" content="MC Company | Sebastian Mejia" />
                <meta name="twitter:description" content="undefined" />
                <meta name="twitter:image" content="https://cdn.corporatefinanceinstitute.com/assets/products-and-services.jpeg" />

            </Helmet>
            <Header links={LINKS} currentLang={currentLang} currentPath={currentPath} />

            <section className="my-20 flex justify-center">
                <ProductCard
                    lang={lang}
                    pricetext={lang.price}
                    name={product.display[lang.lang].name}
                    desc={product.display[lang.lang].desc}
                    img={product.img}
                    lowprice={product.lowprice}
                    highprice={product.highprice}
                    productpage={true}
                    idproduct={productId}
                />

            </section>

            <Footer lang={lang} info={CONTACTS} socials={SOCIALS} />
        </>
    )
}