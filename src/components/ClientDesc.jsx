import React from 'react'

const ClientDesc = ({options, link}) => {
  return (
      <div>
        <ul className='clientDescWraper'>
            {options.map((item) => (
            <li key={item}>{item}</li>
            ))}
          </ul>
          <button onClick={() => window.open(link, '_blank')}>Visit Website</button>
      </div>

  )
}

export default ClientDesc
