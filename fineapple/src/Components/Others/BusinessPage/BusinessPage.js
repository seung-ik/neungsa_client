import React from "react";
import "./BusinessPage.css";
import Footer from "../../Footer/Footer";
import pine from "./pine.png";

const Business = () => {
  return (
    <div>
      <div className="businesspage_container">
        <div className="business_view_box">
          <div className="business_marketor_header">
            <img src={pine} alt="" />
            <div>파인애플의 비지니스</div>
          </div>
          <div className="business_marketor_content">
            <p>
              “파인애플의 비즈니스모델은 지역 기반 광고입니다. 카카오, 네이버 등
              포털은 온라인 전체를 광고 대상으로 삼지만 동네 주민을 타깃으로 한
              광고는 파인애플과 당근마켓에서만 할 수 있습니다.”
            </p>
            <br />
            <p>
              “불특정 다수를 겨냥하는 광고가 아닌 우리동네 사람에게 노출되는
              광고를 지향합니다."
            </p>
            <br />
            <p>
              "단편적인 로고 광고가 아닌 소개할수 있는 페이지로 전환해드립니다."
            </p>
            <br />
            <p>
              “파인애플은 동네 커뮤니티 서비스를 넘어서 온라인중심 생활을
              오프라인으로 가져와 생동감 있는 동네를 만드는 활동을 지향합니다. ”
            </p>
            <br />
            <p>
              파인애플의 목표는 개인의 가치를 극대화 하고 다양한 경험을 할수있는
              지역 커뮤니티를 만드는 데 있습니다. 실제 이용하는 서비스에 중개로
              벌어들이는 수익은 0원으로 동네와 연관성이 있으며 같은 지향점을
              가진 비지니스를 통한 광고제안만을 받아들입니다.
            </p>
            <div className="marketor_email">
              <div>광고문의 : fineaple2021@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Business;
