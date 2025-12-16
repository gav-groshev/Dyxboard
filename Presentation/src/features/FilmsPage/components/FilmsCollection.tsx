import React, { useState } from 'react';
import './FilmsCollection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCalendar,
  faCalendarDay,
  faChevronLeft,
  faChevronRight,
  faEdit,
  faEye,
  faFilter,
  faPlusCircle,
  faSearch,
  faSortAlphaDown,
  faSortDown,
  faStar,
  faThLarge,
  faTimesCircle,
  faTrashAlt,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

export const FilmsCollection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'date' | 'rating' | 'title' | 'year'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Пример данных фильмов
  const sampleFilms = [
    {
      id: 1,
      title: 'Начало',
      year: 2010,
      rating: 8.8,
      watchedDate: '2024-03-15',
      posterColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      genres: ['Фантастика', 'Триллер'],
      director: 'Кристофер Нолан',
      status: 'watched',
    },
    {
      id: 2,
      title: 'Побег из Шоушенка',
      year: 1994,
      rating: 9.3,
      watchedDate: '2024-02-28',
      posterColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      genres: ['Драма'],
      director: 'Фрэнк Дарабонт',
      status: 'watched',
    },
    {
      id: 3,
      title: 'Криминальное чтиво',
      year: 1994,
      rating: 8.9,
      watchedDate: '2024-01-10',
      posterColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      genres: ['Криминал', 'Драма'],
      director: 'Квентин Тарантино',
      status: 'watched',
    },
    {
      id: 4,
      title: 'Форрест Гамп',
      year: 1994,
      rating: 8.8,
      watchedDate: '2023-12-05',
      posterColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      genres: ['Драма', 'Комедия'],
      director: 'Роберт Земекис',
      status: 'watched',
    },
    {
      id: 5,
      title: 'Интерстеллар',
      year: 2014,
      rating: 8.6,
      watchedDate: '2024-03-20',
      posterColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      genres: ['Фантастика', 'Драма'],
      director: 'Кристофер Нолан',
      status: 'watched',
    },
    {
      id: 6,
      title: 'Зеленая книга',
      year: 2018,
      rating: 8.2,
      watchedDate: '2024-02-10',
      posterColor: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      genres: ['Драма', 'Комедия'],
      director: 'Питер Фаррелли',
      status: 'watched',
    },
  ];

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  const handleSortChange = (sort: 'date' | 'rating' | 'title' | 'year') => {
    setSortBy(sort);
  };

  const handleSortOrderToggle = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const getSortIcon = () => {
    return sortOrder === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down';
  };

  const getSortLabel = () => {
    const labels = {
      date: 'По дате просмотра',
      rating: 'По оценке',
      title: 'По названию',
      year: 'По году выхода',
    };
    return labels[sortBy];
  };

  return (
    <div className="films-collection">
      {/* Панель управления */}
      <div className="films-collection__controls">
        <div className="films-collection__search">
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Поиск фильмов, режиссеров, актеров..."
            />
          </div>
        </div>

        <div className="films-collection__view-toggles">
          <div className="btn-group">
            <button
              className={`btn btn-outline-secondary ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => handleViewModeChange('grid')}
              type="button"
            >
              <FontAwesomeIcon icon={faThLarge} />
            </button>
            <button
              className={`btn btn-outline-secondary ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => handleViewModeChange('list')}
              type="button"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        <div className="films-collection__filters">
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <FontAwesomeIcon icon={faFilter} className="me-1" />
              Фильтры
            </button>
            <div className="dropdown-menu p-3 films-collection__filter-dropdown">
              <div className="mb-2">
                <label className="form-label small">Статус</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="filterWatched"
                    defaultChecked
                  />
                  <label className="form-check-label small" htmlFor="filterWatched">
                    Просмотрено
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="filterPlanned" />
                  <label className="form-check-label small" htmlFor="filterPlanned">
                    В планах
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="filterRewatched" />
                  <label className="form-check-label small" htmlFor="filterRewatched">
                    Пересмотрено
                  </label>
                </div>
              </div>

              <div className="mb-2">
                <label className="form-label small">Оценка</label>
                <div className="d-flex align-items-center">
                  <span className="small me-2">от</span>
                  <select className="form-select form-select-sm" style={{ width: '70px' }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option defaultValue={5}>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                  <span className="small mx-2">до</span>
                  <select className="form-select form-select-sm" style={{ width: '70px' }}>
                    <option defaultValue={10}>10</option>
                    <option>9</option>
                    <option>8</option>
                    <option>7</option>
                    <option>6</option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small">Год выхода</label>
                <input
                  type="range"
                  className="form-range"
                  min="1900"
                  max="2024"
                  step="1"
                  defaultValue="2024"
                />
                <div className="d-flex justify-content-between">
                  <span className="small">1900</span>
                  <span className="small">2024</span>
                </div>
              </div>

              <button className="btn btn-sm btn-primary w-100">Применить</button>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <FontAwesomeIcon icon={faCalendar} className="me-1" />
              {getSortLabel()}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className={`dropdown-item ${sortBy === 'date' ? 'active' : ''}`}
                  onClick={() => handleSortChange('date')}
                >
                  <FontAwesomeIcon icon={faCalendar} className="me-2" />
                  По дате просмотра
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item ${sortBy === 'rating' ? 'active' : ''}`}
                  onClick={() => handleSortChange('rating')}
                >
                  <FontAwesomeIcon icon={faStar} className="me-2" />
                  По оценке
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item ${sortBy === 'title' ? 'active' : ''}`}
                  onClick={() => handleSortChange('title')}
                >
                  <FontAwesomeIcon icon={faSortAlphaDown} className="me-2" />
                  По названию
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item ${sortBy === 'year' ? 'active' : ''}`}
                  onClick={() => handleSortChange('year')}
                >
                  <FontAwesomeIcon icon={faCalendarDay} className="me-2" />
                  По году выхода
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" onClick={handleSortOrderToggle}>
                  <i className={`bi ${getSortIcon()} me-2`}></i>
                  {sortOrder === 'asc' ? 'По возрастанию' : 'По убыванию'}
                </button>
              </li>
            </ul>
          </div>

          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
            Добавить фильм
          </button>
        </div>
      </div>

      {/* Информация о фильтрах */}
      <div className="films-collection__filter-info">
        <span className="badge bg-primary me-2">
          Все фильмы <span className="badge bg-light text-dark ms-1">{sampleFilms.length}</span>
        </span>
        <span className="badge bg-secondary me-2">
          Сортировка: {getSortLabel()} <i className={`bi ${getSortIcon()} ms-1`}></i>
        </span>
        <button className="btn btn-link btn-sm p-0 text-decoration-none">
          <FontAwesomeIcon icon={faTimesCircle} className="me-1" />
          Сбросить фильтры
        </button>
      </div>

      {/* Содержимое коллекции */}
      <div className={`films-collection__content films-collection__content--${viewMode}`}>
        {viewMode === 'grid' ? (
          // Режим сетки
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {sampleFilms.map((film) => (
              <div key={film.id} className="col">
                <div className="films-collection__card card h-100">
                  <div
                    className="films-collection__card-poster"
                    style={{ background: film.posterColor }}
                  >
                    <div className="films-collection__card-rating">
                      <FontAwesomeIcon icon={faStar} className="me-2" />
                      {film.rating}
                    </div>
                    <div className="films-collection__card-actions">
                      <button className="btn btn-sm btn-light">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="btn btn-sm btn-light">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="films-collection__card-title">
                      {film.title}
                      <span className="films-collection__card-year"> ({film.year})</span>
                    </h5>
                    <p className="films-collection__card-director small text-secondary">
                      <FontAwesomeIcon icon={faVideo} className="me-1" />
                      {film.director}
                    </p>
                    <div className="films-collection__card-genres">
                      {film.genres.map((genre, index) => (
                        <span key={index} className="badge bg-light text-dark me-1 mb-1">
                          {genre}
                        </span>
                      ))}
                    </div>
                    <div className="films-collection__card-meta">
                      <span className="small text-secondary">
                        <FontAwesomeIcon icon={faCalendarDay} className="me-2" />
                        {new Date(film.watchedDate).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Режим списка
          <div className="films-collection__list">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Фильм</th>
                    <th>Режиссер</th>
                    <th>Год</th>
                    <th>Оценка</th>
                    <th>Дата просмотра</th>
                    <th>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleFilms.map((film) => (
                    <tr key={film.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="films-collection__list-poster me-3"
                            style={{ background: film.posterColor }}
                          ></div>
                          <div>
                            <strong>{film.title}</strong>
                            <div className="small">{film.genres.join(', ')}</div>
                          </div>
                        </div>
                      </td>
                      <td>{film.director}</td>
                      <td>{film.year}</td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          <FontAwesomeIcon icon={faStar} className="me-2" />
                          {film.rating}
                        </span>
                      </td>
                      <td>{new Date(film.watchedDate).toLocaleDateString('ru-RU')}</td>
                      <td>
                        <div className="btn-group btn-group-sm">
                          <button className="btn btn-outline-primary">
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                          <button className="btn btn-outline-secondary">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button className="btn btn-outline-danger">
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Пагинация */}
      <div className="films-collection__pagination">
        <nav aria-label="Навигация по страницам">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <button className="page-link">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </li>
            <li className="page-item active">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">3</button>
            </li>
            <li className="page-item">
              <button className="page-link">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
