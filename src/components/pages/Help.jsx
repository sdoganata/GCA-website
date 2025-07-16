import React from 'react'
import statnet from '../../assets/statnet.jpeg'

const Help = () => {
  return (
    <div>
    <div className='page-div'>
      <p className='help-title'>MODEL ILLUSTRATION</p>
      <img className='page-image' src={statnet}/>
      <div className='help-txt'>
        <p>
        Cellular automata is a dynamic model that evolves in discrete time steps based on the state and transition rules. Therefore, the basis of the CA model is a well fit for the simulation of the network evolution history in cancer. In this study, we implemented a variation of the CA model - graph CA (GCA). In the GCA variation, instead of a uniform neighborhood, the node neighbors are inferred from a reference graph, G(V, E, w) where V is the node-set, E is the edge set and w is the edge weights. Given a graph G(V, E, w) and a set of perturbed nodes, vi  V has an activity state qit at time t and its state at t+1 depends on the activity states of neighbors Ni ⊆ V and the state of the neighbors qit+1 = f(qi1, qi2, … qik) as shown in Fig.xxA. Each node is influenced by its neighbor nodes. In this simulation, time is discrete and assumed to be t, t+1, … t+n for n generations. More formally, we can write that sit+1 = f [Sit] where Sit is the states of the neighbors of vi at time t, Sit = (sjt| vj  Ni ⊆ V) as shown in Fig.xxB. State and transitions are determined based on the rules explained in the next section. Throughout the simulation, based on the mutation level rules, edges are deactivated across the generations and the graph structure changes discretely. To design the rules in GCA, we utilized the biological knowledge and hallmarks of molecular alterations in cancer.
        <br /><br />Rules in GCA:
        <br />Node activities are initialized from the lineage mean expression values and each node activity synchronously is regressed based on neighboring node activities (expression level rules) - Lineage refers to the type of tissue from which the cancer cell lines are derived; e.g. breast cancer cell lines, lung cancer cell lines, etc.
        <br />After the regressions lead to an equilibrium, mutation rules are applied. Deleterious mutations impact all neighboring interactions, while point mutations affect specific interactions when they occur in interacting residues (mutation level rules).
        <br />Propagation of mutations is constrained by the mutation type, interacting residues of proteins, and interactions characterized by BIOGRID (edge-based rules).
        <br />Mutation effects propagate from the mutated node downstream through pathways or complexes via directed interactions, deactivating edges, meaning the lost edges are excluded from the regression analysis to calculate the updates states (pathway-based rules).
        <br />
        <br />
        </p>
      </div>      
    </div>
    </div>
      
  )
}

export default Help