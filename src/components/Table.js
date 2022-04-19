import React from 'react';

const Table = ({ className, columns, rows, format }) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map(heading => <th>{heading.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(route => {
        return (
            <tr>
              <td>{format("airline", route.airline)}</td>
              <td>{format("src", route.src)}</td> 
              <td>{format("dest", route.dest)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
