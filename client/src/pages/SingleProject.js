import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPollH} from '@fortawesome/free-solid-svg-icons';
// import TikkitList from '../components/TikkitList';
import TikkitForm from '../components/TikkitForm';


import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from '../components/TaskCard';
import  { useState } from 'react';

import { QUERY_SINGLE_PROJECT } from '../utils/queries';
import './SingleProject.scss';




const SingleProject = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    // pass URL parameter
    variables: { projectId: projectId },
  });

  const project = data?.project || {};
    const tikkits =project.tikkits
   const testData2 = {
    [uuidv4()]: {
      title: 'To-do',
      items: tikkits,
      
    },
    
    [uuidv4()]: {
      title: 'In Progress',
      items: [],
    },
    [uuidv4()]: {
      title: 'Review',
      items: [],
    },
    [uuidv4()]: {
      title: 'Done',
      items: [],
    },
    
  };

  console.log(testData2);
  console.log(project);
  console.log(tikkits);
 ;



  const Dnd = () => {
    const [columns, setColumns] = useState(testData2);
  
    const onDragEnd = (result, columns, setColumns) => {
      if (!result.destination) return;
      const { source, destination } = result;
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        });
      } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems,
          },
        });
      }
    };
    return (
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="Container">
          <div className="TaskColumnStyles">
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided, snapshot) => (
                    <div className="TaskList"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <div className="Title">{column.title}</div>
                      {column.items.map((item, index) => (
                        <TaskCard key={item} item={item} index={index} />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              );
            })}
          </div>
        </div>
      </DragDropContext>
    );
  };
  



  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="m-3">
      <div className='flex-row Sp1 p-2' style={{backgroundColor: "#FFE1E1"}}>
        <div className='col-1 Icon'><FontAwesomeIcon icon={faPollH} color="#655C56" size='5x' /></div>
        <div className='col-8'>
      <h3 className="m-2    " style={{color: '#655C56', backgroundColor: "#FFE1E1"}}>
        {project.projectAuthor} <br />
        {project.projectName}<br />
        <span style={{ fontSize: '1rem' }}>
           {project.createdAt}
        </span>
      </h3>

      </div>
      <div className='Form col-3'><TikkitForm projectId={project._id} /></div>

      </div>
      {/* <h3 className="card-header1  p-2 m-0  " style={{color: '#655C56'}}>
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'bold',
            border: '2px solid #655C56',
            lineHeight: '1.5',
          }}
        >
          {project.projectText}
        </blockquote>
      </h3> */}
      {/* <div className="" style={{ border: '1px solid #655C56', backgroundColor: "#EFFCEF" }}>
        <TikkitForm projectId={project._id} />
        
      </div> */}
      <div className="">
        {/* <TikkitList tikkits={project.tikkits} /> */}
        <Dnd />
      </div>
     
    </div>
  );
};

export default SingleProject;
