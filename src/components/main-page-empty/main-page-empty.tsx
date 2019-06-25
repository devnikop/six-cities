import * as React from 'react';

interface Props {
  currentCity: string,
}

const MainPageEmpty: React.FunctionComponent<Props> = (props) => {
  const {
    currentCity,
  } = props;

  return <div className="cities__places-wrapper">
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale at the moment in {currentCity}</p>
        </div>
      </section>
      <div className="cities__right-section">
      </div>
    </div>
  </div>
}

export default MainPageEmpty;
