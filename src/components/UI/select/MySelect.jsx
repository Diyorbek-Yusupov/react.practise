import React from 'react'

export default function MySelect({options,defaultValue, value, onChange}) {
    return (
        <>
            <select 
                value={value}
                onChange={e => onChange(e.target.value)}
                className='form-select w-50'
            >
              <option disabled  value="">{defaultValue}</option>  
              {options.map(opt => (
                  <option value={opt.value} key={opt.value}>
                      {opt.name}
                  </option>
              ))}
            </select>
        </>
    )
}
