const changeOffer = (offers, newOffer) => {
  return offers.map((item) => {
    return item.id === newOffer.id ? newOffer : item;
  });
};

export {
  changeOffer,
};
