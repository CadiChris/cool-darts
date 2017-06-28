import undoable from './undoable'

const reducerDeTest = (state = 0, action) => {
  switch (action.type) {
    case '+':
      return state + 1;
    default:
      return state
  }
}

const INCREMENT = {type: '+'}

describe('reducerDeTest', () => {
  it('a 0 comme state initial', () => {
    expect(reducerDeTest(undefined, {})).toEqual(0)
  })
  it('incrémente', () => {
    expect(reducerDeTest(undefined, INCREMENT)).toEqual(1)
  })
})

let reducerAvecUndo = () => undoable(reducerDeTest)

describe('undoable', () => {

  it('wrap le résultat du reducer dans une structure avec actuel & precedent', () => {
    expect(reducerAvecUndo()(undefined, {})).toEqual({
      actuel: 0,
      precedents: []
    })
  })

  it('alimente actuel et precedent sur une action', () => {
    expect(reducerAvecUndo()(undefined, INCREMENT)).toEqual({
      actuel: 1,
      precedents:[0]
    })
  })

  it('permet le undo', () => {
    let reducer = reducerAvecUndo()
    let compteurAZero = reducer(undefined, {})
    let compteurA1 = reducer(compteurAZero, INCREMENT)
    let compteurA2 = reducer(compteurA1, INCREMENT)
    let retourA1 = reducer(compteurA2, {type:'UNDO'})
    expect(retourA1).toEqual({
      actuel: 1,
      precedents: [0]
    })
  })
})