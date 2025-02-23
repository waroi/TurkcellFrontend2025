import { useEffect, useRef, useState } from 'react';
import Portal from './Portal';
import './index.css';

export default function UserCard({ userData }) {
  const [portalTarget, setPortalTarget] = useState(document.body);
  const bosDivRef = useRef();

  useEffect(() => {
    setPortalTarget(document.querySelector('.portalDiv'));
    console.log(portalTarget);
  }, []);

  const handleClick = () => {
    const protalDiv = document.querySelector('.portalDiv');
    const bosDiv = document.querySelector('.bosDiv');
    if(portalTarget.classList[0] === 'bosDiv'){
      bosDiv.style.opacity = "0"
      protalDiv.style.opacity = "0"
      setTimeout(()=>{
        protalDiv.style.opacity = "1"
        setPortalTarget(protalDiv)
      },1000)
    }else{
      bosDiv.style.opacity = "0"
      protalDiv.style.opacity = "0"
      setTimeout(()=>{
        bosDiv.style.opacity = "1"
        setPortalTarget(bosDiv)
      },1000)
    }

  };

  return (
    <div id='cardWrapper' className=''>
      <div className=' d-flex flex-column p-3 justify-content-center align-items-center'>
        <img className='rounded-circle' src={userData.avatar_url} alt='' />
        <h4>{userData.name}</h4>
        <p className='text-secondary'>{userData.login}</p>
      </div>
      <div className='border border-1 my-3'></div>
      <div className='portalDiv d-flex flex-column justify-content-evenly align-items-center p-3 w-100 cursor-pointer'>
        <button className='btn btn-outline-primary' onClick={handleClick}>Hop Burdayım!</button>
        <Portal userData={userData} target={portalTarget} />
      </div>
      <div className='border border-1 my-3'></div>
      <div  className='bosDiv d-flex flex-column justify-content-evenly align-items-center p-3 w-100 cursor-pointer' ref={bosDivRef}>
      <button className='btn btn-outline-primary' onClick={handleClick}>Hop Burdayım!</button>
      </div>
    </div>
  );
}
