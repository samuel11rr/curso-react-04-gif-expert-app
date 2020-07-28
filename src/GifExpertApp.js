import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Bob Esponja']);

  
  return (
    <>
      <h2> GifExpertApp </h2>
      <AddCategory newCategory={ setCategories } />
      <hr />

      <ol>
        { 
          categories.map( category => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}
