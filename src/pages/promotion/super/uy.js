import React from "react";
import SummerSaleBanner from "./hci/SummerSaleBanner";
import NewFriendDiscount from "./hci/NewFriendDiscount";
import "./uy.css";

function uy() {
  return (
    <div className="test-page">
        <SummerSaleBanner />
        <NewFriendDiscount />
    </div>
  );
}

export default uy;