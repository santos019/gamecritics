import React from "react";
import dragon from "../../images/dragon.jpg";
import "./GameInfo.scss";
import "antd/dist/antd.css";
import { DownloadOutlined } from '@ant-design/icons';

const GameInfo = () => {
  const [purchase, setPurchase] = React.useState(false);

  // 구매버튼 클릭 시
  const PurchaseAlert = () => {
    if (purchase) {
      alert("이미 보유한 게임입니다.");
    } else {
      alert("게임을 구매했습니다.");
      setPurchase(true);
    }
  };

  // 다운로드 버튼 클릭 시
  const DownloadAlert = () => {
    if (purchase) {
      alert("다운로드를 시작합니다.");
    } else {
      alert("게임을 먼저 구매해주세요");
    }
  };

  return (
    <div class="right_ImageDescription">
      <div class="rightImage">
        <img src={dragon} alt="" style={{ width: "300px" }}></img>
      </div>
      <div class="rightDescription">
        {/* title 전달 */}
        <p>
          「몬스터헌터 스토리즈」는 몬스터와 유대관계를 맺고 키워 공존하는
          「라이더」가 되어, 「몬스터헌터」의 세계를 모험할 수 있는 RPG입니다.
          시리즈 제2탄인 본 타이틀에서는 새로운 인연의 이야기가 막을 엽니다.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button value="구매하기" class="buyButton" onClick={PurchaseAlert}>
          <span class="buttonText">구매하기</span>
        </button>
        <button 
        value="다운로드" 
        class="DownloadButton" 
        title="다운로드 시작"
        onClick={DownloadAlert}
        >
          <span class="gameDownload"><DownloadOutlined /></span>
        </button>
        {/* 구매하기 onClick -> setBuy = true -> 다운로드 onClick -> alert("다운시작")  */}
        {/*                     setBuy = flase -> 다운로드 onClick -> alert("게임을 구매하세요")  */}
      </div>
    </div>
  );
};

export default GameInfo;
