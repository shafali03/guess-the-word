import React from 'react';

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulation You guessed the word!
        </span>
      </div>
    );
  }
  return <div data-test="component-congrats" />;
};

export default Congrats;
