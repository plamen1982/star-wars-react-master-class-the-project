import React from 'react';

const ListData = ({ data, component: Component, direction }) => {
  debugger;
  return (
    <>
      {data.map(item => {
        return (
          <Component
            data={item.node}
            direction={direction}
            key={item.node.episodeId || item.node.id}
          />
        );
      })}
    </>
  );
};
export default ListData;
