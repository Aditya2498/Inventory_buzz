import React, { useEffect, useState } from "react";
import BoxCard from "@/components/BoxCard/BoxCard.jsx";
import { TempData } from "../../components/Data.js";

const ShootPage = ({ query }) => {
  const [shootData, setshootData] = useState(null);
  const [track, settrack] = useState(false);

  const getDataObj =  () => {
    const dataObj = TempData.filter((data) => {
      return data.link === query.shoots;
    });
    return dataObj;
  };

  useEffect(() => {
    const shootArr = getDataObj();
    setshootData(shootArr);
  }, []);

  return (
    <>
          <div className="shoot_title">
            <h2>{shootData && shootData[0].shoot_name}</h2>
          </div>
          <div className="container box_card_container">
            {shootData && shootData[0].assets.map((asset, i) => (
              <BoxCard key={i} asset={asset} />
            ))}
          </div> 
    </>
  );
};
export const getServerSideProps = async (context) => {
  const { query } = context;
  return {
    props: { query },
  };
};
export default ShootPage;
