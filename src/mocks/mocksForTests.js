const leafletMock = {
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
    city: `Amsterdam`,
    placeName: `Beautiful & luxurious apartment at great location`,
    placeType: `Apartment`,
    isPremium: true,
    src: `img/apartment-01.jpg`,
    price: 120,
    coords: [52.3909553943508, 4.85309666406198],
  },
  {
    city: `Cologne`,
    placeName: `Wood and stone place`,
    placeType: `Private room`,
    isPremium: false,
    src: `img/room.jpg`,
    price: 80,
    coords: [52.369553943508, 4.85309666406198],
  },
  {
    city: `Brussels`,
    placeName: `Canal View Prinsengracht`,
    placeType: `Apartment`,
    isPremium: false,
    src: `img/apartment-02.jpg`,
    price: 132,
    coords: [52.3909553943508, 4.929309666406198],
  },
  {
    city: `Amsterdam`,
    placeName: `Nice, cozy, warm big bed apartment`,
    placeType: `Apartment`,
    isPremium: true,
    src: `img/apartment-03.jpg`,
    price: 180,
    coords: [52.3809553943508, 4.939309666406198],
  }
];

const citiesMock = [
  {
    name: `Amsterdam`,
    coords: [52.370216, 4.895168],
  },
  {
    name: `Brussels`,
    coords: [50.850346, 4.351721],
  },
  {
    name: `Cologne`,
    coords: [51.227741, 6.773456],
  },
  {
    name: `Dusseldorf`,
    coords: [50.937531, 6.960279],
  },
  {
    name: `Hamburg`,
    coords: [53.551086, 9.993682],
  },
  {
    name: `Paris`,
    coords: [48.856613, 2.352222],
  },
];

const offerMock = {
  placeName: `Beautiful & luxurious apartment at great location`,
  placeType: `Apartment`,
  isPremium: true,
  src: `img/apartment-01.jpg`,
  price: 120,
};

export {
  leafletMock,
  offersArrayMock,
  citiesMock,
  offerMock
};
