import React from 'react'

const Controls = ({ GoodIncrement, NeutralIncrement, BadIncrement }) => (
  <div className="Buttons">
    <button type="button" onClick={GoodIncrement}>
      Good
    </button>
    <button type="button" onClick={NeutralIncrement}>
      Neutral
    </button>
    <button type="button" onClick={BadIncrement}>
      Bad
    </button>
  </div>
);

export default Controls;