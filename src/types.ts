type City = string;

interface Comment {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
}

interface Offer {
  bedrooms: number,
  city: {
    coords: [
      number,
      number,
    ],
    zoom: number,
    name: City,
  },
  description: string,
  goods: string[],
  host: {
    avatar: string,
    id: number,
    name: string,
    isPro: boolean,
  },
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  maxAdults: number,
  place: {
    coords: [
      number,
      number,
    ],
    zoom: number,
  },
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

interface User {
  avatarUrl: string,
  email: string,
  id: number,
  isPro: boolean,
  name: string,
}

export {
  City,
  Comment,
  Offer,
  User,
};
