import { useEffect, useState } from "react";
import { getWings } from "../../services/Api";
import Card from "../Card";

const CardList = () => {
  const [wings, setWings] = useState([]);

  useEffect(() => {
    const fetchWings = async () => {
      try {
        const fetch = await getWings();
        setWings(fetch);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      fetchWings();
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {wings.map((wing) => {
            return (
              <div
                className="col-sm-6 col-md-4 col-lg-3 my-2 px-2"
                key={wing.id}
              >
                <Card wing={wing} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardList;
