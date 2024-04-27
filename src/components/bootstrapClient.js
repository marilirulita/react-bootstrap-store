"use client"

import { useEffect } from "react";

function BootstrapClient() {
  useEffect(() => {
    require("/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}

export default BootstrapClient;