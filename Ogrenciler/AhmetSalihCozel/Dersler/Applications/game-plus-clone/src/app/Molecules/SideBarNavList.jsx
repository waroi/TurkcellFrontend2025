import React from 'react';
import Typography from "../Atoms/Typography";
import BootIcon from "../Atoms/BootIcon";

function SideBarNavList() {
  const listItems = [
    { innerText: "Ana Sayfa", btIcon: "house" },
    { innerText: "GAME+ Blog", btIcon: "grid" },
    { innerText: "Kampanyalar", btIcon: "star" },
    { innerText: "Destek", btIcon: "lightning-charge" },
  ];

  return (
    <ul className="list-none flex flex-col gap-5 p-0 my-8 ms-8">
      {listItems.map((listItem, index) => {
        return (
          <li
            key={index}
            className="flex items-center cursor-pointer text-zinc-500 hover:text-zinc-300 group"
          >
            <BootIcon
              iconName={listItem.btIcon}
              size={20}
              className="me-3 group-hover:text-zinc-300"
            />
            <Typography
              variant="p"
              className="text-zinc-500 group-hover:text-zinc-300"
            >
              {listItem.innerText}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
}

export default SideBarNavList;
