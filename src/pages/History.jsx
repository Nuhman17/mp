import React from 'react'

function History() {
  return (
    <>
      <div className='p-5'>
        <h1>Watch History</h1>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Video ID</th>
              <th>Title</th>
              <th>Video URL</th>
              <th>Date And Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ISHQ</td>
              <td>http://www.youtube.com/watch/23pwioewrtsybccb</td>
              <td>29-08-2024</td>
              <td>
                <button className='btn'>
                <i className="fa-solid fa-trash" style={{color: "#d31b0d",}} />
                </button>
                </td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  )
}

export default History
