import { v4 as uuid } from "uuid";
import headphones from "../../assets/images/headphone.png"

import laptop from "../../assets/images/apple.png"
import phone from "../../assets/images/phones.png"
import camera from "../../assets/images/camera.png"
import gaming from "../../assets/images/gaming.png"


/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  // {
  //   _id: uuid(),
  //   categoryName: "fiction",
  //   description:
  //     "literature in the form of prose, especially novels, that describes imaginary events and people",
  // },
  {
    _id: uuid(),
    image: laptop,
    categoryName: "Laptops",
  },

  {
    _id: uuid(),
    image: headphones,
    categoryName: "Headphones",
  },

  {
    _id: uuid(),
    image: phone,
    categoryName: "Mobiles",
  },
  {
    _id: uuid(),
    image: gaming,
    categoryName: "Games",
  },
  {
    _id: uuid(),
    image: camera,
    categoryName: "Camera",
  },
];
