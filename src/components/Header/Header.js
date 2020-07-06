import React from "react";
import { Divider } from "semantic-ui-react";
import "./header.css";
const Header = () => {
  return (
    <div className="headerP" as="h3" dividing>
      <Divider horizontal inverted className="divider">
        The Menu Website
      </Divider>
    </div>
  );
};
export default Header;
