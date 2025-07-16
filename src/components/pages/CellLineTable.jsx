import React, { useEffect, useState } from "react";

const CellLineTable = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/cell_line_networks.json`) // Updated path
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
    <div className="page-div">
    
      <h2 className="table-title">Cell-Line Networks</h2>
      <table className="browse-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index} className="text-center">
              <td>{file}</td>
              <td>
                <a
                  href={`../src/assets/cell_line_networks/${file}`}
                  download
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default CellLineTable;
