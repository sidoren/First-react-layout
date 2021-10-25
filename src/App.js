import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'; 
import airplane from './airplane.png'
import auto from './slider-img.png'
import train from './train.png'


const Card =({link, img, title, description}) =>
<>
<a href = {link} >
    <div class = "card_wrapper">
            <img class = "card_img" src = {img} alt=""/>
            <h3 class="card_heading">{title}</h3>
            <span class="card_text">
            {description}
            </span>
    </div>
</a>
</>

function App() {
  return (
<>
<header class = "header">
  <Card link ="https://www.aviasales.ua/" img = {airplane} title = "hello" description = 'azaaadsa' />
  <Card link ="https://www.aviasales.ua/" img = {auto} title = "hello" description = 'azaaadsa' />
  <Card link ="https://www.aviasales.ua/" img = 'train.png' title = "hello" description = 'azaaadsa' />
</header>
</>
)
};

export default App;
