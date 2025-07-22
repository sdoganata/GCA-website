import React from 'react'
import { Link } from 'react-router-dom';

const TableLinks = () => {
  return (
    <div className='page-div'>
      <Link to='/GCA-website/browsetable' className='hero-link'>Cell-Line/Drug Pair Table</Link>
      <Link to='/GCA-website/celllinetable' className='hero-link'>Cell-Line Table</Link>
      <Link to='/GCA-website/drugtable' className='hero-link'>Drug Table</Link>
      <Link to='/GCA-website/pdxtable' className='hero-link'>PDX Table</Link>
    </div>
  )
}

export default TableLinks