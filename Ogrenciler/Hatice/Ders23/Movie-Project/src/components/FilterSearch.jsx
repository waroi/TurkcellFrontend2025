import React from 'react'

const filtersearch = ({}) => {
  return (
    <>
    <div class="container mt-4">
        <div class="row mb-4">
            <div class="col-md-4">
                <input type="text" class="form-control" id="searchInput" placeholder="Oyun ara...">
            </div>
            <div class="col-md-3">
                <select class="form-select" id="categoryFilter">
                    <option value="">Tüm Kategoriler</option>
                </select>
            </div>
            <div class="col-md-3">
                <select class="form-select" id="sortSelect">
                    <option value="nameAsc">A-Z</option>
                    <option value="nameDesc">Z-A</option>
                    <option value="dateDesc">En Yeni</option>
                    <option value="dateAsc">En Eski</option>
                </select>
            </div>
        </div>

        <div class="row" id="gamesList"></div>
    </div>
    </>
  );
};

export default filtersearch;