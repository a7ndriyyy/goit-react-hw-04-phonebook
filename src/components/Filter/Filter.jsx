import { useState } from 'react';
import css from '../Filter/Filter.module.css';


export const Filter = () => {
    const { filter, addFilter } = useState();
    return (
      <div className={css.filter}>
        <input
          type="text"
          name="filter"
          className={css.filter__input}
          value={filter}
          onChange={addFilter}
          placeholder="Enter name"
        />
      </div>
    );
  }

