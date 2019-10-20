import React from 'react';

const ListData = ({ data, component: Component, direction }) => {
  return (
    <>
      {data.map(item => {
        return <Component data={item.node} direction={direction} />;
      })}
    </>
  );
};
export default ListData;