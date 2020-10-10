import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ newCategory }) => {
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue( event.target.value );
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    
    if ( inputValue.trim().length > 2 ) {
      newCategory( categories => [inputValue, ...categories] );
      setInputValue('');
    }
  }


  return (
    <form onSubmit={ handleSubmit } >

      <p> { inputValue } </p>
      
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}


AddCategory.propTypes = {
  newCategory: PropTypes.func.isRequired
}