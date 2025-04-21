import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="bg-white dark-black py-5">
        <div className="container pt-4">
          <Image src="/footer.png" alt="Footer" width={1410} height={244} />
        </div>
      </div>
      <div className="bg-tertiary dark-black py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="small m-0">Copyright © 2023 Free For Earth’s people</p>
          <Image
            src="/footer-social.png"
            alt="Footer"
            width={144}
            height={16}
          />
        </div>
      </div>
    </footer>
  );
}
