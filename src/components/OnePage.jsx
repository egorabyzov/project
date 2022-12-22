import React from 'react';

export default function OnePage({inititative}) {
  return (
    <>
      <h3>Описание задач:</h3>
      <div>{inititative.title}</div>
    </>
  );
}
