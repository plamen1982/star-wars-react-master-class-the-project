import React from 'react';

const ListData = ({
  data,
  navigateTo,
  styleProperties,
  component: Component,
}) => {
  return (
    <>
      {data
        ? data.map(item => {
            return (
              <Component
                data={item.node}
                key={item.node.id}
                navigateTo={navigateTo}
                styleProperties={styleProperties}
              />
            );
          })
        : null}
    </>
  );
};
export default ListData;
