import React, { Component } from 'react';
import '../App.css';

const Container = (props)=>{
    return (
      [
        <header id="Header">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo">Welcome To Quiz App</a>
            </div>
            
          </nav>
        </header>,
        <main id="main">
          {props.children}
        </main>,
        <footer id="footer"className="page-footer">
          <div className="footer-copyright">
            <b>© 2018 Copyright HAYFATECH ®️</b>
          </div>
        </footer>
      ]
    );
  }

export default Container;
