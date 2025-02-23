import Image from 'react-bootstrap/Image';
import { CustomButton } from './atoms/CustomButton';
import { FaLink } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { RiTwitterXFill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";

const Profile = ({ profile }) => {
  return <>
    <Image src={profile.avatar_url} fluid roundedCircle />
    <div className='profile-info mt-4'>
      <h4 className='m-0'>{profile.name}</h4>
      <p className="text-secondary">{profile.login}</p>
      <CustomButton >Follow</CustomButton>
      <p className="text-secondary mt-3">{profile.bio}</p>

      <div className="followers d-flex gap-2 mb-4">
        <a target='_blank' href={profile.followers_url} className='text-decoration-none d-flex fs-6 align-items-center'>
          <GoPeople className='me-2 text-secondary' />
          <span className='text-white'>{profile.followers}</span>
          <span className="ms-1 text-secondary">followers</span>
        </a>
        <a href='#' className='text-decoration-none d-flex fs-6 align-items-center'>
          <span className='text-white'> · {profile.following}</span>
          <span className="text-secondary ms-1">following</span>
        </a>
      </div>

      <div className="social-media d-flex flex-column gap-2">
        {profile.company && <p className='mb-0'>
          <GoOrganization /> {profile.company}
        </p>}
        {profile.location && <p className='mb-0'>
          <CiLocationOn /> {profile.location}
        </p>}
        {profile.blog && <a href={profile.blog}>
          <FaLink /> {profile.blog}
        </a>}
        {profile.twitter_username &&
          <a href={`x.com/${profile.twitter_username}`}>
            <RiTwitterXFill /> {profile.twitter_username}
          </a>
        }
      </div>
    </div>
  </>;
};

export default Profile;
