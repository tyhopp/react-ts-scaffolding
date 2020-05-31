import React from 'react';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Aside } from './components/aside/aside';
import { Footer } from './components/footer/footer';
import './app.css';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main>
        <Main></Main>
        <section>
          <Aside></Aside>
          <Aside></Aside>
        </section>
        <Aside></Aside>
      </main>
      <Footer></Footer>
    </div>
  );
}

export {
  App
}
