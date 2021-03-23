import React from 'react';

const validationComponent = (props) => {

  return (
    <div>
    {
      props.textLength > 4
      ? (
          <div>
            <p>Text long enough.</p>
            <div className="charComponentsList">
              {props.charComponentsList}
            </div>
          </div>
        )
      : <p>Text too short.</p>
    }
    </div>
  );
}

export default validationComponent;
