import CarouselComponent from "../components/Carousel";
import CardList from "../components/CardList";
import Filter from "../components/Filter";
import { useState } from "react";
const HomeView = () => {
  const [filters, setFilters] = useState({});
  return (
    <>
      <CarouselComponent />
      <div className="row w-100">
        <div className="col-md-3 order-md-2 ">
          <Filter setFilters={setFilters} />
        </div>
        <div className="col-md-9 order-md-1 ">
          <CardList filters={filters} />
        </div>
      </div>
    </>
  );
};

export default HomeView;
