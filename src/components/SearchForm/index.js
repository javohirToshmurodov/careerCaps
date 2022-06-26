import React from "react";
import Line from "../../assets/images/line.png";
import Filter from "../../assets/images/filter.png";
export default function SearchForm() {
  return (
    <div className="d-flex justify-content-between align-items-center searchFormBox">
      <div className="searchInputBox d-flex">
        <input
          className="searchInput"
          type="text"
          placeholder="Katalogdan kasbni qidiring"
        />
        <div className="d-flex gap-2 align-items-center ms-auto me-3">
          <img src={Line} alt="" />
          <img src={Filter} alt="" />
          <p className="m-0">Filtr</p>
        </div>
      </div>
      <button className="searchButton">Izlash</button>
    </div>
  );
}
