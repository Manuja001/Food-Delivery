import Logo from "./logo.png";
import search_icon from "./search_icon.png";
import shopping_cart from "./shopping_cart.png";
import star_rating from "./star_rating.png";
import menu_1 from "./menu_1.jpg";
import menu_2 from "./menu_2.jpg";
import menu_3 from "./menu_3.jpg";
import menu_4 from "./menu_4.jpg";
import menu_5 from "./menu_5.jpg";
import menu_6 from "./menu_6.jpg";
import menu_7 from "./menu_7.jpg";
import menu_8 from "./menu_8.jpg";
import food_1 from "./food_1.png";
import food_2 from "./food_2.jpg";
import food_3 from "./food_3.jpg";
import food_4 from "./food_4.jpg";

export const assets = {
  Logo,
  search_icon,
  shopping_cart,
  star_rating,
};

export const food_list = [
  {
    id: 1,
    name: "Chicken soup",
    image: food_3,
    price: 8.99,
    discription: "Chicken soup with vegetables",
    category: "Chicken",
  },
  {
    id: 2,
    name: "Roast Chicken",
    image: food_1,
    price: 15.99,
    discription: "Roast Chicken with potatoes and vegetables",
    category: "Chicken",
  },
  {
    id: 3,
    name: "Grilled Chicken",
    image: food_2,
    price: 12.99,
    discription: "Grilled Chicken with potatoes and vegetables",
    category: "Chicken",
  },
  {
    id: 4,
    name: "Deviled Chicken wings",
    image: food_4,
    price: 10.99,
    discription: "Deviled Chicken wings with fries",
    category: "Chicken",
  },
];

export const menu_list = [
  {
    name: "Chicken",
    image: menu_1,
  },
  {
    name: "Seafood",
    image: menu_2,
  },
  {
    name: "Pasta",
    image: menu_3,
  },
  {
    name: "Pizza",
    image: menu_4,
  },
  {
    name: "Burgers",
    image: menu_5,
  },
  {
    name: "Salads",
    image: menu_6,
  },
  {
    name: "Desserts",
    image: menu_7,
  },
  {
    name: "Drinks",
    image: menu_8,
  },
];
