import { Link } from "gatsby";
import React from "react";
import ProjectPreview from "./project-preview";

import * as styles from "./project-preview-grid.module.css";

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <ul className={styles.single}>
        {props.single &&
          props.single.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      <div className={styles.container}>
        <ul className={styles.innercontainer}>
          {props.left &&
            props.left.map(node => (
              <li key={node.id}>
                <ProjectPreview {...node} />
              </li>
            ))}
        </ul>
        <ul className={styles.innercontainer}>
          {props.right &&
            props.right.map(node => (
              <li key={node.id}>
                <ProjectPreview {...node} />
              </li>
            ))}
        </ul>
      </div>
      
      {/* <ul className={styles.container}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul> */}
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
  left: [],
  right: []
};

export default ProjectPreviewGrid;
