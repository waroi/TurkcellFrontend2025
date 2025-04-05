import React from 'react';
import BootIcon from '../Atoms/BootIcon';
import Typography from '../Atoms/Typography';
import Link from 'next/link';

const infoItems = [
  {
    icon: "download",
    title: "Sistem Gereksinimleri",
    description: "GeForce NOW için gerekli minimum sistem gereksinimlerine göz at.",
    linkText: "Ayrıntılı bilgi için",
    link: "/"
  },
  {
    icon: "chat-left-text",
    title: "Sıkça Sorulan Sorular",
    description: "GeForce NOW ile ilgili merak ettiklerine göz at.",
    linkText: "Ayrıntılı bilgi için",
    link: "/"
  },
  {
    icon: "globe2",
    title: "Servis Durumu",
    description: "GAME+ ile GeForce NOW Türkiye sunucularının durumunu takip et.",
    linkText: "Ayrıntılı bilgi için",
    link: "/",
    external: true
  }
];

function Information() {
  return (
    <section className='flex flex-col lg:flex-row justify-evenly xl:flex-row gap-5 p-6 rounded-xl'>
      {infoItems.map((item, index) => (
        <div key={index} className='flex items-center justify-center flex-col gap-3 text-center'>
          <BootIcon iconName={item.icon} className='text-lime-500' size={50} />
          <Typography variant='h3' className='text-white font-bold'>{item.title}</Typography>
          <Typography variant='p' className='text-white opacity-75 font-light text-base'>{item.description}</Typography>
          <Link href={item.link} className='text-lime-500 font-medium flex items-center gap-1'>
            {item.linkText} <BootIcon iconName='arrow-right' size={20} />
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Information;
