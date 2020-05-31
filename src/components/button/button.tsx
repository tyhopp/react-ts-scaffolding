import React from 'react';
import './button.css';

type Props = {
  text: string
}

function Button(props: Props) {
  return (
    <button className="button">
      <span>{props.text}</span>
    </button>
  );
}

export {
  Button
}
