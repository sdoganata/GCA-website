import React from 'react'
import dynnet from '../../assets/dynnet.gif'
import Project from './Project'

const About = () => {
  
  const summary = <p>Cellular automata is a dynamic model that evolves in discrete time steps based on the state and transition rules. Therefore, the basis of the CA model is a well fit for the simulation of the network evolution history in cancer.</p>
  const article_link = "https://sdoganata.github.io/help/";
  const github_link = "https://github.com/netlab-ku/Graph-based_Cellular_Automata/tree/main";
  return (
    <div>
      <div className='page-div'>
        <Project image={dynnet} title="Graph Cellular Automata" summary={summary} article_link={article_link} github_link={github_link}/>
      </div>
    </div>
      
  )
}

export default About