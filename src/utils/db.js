import fb_svg from '../assets/svg/fb.svg'

import product_1_img from '../assets/img/clorox1.png'
import product_2_img from '../assets/img/zife-lavander.png'
import product_3_img from '../assets/img/pure-bright1.png'
import product_4_img from '../assets/img/carry-out-bags.png'
import product_5_img from '../assets/img/thankyou-bags2.png'
import product_6_img from '../assets/img/vinyl_gloves.png'
import product_7_img from '../assets/img/finitex-gloves.png'
import product_8_img from '../assets/img/fabuloso.png'
import product_9_img from '../assets/img/forks.png'
import product_10_img from '../assets/img/60galon-bags.png'
import product_11_img from '../assets/img/cloth_fiber.png'
import product_12_img from '../assets/img/60galon-bags.png'
import product_13_img from '../assets/img/straws2.png'


export const CONTACTS = [
    'test@example.com',
    '+1 (305) 391-0750'
]
export const SOCIALS = [
    {
      name: 'facebook',
      url: 'http://www.facebook.com',
      svg: fb_svg
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
        display: {
            'en': {
                name: 'Bleach',
                desc: '6 Gallons CS'
            },
            'es': {
                name: 'Cloro',
                desc: '6 Galones CS'
            }
        },
    },
    {
        id: 2,
        img: product_2_img,
        price: 23.00,
        highlight: true,
        display: {
            'en': {
                name: 'Cleaning Soap',
                desc: '4 Gallons CS'
            },
            'es': {
                name: 'Jabón de Limpieza',
                desc: '4 Galones CS'
            }
        },
    },
    {
        id: 3,
        img: product_3_img,
        price: 23.00,
        highlight: true,
        display: {
            'en': {
                name: 'Strong Degreaser',
                desc: '4 Gallons CS'
            },
            'es': {
                name: 'Desengrasante Fuerte',
                desc: '4 Galones CS'
            }
        },
    },
    {
        id: 4,
        img: product_4_img,
        price: 16.00,
        highlight: false,
        display: {
            'en': {
                name: 'Thank you Bags',
                desc: '700 Units CS'
            },
            'es': {
                name: 'Bolsas de Agradecimiento',
                desc: '700 Unidades CS'
            }
        },
    },
    {
        id: 5,
        img: product_5_img,
        price: 19.00,
        highlight: false,
        display: {
            'en': {
                name: 'Quality Thank You Bags',
                desc: '1,000 Units CS'
            },
            'es': {
                name: 'Bolsas de Agradecimiento de Calidad',
                desc: '1,000 Unidades CS'
            }
        },
    },
    {
        id: 6,
        img: product_6_img,
        price: 25.00,
        highlight: false,
        display: {
            'en': {
                name: 'Nitrolatex Gloves',
                desc: 'CS' //NOTE: Ask Sebas for the full description
            },
            'es': {
                name: 'Guantes Nitrolatex',
                desc: 'CS' //NOTA: Preguntar a Sebas por la descripción completa
            }
        },
    },
    {
        id: 7,
        img: product_7_img,
        price: 20.00,
        highlight: false,
        display: {
            'en': {
                name: 'Transparent Vinyl Gloves',
                desc: 'CS'
            },
            'es': {
                name: 'Guantes de Vinilo Transparente',
                desc: 'CS'
            }
        },
    },
    {
        id: 8,
        img: product_8_img,
        price: 20.00,
        highlight: false,
        display: {
            'en': {
                name: 'Fabulous Purpose Cleaner',
                desc: '4 Units'
            },
            'es': {
                name: 'Limpiador de Propósito Fabuloso',
                desc: '4 Unidades'
            }
        },
    },
    {
        id: 9,
        img: product_9_img,
        price: 15.00,
        highlight: false,
        display: {
            'en': {
                name: 'Forks and Spoons',
                desc: '1,000 Units CS'
            },
            'es': {
                name: 'Tenedores y Cucharas',
                desc: '1,000 Unidades CS'
            }
        },
    },
    {
        id: 10,
        img: product_10_img,
        price: 25.00,
        highlight: false,
        display: {
            'en': {
                name: 'Garbage Bags',
                desc: '40x46 45 Gallons - 100 Units CS'
            },
            'es': {
                name: 'Bolsas de Basura',
                desc: '40x46 45 Galones - 100 Unidades CS'
            }
        },
    },
    {
        id: 11,
        img: product_11_img,
        price: 5.00,
        highlight: false,
        display: {
            'en': {
                name: 'Cleaning Fibers',
                desc: '15 Units'
            },
            'es': {
                name: 'Fibras de Limpieza',
                desc: '15 Unidades'
            }
        },
    },
    {
        id: 12,
        img: product_12_img,
        price: 25.00,
        highlight: false,
        display: {
            'en': {
                name: 'Tallfold Napkin',
                desc: '20 Pack of Napkins - 10,000 PCs'
            },
            'es': {
                name: 'Servilleta Tallfold',
                desc: '20 Paquete de Servilletas - 10,000 Unidades'
            }
        },
    },
    {
        id: 13,
        img: product_13_img,
        price: 6.00,
        highlight: false,
        display: {
            'en': {
                name: 'Straws',
                desc: '500 PC'
            },
            'es': {
                name: 'Pajitas',
                desc: '500 Unidades'
            }
        },
    }
];
