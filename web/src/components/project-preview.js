import React from "react";
import Image from "gatsby-image";

import styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function ProjectPreview(props) {
  return (
    <div className={styles.root}>
      <div className={styles.leadMediaThumb}>
        {props.image && props.image.asset && (
          <Image fluid={props.image.asset.fluid} alt={props.text} />
        )}
      </div>
      <h3 className={styles.title}>{props.text}</h3>
    </div>
  );
}

export default ProjectPreview;
