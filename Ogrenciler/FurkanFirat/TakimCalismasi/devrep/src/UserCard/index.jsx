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
    portalTarget.classList[0] === 'bosDiv'
      ? setPortalTarget(document.querySelector('.portalDiv'))
      : setPortalTarget(document.querySelector('.bosDiv'));
  };

  return (
    <div id='cardWrapper' className=''>
      <div className=' d-flex flex-column p-3 justify-content-center align-items-center'>
        <img className='rounded-circle' src={userData.avatar_url} alt='' />
        <h4>{userData.name}</h4>
        <p className='text-secondary'>{userData.login}</p>
      </div>
      <div className='border border-1 my-3'></div>
      <div className='portalDiv cursor-pointer' onClick={handleClick}>
        <Portal userData={userData} target={portalTarget} />
      </div>
      <div className='border border-1 my-3'></div>
      <div onClick={handleClick} className='bosDiv' ref={bosDivRef}></div>
    </div>
  );
}
