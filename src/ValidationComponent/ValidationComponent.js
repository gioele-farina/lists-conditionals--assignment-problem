import React from 'react';

const validationComponent = (props) => {

  return (
    <div>
    {
      props.textLength > 4
      ? <p>Text long enough.</p>
      : <p>Text too short.</p>
    }
    </div>
  );
}

export default validationComponent;
