import React from 'react';
import { Button } from '../button/button';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>I'm a footer</p>
      <Button text="Click here!"></Button>
    </footer>
  );
}

export {
  Footer
}
