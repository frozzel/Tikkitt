import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';


const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  // border-radius: 5px;
  color: #655C56;
  max-width: 311px;
  box-shadow: 1px 1px 1px 2px #a89a8f;
  background: ${({ isDragging }) =>
    isDragging ? 'rgba(255, 59, 59, 0.15)' : 'white'}; 
  background: #FFE1E1;
  margin-top: 15px;
  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #655C56;
  }
 
`;

const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item._id} draggableId={item._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
          <p>{item.tikkitAuthor}</p>
            <p>{item.tikkitText}</p>
            <p>{item.createdAt}</p>
            <div className="secondary-details">
              <p>
                <span>
                  {/* {new Date(item.Due_Date).toLocaleDateString('en-us', {
                    month: 'short',
                    day: '2-digit',
                  })} */}
                </span>
              </p>
            </div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;