import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/ui-components/Navbar';
import Footer from './components/ui-components/Footer';
import Home from './components/pages/Home';
import BrowseTable from './components/pages/BrowseTable';
import Help from './components/pages/Help';
import CellLineTable from './components/pages/CellLineTable';
import PDXTable from './components/pages/PDXTable';
import DrugTable from './components/pages/DrugTable';
import TableLinks from './components/pages/TableLinks';

const App = () => {
    return (
        <div className='container'>
            <Navbar/>
            <Routes>
                <Route path="/GCA/" element={<Home/>} />
                <Route path="/GCA/browsetable/" element={<BrowseTable/>} />
                <Route path="/GCA/celllinetable/" element={<CellLineTable/>} />
                <Route path="/GCA/pdxtable/" element={<PDXTable/>} />
                <Route path="/GCA/drugtable/" element={<DrugTable/>} />
                <Route path="/GCA/tablebrowser/" element={<TableLinks/>} />
                <Route path="/GCA/help/" element={<Help/>} />
                <Route path="/" element={<Navigate to="/GCA/"/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default App