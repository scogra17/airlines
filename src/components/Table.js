import React, { useState } from 'react';

const rowsToDispay = (values, startIdx, count) => {
  return values.slice(startIdx, startIdx+count)
}

const Table = ({ className, columns, rows, format, perPage=25 }) => {
  const [startIdx, setStartIdx] = useState(0)

  const handleLoadNextPage = () => {
    if ((startIdx + perPage) < rows.length) {
      setStartIdx(startIdx + perPage)
    }
  }
  
  const handleLoadPreviousPage = () => {
    if ((startIdx - perPage) >= 0) {
      setStartIdx(startIdx - perPage)
    }
  }

  return (
    <div>
      <table className={className}>
        <thead>
          <tr>
            {columns.map(heading => <th key={heading.name}>{heading.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {rowsToDispay(rows, startIdx, perPage).map(route => {
          return (
              <tr key={`${route.airtline}-${route.src}-${route.dest}`}>
                <td>{format("airline", route.airline)}</td>
                <td>{format("src", route.src)}</td> 
                <td>{format("dest", route.dest)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="navigation">
        <p>Showing {startIdx} - {startIdx + perPage} of {rows.length} total routes</p>
        <button onClick={handleLoadPreviousPage}>Previous Page</button>
        <button onClick={handleLoadNextPage}>Next Page</button>
      </div>
    </div>
  )
}

export default Table
