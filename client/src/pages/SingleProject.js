import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import TikkitList from '../components/TikkitList';
import TikkitForm from '../components/TikkitForm';


import styled from 'styled-components';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from '../components/TaskCard';
import  { useState } from 'react';

import { QUERY_SINGLE_PROJECT } from '../utils/queries';





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
console.log(testData2)
  const Container = styled.div`
  display: flex;
`;

const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #94D3AC;
  min-width: 341px;
  // border-radius: 5px;
  padding: 15px 15px;
  margin-right: 45px;
  box-shadow: 1px 1px 1px 2px gray;
`;

const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
`;

const Title = styled.span`
  color: #655C56;
  background: #EFFCEF;
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
  
`;

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
        <Container>
          <TaskColumnStyles>
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided, snapshot) => (
                    <TaskList
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <Title>{column.title}</Title>
                      {column.items.map((item, index) => (
                        <TaskCard key={item} item={item} index={index} />
                      ))}
                      {provided.placeholder}
                    </TaskList>
                  )}
                </Droppable>
              );
            })}
          </TaskColumnStyles>
        </Container>
      </DragDropContext>
    );
  };
  



  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="m-3 p-4">
      <h3 className="card-header1  p-2 m-0  " style={{color: '#655C56'}}>
        {project.projectAuthor} <br />
        {project.projectName}<br />
        <span style={{ fontSize: '1rem' }}>
           {project.createdAt}
        </span>
      </h3>
      <h3 className="card-header1  p-2 m-0  " style={{color: '#655C56'}}>
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
      </h3>
      <div className="m-3 p-4" style={{ border: '1px solid #655C56', backgroundColor: "#EFFCEF" }}>
        <TikkitForm projectId={project._id} />
        
      </div>
      <div className="my-3">
        {/* <TikkitList tikkits={project.tikkits} /> */}
        <Dnd />
      </div>
     
    </div>
  );
};

export default SingleProject;
