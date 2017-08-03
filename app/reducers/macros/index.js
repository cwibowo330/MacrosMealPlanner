import { cloneDeep } from 'lodash';
import macrosData from '../../data/macros.json';

const initialState = macrosData;

export default function macros(state = initialState, action) {
  const copy = cloneDeep(state);

  console.log('REDUCERINITIALSTATE', copy);

  console.log('action', action);
  /*
    action = {
      type: 'USER_LOADED',
      payload: {
        userId: 1,
        email: '',
        name: '',
        count: 0,
      }
    }
  */
  if (action.type === 'MACROS_LOADED') {
    return action.payload;
  }

  /*
    action = {
      type: 'USER_UPDATED',
      payload: {
        userId: 1,
        attributes: {
          email: 'new@email.com',
          count: 1,
        }
      }
    }
  */
  // if (action.type === 'USER_UPDATED') {
  //   copy[action.payload.userId] = merge(
  //     copy[action.payload.userId],
  //     action.payload.attributes,
  //   );
  // }

  return copy;
}
