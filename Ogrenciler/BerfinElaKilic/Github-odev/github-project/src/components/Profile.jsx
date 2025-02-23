import Image from 'react-bootstrap/Image';
import {  CustomButton } from './atoms/CustomButton';
import { FaLink } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { RiTwitterXFill } from "react-icons/ri";

const Profile = ({ profile }) => {
  console.log(profile)
  return <>
    <Image src={profile.avatar_url} fluid roundedCircle />
    <div className='profile-info mt-4'>
      <h4 className='m-0'>{profile.name}</h4>
      <p className="text-muted">{profile.login}</p>
      <CustomButton >Follow</CustomButton>
      <p className="text-muted mt-3">{profile.bio}</p>

      <div className="followers d-flex gap-2">
        <GoPeople/>
        <p>
          {profile.followers} <span className="text-muted">followers</span>
        </p>
        <p>
          {profile.following} <span className="text-muted">following</span>
        </p>
      </div>

      <div className="social-media d-flex flex-column gap-2">
        {profile.blog && <a href={profile.blog}>
          <FaLink/> {profile.blog}
        </a>}

        {profile.twitter_username &&
          <a href={`x.com/${profile.twitter_username}`}>
            <RiTwitterXFill/> {profile.twitter_username}
          </a>
        }
      </div>
    </div>
  </>;
};

export default Profile;
