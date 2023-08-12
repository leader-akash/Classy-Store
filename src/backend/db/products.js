import { v4 as uuid } from "uuid";
import laptop from "../../assets/images/apple.png"
import headphone from "../../assets/images/headphone.png"
import iphone from "../../assets/images/phones.png"
import cam2 from "../../assets/images/cam2.png"
import game1 from "../../assets/images/game1.png"
import airpod from "../../assets/images/airpod.png"
import asus from "../../assets/images/asus.png"
import buds2 from "../../assets/images/buds2.png"


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // {
  //   _id: uuid(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   categoryName: "non-fiction",
  // },
  {
    _id: "1234ddfdfs2",
    category: 'laptop',
    rating: 4,
    image: asus,
    description: "ASUS ROG Strix G15 Ryzen 9 Octa Core 5900HX - 16 GB/512 G...",
    price: "₹66,990",
    marketPrice: "₹1,36,990",
    label: "Latest",
    labelStyle: "yellow"

  },
  {
    _id: "1234ddfdf54534sdf45",
    category: 'headphones',
    rating: 3.5,
    image: buds2,
    description: "Noise Newly Launched Buds VS401 in-Ear Truly Wireless Earbuds ...",
    price: "₹6,990",
    marketPrice: "₹13,990",
    label: "Sale",
    labelStyle: "red"
  },

  {
    _id: "kjhdf56ds5f5",
    category: 'mobiles',
    rating: 4.5,
    image: iphone,
    description: "APPLE iPhone 14 Plus (128 GB), variant colors ",
    price: "₹70,990",
    marketPrice: "₹1,30,990",
    label: "Best Seller",
    labelStyle: "blue"
  },
  {
    _id: uuid(),
    category: 'mobiles',
    rating: 3.5,
    image: "https://m.media-amazon.com/images/I/81I3w4J6yjL._AC_UY218_.jpg",
    description: "Samsung Galaxy M33 5G (Mystique Green, 8GB, 128GB Storage)",
    price: "₹790",
    marketPrice: "₹13,990",
    label: "Best Seller",
    labelStyle: "blue"
  },
  {
    _id: uuid(),
    category: 'camera',
    rating: 2.5,
    image: cam2,
    description: "Polo EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) wit...",
    price: "₹50,299",
    marketPrice: "₹1,59,630",
    label: "",
    labelStyle: ""
  },
  {
    _id: uuid(),
    category: 'games',
    rating: 3,
    image: game1,
    description: "PS4 sony latest version, smooth gaming,  Slim 500 GB Console",
    price: "₹50,299",
    marketPrice: "₹1,59,630",
    label: "",
    labelStyle: ""
  },
  {
    _id: uuid(),
    category: 'headphones',
    rating: 5,
    image: airpod,
    description: "Boat Airpod, Color: red, Noice cancellation",
    price: "₹299",
    marketPrice: "₹1,299",
    label: "Trending",
    labelStyle: "green"
  },
  {
    _id: uuid(),
    category: 'laptop',
    rating: 4,
    image: "https://m.media-amazon.com/images/I/51M0Yi3zmUL._AC_UY218_.jpg",
    description: "Dell Vostro 3420 Laptop,Intel i5-1135G7/8GB/512GB SSD F...",
    price: "₹66,990",
    marketPrice: "₹1,36,990",
    label: "Latest",
    labelStyle: "yellow"

  },
  {
    _id: uuid(),
    category: 'headphones',
    rating: 3.5,
    image: "https://m.media-amazon.com/images/I/512xXCsIAEL._AC_UY218_.jpg",
    description: "Noise Buds VS104 Truly Wireless Earbuds with 45Hs ...",
    price: "₹990",
    marketPrice: "₹1,390",
    label: "Trending ",
    labelStyle: "green"
  },

  {
    _id: uuid(),
    category: 'laptop',
    rating: 4,
    image: asus,
    description: "ASUS ROG Strix G15 Ryzen 9 Octa Core 5900HX - 16 GB/512 G...",
    price: "₹66,990",
    marketPrice: "₹1,36,990",
    label: "Latest",
    labelStyle: "yellow"

  },
  {
    _id: uuid(),
    category: 'headphones',
    rating: 3.5,
    image: "https://m.media-amazon.com/images/I/51wkzMNSA0L._AC_UY218_.jpg",
    description: "pTron Bassbuds Duo in Ear Earbuds with 32Hrs Total Playtime ...",
    price: "₹690",
    marketPrice: "₹1,990",
    label: "",
    labelStyle: ""
  },

  {
    _id: uuid(),
    category: 'mobiles',
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UY218_.jpg",
    description: "OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage) ",
    price: "₹70,990",
    marketPrice: "₹1,30,990",
    label: "Best Seller",
    labelStyle: "blue"
  },
  {
    _id: uuid(),
    category: 'laptop',
    rating: 4,
    image: laptop,
    description: "Apple macbook Ryzen 9 Octa Core 5900HX - 16 GB/512 G...",
    price: "₹66,990",
    marketPrice: "₹1,36,990",
    label: "Latest",
    labelStyle: "yellow"

  },
  {
    _id: uuid(),
    category: 'camera',
    rating: 2.5,
    image: "https://m.media-amazon.com/images/I/31Nk80-hUUL._AC_UY218_.jpg",
    description: "CCTV camera HD, full quality..",
    price: "₹50,299",
    marketPrice: "₹1,59,630",
    label: "",
    labelStyle: ""
  },
  {
    _id: uuid(),
    category: 'mobiles',
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_UY218_.jpg",
    description: "realme narzo N55 (Prime Blue, 6GB+128GB) 33W Segment Fast charging",
    price: "₹299",
    marketPrice: "₹12,999",
    label: "",
    labelStyle: ""
  },
  {
    _id: uuid(),
    category: 'games',
    rating: 3,
    image: "https://m.media-amazon.com/images/I/417N8w4Ti3L._AC_UY218_.jpg",
    description: "GSH One Hand Non Mechanical Gaming Keyboard and Backlit Mouse",
    price: "₹299",
    marketPrice: "₹1,630",
    label: "Latest",
    labelStyle: "yellow"
  },
  {
    _id: uuid(),
    category: 'headphones',
    rating: 3,
    image: "https://m.media-amazon.com/images/I/61O0rXhhP6L._AC_UY218_.jpg",
    description: "Redgear Cloak Wired RGB Wired Over Ear Gaming Headphones",
    price: "₹299",
    marketPrice: "₹1,630",
    label: "Latest",
    labelStyle: "yellow"
  },
  {
    _id: uuid(),
    category: 'camera',
    rating: 2.5,
    image: "https://m.media-amazon.com/images/I/712n-jj40jL._AC_UY218_.jpg",
    description: "SK Mark IV 30.4 MP Digital SLR Camera (Black) wit...",
    price: "₹50,299",
    marketPrice: "₹1,59,630",
    label: "",
    labelStyle: ""
  },
  {
    _id: uuid(),
    category: 'headphones',
    rating: 4.5,
    image: headphone,
    description: "Red ultra clear  voice headphone 32Hrs Total Playtime ...",
    price: "₹690",
    marketPrice: "₹1,990",
    label: "",
    labelStyle: ""
  },
  {
    _id: uuid(),
    category: 'headphones',
    rating: 3.7,
    image: airpod,
    description: "Boat Airpod, Color: red, Noice cancellation",
    price: "₹299",
    marketPrice: "₹1,299",
    label: "Trending",
    labelStyle: "green"
  },
  {
    _id: uuid(),
    category: 'games',
    rating: 3,
    image: game1,
    description: "PS4 sony latest version, smooth gaming,  Slim 500 GB Console",
    price: "₹50,299",
    marketPrice: "₹1,59,630",
    label: "",
    labelStyle: ""
  },
  {
    _id: uuid(),
    category: 'camera',
    rating: 3,
    image: "https://m.media-amazon.com/images/I/61HG3DVxTaL._AC_UY218_.jpg",
    description: "SJCAM C200 Action Camera 4K 24FPS Optical 16MP | Magnetic Body ...",
    price: "₹50,299",
    marketPrice: "₹1,59,630",
    label: "",
    labelStyle: ""
  },
  {
    _id: uuid(),
    category: 'camera',
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/712n-jj40jL._AC_UY218_.jpg",
    description: "SK Mark IV 30.4 MP Digital SLR Camera (Black) wit...",
    price: "₹50,299",
    marketPrice: "₹1,59,630",
    label: "",
    labelStyle: ""
  },
  {
    _id: uuid(),
    category: 'headphones',
    rating: 5,
    image: airpod,
    description: "Boat Airpod, Color: red, Noice cancellation",
    price: "₹299",
    marketPrice: "₹1,299",
    label: "Trending",
    labelStyle: "green"
  },
];
