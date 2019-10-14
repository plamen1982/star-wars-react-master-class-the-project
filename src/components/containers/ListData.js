import React from 'react';

const ListData = ({ data, component: Component }) => {
  return (
    <>
      {data.map(item => (
        <Component data={item} />
      ))}
    </>
  );
};
export default ListData;
