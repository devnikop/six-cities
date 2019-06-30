const adaptedLoginDataMock = {
  avatarUrl: `/static/avatar/5.jpg`,
  email: `doppervily@yandex.ru`,
  id: 1,
  isPro: false,
  name: `doppervily`,
};

const adaptedOfferMock = {
  bedrooms: 1,
  city: {
    coords: [48.85661, 2.351499],
    zoom: 13,
    name: `Paris`,
  },
  description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
  goods: [`Towels`, `Laptop friendly workspace`, `Baby seat`, `Washer`, `Breakfast`, `Air conditioning`],
  host: {
    avatar: `img/avatar-angelina.jpg`,
    id: 25,
    name: `Angelina`,
    isPro: true,
  },
  id: 1,
  images: [`https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`],
  isFavorite: true,
  isPremium: false,
  maxAdults: 3,
  place: {
    coords: [48.834610000000005, 2.364499],
    zoom: 16,
  },
  previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/12.jpg`,
  price: 231,
  rating: 5,
  title: `Canal View Prinsengracht`,
  type: `room`,
};

const adaptedOffersArrayMock = [
  {
    bedrooms: 1,
    city: {
      coords: [48.85661, 2.351499],
      zoom: 13,
      name: `Paris`,
    },
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    goods: [`Towels`, `Laptop friendly workspace`, `Baby seat`, `Washer`, `Breakfast`, `Air conditioning`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      id: 25,
      name: `Angelina`,
      isPro: true,
    },
    id: 1,
    images: [`https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`],
    isFavorite: true,
    isPremium: false,
    maxAdults: 3,
    place: {
      coords: [48.834610000000005, 2.364499],
      zoom: 16,
    },
    previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/12.jpg`,
    price: 231,
    rating: 5,
    title: `Canal View Prinsengracht`,
    type: `room`,
  },
];

const adaptedReviewsArrayMock = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`,
    },
  },
];

export {
  adaptedLoginDataMock,
  adaptedOfferMock,
  adaptedOffersArrayMock,
  adaptedReviewsArrayMock,
};
