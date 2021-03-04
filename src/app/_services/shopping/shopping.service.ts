import { Injectable } from '@angular/core';
import { Shopping } from '../../_model/shopping/shopping';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }
  private shopping: Shopping[] = [
    {
      id: 1,
      data: { id: 1, name: "Mall Darya" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-f/07/78/84/e6/caption.jpg",
      type: { id: 1, name: "Gift & Specialty Shops" },
      city: "nabq bay",
      recommendation: [{ id: 5, name: "Good for Big Groups" }, { id: 6, name: "Good for Kids" }],
      rating: 5,
      reviews: 208,
    },
    {
      id: 2,
      data: { id: 2, name: "Topaz Bazaar", description: "“... quality of products in town at a very reasonable price , besides the honesty and hospitality of everyone work there , we highly recommend such amazing place to anyone who wants to get authentic Egyptian gifts”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-f/02/d4/e2/dd/the-bazaar.jpg",
      type: { id: 2, name: "Shopping Tours" },
      city: "Giza",
      recommendation: [{ id: 7, name: "Honeymoon spot" }],
      rating: 4,
      reviews: 240,
      experiance: 7,
    },
    {
      id: 3,
      data: { id: 3, name: "Imhotep Alabaster Luxor", description: "“Delightful shop filled with beautiful creations of ancient Egyptian dieties and artefacts all crafted by hand by expert craftsmen , which you can actually see working onsite using local authentic materials .”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-i/16/45/14/8b/photo0jpg.jpg",
      type: { id: 1, name: "Gift & Specialty Shops" },
      city: "luxor",
      recommendation: [{ id: 4, name: "Good for Couples" }, { id: 5, name: "Good for Big Groups" }],
      rating: 5,
      reviews: 196,
    },
    {
      id: 4,
      data: { id: 4, name: "Cairo Festival City Mall", description: "“The Place is highly recommended if you are looking to do some grand shopping, from babies' needs to adults' to even Gamers' needs, also the Carrefour Hypermarket all what your home need, from food groceries, fruit...”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-f/0b/11/40/9d/20160416-213043-largejpg.jpg",
      type: { id: 3, name: "Shopping Malls" },
      city: "cairo",
      recommendation: [{ id: 1, name: "Free Entry" }, { id: 2, name: "Good for a Rainy Day" }, { id: 3, name: "Budget-friendly" }, { id: 4, name: "Good for Couples" }, { id: 5, name: "Good for Big Groups" }, { id: 6, name: "Good for Kids" },],
      rating: 4,
      reviews: 410,
      experiance: 10
    },
    {
      id: 5,
      data: { id: 5, name: "Habiba hand Weaving", description: "“Lovely shop with amazing hand crafted items at good prices, make sure you visit to enjoy hassle free browsing and the chance to buy from an amazing selection of scarves, jewellery, bags and loads more" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-i/0d/8f/45/f9/habiba-hand-weaving.jpg",
      type: { id: 1, name: "Gift & Specialty Shops" },
      city: "luxor",
      recommendation: [{ id: 5, name: "Good for Big Groups" }, { id: 6, name: "Good for Kids" },],
      rating: 5,
      reviews: 93,
      experiance: 2
    },
    {
      id: 6,
      data: { id: 6, name: "Show You Egypt", description: "“We went me and my family to the great two temples in Abu simple like 3 hours per way long way but really was very nice trip we loved it so much the only temples have STATUS on the facade wonderful also the car was...”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-f/1c/7d/3b/4f/caption.jpg",
      type: { id: 2, name: "Shopping Tours" },
      city: "Aswan",
      recommendation: [{ id: 4, name: "Good for Couples" }, { id: 5, name: "Good for Big Groups" },],
      rating: 5,
      reviews: 58,
      experiance: 55
    },
    {
      id: 7,
      data: { id: 7, name: "Manolo Tours Egypt", description: "“The best driver We helped a lot in Hurghada and he organized wonderful trips to Luxor and Cairo and we were happy to make a wonderful shopping tour during which we bought everything you need from the souvenir.”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-f/19/98/9f/3c/caption.jpg",
      type: { id: 2, name: "Shopping Tours" },
      city: "Hurghada",
      recommendation: [{ id: 5, name: "Good for Big Groups" }, { id: 4, name: "Good for Couples" }],
      rating: 5,
      reviews: 53,
      experiance: 9
    },
    {
      id: 8,
      data: { id: 8, name: "City Stars Mall", description: "“... all in 3 ir 3,5, visits due the huge wonderful city mall, its more than mall., you can enjoy the shopping, food,every thing is enjoyable there, so I'm strongly recommend all to pay a visit to Cairo city stars ...”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-s/06/e0/00/23/city-stars-mall.jpg",
      type: { id: 3, name: "Shopping Malls" },
      city: "cairo",
      recommendation: [{ id: 1, name: "Free Entry" }, { id: 2, name: "Good for a Rainy Day" }, { id: 5, name: "Good for Big Groups" }, { id: 6, name: "Good for Kids" }],
      rating: 5,
      reviews: 442,

    },
    {
      id: 9,
      data: { id: 9, name: "SOHO Square", description: "“Vibrant great restaurants fantastic shopping and very safe definitely recommend a visit shisha bars worth a visit so much to do you will want to visit again and again”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-i/0f/6f/a9/8f/soho-square.jpg",
      type: { id: 3, name: "Shopping Malls" },
      city: "Sharm El Sheikh",
      recommendation: [{ id: 1, name: "Free Entry" }, { id: 3, name: "Budget-friendly" }, { id: 4, name: "Good for Couples" }, { id: 5, name: "Good for Big Groups" }, { id: 6, name: "Good for Kids" }, { id: 7, name: "Honeymoon spot" }],
      rating: 4,
      reviews: 5878,
experiance:2
    },
    {
      id: 10,
      data: { id: 10, name: "Habiba Gallery", description: "“Bead-embroidered and lined make-up bags (very useful and pretty gifts!), alabastar candle lights, lots and lots of small, lightweight souvenirs (all kinds of jewelry, pottery, teatowels, soaps, bags, sheets, pillo...”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-s/09/d4/53/df/shop-front.jpg",
      type: { id: 1, name: "Gift & Specialty Shops" },
      city: "Luxor",
      recommendation: [{ id: 1, name: "Free Entry" },{ id: 5, name: "Good for Big Groups" }],
      rating: 5,
      reviews: 78,
    },
   
    {
      id: 11,
      data: { id: 11, name: "Mall of Arabia Cairo", description: "“One of the best shopping centers in 6th of October, very creative architecture design with one of the best line shop elevations with a nice clear views and this place wears fragrance”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-i/0e/27/65/37/caption.jpg",
      type: { id: 3, name: "Shopping Malls" },
      city: "Cairo",
      recommendation: [{ id: 1, name: "Free Entry" }, { id: 2, name: "Good for a Rainy Day" }, { id: 3, name: "Budget-friendly" }, { id: 4, name: "Good for Couples" }, { id: 5, name: "Good for Big Groups" }, { id: 6, name: "Good for Kids" }],
      rating: 4,
      reviews: 223,
    },
     {
      id: 12,
      data: { id: 12, name: "Khan Al-Khalili", description: "“Located in the heart of Islamic cairo the souq is amazing: surrounded by the old city walls and gates has everything you wish for: leather souvenirs, alabaster statues, clothes, gold/silver jewellery, everything y...”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-i/17/73/22/1e/ibis-guide-egypt-travel.jpg",
      type: { id: 5, name: "Flea & Street Markets" },
      city: "Cairo",
      recommendation: [{ id: 1, name: "Free Entry" }, { id: 3, name: "Budget-friendly" }, { id: 4, name: "Good for Couples" }, { id: 5, name: "Good for Big Groups" }],
      rating: 4,
      reviews: 3911,
      experiance:1299
    },
    {
      id: 13,
      data: { id: 13, name: "Nobles Art Gallery", description: "“The best art and antiques shop in Luxor, museum quality pieces for a reasonable price and a very knowledgeable and friendly owner, great service.”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-i/1a/51/41/92/getlstd-property-photo.jpg",
      type: { id: 4, name: "Art Galleries" },
      city: "Luxor",
      recommendation: [ { id: 4, name: "Good for Couples" }],
      rating: 5,
      reviews: 35,
    },{
    id: 14,
      data: { id: 14, name: "Old Market", description: "“This is a must visit where you can get anything you need..food souvenirs beautiful mosque and beaches with boat trips If you want a lovely beach with a great cafe go to Mahaba beach where you will be looked after...”" },
      imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-f/0d/63/7f/4e/big-mosque.jpg",
      type: { id: 5, name: "Flea & Street Markets" },
      city: "Sharm El Sheikh",
      recommendation: [ { id: 1, name: "Free Entry" }, { id: 3, name: "Budget-friendly" }, { id: 4, name: "Good for Couples" }, { id: 5, name: "Good for Big Groups" },{ id: 7, name: "Honeymoon spot" }],
      rating: 3,
      reviews: 1410,
      experiance:7
    },{
    id: 15,
    data: { id: 15, name: "Birqash Camel Market (Souq al-Gamaal)" },
    imagesUrl: "https://media-cdn.tripadvisor.com/media/photo-i/12/fe/13/a6/camels-for-sale.jpg",
    type: { id: 5, name: "Flea & Street Markets" },
    city: "Cairo",
    recommendation: [{ id: 8, name: "Adventurous" }],
    rating: 4,
    reviews: 29,
    experiance:6
  },
  ];
  getAllshopping() {
    return this.shopping.slice()}
    getshopById(id){
      return this.shopping.find((p) => p.id === id);
    }
}
