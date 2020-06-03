import React from 'react';
import './aside.css';

type Props = {
  bg: string
}

function Aside(props: Props) {
  return (
    <aside className="aside" data-bg={props.bg}>
      <p className="aside-title">I'm an aside</p>
    </aside>
  );
}

export {
  Aside
}
