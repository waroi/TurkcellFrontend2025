import { useEffect, useState } from "react";
import { getFilteredWings, getWings } from "../../services/Api";
import Card from "../Card";

const CardList = ({ filters }) => {
  const [wings, setWings] = useState([]);
  const fetchFilteredWings = async () => {
    try {
      const fetch = await getFilteredWings(filters);
      setWings(fetch);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFilteredWings();
  }, [filters]);
  useEffect(() => {
    const fetchWings = async () => {
      try {
        const fetch = await getWings();
        setWings(fetch);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWings();
  }, []);

  return (
    <>
      <div className="container py-5">
        <h2 className="text-info fw-semibold">Ürünler</h2>
        <div className="row m-0">
          {wings.length === 0 ? (
            <p>Ürün bulunamadı veya yükleniyor...</p>
          ) : (
            <div className="container">
              <div className="row">
                {wings.map((wing) => (
                  <div
                    className="col-sm-6 col-md-4 col-lg-3 my-2 px-2"
                    key={wing.id}
                  >
                    <Card wing={wing} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardList;
