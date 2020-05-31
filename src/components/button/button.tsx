import React from 'react';
import './button.css';

type ButtonProps = {
  text: string
}

function Button(props: ButtonProps) {
  return (
    <button className="button">
      <span>{props.text}</span>
    </button>
  );
}

export {
  Button
}
