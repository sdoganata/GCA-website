import React from 'react'

const Project = ({image, title, summary, article_link, github_link}) => {
  return (
    <div className='div-project'>
        <div className='div-project-image'>
          <img className='project-image' src={image} alt="project image" />
        </div>
        <div className='div-project-info'>
          <a href={article_link} className='project-title'>{title}</a>
          <p className='project-summary'>{summary}</p>
          <a className='project-github-link' href={github_link}>Github</a>
        </div>
    </div>
  )
}

export default Project