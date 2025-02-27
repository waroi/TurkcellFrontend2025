export default function ProductCard({ player }) {
  return (
    <div className='player-card-item col-md-6 col-xxl-4'>
      <div className='card card-item h-100'>
        <div className='row g-0 align-items-center'>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <a
              className='text-decoration-none position-relative'
              href='jottAAA.html'
            >
              <img className='img-fluid' src={player.playerImg} alt={player} />
            </a>
          </div>
          <div className='col-lg-6'>
            <div className='card-body'>
              <h5 className='card-title fw-bold d-flex justify-content-between'>
                <a className='text-decoration-none' href='jottAAA.html'>
                  {player.playerName}
                </a>
                <span className='new-badge badge rounded-pill text-bg-primary'>
                  YENİ
                </span>
              </h5>
              <p className='card-subtitle'>Prof. CS:2 Oyuncusu</p>
              <ul className='list-unstyled'>
                <li className='name'>
                  <strong>İsim:</strong> {player.realName}
                </li>
                <li className='age'>
                  <strong>Yaş:</strong> {player.age}
                </li>
                <li className='country tr'>
                  <strong>Ülke:</strong> {player.country}
                </li>
                <li className='ef'>
                  <strong>Takım:</strong> {player.team}
                </li>
                <li className='role'>
                  <strong>Rol:</strong> {player.role}
                </li>
              </ul>
              <button href='#' className='btn btn-primary w-100 text-nowrap'>
                Mesaj Gönder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
