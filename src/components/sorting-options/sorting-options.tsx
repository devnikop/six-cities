import * as React from 'react';

interface Props {
  handleSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const SortingOptions: React.FunctionComponent<Props> = (props) => {
  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <select onChange={props.handleSelectChange} className="places__sorting-type" id="places-sorting">
      <option className="places__option" value="popular">Popular</option>
      <option className="places__option" value="to-high">Price: low to high</option>
      <option className="places__option" value="to-low">Price: high to low</option>
      <option className="places__option" value="top-rated">Top rated first</option>
    </select>
  </form>
};

export default SortingOptions;
