import Image from "next/image";
import clsx from "clsx";

type AvatarProps = {
  imgUrl?: string;
  size?: number; 
  className?: string;
};

const Avatar = ({ imgUrl, size = 30, className }: AvatarProps) => {
  return (
    <span
      className={clsx("d-inline-flex justify-content-center align-items-center rounded-circle overflow-hidden", className)}
      style={{ width: size, height: size }}
    >
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt="profile-img"
          width={size}
          height={size}
          className="w-100 h-100 object-fit-cover"
        />
      ) : (
        <span className="rounded-circle bg-secondary2" style={{ width: size, height: size }} />
      )}
    </span>
  );
};

export default Avatar;
