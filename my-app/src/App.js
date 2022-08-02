import React from 'react';
import './App.css';
import someData from './news.json';
import TitleMain from './components/title';
import Photos from './components/photos';
import Links from './components/link';
import Categories from './components/categories';
import IsSpecial from './components/isSpecial';

function App() {
  console.log(someData);
  return (
    <div className ='news__main'>
      {someData.map((item) => <div className ='news__main-cards'>
        <TitleMain  title={item.title} titleClass='news__main-title'/>
        <TitleMain  title={item.content} titleClass='news__main-content'/>
        <TitleMain  title={item.dateCreated} titleClass='news__main-date'/>
        <Photos photo={item.photo} />
        <Links links={item.link}/>
        <Categories categories={item.categories} />
        <IsSpecial special={item.isSpecial} />
      </div>)}
    </div>
  );
}
export default App;