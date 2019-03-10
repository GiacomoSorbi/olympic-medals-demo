import { actionCreatorsFactory, createAction } from './'

const actions = {
  PIPPI: 'PIPPI',
  PIPPI_CAT: 'PIPPI_CAT',
  PIPPI_CAT_FOOD: 'PIPPI_CAT_FOOD',
}
const actionNames = {
  PIPPI: 'pippi',
  PIPPI_CAT: 'pippiCat',
  PIPPI_CAT_FOOD: 'pippiCatFood',
}
const payload = {
  someValue: 'some value',
}

describe('createAction should', () => {
  const action = Object.keys(actions)[0]
  const actionFn = createAction(action)
  it('should create a function', () => {
    expect(typeof actionFn).toBe('function')
  })
  it('should create a function that accepts a payload, returning it together witht the action type', () => {
    expect(actionFn(payload)).toEqual({
      type: action,
      payload,
    })
  })
})

const actionCreator = actionCreatorsFactory(actions)

describe('actionCreator should', () => {
  Object.keys(actions).forEach(action => {
    const actionName = actionNames[action]
    it(`create a ${actionName} base action`, () => {
      expect(actionCreator[actionName](payload)).toEqual({
        type: actions[action],
        payload,
      })
    })
    it(`create a ${actionName}Success action`, () => {
      expect(actionCreator[actionName + 'Success'](payload)).toEqual({
        type: action + '_SUCCESS',
        payload,
      })
    })
    it(`create a ${actionName}Failure action`, () => {
      expect(actionCreator[actionName + 'Failure'](payload)).toEqual({
        type: action + '_FAILURE',
        payload,
      })
    })
  })
})
