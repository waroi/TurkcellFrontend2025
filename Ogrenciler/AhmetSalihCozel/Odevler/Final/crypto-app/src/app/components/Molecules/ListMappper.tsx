import React from "react";

interface ListMapperProps {
  listItems?: React.ReactNode[];
  ulClassName?: string;
  liClassName?: string;
}

function ListMapper({ listItems = [], ulClassName = "", liClassName = "" }:ListMapperProps) {
  return (
    <ul className={ulClassName}>
      {listItems.map((item, index) => (
        <li key={index} className={liClassName}>
          {item}
        </li>
      ))}
    </ul>
  );
}


export default ListMapper;
