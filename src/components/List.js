import React from 'react';
import EntityItem from './Item';

export default function EntityList({ entities }) {
  return (
    <div className='entities-container'>
      {entities.map((entity) => (
        <EntityItem entity={entity}></EntityItem>
      ))}
    </div>
  );
}
