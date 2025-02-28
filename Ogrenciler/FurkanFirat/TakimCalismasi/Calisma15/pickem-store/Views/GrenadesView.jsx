import Header from '../src/components/Header';

export default function GrenadesView() {
  return (
    <>
      <main className='main-section vh-100 py-20'>
        <section className='grenades position-relative overflow-hidden'>
          <Header text={'BOMBALAR'} />

          <div className='container-fluid  d-flex justify-content-center align-items-center'>
            <img
              src='https://developer.valvesoftware.com/w/images/thumb/1/15/Flashbang_csgo.png/120px-Flashbang_csgo.png'
              alt='flashbang'
            />
          </div>
        </section>
      </main>
    </>
  );
}
