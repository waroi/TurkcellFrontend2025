import { lazy, useState } from "react";
import PersonForm from "../PersonForm";
const PersonCard = lazy(() => import("../PersonCard"));
const PageControl = lazy(() => import("../PageControl"));
import { fetchPersons, IMG_URL } from "../../service/api";
import Header from "../../components/Header";

export default function Person() {
  const [personData, setPersonData] = useState([]);

  const [personQuery, setPersonQuery] = useState("");

  const [currentPersonPage, setCurrentPersonPage] = useState(1);
  const [personPages, setPersonPages] = useState(1);

  const handlePersonSubmit = async (e) => {
    e.preventDefault();
    const { results, totalPages } = await fetchPersons(personQuery, 1);
    setPersonData(results);
    setPersonPages(totalPages);
    setCurrentPersonPage(1);
  };

  const handlePersonPageChange = async (newPage) => {
    if (newPage >= 1 && newPage <= personPages) {
      setCurrentPersonPage(newPage);
      const { results } = await fetchPersons(personQuery, newPage);
      setPersonData(results);
    }
  };
  return (
    <>
      <PersonForm
        handlePersonSubmit={handlePersonSubmit}
        setPersonQuery={setPersonQuery}
      />
      <Header text={"Oyuncular"} />

      {personData?.map((person) => (
        <PersonCard key={person.id} personData={person} imgURL={IMG_URL} />
      ))}
      {personPages > 1 && (
        <PageControl
          currentPage={currentPersonPage}
          totalPages={personPages}
          handlePageChange={handlePersonPageChange}
        />
      )}
    </>
  );
}
