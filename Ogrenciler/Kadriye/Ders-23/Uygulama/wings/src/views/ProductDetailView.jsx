import DetailCard from "../components/DetailCard";
import DetailContent from "../components/DetailContent";
import ProductAdvice from "../components/ProductAdvice";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getWing, getWings } from "../services/Api";

const ProductDetailView = () => {
  const { id } = useParams();
  const [wing, setWing] = useState();
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

    const fetchWing = async () => {
      try {
        const fetch = await getWing(id);
        setWing(fetch);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWing();
    fetchWings();
  }, [id]); // Bu dizinin içinde id'yi bağımlılık olarak eklemelisiniz

  return (
    <>
      <DetailCard wing={wing} />
      <DetailContent />
      <ProductAdvice wings={wings} />
    </>
  );
};

export default ProductDetailView;
