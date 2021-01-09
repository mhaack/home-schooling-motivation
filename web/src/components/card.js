import React from "react";
import Image from "gatsby-image";

function Card(props) {
  return (
    <div className="p-2">
      <h2 className="mt-4 text-center text-2xl font-bold">{props.title}</h2>
        {props.image && props.image.asset && (
                <div className="mt-2 mb-8">
          <Image className="max-h-96" fluid={props.image.asset.fluid} alt={props.image.alt} />
          </div>
        )}
      <p className="text-center text-xl">
        {props.text.split('\n').map((item, key) => {
          return <span key={key}>{item}<br/></span>
        })}
      </p>
    </div>
  );
}

export default Card;