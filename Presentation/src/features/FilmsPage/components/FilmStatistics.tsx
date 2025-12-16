import React, { useEffect, useRef } from 'react';
import './FilmStatistics.css';

export const FilmsStatistics: React.FC = () => {
  const slice1Ref = useRef<HTMLDivElement>(null);
  const slice2Ref = useRef<HTMLDivElement>(null);
  const slice3Ref = useRef<HTMLDivElement>(null);
  const slice4Ref = useRef<HTMLDivElement>(null);
  const slice5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setPercentage = (ref: React.RefObject<HTMLDivElement | null>, value: string) => {
      if (ref.current) {
        ref.current.style.setProperty('--percentage', value);
      }
    };

    setPercentage(slice1Ref, '30%');
    setPercentage(slice2Ref, '25%');
    setPercentage(slice3Ref, '20%');
    setPercentage(slice4Ref, '15%');
    setPercentage(slice5Ref, '10%');
  }, []);

  return (
    <div className="movies-tracker">
      <div className="movies-tracker__card">
        <div className="movies-tracker__content">
          <div className="movies-tracker__tab-pane active">
            <div className="movies-stats">
              <div className="row movies-stats__quick-stats">
                <div className="col-md-3 col-6">
                  <div className="movies-stats__stat-card">
                    <div className="movies-stats__stat-number">245</div>
                    <div className="movies-stats__stat-label">Всего фильмов</div>
                    <div className="movies-stats__stat-change text-success">
                      <i className="bi bi-arrow-up"></i> +12 за месяц
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="movies-stats__stat-card">
                    <div className="movies-stats__stat-number">7.8</div>
                    <div className="movies-stats__stat-label">Средняя оценка</div>
                    <div className="movies-stats__stat-change">из 10 возможных</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="movies-stats__stat-card">
                    <div className="movies-stats__stat-number">567</div>
                    <div className="movies-stats__stat-label">Часов просмотра</div>
                    <div className="movies-stats__stat-change">≈ 23.6 дня</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="movies-stats__stat-card">
                    <div className="movies-stats__stat-number">42</div>
                    <div className="movies-stats__stat-label">В этом году</div>
                    <div className="movies-stats__stat-change text-warning">
                      <i className="bi bi-dash"></i> 5 от цели
                    </div>
                  </div>
                </div>
              </div>

              <div className="movies-stats__analytics">
                <h3 className="movies-stats__section-title">
                  <i className="bi bi-graph-up me-2"></i>Аналитика просмотров
                </h3>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="movies-stats__chart-card">
                      <div className="movies-stats__chart-header">
                        <h4 className="movies-stats__chart-title">Топ жанров</h4>
                      </div>
                      <div className="movies-stats__chart-placeholder">
                        <div className="movies-stats__placeholder-donut">
                          <div className="movies-stats__donut-chart">
                            <div
                              ref={slice1Ref}
                              className="movies-stats__donut-slice movies-stats__donut-slice--1"
                            ></div>
                            <div
                              ref={slice2Ref}
                              className="movies-stats__donut-slice movies-stats__donut-slice--2"
                            ></div>
                            <div
                              ref={slice3Ref}
                              className="movies-stats__donut-slice movies-stats__donut-slice--3"
                            ></div>
                            <div
                              ref={slice4Ref}
                              className="movies-stats__donut-slice movies-stats__donut-slice--4"
                            ></div>
                            <div
                              ref={slice5Ref}
                              className="movies-stats__donut-slice movies-stats__donut-slice--5"
                            ></div>
                            <div className="movies-stats__donut-center">
                              <span className="movies-stats__donut-total">245</span>
                              <span className="movies-stats__donut-label">фильмов</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movies-stats__chart-footer">
                        <div className="movies-stats__genre-list">
                          <div className="movies-stats__genre-item">
                            <span className="movies-stats__genre-color movies-stats__genre-color--1"></span>
                            <span className="movies-stats__genre-name">Драма</span>
                            <span className="movies-stats__genre-count">74</span>
                          </div>
                          <div className="movies-stats__genre-item">
                            <span className="movies-stats__genre-color movies-stats__genre-color--2"></span>
                            <span className="movies-stats__genre-name">Комедия</span>
                            <span className="movies-stats__genre-count">61</span>
                          </div>
                          <div className="movies-stats__genre-item">
                            <span className="movies-stats__genre-color movies-stats__genre-color--3"></span>
                            <span className="movies-stats__genre-name">Триллер</span>
                            <span className="movies-stats__genre-count">49</span>
                          </div>
                          <div className="movies-stats__genre-item">
                            <span className="movies-stats__genre-color movies-stats__genre-color--4"></span>
                            <span className="movies-stats__genre-name">Фантастика</span>
                            <span className="movies-stats__genre-count">37</span>
                          </div>
                          <div className="movies-stats__genre-item">
                            <span className="movies-stats__genre-color movies-stats__genre-color--5"></span>
                            <span className="movies-stats__genre-name">Остальные</span>
                            <span className="movies-stats__genre-count">24</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <div className="movies-stats__chart-card">
                      <div className="movies-stats__chart-header">
                        <h4 className="movies-stats__chart-title">Распределение оценок</h4>
                      </div>
                      <div className="movies-stats__chart-placeholder">
                        <div className="movies-stats__ratings-distribution">
                          <div className="movies-stats__rating-row">
                            <span className="movies-stats__rating-stars">★★★★★</span>
                            <div className="movies-stats__rating-bar">
                              <div
                                className="movies-stats__rating-fill"
                                style={{ width: '15%' }}
                              ></div>
                            </div>
                            <span className="movies-stats__rating-count">37</span>
                          </div>
                          <div className="movies-stats__rating-row">
                            <span className="movies-stats__rating-stars">★★★★☆</span>
                            <div className="movies-stats__rating-bar">
                              <div
                                className="movies-stats__rating-fill"
                                style={{ width: '25%' }}
                              ></div>
                            </div>
                            <span className="movies-stats__rating-count">61</span>
                          </div>
                          <div className="movies-stats__rating-row">
                            <span className="movies-stats__rating-stars">★★★☆☆</span>
                            <div className="movies-stats__rating-bar">
                              <div
                                className="movies-stats__rating-fill"
                                style={{ width: '30%' }}
                              ></div>
                            </div>
                            <span className="movies-stats__rating-count">74</span>
                          </div>
                          <div className="movies-stats__rating-row">
                            <span className="movies-stats__rating-stars">★★☆☆☆</span>
                            <div className="movies-stats__rating-bar">
                              <div
                                className="movies-stats__rating-fill"
                                style={{ width: '20%' }}
                              ></div>
                            </div>
                            <span className="movies-stats__rating-count">49</span>
                          </div>
                          <div className="movies-stats__rating-row">
                            <span className="movies-stats__rating-stars">★☆☆☆☆</span>
                            <div className="movies-stats__rating-bar">
                              <div
                                className="movies-stats__rating-fill"
                                style={{ width: '10%' }}
                              ></div>
                            </div>
                            <span className="movies-stats__rating-count">24</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="movies-stats__chart-card">
                      <div className="movies-stats__chart-header">
                        <h4 className="movies-stats__chart-title">Чаще всего смотрю</h4>
                      </div>
                      <div className="movies-stats__chart-placeholder">
                        <div className="movies-stats__top-list">
                          <div className="movies-stats__top-item">
                            <div className="movies-stats__top-rank">1</div>
                            <div className="movies-stats__top-info">
                              <div className="movies-stats__top-name">Кристофер Нолан</div>
                              <div className="movies-stats__top-details">
                                12 фильмов • 8.4 средняя
                              </div>
                            </div>
                            <div className="movies-stats__top-count">12</div>
                          </div>
                          <div className="movies-stats__top-item">
                            <div className="movies-stats__top-rank">2</div>
                            <div className="movies-stats__top-info">
                              <div className="movies-stats__top-name">Квентин Тарантино</div>
                              <div className="movies-stats__top-details">
                                9 фильмов • 8.7 средняя
                              </div>
                            </div>
                            <div className="movies-stats__top-count">9</div>
                          </div>
                          <div className="movies-stats__top-item">
                            <div className="movies-stats__top-rank">3</div>
                            <div className="movies-stats__top-info">
                              <div className="movies-stats__top-name">Мартин Скорсезе</div>
                              <div className="movies-stats__top-details">
                                8 фильмов • 8.2 средняя
                              </div>
                            </div>
                            <div className="movies-stats__top-count">8</div>
                          </div>
                          <div className="movies-stats__top-item">
                            <div className="movies-stats__top-rank">4</div>
                            <div className="movies-stats__top-info">
                              <div className="movies-stats__top-name">Дэвид Финчер</div>
                              <div className="movies-stats__top-details">
                                7 фильмов • 8.5 средняя
                              </div>
                            </div>
                            <div className="movies-stats__top-count">7</div>
                          </div>
                          <div className="movies-stats__top-item">
                            <div className="movies-stats__top-rank">5</div>
                            <div className="movies-stats__top-info">
                              <div className="movies-stats__top-name">Хаяо Миядзаки</div>
                              <div className="movies-stats__top-details">
                                6 фильмов • 9.0 средняя
                              </div>
                            </div>
                            <div className="movies-stats__top-count">6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
