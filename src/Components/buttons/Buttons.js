import React from 'react'

const Controls = ({ clickButton, options }) => (
  <div>
    {options.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => {
          clickButton(option);
        }}>
        {option}
      </button>
    ))}
  </div>
);

export default Controls;