import Image from "react-bootstrap/Image";
import { CustomButton } from "./atoms/CustomButton";
import { FaLink } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { RiTwitterXFill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";

const Profile = ({ profile }) => {
  return (
    <>
      <div className="row">
        <div className="col-2 col-md-12 text-center">
          {" "}
          <Image
            src={profile.avatar_url}
            fluid
            roundedCircle
            className="profile-image w-100"
          />
        </div>
        <div className="col-10 col-md-12 d-flex justify-content-center flex-column">
          <h4 className="m-0">{profile.name}</h4>
          <h5 className="text-secondary">{profile.login}</h5>
        </div>
      </div>
      <div className="profile-info my-4">
        <CustomButton>Follow</CustomButton>
        <p className="text-secondary mt-3">{profile.bio}</p>

        <div className="followers flex-wrap d-flex gap-2 mb-4 text-sm">
          <a
            target="_blank"
            href={profile.followers_url}
            className="text-decoration-none d-flex fs-6 align-items-center"
          >
            <GoPeople className="me-2 text-secondary" />
            <span className="text-white text-sm">{profile.followers}</span>
            <span className="ms-1 text-secondary text-sm">followers</span>
          </a>
          <a
            href="#"
            className="text-decoration-none d-flex fs-6 align-items-center"
          >
            <span className="text-white text-sm"> · {profile.following}</span>
            <span className="text-secondary ms-1 text-sm">following</span>
          </a>
        </div>

        <div className="social-media d-flex flex-column gap-2 text-sm">
          {profile.company && (
            <p className="mb-0">
              <GoOrganization className="text-secondary" /> {profile.company}
            </p>
          )}
          {profile.location && (
            <p className="mb-0">
              <CiLocationOn className="text-secondary" /> {profile.location}
            </p>
          )}
          {profile.blog && (
            <a href={profile.blog}>
              <FaLink className="text-secondary" /> {profile.blog}
            </a>
          )}
          {profile.twitter_username && (
            <a href={`x.com/${profile.twitter_username}`}>
              <RiTwitterXFill className="text-secondary" />{" "}
              {profile.twitter_username}
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
