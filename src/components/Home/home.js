import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, List } from "semantic-ui-react";

import ListDisplay from "../List/ListDisplay";
import Header from "../Header/Header";
import "./home.css";
const Home = () => {
  return (
    <div className="display">
      <Header />
      <ListDisplay />
    </div>
  );
};

export default Home;
