const undoable = (reducer) => {

  const STATE_INITIAL = {
    actuel: reducer(undefined, {}),
    precedents: []
  }

  return function (state = STATE_INITIAL, action) {
    const {actuel, precedents} = state

    switch (action.type) {
      case 'UNDO' :
        return {
          actuel: precedents[precedents.length - 1],
          precedents: precedents.slice(0, precedents.length - 1)
        }

      default:
        const remplacant = reducer(actuel, action)

        if (actuel === remplacant)
          return state

        return {
          actuel: remplacant,
          precedents: [...precedents, actuel]
        }
    }
  }
}

export default undoable