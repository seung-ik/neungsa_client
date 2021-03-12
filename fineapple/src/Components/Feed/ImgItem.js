import React from "react";
import green from "./adImg/green.png";
import book from "./adImg/book.png";
import bakery from "./adImg/bakery.png";
import barbershop from "./adImg/barbershop.png";

const ImgItem = () => {
  return (
    <div className="advertise_list">
      <img src={bakery} alt="" />
      <img src={barbershop} alt="" />
      <img src={green} alt="" />
      <img src={book} alt="" />
      <img src="https://www.ezenac.co.kr/images/intro/ci_k_img01.jpg" alt="" />
      <img src={bakery} alt="" />
      <img src={barbershop} alt="" />
      <img src={green} alt="" />
      <img src={book} alt="" />
      <img src="https://www.ezenac.co.kr/images/intro/ci_k_img01.jpg" alt="" />
    </div>
  );
};

export default ImgItem;
