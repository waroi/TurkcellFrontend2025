import Image from "next/image";
const Logo = () => {
  return (
    <span className="d-flex align-items-center gap-2">
      {" "}
      <Image src="/logo.svg" width={32} height={32} alt="logo" />
      <h5 className="m-0 d-inline">Rocket</h5>
    </span>
  );
};

export default Logo;
