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
  },
];

const citiesMock = [
  `Paris`,
  `Cologne`,
  `Amsterdam`,
  `Brussels`
];

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

const userLoginMock = {
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
  userLoginMock,
};
