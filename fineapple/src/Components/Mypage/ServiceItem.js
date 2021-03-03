import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = () => {
  return (
    <li className="service_list_item">
      <Link to="/Post/id" className="service_list_item_link">
        <p>2021-02-24 : 미용기술 전수해드립니다.</p>
      </Link>
    </li>
  );
};

export default ServiceItem;
