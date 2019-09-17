import React from 'react';
import '../assets/styles/App.scss';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Search from '../components/Search';

const App = () => (
  <div className="app">
    <Header />
    <Search />
    <Categories>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
  </div>
);

export default App;