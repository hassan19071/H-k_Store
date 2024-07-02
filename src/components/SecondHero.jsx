import React from "react";
import { Link, useParams } from "react-router-dom";

const SecondHero = () => {
  let {type} = useParams();
  return (
    <div className="second-hero">
      <nav aria-label="breadcrumb" style={{background:"#eee",padding:"60px 20px"}}>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item mb-0">
            <Link to={"/"} style={{fontWeight:"600",color:"#111"}}>Home</Link>
          </li>
          <li className="breadcrumb-item active mb-0" aria-current="page" style={{textTransform:"capitalize"}}>
            {type}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default SecondHero;
