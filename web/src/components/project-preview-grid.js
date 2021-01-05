import React from 'react'
import ProjectPreview from './project-preview'

import styles from './project-preview-grid.module.css'

function ProjectPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.edges.map(({ node: card }) => (
            <li key={card.id}>
              <ProjectPreview {...card} />
            </li>
          ))}
      </ul>
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: []
}

export default ProjectPreviewGrid
