import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ feedData }) => {
  return (
    <li className="service_list_item">
      <Link to={`/feed/${feedData.id}`} className="service_list_item_link">
        <p>
          {feedData.created_at.slice(0, 10)}  {feedData.title}
        </p>
      </Link>
    </li>
  );
};

export default ServiceItem;
