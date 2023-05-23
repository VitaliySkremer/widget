import React from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import App from './App.jsx'
import { StyleSheetManager } from 'styled-components'

class createWidget{
  constructor(id) {

    this.id = id;

    this.host = document.getElementById('root');
    this.shadow = this.host.attachShadow({ mode: 'open' });
    this.styleSlot = document.createElement('section');

    this.shadow.appendChild(this.styleSlot)

    this.renderIn = document.createElement('div');
    this.styleSlot.appendChild(this.renderIn);
    this.root = createRoot(this.renderIn);
  }

  open(){
    console.log('#widget OPEN')
    this.root.render(
      <StyleSheetManager target={this.styleSlot}>
        <App app={this} id={this.id}/>
      </StyleSheetManager>
    )
  }
  close(){
    console.log('#widget CLOSE')
    this.styleSlot.querySelector('style')?.remove();
    this.root.render(<></>)
  }
}

window.createWidget = createWidget;