import React, { useState } from "react";

const OperationBar = ({ onSearch, onCategorySelect, categories }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <section className="operation-bar bg-secondary pt-4" id="op-bar">
      <div className="px-5">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4">
            <input
              type="text"
              className="rounded-pill p-3 w-100 bg-light border-0"
              placeholder="Aramak istediğiniz kelimeyi giriniz."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="col-lg-8 mb-4 d-flex flex-wrap justify-content-end gap-2">
            <button
              className="btn btn-outline-light rounded-pill"
              onClick={() => onCategorySelect("")}
            >
              Tümü
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="btn btn-outline-light text-nowrap rounded-pill"
                onClick={() => onCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationBar;
