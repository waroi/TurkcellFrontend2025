import { useEffect } from "react";

import { getApplications } from "@/services/firebase";
import useStore from "@/store/useStore";

import AllApplicationCard from "#/atoms/AllApplicationCard";

export default function Applications() {
  const { allApplications, setAllApplications } = useStore();

  useEffect(() => {
    getApplications().then(setAllApplications);
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-3 g-5">
        {allApplications.map((application) => (
          <AllApplicationCard key={application.id} application={application} />
        ))}
      </div>
    </div>
  );
}
