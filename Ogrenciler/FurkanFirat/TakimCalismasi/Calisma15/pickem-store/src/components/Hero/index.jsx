import { NavLink } from 'react-router';

export default function Hero() {
  return (
    <header className='hero mt-15'>
      <div className='container'>
        <div className='header-inner row align-items-center justify-content-evenly'>
          <div className='header-info col-md-4'>
            <h1 className='fw-bold fs-48 mb-7'>
              YENİ GELEN OYUNCULARA <br /> GÖZ ATIN!
            </h1>
            <p className='fs-20 mb-6'>
              Yeni gelen oyuncularla kendi takımınızı oluşturun. Detaylar
              oyuncular sayfasında.
            </p>
            <NavLink
              to='/oyuncular'
              className='btn btn-secondary text-white mb-6 fs-20'
            >
              GÖZ AT
            </NavLink>
          </div>
          <div className='header-carousel col-md-5'>
            <div
              id='playerCarousel'
              className='carousel slide'
              data-bs-ride='carousel'
              data-bs-interval='3000'
              data-bs-pause='false'
            >
              <div className='carousel-indicators'>
                <button
                  type='button'
                  data-bs-target='#playerCarousel'
                  data-bs-slide-to='0'
                  className='active rounded-circle'
                  aria-current='true'
                  aria-label='Slide 1'
                ></button>
                <button
                  type='button'
                  data-bs-target='#playerCarousel'
                  data-bs-slide-to='1'
                  aria-label='Slide 2'
                  className='rounded-circle'
                ></button>
                <button
                  type='button'
                  data-bs-target='#playerCarousel'
                  data-bs-slide-to='2'
                  aria-label='Slide 3'
                  className='rounded-circle'
                ></button>
                <button
                  type='button'
                  data-bs-target='#playerCarousel'
                  data-bs-slide-to='3'
                  aria-label='Slide 4'
                  className='rounded-circle'
                ></button>
                <button
                  type='button'
                  data-bs-target='#playerCarousel'
                  data-bs-slide-to='4'
                  aria-label='Slide 5'
                  className='rounded-circle'
                ></button>
              </div>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img
                    src='https://img-cdn.hltv.org/playerbodyshot/zdj4FmASFChD1cChR79TsJ.png?ixlib=java-2.1.0&w=400&s=d90d409432c76b4afaeb35876d802bb3'
                    className='d-block w-100'
                    alt='jottAAA'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='https://img-cdn.hltv.org/playerbodyshot/nnPbCYR8DQQ72C7ibLvahL.png?ixlib=java-2.1.0&w=400&s=00b38017f63176d180291489d0e6ebd1'
                    className='d-block w-100'
                    alt='MAJ3R'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='https://img-cdn.hltv.org/playerbodyshot/_V9cxyb8lJMrdQul0uIEPv.png?ixlib=java-2.1.0&w=400&s=ce24ded87116afd5bf199996bdabe0fa'
                    className='d-block w-100'
                    alt='XANTARES'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='https://img-cdn.hltv.org/playerbodyshot/fF7RSP0vxh6g0SHPVHolsa.png?ixlib=java-2.1.0&w=400&s=efc0d478b8a3e8468aad23b0e77a7eec'
                    className='d-block w-100'
                    alt='woxic'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='https://img-cdn.hltv.org/playerbodyshot/w1S5T63TognCAa7PdQ7Ok7.png?ixlib=java-2.1.0&w=400&s=1346731c3dfb3cc3802302f4fd9e5f9e'
                    className='d-block w-100'
                    alt='Wicadia '
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
