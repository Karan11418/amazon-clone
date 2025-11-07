
import { ProductGridData } from './types';

export const CATEGORY_NAV_LINKS: string[] = [
  'All',
  "Today's Deals",
  'Customer Service',
  'Registry',
  'Gift Cards',
  'Sell',
];

export const productGrids: ProductGridData[] = [
  {
    title: 'Gaming accessories',
    products: [
      { image: 'https://picsum.photos/id/1/200/200', title: 'Headsets', isSmall: true },
      { image: 'https://picsum.photos/id/2/200/200', title: 'Keyboards', isSmall: true },
      { image: 'https://picsum.photos/id/3/200/200', title: 'Computer mice', isSmall: true },
      { image: 'https://picsum.photos/id/4/200/200', title: 'Chairs', isSmall: true },
    ],
  },
  {
    title: 'Deals in PCs',
    products: [
      {
        image: 'https://picsum.photos/id/10/400/300',
        title: 'HP 15.6" Laptop, 12th Gen Intel Core i5, 8GB RAM, 256GB SSD',
        rating: 4.5,
        reviews: 1254,
        price: '449.99',
      },
    ],
  },
  {
    title: 'Amazon Gadget Store',
    products: [
       { image: 'https://picsum.photos/id/21/200/200', title: 'Smartphones', isSmall: true },
       { image: 'https://picsum.photos/id/22/200/200', title: 'Tablets', isSmall: true },
       { image: 'https://picsum.photos/id/23/200/200', title: 'Laptops', isSmall: true },
       { image: 'https://picsum.photos/id/24/200/200', title: 'TVs', isSmall: true },
    ],
  },
  {
    title: 'Refresh your space',
    products: [
      { image: 'https://picsum.photos/id/31/200/200', title: 'Dining', isSmall: true },
      { image: 'https://picsum.photos/id/32/200/200', title: 'Home', isSmall: true },
      { image: 'https://picsum.photos/id/33/200/200', title: 'Kitchen', isSmall: true },
      { image: 'https://picsum.photos/id/34/200/200', title: 'Health and Beauty', isSmall: true },
    ],
  },
  {
    title: 'Top Sellers in Books for you',
    products: [
        { image: 'https://picsum.photos/id/40/200/300', title: 'The Silent Patient' },
        { image: 'https://picsum.photos/id/41/200/300', title: 'Atomic Habits' },
        { image: 'https://picsum.photos/id/42/200/300', title: 'Where the Crawdads Sing' },
    ]
  },
  {
    title: 'Shop deals in Fashion',
    products: [
        { image: 'https://picsum.photos/id/51/200/200', title: 'Jeans under $50', isSmall: true },
        { image: 'https://picsum.photos/id/52/200/200', title: 'Tops under $25', isSmall: true },
        { image: 'https://picsum.photos/id/53/200/200', title: 'Dresses under $30', isSmall: true },
        { image: 'https://picsum.photos/id/54/200/200', title: 'Shoes under $50', isSmall: true },
    ]
  },
  {
    title: 'For your Fitness Needs',
    products: [
      {
        image: 'https://picsum.photos/id/60/400/300',
        title: 'Adjustable Dumbbells Set, 5-52.5 lbs Weight Set for Home Gym',
        rating: 4.8,
        reviews: 8902,
        price: '199.99',
      },
    ],
  },
  {
    title: 'New arrivals in Toys',
    products: [
      {
        image: 'https://picsum.photos/id/70/400/300',
        title: 'LEGO Star Wars: The Mandalorian N-1 Starfighter Building Toy',
        rating: 4.9,
        reviews: 5432,
        price: '47.99',
      },
    ],
  }
];
