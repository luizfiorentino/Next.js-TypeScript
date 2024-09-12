import React from "react";
import { getPizzaDetail } from "../console";

export default function index() {
  console.log("FROM JS PAGE", getPizzaDetail("hawaiian"));
  return (
    <div>
      <h1>JS page</h1>
    </div>
  );
}
