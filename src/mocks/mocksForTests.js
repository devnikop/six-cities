const citiesMock = [
  `Paris`,
  `Cologne`,
  `Amsterdam`,
  `Brussels`
];

const leafletMock = {
  icon() {
    return {
      iconSize: [30, 30],
      iconUrl: `img/pin.svg`,
    };
  },
  map() {
    return {
      setView: jest.fn(),
    };
  },
  tileLayer() {
    return {
      addTo: jest.fn(),
    };
  },
  layerGroup() {
    return {
      addTo: jest.fn(),
    };
  },
  marker() {
    return {
      addTo: jest.fn(),
    };
  },
};

const offerMock = {
  bedrooms: 1,
  city: {
    coords: [50.846557, 4.351697],
    zoom: 13,
    name: `Paris`,
  },
  description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed`,
  goods: [],
  host: {},
  id: 1,
  images: [],
  isFavorite: false,
  isPremium: true,
  maxAdults: 3,
  place: {
    coords: [50.846557, 4.351697],
    zoom: 16,
  },
  previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`,
  price: 80,
  rating: 1.5,
  title: `Wood and stone place`,
  type: `apartment`,
};

const offersArrayMock = [
  {
    bedrooms: 1,
    city: {
      coords: [50.846557, 4.351697],
      zoom: 13,
      name: `Brussels`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed`,
    goods: [],
    host: {},
    id: 1,
    images: [],
    isFavorite: false,
    isPremium: true,
    maxAdults: 3,
    place: {
      coords: [50.846557, 4.351697],
      zoom: 16,
    },
    previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`,
    price: 324,
    rating: 3.6,
    title: `Beautiful & luxurious apartment at great location`,
    type: `room`,
  },
  {
    bedrooms: 1,
    city: {
      coords: [50.846557, 4.351697],
      zoom: 13,
      name: `Amsterdam`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed`,
    goods: [],
    host: {},
    id: 2,
    images: [],
    isFavorite: false,
    isPremium: true,
    maxAdults: 3,
    place: {
      coords: [50.846557, 4.351697],
      zoom: 16,
    },
    previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`,
    price: 322,
    rating: 3.6,
    title: `Beautiful & luxurious apartment at great location`,
    type: `hotel`,
  },
  {
    bedrooms: 1,
    city: {
      coords: [50.846557, 4.351697],
      zoom: 13,
      name: `Cologne`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed`,
    goods: [],
    host: {},
    id: 3,
    images: [],
    isFavorite: false,
    isPremium: true,
    maxAdults: 3,
    place: {
      coords: [50.846557, 4.351697],
      zoom: 16,
    },
    previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`,
    price: 80,
    rating: 1.5,
    title: `Wood and stone place`,
    type: `private room`,
  },
  {
    bedrooms: 1,
    city: {
      coords: [50.846557, 4.351697],
      zoom: 13,
      name: `Paris`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed`,
    goods: [],
    host: {},
    id: 4,
    images: [],
    isFavorite: false,
    isPremium: true,
    maxAdults: 3,
    place: {
      coords: [50.846557, 4.351697],
      zoom: 16,
    },
    previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`,
    price: 80,
    rating: 1.5,
    title: `Wood and stone place`,
    type: `apartment`,
  },
];

const reviewMock = {
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
};

const reviewsArrayMock = [
  {
    id: 1,
    user: {
      id: 4,
      isPro: false,
      name: `Max`,
      avatarUrl: `img/1.png`
    },
    rating: 4,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 2,
    user: {
      id: 6,
      isPro: true,
      name: `Maenx`,
      avatarUrl: `img/4.png`
    },
    rating: 4,
    comment: `Aijw3ifniknfii2222 a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 5,
    user: {
      id: 65,
      isPro: true,
      name: `Mdgnx`,
      avatarUrl: `img/9.png`
    },
    rating: 1,
    comment: `Asdaf f234frefdsafdsfggdam.`,
    date: `2019-05-08T14:13:56.569Z`
  },
];

const loginDataMock = {
  avatarUrl: `/static/avatar/5.jpg`,
  email: `doppervily@yandex.ru`,
  id: 1,
  isPro: false,
  name: `doppervily`,
};

export {
  citiesMock,
  leafletMock,
  offerMock,
  offersArrayMock,
  reviewMock,
  reviewsArrayMock,
  loginDataMock,
};
