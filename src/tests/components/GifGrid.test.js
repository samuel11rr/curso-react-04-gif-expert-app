import React from 'react'
import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';
const { shallow } = require("enzyme");
const { GifGrid } = require("../../components/GifGrid");
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el <GifGrid />', () => {
  const category = 'One punch';

  test('Debe mostrarse correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow( <GifGrid category={ category } /> );
    expect( wrapper ).toMatchSnapshot();
  });
  

  test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/prueba.png',
      title: 'Pruebas'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow( <GifGrid category={ category } /> );
    
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
  });
  
});
