import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice'
import {selectFilter} from '../../redux/selectors'

import css from './SearchBox.module.css'

export default function SearchBox() {
  const dispatch = useDispatch();
  
  const filter = useSelector(selectFilter);
  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={css.searchBox}>
      <p>Find contact by name</p>
      <input type="text" value={filter}
      
        onChange={handleFilterChange} />
    </div>
  )
}