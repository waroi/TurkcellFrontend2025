export default function BookCard() {
  return (
    <div className='bookCard  '>
      <div className='object-fit-cover'>
        <img
          src='https://img.kitapyurdu.com/v1/getImage/fn:12016505/wh:true/wi:220'
          alt=''
        />
      </div>
      <p>İnternette Güvende Kalma Rehberi</p>
      <p>
        <span className='text-secondary text-decoration-line-through'>
          150₺
        </span>
        <span> 99₺</span>
      </p>
    </div>
  );
}
