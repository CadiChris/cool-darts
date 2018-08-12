const undoable = (reducer, typesActionQuiVident = []) => {
  const STATE_INITIAL = {
    actuel: reducer(undefined, {}),
    precedents: []
  };

  return function(state = STATE_INITIAL, action) {
    const { actuel, precedents } = state;

    switch (action.type) {
      case UNDO:
        const rienAUndo = precedents.length === 0;
        if (rienAUndo) return state;

        return {
          actuel: precedents[precedents.length - 1],
          precedents: precedents.slice(0, precedents.length - 1)
        };

      default:
        const remplacant = reducer(actuel, action);
        const actionSansEffet = actuel === remplacant;
        if (actionSansEffet) return state;

        const doitVider = typesActionQuiVident.includes(action.type);

        return {
          actuel: remplacant,
          precedents: doitVider ? [] : [...precedents, actuel]
        };
    }
  };
};

const UNDO = "UNDO";
const undo = () => ({ type: UNDO });

export default undoable;
export { undo };
