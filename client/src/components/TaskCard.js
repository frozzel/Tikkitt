import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
// import styled from 'styled-components';
import './TaskCard.scss';
import { useMutation } from '@apollo/client';
import { DELETE_TIKKIT } from '../utils/mutations';
import Auth from '../utils/auth';


const TaskCard = ({ item, index }) => {

    const [removeTikkit, { error }] = useMutation(DELETE_TIKKIT);
    
     
    
    
    
    const handleDeleteTikkit= async (projectId) => {
      console.log(projectId)
      console.log(item._id)
      const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token)
      if (!token) {
        return false;
      }
    
      
         await removeTikkit({
          variables: { projectId }
        });
     
    };

  return (
    <Draggable key={item._id} draggableId={item._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="TaskInformation">
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
                <button className="btn btn-sm btn-danger " type="click" onClick={() => handleDeleteTikkit(item._id) }>
                Delete
              </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;