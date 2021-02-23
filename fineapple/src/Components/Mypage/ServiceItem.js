import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = () => {
  return (
    <li className="service_list_item">
      <Link to="/Post/id">
        <h3>미용기술 전수해드립니다.</h3>
      </Link>
      <p>
        20년 전통 미용기술 영업시간 이후에 단돈 5000원에 기술전수 해드립니다.
      </p>
    </li>
  );
};

export default ServiceItem;
