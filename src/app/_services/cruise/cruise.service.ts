import { EventEmitter, Injectable } from '@angular/core';
import { Cruise } from '../../_model/criuses/cruise';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CruiseService {
  baseUrl = 'https://sleepy-basin-52383.herokuapp.com/';
  cruise: Cruise[] = [];
  // cruise: Cruise[] = [
  //   {
  //     _id: '1',
  //     shipName: 'MSC Opera | Balcony',
  //     price: 2179,
  //     discount: 150,
  //     sailingDate: '2021-10-24',
  //     departureMonth: 'Novamber',
  //     activities: [
  //       'Pool',
  //       'Arts Classes',
  //       'Dance Classes',
  //       'Evening DJ',
  //       'Gym',
  //       'Fitness Center',
  //       'Aquapark',
  //       'Virtual Games',
  //       'Baby Club ',
  //     ],
  //     entertainment: [
  //       'Live Music',
  //       'Sky Lounge',
  //       'Broadway Theater',
  //       'Carousel Lounge',
  //       'Comedy Performances',
  //     ],
  //     dining: [
  //       'Marketplace Buffet',
  //       'Cocktail Bar',
  //       'Panorama Restaurant',
  //       'Aqua Dining Room',
  //       'Le Bistro Restaurant',
  //       "Cagney's Steakhouse",
  //     ],
  //     images: [
  //       'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/28/2b/star-breeze-ta-listings.jpg',
  //       'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/6a/2d/ta-star-breeze-suite.jpg',
  //       'https://media-cdn.tripadvisor.com/media/photo-s/16/51/cb/5d/msc-yacht-club-royal.jpg',
  //       'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/6a/00/ta-star-breeze-whirlpool.jpg',
  //       'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/6a/05/cc-star-breeze-owners.jpg',
  //     ],
  //     days: 20,
  //     whereTo: 'Caribbean',
  //     travelers: [
  //       {
  //         passengers: 120,
  //         crew: 50,
  //       },
  //     ],
  //     shipInfo: [
  //       {
  //         company_line: 'line 1',
  //         criuse_ship: 'ship 1',
  //         launched: '2004',
  //       },
  //     ],
  //     departsFrom: 'Hurghada',
  //     reviews: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'It’s a very bad signal, when an hotel group, so much in need of guests, as all are today, and treat this way the very few bookings.',
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'A last minute stay here after our holiday with Thomas Cook was cancelled last year. Beautiful hotel. Great food and so much variety to choose from. Staff very friendly and helpful. I would definitely return here!',
  //       },
  //     ],
  //     rating: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 4.5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 3,
  //       },
  //     ],
  //     booking: [
  //       {
  //         checkIn: new Date('2021-08-01T22:00:00.000Z'),
  //         checkOut: new Date('2021-08-20T22:00:00.000Z'),
  //         rooms: 2,
  //         children: 4,
  //         adults: 2,
  //         price: 15000,
  //         userId: '5ff8b3fdb09dc1b380045120',
  //         email: 'nadaragab@yahoo.com',
  //         phone: 1289113639,
  //       },
  //     ],
  //   },
  //   {
  //     _id: '2',
  //     shipName: 'MSC Opera | Balcony',
  //     price: 2179,
  //     discount: 150,
  //     sailingDate: '2021-10-24',
  //     departureMonth: 'Novamber',
  //     activities: [
  //       'Pool',
  //       'Arts Classes',
  //       'Dance Classes',
  //       'Evening DJ',
  //       'Gym',
  //       'Fitness Center',
  //       'Aquapark',
  //       'Virtual Games',
  //       'Baby Club ',
  //     ],
  //     entertainment: [
  //       'Broadway Theater',
  //       'Carousel Lounge',
  //       'Comedy Performances',
  //       'Live Music',
  //       'Sky Lounge',
  //     ],
  //     dining: [
  //       'Marketplace Buffet - Casual',
  //       'Cocktail Bar',
  //       'Panorama Restaurant - International',
  //       'Aqua Main Dining Room - American',
  //       'Le Bistro French Restaurant - French',
  //       "Cagney's Steakhouse - Steakhouse",
  //     ],
  //     images: [
  //       'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/28/2b/star-breeze-ta-listings.jpg',
  //     ],
  //     days: 20,
  //     whereTo: 'Dubai',
  //     travelers: [
  //       {
  //         passengers: 120,
  //         crew: 50,
  //       },
  //     ],
  //     shipInfo: [
  //       {
  //         company_line: 'line 1',
  //         criuse_ship: 'ship 1',
  //         launched: '2004',
  //       },
  //     ],
  //     departsFrom: 'Hurghada',
  //     reviews: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'It’s a very bad signal, when an hotel group, so much in need of guests, as all are today, and treat this way the very few bookings.',
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'A last minute stay here after our holiday with Thomas Cook was cancelled last year. Beautiful hotel. Great food and so much variety to choose from. Staff very friendly and helpful. I would definitely return here!',
  //       },
  //     ],
  //     rating: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 4.5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 3,
  //       },
  //     ],
  //     booking: [
  //       {
  //         checkIn: new Date('2021-08-01T22:00:00.000Z'),
  //         checkOut: new Date('2021-08-20T22:00:00.000Z'),
  //         rooms: 2,
  //         children: 4,
  //         adults: 2,
  //         price: 15000,
  //         userId: '5ff8b3fdb09dc1b380045120',
  //         email: 'nadaragab@yahoo.com',
  //         phone: 1289113639,
  //       },
  //     ],
  //   },
  //   {
  //     _id: '3',
  //     shipName: 'MSC Opera | Balcony',
  //     price: 2179,
  //     discount: 150,
  //     sailingDate: '2021-10-24',
  //     departureMonth: 'Novamber',
  //     activities: [
  //       'Pool',
  //       'Arts Classes',
  //       'Dance Classes',
  //       'Evening DJ',
  //       'Gym',
  //       'Fitness Center',
  //       'Aquapark',
  //       'Virtual Games',
  //       'Baby Club ',
  //     ],
  //     entertainment: [
  //       'Broadway Theater',
  //       'Carousel Lounge',
  //       'Comedy Performances',
  //       'Live Music',
  //       'Sky Lounge',
  //     ],
  //     dining: [
  //       'Marketplace Buffet - Casual',
  //       'Cocktail Bar',
  //       'Panorama Restaurant - International',
  //       'Aqua Main Dining Room - American',
  //       'Le Bistro French Restaurant - French',
  //       "Cagney's Steakhouse - Steakhouse",
  //     ],
  //     images: [
  //       'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/28/2b/star-breeze-ta-listings.jpg',
  //     ],
  //     days: 20,
  //     whereTo: 'Hurghada',
  //     travelers: [
  //       {
  //         passengers: 120,
  //         crew: 50,
  //       },
  //     ],
  //     shipInfo: [
  //       {
  //         company_line: 'line 1',
  //         criuse_ship: 'ship 1',
  //         launched: '2004',
  //       },
  //     ],
  //     departsFrom: 'Hurghada',
  //     reviews: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'It’s a very bad signal, when an hotel group, so much in need of guests, as all are today, and treat this way the very few bookings.',
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'A last minute stay here after our holiday with Thomas Cook was cancelled last year. Beautiful hotel. Great food and so much variety to choose from. Staff very friendly and helpful. I would definitely return here!',
  //       },
  //     ],
  //     rating: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 4.5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 3,
  //       },
  //     ],
  //     booking: [
  //       {
  //         checkIn: new Date('2021-08-01T22:00:00.000Z'),
  //         checkOut: new Date('2021-08-20T22:00:00.000Z'),
  //         rooms: 2,
  //         children: 4,
  //         adults: 2,
  //         price: 15000,
  //         userId: '5ff8b3fdb09dc1b380045120',
  //         email: 'nadaragab@yahoo.com',
  //         phone: 1289113639,
  //       },
  //     ],
  //   },
  //   {
  //     _id: '4',
  //     shipName: 'MSC Opera | Balcony',
  //     price: 2179,
  //     discount: 150,
  //     sailingDate: '2021-10-24',
  //     departureMonth: 'Novamber',
  //     activities: [
  //       'Pool',
  //       'Arts Classes',
  //       'Dance Classes',
  //       'Evening DJ',
  //       'Gym',
  //       'Fitness Center',
  //       'Aquapark',
  //       'Virtual Games',
  //       'Baby Club ',
  //     ],
  //     entertainment: [
  //       'Broadway Theater',
  //       'Carousel Lounge',
  //       'Comedy Performances',
  //       'Live Music',
  //       'Sky Lounge',
  //     ],
  //     dining: [
  //       'Marketplace Buffet - Casual',
  //       'Cocktail Bar',
  //       'Panorama Restaurant - International',
  //       'Aqua Main Dining Room - American',
  //       'Le Bistro French Restaurant - French',
  //       "Cagney's Steakhouse - Steakhouse",
  //     ],
  //     images: [
  //       'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/28/2b/star-breeze-ta-listings.jpg',
  //     ],
  //     days: 20,
  //     whereTo: 'Maldeves',
  //     travelers: [
  //       {
  //         passengers: 120,
  //         crew: 50,
  //       },
  //     ],
  //     shipInfo: [
  //       {
  //         company_line: 'line 1',
  //         criuse_ship: 'ship 1',
  //         launched: '2004',
  //       },
  //     ],
  //     departsFrom: 'Hurghada',
  //     reviews: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'It’s a very bad signal, when an hotel group, so much in need of guests, as all are today, and treat this way the very few bookings.',
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'A last minute stay here after our holiday with Thomas Cook was cancelled last year. Beautiful hotel. Great food and so much variety to choose from. Staff very friendly and helpful. I would definitely return here!',
  //       },
  //     ],
  //     rating: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 4.5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 3,
  //       },
  //     ],
  //     booking: [
  //       {
  //         checkIn: new Date('2021-08-01T22:00:00.000Z'),
  //         checkOut: new Date('2021-08-20T22:00:00.000Z'),
  //         rooms: 2,
  //         children: 4,
  //         adults: 2,
  //         price: 15000,
  //         userId: '5ff8b3fdb09dc1b380045120',
  //         email: 'nadaragab@yahoo.com',
  //         phone: 1289113639,
  //       },
  //     ],
  //   },
  //   {
  //     _id: '5',
  //     shipName: 'MSC Opera | Balcony',
  //     price: 2179,
  //     discount: 150,
  //     sailingDate: '2021-10-24',
  //     departureMonth: 'Novamber',
  //     activities: [
  //       'Pool',
  //       'Arts Classes',
  //       'Dance Classes',
  //       'Evening DJ',
  //       'Gym',
  //       'Fitness Center',
  //       'Aquapark',
  //       'Virtual Games',
  //       'Baby Club ',
  //     ],
  //     entertainment: [
  //       'Broadway Theater',
  //       'Carousel Lounge',
  //       'Comedy Performances',
  //       'Live Music',
  //       'Sky Lounge',
  //     ],
  //     dining: [
  //       'Marketplace Buffet - Casual',
  //       'Cocktail Bar',
  //       'Panorama Restaurant - International',
  //       'Aqua Main Dining Room - American',
  //       'Le Bistro French Restaurant - French',
  //       "Cagney's Steakhouse - Steakhouse",
  //     ],
  //     images: [
  //       'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/28/2b/star-breeze-ta-listings.jpg',
  //     ],
  //     days: 20,
  //     whereTo: 'Marrakesh',
  //     travelers: [
  //       {
  //         passengers: 120,
  //         crew: 50,
  //       },
  //     ],
  //     shipInfo: [
  //       {
  //         company_line: 'line 1',
  //         criuse_ship: 'ship 1',
  //         launched: '2004',
  //       },
  //     ],
  //     departsFrom: 'Hurghada',
  //     reviews: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'It’s a very bad signal, when an hotel group, so much in need of guests, as all are today, and treat this way the very few bookings.',
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'A last minute stay here after our holiday with Thomas Cook was cancelled last year. Beautiful hotel. Great food and so much variety to choose from. Staff very friendly and helpful. I would definitely return here!',
  //       },
  //     ],
  //     rating: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 4.5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 3,
  //       },
  //     ],
  //     booking: [
  //       {
  //         checkIn: new Date('2021-08-01T22:00:00.000Z'),
  //         checkOut: new Date('2021-08-20T22:00:00.000Z'),
  //         rooms: 2,
  //         children: 4,
  //         adults: 2,
  //         price: 15000,
  //         userId: '5ff8b3fdb09dc1b380045120',
  //         email: 'nadaragab@yahoo.com',
  //         phone: 1289113639,
  //       },
  //     ],
  //   },
  //   {
  //     _id: '6',
  //     shipName: 'MSC Opera | Balcony',
  //     price: 2179,
  //     discount: 150,
  //     sailingDate: '2021-10-24',
  //     departureMonth: 'Novamber',
  //     activities: [
  //       'Pool',
  //       'Arts Classes',
  //       'Dance Classes',
  //       'Evening DJ',
  //       'Gym',
  //       'Fitness Center',
  //       'Aquapark',
  //       'Virtual Games',
  //       'Baby Club ',
  //     ],
  //     entertainment: [
  //       'Broadway Theater',
  //       'Carousel Lounge',
  //       'Comedy Performances',
  //       'Live Music',
  //       'Sky Lounge',
  //     ],
  //     dining: [
  //       'Marketplace Buffet - Casual',
  //       'Cocktail Bar',
  //       'Panorama Restaurant - International',
  //       'Aqua Main Dining Room - American',
  //       'Le Bistro French Restaurant - French',
  //       "Cagney's Steakhouse - Steakhouse",
  //     ],
  //     images: [
  //       'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/28/2b/star-breeze-ta-listings.jpg',
  //     ],
  //     days: 20,
  //     whereTo: 'Istanbul',
  //     travelers: [
  //       {
  //         passengers: 120,
  //         crew: 50,
  //       },
  //     ],
  //     shipInfo: [
  //       {
  //         company_line: 'line 1',
  //         criuse_ship: 'ship 1',
  //         launched: '2004',
  //       },
  //     ],
  //     departsFrom: 'Hurghada',
  //     reviews: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'It’s a very bad signal, when an hotel group, so much in need of guests, as all are today, and treat this way the very few bookings.',
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         review:
  //           'A last minute stay here after our holiday with Thomas Cook was cancelled last year. Beautiful hotel. Great food and so much variety to choose from. Staff very friendly and helpful. I would definitely return here!',
  //       },
  //     ],
  //     rating: [
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 4.5,
  //       },
  //       {
  //         user: '5ff8b3fdb09dc1b380045120',
  //         rate: 3,
  //       },
  //     ],
  //     booking: [
  //       {
  //         checkIn: new Date('2021-08-01T22:00:00.000Z'),
  //         checkOut: new Date('2021-08-20T22:00:00.000Z'),
  //         rooms: 2,
  //         children: 4,
  //         adults: 2,
  //         price: 15000,
  //         userId: '5ff8b3fdb09dc1b380045120',
  //         email: 'nadaragab@yahoo.com',
  //         phone: 1289113639,
  //       },
  //     ],
  //   },
  // ];

  // viewDetails = new EventEmitter<Cruise>();
  BookNow = new EventEmitter<Cruise>();
  BoxModal = new EventEmitter<Cruise>();
  constructor(private httpClient: HttpClient) {
    this.getAllCruises().subscribe((resp) => {
      Object.values(resp).map((res) => {
        this.cruise.push(res);
      });
    });
  }

  getAllCruises() {
    return this.httpClient.get(`${this.baseUrl}cruise`);
  }

  getCruiseById(id) {
    return this.cruise.find((c) => c._id == id);
  }

  searchByName(cruiseName: string) {
    return this.cruise.filter((c) => c.shipName[0] == cruiseName);
  }
}
