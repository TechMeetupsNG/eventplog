import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Accordion, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

import Comments from 'js/components/shared/comments'
import TaskMeta from '../task-meta';
import ContentPanel from 'js/components/shared/content-panel'
import { maxMedia } from 'js/styles/mixins'
import AddComment from 'js/components/shared/comments/add-comment'
import Loading from 'js/components/shared/loading'
import ContentEditable from 'js/components/shared/content-editable'
import Button from 'js/components/shared/button'

const StyledTodoItem = styled.div`
  .description {
    margin-bottom: 4rem;
  }
  
  .title {
    margin: 2rem 0 1rem;
    border-bottom: 1px solid;
    
    input {
      padding: 1rem;
    }
  }
  
  .btn-back {
    display: inline-block;
    margin: 1rem 0;
  }
  
  .left-icon-menu {
    float: right;
  
    .btn-delete-task {
      border: none;
      font-size: 2rem;
      color: ${props => props.theme.red};
      opacity: 0.3;
      
      &:hover {
        opacity: 1;
        color: white;
        background: ${props => props.theme.red};
      }
    }
  }
  
  .task-meta {
    margin: 2rem 0 4rem;
    
    ${
      maxMedia.tablet`
        flex-direction: column;
        padding: 0;
      `
    }
    
    .item {
      padding: 1rem;
      box-shadow: none;
      
      &:first-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
      
      &:last-child {
        border-radius: 0.5rem 0 0 0.5rem;
      }
      
      ${
        maxMedia.tablet`
          padding: 0 1rem;
        
          &:first-child {
            padding-top: 1rem;
            border-radius: 0.5rem 0.5rem 0 0;
          }
          
          &:last-child {
            padding: 1rem;
            border-radius: 0 0 0.5rem 0.5rem ;
          }
        `

      }
    }
    
    .child-column {
      display: flex;
      flex-direction: column;
    }
  }
`
const TodoItem = ({
  event_checklist = {},
  todo_item = {},
  loading,
  error,
  event,
  link_back,
  createComment,
  updateComment,
  getComments,
  handleChange,
  handleDelete,
  handleSubmit
}) => {
  const {
    id,
    title,
    description,
    status,
    recipient = {},
    deadline,
    comments = {},
  } = todo_item

  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  const { data = [], meta = {} } = comments
  return (
    <StyledTodoItem className="task">
      <Button.Link className="btn-back" to={link_back}>
        Back
      </Button.Link>
      <div className="left-icon-menu">
        {/*<Button className="btn-delete-task">*/}
          {/*<Icon name='low vision' />*/}
        {/*</Button>*/}
        <Button className="btn-delete-task" onClick={handleDelete}>
          <Icon name='trash alternate' />
        </Button>
      </div>
      <TaskMeta {...{status, recipient, deadline, event,
                              handleChange, handleSubmit, isEditable: true,
                              commentsCount: meta.total_count }} />
      <div className="title">
        <ContentEditable propName="title"
                         type="input"
                         canEdit={true}
                         defaultValue={title}
                         onChange={handleChange}
                         onSubmit={handleSubmit}>
          <h5>{ title }</h5>
        </ContentEditable>
      </div>
      <div className="content">
        <ContentEditable propName="description"
                         type="textarea"
                         canEdit={true}
                         defaultValue={description}
                         onChange={handleChange}
                         onSubmit={handleSubmit}>
          <ReactMarkdown className="description" source={description || 'Click to edit. In markdown, if you wish :)'} />
        </ContentEditable>

        <ContentPanel title="Comments">
          <AddComment placeholder="Share an update with your team"
                      recipient_id={id}
                      recipient_type="TodoItem"
                      trackable_id={id}
                      trackable_type="TodoItem"
                      createComment={createComment} />
          <Comments recipient_id={id}
                    recipient_type="TodoItem"
                    {...{comments, createComment, updateComment, getComments }} />
        </ContentPanel>
      </div>
    </StyledTodoItem>
  )
}

export default TodoItem