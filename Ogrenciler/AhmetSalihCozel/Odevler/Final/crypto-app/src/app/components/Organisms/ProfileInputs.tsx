import React from 'react';


const ProfileInputs: React.FC<{selection:string}> = ({ selection }) => {
  return (
    <div>{selection}</div>
  );
}

export default ProfileInputs;
