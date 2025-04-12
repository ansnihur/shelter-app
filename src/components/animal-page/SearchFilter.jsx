import React, { useState } from "react";
import "./SearchFilter.scss";
import search from '../../assets/icons/search.svg';
import filter from '../../assets/icons/filter.svg';

export default function SearchFilter({ searchQuery, setSearchQuery, activeFilter, setActiveFilter }) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFilters = () => setFiltersOpen(!filtersOpen);

  return (
    <div className="search-filter">
      <h1 className="search-filter__title">Знайти друга</h1>

      <div className="search-filter__bar">
        <div className="search-filter__input-wrapper">
          <img src={search} alt="search" className="search-icon" />
          <input
            type="text"
            placeholder="Пошук..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-filter__input"
          />
        </div>

        <div className="search-filter__filters">
          <button className="filter-btn" onClick={toggleFilters}>
            <img src={filter} alt="filter" />
          </button>

          {filtersOpen && (
            <div className="filter-dropdown">
              <button className={activeFilter === "" ? "active" : ""} onClick={() => setActiveFilter("")}>Скинути фільтр</button>
              <button className={activeFilter === "Вид" ? "active" : ""} onClick={() => setActiveFilter("Вид")}>Вид</button>
              <button className={activeFilter === "Вік" ? "active" : ""} onClick={() => setActiveFilter("Вік")}>Вік</button>
              <button className={activeFilter === "Стан здоров’я" ? "active" : ""} onClick={() => setActiveFilter("Стан здоров’я")}>Стан здоров’я</button>
              <button className={activeFilter === "Локація" ? "active" : ""} onClick={() => setActiveFilter("Локація")}>Локація</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}