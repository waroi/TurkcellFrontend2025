import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router';
import { fetchPlayer } from '../../../service/api';

function ProductDetailCard() {
  const { id } = useParams();

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayer(id);
      console.log(data);
      setPlayer(data);
    };

    getPlayers();
  }, []);
  return (
    <>
      {player && (
        <main className='main-section mt-20'>
          <div>
            <div className='container-fluid container-lg'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <NavLink
                      to='/'
                      className='text-decoration-none text-white-gold'
                    >
                      Anasayfa
                    </NavLink>
                  </li>
                  <li className='breadcrumb-item'>
                    <NavLink
                      to='/oyuncular'
                      className='text-decoration-none text-white-gold'
                    >
                      Oyuncular
                    </NavLink>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    {player.playerName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <section className='player-detail-section'>
            <div className='container-fluid container-lg'>
              <div className='player-detail-card card bg-extra-dark-purple p-4 pt-15 text-white position-relative'>
                <span className='new-badge badge rounded-pill text-bg-primary top-5 position-absolute'>
                  YENİ
                </span>
                <div className='row g-0'>
                  <div className='col-lg-4'>
                    <div className='player-image text-center'>
                      <img
                        src={player.playerImg}
                        alt={player.playerName}
                        className='img-fluid'
                      />
                    </div>
                  </div>

                  <div className='col-lg-8'>
                    <div className='row'>
                      <div className='player-info col-lg-6'>
                        <h2 className='player-name mb-4 fw-bold'>
                          {player.playerName}
                        </h2>
                        <div className='player-details mb-4'>
                          <ul className='list-unstyled'>
                            <li className='mb-2'>
                              <strong>İsim: </strong> {player.playerName}
                            </li>
                            <li className='mb-2'>
                              <strong>Yaş:</strong> {player.age}
                            </li>
                            <li className='mb-2 country'>
                              <strong>Ülke: </strong>
                              {player.country}
                            </li>
                            <li className='mb-2'>
                              <strong>Takım:</strong> {player.team}
                            </li>
                            <li className='mb-2'>
                              <strong>Rol:</strong> {player.role}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className='achievements-section col-lg-6 mb-4'>
                        <h3 className='section-title fw-bold mb-4'>
                          Başarılar
                        </h3>
                        <div className='row g-1'>
                          <div className='achievememt-item bg-light-purple p-2 rounded w-25 text-center'>
                            <div className='achievement-image'>
                              <img
                                className='img-fluid'
                                src='https://www.hltv.org/img/static/faceit/fpl-trophy.png'
                                alt='FPL CSGO EU - June 2023'
                              />
                            </div>
                            <div className='achievement-info'>
                              <small>FPL CSGO EU - June 2023</small>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='player-stats mb-4'>
                        <h3 className='mb-4 fw-bold'>İstatistikler</h3>
                        <div className='row g-3'>
                          <div className='col-12 col-sm-6 col-md-3'>
                            <div className='stat-item border border-light-purple text-center p-3 rounded'>
                              <h4>K/D</h4>
                              <span className='stat-value'>1.15</span>
                            </div>
                          </div>
                          <div className='col-12 col-sm-6 col-md-3'>
                            <div className='stat-item border border-light-purple text-center p-3 rounded'>
                              <h4>HS</h4>
                              <span className='stat-value'>58.2%</span>
                            </div>
                          </div>

                          <div className='col-12 col-sm-6 col-md-3'>
                            <div className='stat-item border border-light-purple text-center p-3 rounded'>
                              <h4>ADR</h4>
                              <span className='stat-value'>87.2</span>
                            </div>
                          </div>
                          <div className='col-12 col-sm-6 col-md-3'>
                            <div className='stat-item border border-light-purple text-center p-3 rounded'>
                              <h4>Rating</h4>
                              <span className='stat-value'>2.1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className='btn btn-secondary text-white w-100'>
                        Mesaj Gönder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default ProductDetailCard;
