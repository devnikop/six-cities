export const leafletMock = {
  icon() {
    return {
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
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
  marker() {
    return {
      addTo: jest.fn(),
    };
  },
};

export const offersArrayMock = [
  {
    placeName: `Beautiful & luxurious apartment at great location`,
    placeType: `Apartment`,
    isPremium: true,
    src: `img/apartment-01.jpg`,
    price: 120,
  },
  {
    placeName: `Wood and stone place`,
    placeType: `Private room`,
    isPremium: false,
    src: `img/room.jpg`,
    price: 80,
  },
  {
    placeName: `Canal View Prinsengracht`,
    placeType: `Apartment`,
    isPremium: false,
    src: `img/apartment-02.jpg`,
    price: 132,
  },
  {
    placeName: `Nice, cozy, warm big bed apartment`,
    placeType: `Apartment`,
    isPremium: true,
    src: `img/apartment-03.jpg`,
    price: 180
  }
];

export const offerMock = {
  placeName: `Beautiful & luxurious apartment at great location`,
  placeType: `Apartment`,
  isPremium: true,
  src: `img/apartment-01.jpg`,
  price: 120,
};
