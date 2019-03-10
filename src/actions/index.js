import * as constants from './constants'

export const createAction = actionType => payload => ({
  type: actionType,
  payload,
})

export const actionCreatorsFactory = actions =>
  Object.keys(actions).reduce((acc, action) => {
    const actionName = action
      .toLowerCase()
      .replace(/_([a-z])([a-z]+)/g, (_, g1, g2) => `${g1.toUpperCase()}${g2}`)
    acc[actionName] = createAction(actions[action])
    acc[actionName + 'Success'] = createAction(actions[action] + '_SUCCESS')
    acc[actionName + 'Failure'] = createAction(actions[action] + '_FAILURE')
    return acc
  }, {})

export default actionCreatorsFactory(constants)
