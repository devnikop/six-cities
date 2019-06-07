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
    city: `Amsterdam`,
    coords: [52.3909553943508, 4.85309666406198],
    isPremium: true,
    placeName: `Beautiful & luxurious apartment at great location`,
    placeType: `Apartment`,
    price: 120,
    src: `img/apartment-01.jpg`,
  },
  {
    city: `Cologne`,
    coords: [52.369553943508, 4.85309666406198],
    isPremium: false,
    placeName: `Wood and stone place`,
    placeType: `Private room`,
    price: 80,
    src: `img/room.jpg`,
  },
  {
    city: `Brussels`,
    coords: [52.3909553943508, 4.929309666406198],
    isPremium: false,
    placeName: `Canal View Prinsengracht`,
    placeType: `Apartment`,
    price: 132,
    src: `img/apartment-02.jpg`,
  },
  {
    city: `Amsterdam`,
    coords: [52.3809553943508, 4.939309666406198],
    isPremium: true,
    placeName: `Nice, cozy, warm big bed apartment`,
    placeType: `Apartment`,
    price: 180,
    src: `img/apartment-03.jpg`,
  }
];

const citiesMock = [
  {
    coords: [52.370216, 4.895168],
    name: `Amsterdam`,
  },
  {
    coords: [50.850346, 4.351721],
    name: `Brussels`,
  },
  {
    coords: [51.227741, 6.773456],
    name: `Cologne`,
  },
  {
    coords: [50.937531, 6.960279],
    name: `Dusseldorf`,
  },
  {
    coords: [53.551086, 9.993682],
    name: `Hamburg`,
  },
  {
    coords: [48.856613, 2.352222],
    name: `Paris`,
  },
];

const offerMock = {
  isPremium: true,
  placeName: `Beautiful & luxurious apartment at great location`,
  placeType: `Apartment`,
  price: 120,
  src: `img/apartment-01.jpg`,
};

export {
  citiesMock,
  leafletMock,
  offerMock,
  offersArrayMock,
};
