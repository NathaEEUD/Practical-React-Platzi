import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);
  console.log('initialState::::', initialState);

  return (
    <div className="app">
      <Header />
      <Search />
      {initialState.estado && (initialState.myList !== undefined && initialState.myList.length > 0) &&
        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      }

      <Categories title="Tendencias">
        <Carousel>
          {initialState.estado && (initialState.trends.map(item =>
            <CarouselItem key={item.id} {...item}/>
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {initialState.estado && (initialState.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  )
};

export default App;