import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
// import styled from 'styled-components';
import './TaskCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';


const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item._id} draggableId={item._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="TaskInformation">
          <p><FontAwesomeIcon icon={faUserFriends} color="#655C56" size='1x' /><span> </span>{item.tikkitAuthor}</p>
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
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;