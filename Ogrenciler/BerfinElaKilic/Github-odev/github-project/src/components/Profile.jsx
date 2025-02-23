import Image from 'react-bootstrap/Image';
import { Button } from './atoms/Button';

const Profile = ({ profile }) => {
  console.log(profile)
  return <>
    <Image src={profile.avatar_url} fluid roundedCircle />
    <div className='profile-info mt-4'>
      <h4 className='m-0'>{profile.name}</h4>
      <p className="text-muted">{profile.login}</p>
      <Button className='w-100 py-1 text-white'>Follow</Button>
      <p className="text-muted mt-3">{profile.bio}</p>

      <div className="followers d-flex gap-2">
        <p>
          {profile.followers} <span className="text-muted">followers</span>
        </p>
        <p>
          {profile.following} <span className="text-muted">following</span>
        </p>
      </div>

      <div className="social-media">
        {profile.blog && <a href={profile.blog}>
          {profile.blog}
        </a>}

        {profile.twitter_username &&
          <a href={`x.com/${profile.twitter_username}`}>
            {profile.twitter_username}
          </a>
        }
      </div>
    </div>
  </>;
};

export default Profile;
