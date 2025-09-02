import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: 'mustafa-pasha',
    name: 'مصطفی پاشا',
    logo: '/images/mustafa.png',
    description: 'یه پیشنهاد داریم براتون باقلوا',
    menu: [
      { 
        id: '1', 
        name: 'سواره پسته ویژه', 
        description: 'پسته ', 
        price: 12.99, 
        category: 'باقلوا',
        image: '/images/baklava.jpg'
      },
      { 
        id: '2', 
        name: 'حلزونی زعفرانی', 
        description: 'گردویی', 
        price: 15.99, 
        category: 'باقلوا',
        image: '/images/baklava_2.jpg'
      },
      { 
        id: '3', 
        name: 'برمه گردویی', 
        description: 'شیرعسلی', 
        price: 13.99, 
        category: 'باقلوا',
        image: '/images/baklava_3.jpg'
      },
    ]
  },
  {
    id: 'purple-sandwich',
    name: 'پرپل',
    logo: '/images/sandwich.png',
    description: 'مزه استانبول زیر زبونت',
    menu: [
      { 
        id: '7', 
        name: 'اسکندر کباب', 
        description: 'گوشت', 
        price: 16.99, 
        category: 'غدای ترکی',
        image: '/images/kebab.jpg'
      },
      { 
        id: '8', 
        name: 'ساندویچ جاینت', 
        description: 'ژامبون', 
        price: 18.99, 
        category: 'غدای ترکی',
        image: '/images/doner_2.jpg'
      },
      { 
        id: '9', 
        name: 'دونر گوشت', 
        description: 'گوشت', 
        price: 21.99, 
        category: 'غدای ترکی',
        image: '/images/doner.jpg'
      },
    ]
  },
  {
    id: 'papar',
    name: 'پاپار',
    logo: '/images/papar.png',
    description: 'غرفه سیب و سالاد و پاستا پاپار',
    menu: [
       { 
        id: '15', 
        name: 'پاستا با سس گوجه', 
        description: 'پاستا و مرغ ', 
        price: 12.99, 
        category: 'پاستا',
        image: '/images/pasta.jpg'
      },
      { 
        id: '13', 
        name: 'سالاد مخصوص پاپار', 
        description: 'کاهو', 
        price: 17.99, 
        category: 'پیش غذا',
        image: '/images/salad.jpg'
      },
      { 
        id: '14', 
        name: 'سیب مخصوص پاپار', 
        description: 'بیکن و چدار', 
        price: 14.99, 
        category: 'پیش غذا',
        image: '/images/french_fries_2.jpg'
      },
    ]
  },
  {
    id: 'chicken-best',
    name: 'چیکو بست',
    logo: '/images/red.png',
    description: 'غذاهای تازه خیابانی مکزیکی',
    menu: [
      { 
        id: '19', 
        name: 'بوفالو وینگز', 
        description: 'بال سوخاری', 
        price: 11.99, 
        category: 'کتف و بال',
        image: '/images/wings.jpg'
      },
      { 
        id: '20', 
        name: 'سوپریم', 
        description: 'ماهی کبابی، کلم، کرم چیپوتله', 
        price: 13.99, 
        category: 'ساندویچ سوخاری',
        image: '/images/burgers.jpg'
      },
      { 
        id: '21', 
        name: 'قارچ سوخاری', 
        description: 'قارچ', 
        price: 15.99, 
        category: 'پیش غذا',
        image: '/images/mushrooms.jpg'
      },
    ]
  },
];