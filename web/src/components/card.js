import React from "react";
import Image from "gatsby-image";

function Card(props) {
  return (
    <div className="p-2">
      <div className="mt-2 mb-8">
        {props.image && props.image.asset && (
          <Image className="rounded-xl" fluid={props.image.asset.fluid} alt={props.image.alt} />
        )}
      </div>
      <h3 className="text-center text-2xl font-bold">{props.text}</h3>
    </div>
  );
}

export default Card;
