import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

export default function FilterAndSearch({filter, setFilter}) {
    return (
        <div className='d-flex justify-content-between my-2'>
             <MyInput
               placeholder="Search..."
               value={filter.query}
               onChange={e => setFilter({...filter, query:e.target.value})}
               className='form-control'
             />
            <MySelect
               value={filter.sort}
               onChange={selected => setFilter({...filter, sort: selected})}
               defaultValue='Sorted by'
               options={[
                  {value: 'title', name: 'Programming'},
                  {value: 'body', name: 'Body'} 
               ]}
            />
          </div>
    )
}
