import React from 'react'
import { Link } from 'react-router-dom';

const TableLinks = () => {
  return (
    <div className='page-div'>
        <Link to='/GCA/browsetable' className='hero-link'>Cell-Line/Drug Pair Table</Link>
        <Link to='/GCA/celllinetable' className='hero-link'>Cell-Line Table</Link>
        <Link to='/GCA/drugtable' className='hero-link'>Drug Table</Link>
        <Link to='/GCA/pdxtable' className='hero-link'>PDX Table</Link>
    </div>
  )
}

export default TableLinks