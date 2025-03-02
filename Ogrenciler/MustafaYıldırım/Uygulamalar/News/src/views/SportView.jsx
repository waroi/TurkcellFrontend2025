import React from "react";
import { NavLink, Outlet } from "react-router";
import { useOutletContext } from "react-router";

function SportView() {
  const { news } = useOutletContext();

  return (
    <>
      <h2>Başlıca Spor Haberleri</h2>
      <div className="btn-group my-3">
        <NavLink to="/news/sport/sportnews" className="btn btn-outline-primary">
          Spor Haberleri
        </NavLink>
        <NavLink to="/news/sport/leaguage" className="btn btn-outline-success">
          Lig Durumlari
        </NavLink>
      </div>
      <Outlet context={{ news }} />
    </>
  );
}

export default SportView;
