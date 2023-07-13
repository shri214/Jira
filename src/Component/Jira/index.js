import React, { useState, useCallback } from 'react';
import ContainerData from '../ContainerData';
import FormDialog from '../Modal';

const Jira = () => {
  const [containers, setContainers] = useState({
    containers1: [],
    containers2: [],
    containers3: [],
  });
  const [open, setOpen] = useState(false);
  const handleClickOpenEvent = () => {
    setOpen(true);
  };
  const handleCloses = () => {
    setOpen(false);
  };
  const handelClickOpen = useCallback(handleClickOpenEvent, [open]);
  const handleClose = useCallback(handleCloses, [open]);
  console.log(containers);
  return (
    <div className="container">
      <button className="add-details" onClick={handelClickOpen}>
        Add Details
      </button>
      <FormDialog
        open={open}
        handleClose={handleClose}
        containers={containers}
        setContainers={setContainers}
      />
      <div className="data-container">
        <ContainerData
          ID={'container1'}
          heading={'Not Started'}
          data={containers.containers1}
        />
        <ContainerData
          ID={'container2'}
          heading={'In Progress'}
          data={containers.containers2}
        />
        <ContainerData
          ID={'container3'}
          heading={'Completed'}
          data={containers.containers3}
        />
      </div>
    </div>
  );
};
export default Jira;
