import {
  LIST_ADD,
  LIST_REMOVE,
  LIST_ADD_DONE,
  LIST_REMOVE_DONE,
  LIST_UPDATE_TODO,
  LIST_DELETE_ALL,
  LIST_EDIT_TODO,
} from '../../constants/ListConstants';

export const addList = (data) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD,
    payload: data
  })
  // save to local storage as listItems
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
};

export const removeList = (id) => async (dispatch, getState) => {
  dispatch({
    type: LIST_REMOVE,
    payload: id
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}

export const addDone = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD_DONE,
    payload: {
      name: name,
      complete: true
    }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList) || [])
}

export const removeDone = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_REMOVE_DONE,
    payload: {
      name: name,
      complete: false
    }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList) || [])
}
//  add
export const handleEditSubmit = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_UPDATE_TODO,
    payload: {
      name: name,
      complete: false
    }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}
export const deleteAll = (name) =>async (dispatch, getState)=>{
  dispatch ({
      type: LIST_DELETE_ALL,
      payload: {
        name: name,
      complete: false
      }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}

export const handleUpdateEditSubmit = (data) => async (dispatch, getState)=>{
  
  dispatch ({
      type: LIST_EDIT_TODO,
      payload: data
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}
// export const addText = value => ({
//   type: ADD_TEXT,
//   payload: value,
// })