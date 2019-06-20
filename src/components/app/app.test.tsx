// import {Provider} from 'react-redux';
// import configureStore from 'redux-mock-store';
// import React from 'react';
// import renderer from 'react-test-renderer';

// import {App} from './app.jsx';
// import {leafletMock, offersArrayMock, citiesMock} from '../../mocks/mocksForTests';

// const getFilteredOffers = (city) =>
//   offersArrayMock.filter((offer) =>
//     offer.city === city);

// describe(`App correctly renders`, () => {
//   const initialState = {
//     cities: [...new Set(offersArrayMock.map((it) => it.city))],
//     currentCity: citiesMock[0],
//     filteredOffers: getFilteredOffers(citiesMock[0]),
//     offers: [],
//   };

//   const mockStore = configureStore();
//   let store;
//   let tree;

//   it(`App correctly renders`, () => {
//     const leaflet = leafletMock;
//     store = mockStore(initialState);

//     tree = renderer
//       .create(<Provider store={store}>
//         <App
//           leaflet={leaflet}
//           store={store}
//         /></Provider>)
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });
