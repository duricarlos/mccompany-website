import wsp_svg from '../assets/svg/wsp.svg'

import product_1_img from '../assets/img/clorox1.png'
import product_2_img from '../assets/img/cleaning_soap.png'
import product_3_img from '../assets/img/cleaner_degreaser.png'
import product_4_img from '../assets/img/thankyou-bags.png'
import product_5_img from '../assets/img/carry-out-bags.png'
import product_6_img from '../assets/img/nitrolatex_gloves.png'
import product_7_img from '../assets/img/vinyl_gloves.png'
import product_8_img from '../assets/img/zife-lavander.png'
import product_9_img from '../assets/img/forks.png'
import product_10_img from '../assets/img/60galon-bags.png'
import product_11_img from '../assets/img/steel_scrubbers.png'
import product_12_img from '../assets/img/napkins1.png'
import product_13_img from '../assets/img/straws2.png'
import product_14_img from '../assets/img/hand-roller.png'


export const CONTACTS = [
    'Seba456698@gmail.com',
    '+1 (305) 391-0750'
]
export const SOCIALS = [
    {
      name: 'whatsapp',
      url: 'https://wa.me/13053910750',
      svg: wsp_svg
    }
]
export const LINKS = [
    {
      name: 'Home',
      url: '/',
      display : {
        es : 'Inicio',
        en : 'Home'
      }
    },
    {
      name: 'Shop',
      url: '/shop/',
      display : {
        es : 'Tienda',
        en : 'Shop'
      }
    },

]


export const PRODUCTS = [
    {
        id: 1,
        img: product_1_img,
        price: 18.00,
        highlight: true,
        stock : true,
        display: {
            'en': {
                name: 'Bleach',
                stock: 'Out of Stock',
                desc: '1x6 Gallons 1 CS'
            },
            'es': {
                name: 'Cloro',
                stock: 'No disponible',
                desc: '6 Galones 1 CS'
            }
        },
    },
    {
        id: 2,
        img: product_2_img,
        price: 27.00,
        highlight: true,
        stock : true,
        display: {
            'en': {
                name: 'Ultra Pot & Pan Dishwashing Liquid',
                stock: 'Out of Stock',
                desc: '1x4 Gallons 1 CS'
            },
            'es': {
                name: 'Jabón de Limpieza',
                stock: 'No disponible',
                desc: '1x4 Galones 1 CS'
            }
        },
    },
    {
        id: 3,
        img: product_3_img,
        price: 23.00,
        highlight: true,
        stock : true,
        display: {
            'en': {
                name: 'Degreaser Clear',
                stock: 'Out of Stock',
                desc: '1x4 Gallons 1 CS'
            },
            'es': {
                name: 'Desengrasante Fuerte',
                stock: 'No disponible',
                desc: '1x4 Galones 1 CS'
            }
        },
    },
    {
        id: 4,
        img: product_4_img,
        price: 16.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Thank you Bags',
                stock: 'Out of Stock',
                desc: '700 Units 1 CS'
            },
            'es': {
                name: 'Bolsas de Agradecimiento',
                stock: 'No disponible',
                desc: '700 Unidades 1 CS'
            }
        },
    },
    {
        id: 5,
        img: product_5_img,
        price: 19.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Quality Thank You Bags',
                stock: 'Out of Stock',
                desc: '1,000 Units 1 CS'
            },
            'es': {
                name: 'Bolsas de Agradecimiento de Calidad',
                stock: 'No disponible',
                desc: '1,000 Unidades 1 CS'
            }
        },
    },
    {
        id: 6,
        img: product_6_img,
        price: 28.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Nitrolatex Gloves',
                stock: 'Out of Stock',
                desc: '10x100 1 CS' //NOTE: Ask Sebas for the full description
            },
            'es': {
                name: 'Guantes Nitrolatex',
                stock: 'No disponible',
                desc: '10x100 1 CS' //NOTA: Preguntar a Sebas por la descripción completa
            }
        },
    },
    {
        id: 7,
        img: product_7_img,
        price: 18.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Transparent Vinyl Gloves',
                stock: 'Out of Stock',
                desc: '10x100 1 CS'
            },
            'es': {
                name: 'Guantes de Vinilo Transparente',
                stock: 'No disponible',
                desc: '10x100 1 CS'
            }
        },
    },
    {
        id: 8,
        img: product_8_img,
        price: 20.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Fabulous Purpose Cleaner',
                stock: 'Out of Stock',
                desc: '1x4 Units'
            },
            'es': {
                name: 'Limpiador de Propósito Fabuloso',
                stock: 'No disponible',
                desc: '1x4 Unidades'
            }
        },
    },
    {
        id: 9,
        img: product_9_img,
        price: 14.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Forks and Spoons',
                stock: 'Out of Stock',
                desc: '1,000 Units 1 CS'
            },
            'es': {
                name: 'Tenedores y Cucharas',
                stock: 'No disponible',
                desc: '1,000 Unidades 1 CS'
            }
        },
    },
    {
        id: 10,
        img: product_10_img,
        price: 25.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Garbage Bags',
                stock: 'Out of Stock',
                desc: '40x46 45 Gallons - 100 Units 1 CS'
            },
            'es': {
                name: 'Bolsas de Basura',
                stock: 'No disponible',
                desc: '40x46 45 Galones - 100 Unidades 1 CS'
            }
        },
    },
    {
        id: 11,
        img: product_11_img,
        price: 5.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Steel Scrubbers',
                stock: 'Out of Stock',
                desc: '15 Units 1 Bags'
            },
            'es': {
                name: 'Fibras de metal',
                stock: 'No disponible',
                desc: '15 Unidades 1 Bolsa'
            }
        },
    },
    {
        id: 12,
        img: product_12_img,
        price: 25.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Tallfold Napkin',
                stock: 'Out of Stock',
                desc: '16 Pack of Napkins - 10,000 PCs'
            },
            'es': {
                name: 'Servilleta Tallfold',
                stock: 'No disponible',
                desc: '16 Paquete de Servilletas - 10,000 Unidades'
            }
        },
    },
    {
        id: 13,
        img: product_13_img,
        price: 7.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Straws',
                stock: 'Out of Stock',
                desc: '500 PC'
            },
            'es': {
                name: 'Pajitas',
                stock: 'No disponible',
                desc: '500 Unidades'
            }
        },
    },
    {
        id: 14,
        img: product_14_img,
        price: 20.00,
        highlight: false,
        stock : true,
        display: {
            'en': {
                name: 'Paper Towel Rolls',
                stock: 'Out of Stock',
                desc: '1x6 1 CS'
            },
            'es': {
                name: 'Rollos de toallas de papel',
                stock: 'No disponible',
                desc: '1x6 1 CS'
            }
        },
    }
];