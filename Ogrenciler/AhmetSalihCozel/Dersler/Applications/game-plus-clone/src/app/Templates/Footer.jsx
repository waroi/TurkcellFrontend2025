import React from "react";
import Typography from "../Atoms/Typography";
import Button from "../Atoms/Button";

const Footer = () => {
  const ubisoftLinks = [
    { title: "Oyunlar", href: "/ubisoft/oyunlar" },
    { title: "Paketler", href: "/ubisoft/paketler" },
    { title: "İndir ve Oyna", href: "/ubisoft/indir-ve-oyna" },
    { title: "Sıkça Sorulan Sorular", href: "/destek#ubisoft" },
  ];

  const geforceLinks = [
    { title: "Oyunlar", href: "/gfn/oyunlar" },
    { title: "Paketler", href: "/gfn/paketler" },
    { title: "İndir ve Oyna", href: "/gfn/indir-ve-oyna" },
    { title: "Sıkça Sorulan Sorular", href: "/destek#gfn" },
    { title: "Servis Durumu", href: "https://status.geforcenow.com/", external: true },
  ];

  const renderLinks = (links) =>
    links.map((item, i) => (
      <a
        key={i}
        href={item.href}
        className="text-sm hover:underline"
      >
        {item.title}
      </a>
    ));

  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex gap-20">
          <div className="flex flex-col gap-3">
            <Typography variant="h4">Ubisoft+</Typography>
            <div className="flex flex-col gap-2">{renderLinks(ubisoftLinks)}</div>
          </div>
          <div className="flex flex-col gap-3">
            <Typography variant="h4">GeForce NOW</Typography>
            <div className="flex flex-col gap-2">{renderLinks(geforceLinks)}</div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="border-t border-neutral-700 mt-10 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <div className="flex flex-wrap gap-4">
            <span>Kullanıcı Sözleşmesi</span>
            <span>Aydınlatma Metni</span>
            <span>Çerez Politikası</span>
          </div>
          <a href="/hakkimizda" className="hover:underline">
            Hakkımızda
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
