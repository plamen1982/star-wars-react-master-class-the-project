import React from 'react';

const ListData = ({ data, navigateTo, grid, component: Component }) => {
  return (
    <>
      {data.map(item => {
        return (
          <Component
            data={item.node}
            key={item.node.id}
            navigateTo={navigateTo}
            grid={grid}
          />
        );
      })}
    </>
  );
};
export default ListData;
