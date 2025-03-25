import React, { useEffect } from "react";
import useStore from "../store/useStore";
import { Pane, Tab } from "../components/Tabs";
import { getForms } from "../services/firebase";
import MyApplications from "../components/MyApplications";
import UserInfo from "../components/inputs/UserInfo";

export default function User() {
  const { user, userApplications, setUserApplications } = useStore();

  useEffect(() => {
    getForms().then((applications) => {
      const filtered = applications.filter((app) => app.email === user?.email);
      setUserApplications(filtered);
      console.log(filtered);
    });
  }, [user]);

  return (
    <div className="container mt-5">
      <Tab>
        <Pane id="personal-info" tab="Kişisel Bilgiler">
          <UserInfo user={user} />
        </Pane>
        <Pane id="preferences" tab="Başvurularım">
          <MyApplications applications={userApplications} />
        </Pane>
      </Tab>
    </div>
  );
}
