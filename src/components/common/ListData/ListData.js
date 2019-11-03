import React from 'react';

const ListData = ({
  data,
  navigateTo,
  styleProperties,
  component: Component,
}) => {
  return (
    <>
      {data.map(item => {
        return (
          <Component
            data={item.node}
            key={item.node.id}
            navigateTo={navigateTo}
            styleProperties={styleProperties}
          />
        );
      })}
    </>
  );
};
export default ListData;
