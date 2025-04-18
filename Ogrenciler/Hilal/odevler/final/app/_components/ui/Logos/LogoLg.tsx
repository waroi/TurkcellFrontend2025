import Image from "next/image";
const LogoLg = () => {
  return (
    <span className="d-flex align-items-center gap-2">
      {" "}
      <Image src="/logo.svg" width={52} height={52} alt="logo" />
      <h4 className="m-0 d-inline">Rocket</h4>
    </span>
  );
};

export default LogoLg;
