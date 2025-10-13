import React, { useState } from 'react';
import Styles from './ColourBlock.module.css';
export default function ColourBlock({ color }) {
  const [selected, setSelected] = useState(false);

  return (
    <div 
      className={`${Styles.colourBlock} ${selected ? Styles.selected : ''}`}
      style={{ backgroundColor: color.value }}
      onClick={() => setSelected(!selected)}
      title={color}
    />
  );
}
