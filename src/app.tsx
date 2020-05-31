import React from 'react';
import { Header } from './components/header/header';
import { Counter } from './components/counter/counter';
import { Aside } from './components/aside/aside';
import { Footer } from './components/footer/footer';
import './app.css';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main className="app-content">
        <section className="app-content-main">
          <div className="app-content-aside--left">
            <Aside></Aside>
            <Aside></Aside>
          </div>
          <div className="app-content-counter">
            <Counter></Counter>
          </div>
        </section>
        <div className="app-content-aside--right">
          <Aside></Aside>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export {
  App
}
