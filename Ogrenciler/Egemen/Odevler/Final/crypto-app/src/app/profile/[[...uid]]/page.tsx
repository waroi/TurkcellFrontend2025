"use client";
import React from "react";
import { useParams } from "next/navigation";
import UserProfile from "../../pages/userProfile/components/organisms/userprofile/UserProfile";
import Breadcrumb from "@/app/pages/registerRockie/components/organism/breadcrumb/Breadcrumb";

const Profile = () => {
  const params = useParams();
  const uid = Array.isArray(params.uid) ? params.uid[0] : params.uid;

  return (
    <>
      <Breadcrumb header={"User Profile"} />
      <UserProfile uid={uid ?? ""} />
    </>
  );
};

export default Profile;
