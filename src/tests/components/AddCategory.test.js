import React from 'react'
import '@testing-library/jest-dom'
const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach( () => {
    jest.clearAllMocks();

    wrapper = shallow( <AddCategory newCategory={ setCategories } /> );
  });


  test('Debe mostrarse correctamente ', () => {
    expect( wrapper ).toMatchSnapshot();
  });


  test('Debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } });

    expect( wrapper.find('p').text().trim() ).toBe( value );
  });


  test('No debe postear informacion', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).not.toHaveBeenCalled();
  });


  test('Debe llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'Hola Mundo';
    
    // 1. simular imputChange
    wrapper.find('input').simulate('change', { target: { value } });

    // 2. simular submit
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    // 3. setCategories debe ser llamado
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

    // 4. el valor del input debe ser ''
    expect( wrapper.find('input').prop('value') ).toBe('');
  });
  
  
});