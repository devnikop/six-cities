const rawLoginDataMock = {
  "avatar_url": `/static/avatar/5.jpg`,
  "email": `doppervily@yandex.ru`,
  "id": 1,
  "is_pro": false,
  "name": `doppervily`,
};

const rawOfferMock = {
  "bedrooms": 1,
  "city": {name: `Paris`, location: {latitude: 48.85661, longitude: 2.351499, zoom: 13}},
  "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
  "goods": [`Towels`, `Laptop friendly workspace`, `Baby seat`, `Washer`, `Breakfast`, `Air conditioning`],
  "host": {"id": 25, "name": `Angelina`, "is_pro": true, "avatar_url": `img/avatar-angelina.jpg`},
  "id": 1,
  "images": [`https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`],
  "is_favorite": true,
  "is_premium": false,
  "location": {latitude: 48.834610000000005, longitude: 2.364499, zoom: 16},
  "max_adults": 3,
  "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/12.jpg`,
  "price": 231,
  "rating": 4.8,
  "title": `Canal View Prinsengracht`,
  "type": `room`
};

const rawOffersArrayMock = [
  {
    "bedrooms": 1,
    "city": {name: `Paris`, location: {latitude: 48.85661, longitude: 2.351499, zoom: 13}},
    "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    "goods": [`Towels`, `Laptop friendly workspace`, `Baby seat`, `Washer`, `Breakfast`, `Air conditioning`],
    "host": {"id": 25, "name": `Angelina`, "is_pro": true, "avatar_url": `img/avatar-angelina.jpg`},
    "id": 1,
    "images": [`https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`],
    "is_favorite": true,
    "is_premium": false,
    "location": {latitude: 48.834610000000005, longitude: 2.364499, zoom: 16},
    "max_adults": 3,
    "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/12.jpg`,
    "price": 231,
    "rating": 4.8,
    "title": `Canal View Prinsengracht`,
    "type": `room`
  }
];

const rawReviewsArrayMock = [
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`,
    },
  },
];

export {
  rawLoginDataMock,
  rawOfferMock,
  rawOffersArrayMock,
  rawReviewsArrayMock,
};
