import React from 'react';

// tName: val, priority: pri, status, date: d
const ContainerData = React.memo(({ ID, heading, data }) => {
  console.log('container data', data);
  return (
    <div className="container-box" id={ID}>
      <h1 className="h-primary">{heading}</h1>
      {data.map((val) => (
        <div className="storedData">
          <p>{val.tName}</p>
          <p className={val.priority}>{val.priority}</p>
          <p>{val.date}</p>
          <p>{val.status}</p>
        </div>
      ))}
    </div>
  );
});
export default ContainerData;
