import Sidebar from '../components/Sidebar';

export default function HomeView() {
  return (
    <div>
      <h2>Latest News</h2>
      <div className='row mt-3'>
        <div className='col-md-3'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
