import { useState } from 'react';
import css from '../styles.module.css';

export default function Serchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handelQueryChenge = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handelSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return alert('Введите ваш запрос');
    }

    setSearchQuery('');
    onSubmit(searchQuery);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handelSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>S</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handelQueryChenge}
        />
      </form>
    </header>
  );
}
