import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";

type Props = {
  imageUrl?: string;
  size?: number;
  className?: string;
};

const UserAvatar: React.FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div className="rounded-circle p-1">
      {imageUrl ? (
        <Image
          src={imageUrl}
          roundedCircle
          width={size}
          height={size}
          alt="User Avatar"
          className={className}
        />
      ) : (
        <FontAwesomeIcon icon={faUser} className={className} color="gray" />
      )}
    </div>
  );
};

export default UserAvatar;
