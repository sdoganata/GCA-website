import React, { useState, useEffect } from 'react';

const BrowseTable = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/cell_line_drug.json`) // Fetch JSON file
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setFiles(data))
      .catch((err) => console.error("Error fetching files:", err));
  }, []);

  return (
    <div className='page-div'>
      <h2 className="table-title">Cell-Line/Drug Pair Iterations</h2>
      <table className='browse-table'>
        <thead>
          <tr>
            <th>Cell-line</th>
            <th>Drug</th>
            <th>Iterations</th>
            <th>Network</th>
          </tr>
        </thead>
        <tbody>
          {files.length > 0 ? (
            files.map((val, key) => (
              <tr key={key}>
                <td>{val.cell}</td>
                <td>{val.drug}</td>
                <td><a href={val.zipfile} download>Download ZIP</a></td>
                <td>
                  {val.anim ? <img src={process.env.PUBLIC_URL + val.anim} alt="Dynamic Network" width="80%" /> : "No animation"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseTable;
