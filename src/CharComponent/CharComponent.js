import React from 'react';

import './CharComponent.css';

const charComponent = (props) => {

  let charClass = null;
  charClass = props.letter === ' ' ? 'charEmpty' : 'charFull';

  return (

    <div className={'charComponent ' + charClass}>
      {
        props.letter !== ' '
        ? <span>{props.letter}</span>
        : <span></span>
      }
    </div>
  );
}

export default charComponent;
