import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";

import * as styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function ProjectPreview(props) {
  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <div>
        {props.mainImage && props.mainImage.asset && (
          <img className="thumbnail"
            src={imageUrlFor(buildImageObj(props.mainImage))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3 hidden className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div hidden className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  );
}

export default ProjectPreview;
