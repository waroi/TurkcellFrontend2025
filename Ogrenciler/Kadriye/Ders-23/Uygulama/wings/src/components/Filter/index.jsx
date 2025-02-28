import React, { useState } from "react";

const Filter = ({ setFilters }) => {
  const [color, setColor] = useState("Tümü");
  const [weight, setWeight] = useState(15);
  const [price, setPrice] = useState(100000);
  const [type, setType] = useState("Hepsi");
  function filterApply() {
    setFilters({
      color: color == "Tümü" ? "" : color,
      weight: weight,
      price: price,
      type: type == "Hepsi" ? "" : type,
    });
  }
  function filterClear() {
    setColor("Tümü");
    setWeight("15");
    setPrice("100000");
    setType("Hepsi");
    setFilters({
      color: "",
      weight: 15,
      price: 100000,
      type: "",
    });
  }
  return (
    <aside className="filters row p-2 bg-white rounded justify-content-center my-5 ">
      <h2 className="mb-2 text-info fw-semibold">Filtreler</h2>
      <div className="color-filter my-2">
        <h4 className="mb-2 text-info fw-semibold">Renkler</h4>
        <div className="colors d-flex align-items-center flex-wrap ">
          <div
            onClick={() => {
              setColor("Tümü");
            }}
            className=" form-check color-item badge  text-black rounded-pill me-2 mb-2 ps-4 p-2 "
          >
            <input
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="Tumu"
              defaultChecked={color == "Tümü" ? true : false}
            />
            <label className="form-check-label" htmlFor="Tumu">
              Tümü
            </label>
          </div>
          <div
            onClick={() => {
              setColor("Beyaz");
            }}
            className=" form-check color-item badge text-bg-light rounded-pill me-2 mb-2 ps-4 p-2 "
          >
            <input
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="Beyaz"
            />
            <label className="form-check-label" htmlFor="Beyaz">
              Beyaz
            </label>
          </div>
          <div
            onClick={() => {
              setColor("Kırmızı");
            }}
            className="form-check color-item badge text-bg-danger rounded-pill me-2 mb-2  ps-4  p-2"
          >
            <input
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="Kirmizi"
            />
            <label className="form-check-label" htmlFor="Kirmizi">
              Kırmızı
            </label>
          </div>
          <div
            onClick={() => setColor("Mavi")}
            className="form-check color-item badge text-bg-primary rounded-pill me-2 mb-2  ps-4  p-2"
          >
            <input
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="Mavi"
            />
            <label className="form-check-label" htmlFor="Mavi">
              Mavi
            </label>
          </div>
          <div
            onClick={() => setColor("Yeşil")}
            className="form-check color-item badge text-bg-success rounded-pill me-2 mb-2  ps-4  p-2"
          >
            <input
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="Yesil"
            />
            <label className="form-check-label" htmlFor="Yesil">
              Yeşil
            </label>
          </div>
          <div
            onClick={() => setColor("Siyah")}
            className="form-check color-item badge text-bg-dark rounded-pill me-2 mb-2  ps-4  p-2"
          >
            <input
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="Siyah"
            />
            <label className="form-check-label" htmlFor="Siyah">
              Siyah
            </label>
          </div>
          <div
            onClick={() => setColor("Sarı")}
            className="form-check color-item badge text-bg-warning rounded-pill me-2 mb-2  ps-4  p-2"
          >
            <input
              className="form-check-input"
              type="radio"
              name="colorRadio"
              id="Sari"
            />
            <label className="form-check-label" htmlFor="Sari">
              Sarı
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className="weight-filter my-2">
        <h4 className="mb-2 text-info fw-semibold">Ağırlık</h4>
        <label
          htmlFor="wingWeight"
          className="form-label d-flex justify-content-between fw-medium"
        >
          <span>2 kg</span> <span>15 kg</span>
        </label>
        <input
          onChange={(e) => setWeight(e.target.value)}
          type="range"
          className="form-range"
          id="wingWeight"
          min={2}
          max={15}
          value={weight}
        />
      </div>
      <hr />
      <div className="price-filter my-2">
        <h4 className="mb-2 text-info fw-semibold">Fiyat</h4>
        <label
          htmlFor="wingPrice"
          className="form-label d-flex justify-content-between fw-medium"
        >
          <span>1000 ₺</span> <span>100 000 ₺</span>
        </label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="range"
          className="form-range"
          id="wingPrice"
          min={1000}
          max={100000}
          value={price}
        />
      </div>
      <hr />
      <div className="model-filter my-2">
        <h4 className="mb-2 text-info fw-semibold">Tasarım Modelleri</h4>
        <select
          onChange={(e) => setType(e.target.value)}
          className="form-select fw-medium"
          aria-label="model select filter"
          value={type}
        >
          <option value="Hepsi">Hepsi</option>
          <option value="Melek">Melek</option>
          <option value="Peri">Peri</option>
          <option value="Gece">Gece</option>
          <option value="Ejderha">Ejderha</option>
          <option value="Kelebek">Kelebek</option>
          <option value="Çok Renkli">Çok Renkli</option>
          <option value="Yarasa">Yarasa</option>
          <option value="Çift">Çift Kanat</option>
          <option value="Neon">Neon</option>
        </select>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-secondary w-100 my-2"
          onClick={filterApply}
        >
          Uygula
        </button>
        <button
          type="button"
          className="btn btn-danger text-white w-100 my-2"
          onClick={filterClear}
        >
          Temizle
        </button>
      </div>
    </aside>
  );
};

export default Filter;
