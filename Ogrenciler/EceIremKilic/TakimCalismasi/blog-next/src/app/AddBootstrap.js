"use client";
//kaynak: https://www.geeksforgeeks.org/how-to-use-bootstrap-with-nextjs/

import { useEffect } from "react";

export default function AddBootstrap() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <></>;
}
