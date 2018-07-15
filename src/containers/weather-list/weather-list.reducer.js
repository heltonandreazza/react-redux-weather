import { FETCH_WEATHER } from '../../helpers/constants'

export default function(state = [], action) {
  console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      //P.S.: never manipulate the state directly because 
      //return state.concat([action.payload.data]); //get the existing state array and concat with the new cities array and create a new one insted change a existing state
      return [action.payload.data, ...state] // es6 state.concat
  }

  return state;
}