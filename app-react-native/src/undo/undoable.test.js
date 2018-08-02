import undoable from "./undoable";

const reducerDeTest = (state = 0, action) => {
  switch (action.type) {
    case "+":
      return state + 1;
    default:
      return state;
  }
};

const INCREMENT = { type: "+" };

describe("reducerDeTest", () => {
  it("a 0 comme state initial", () => {
    expect(reducerDeTest(undefined, {})).toEqual(0);
  });
  it("incrémente", () => {
    expect(reducerDeTest(undefined, INCREMENT)).toEqual(1);
  });
});

const reducerAvecUndo = () => undoable(reducerDeTest);

describe("undoable", () => {
  it("wrap le résultat du reducer dans une structure avec actuel & precedent", () => {
    expect(reducerAvecUndo()(undefined, {})).toEqual({
      actuel: 0,
      precedents: []
    });
  });

  it("alimente actuel et precedent sur une action", () => {
    expect(reducerAvecUndo()(undefined, INCREMENT)).toEqual({
      actuel: 1,
      precedents: [0]
    });
  });

  it("permet le undo", () => {
    const retourA2 = executer([
      INCREMENT,
      INCREMENT,
      INCREMENT,
      { type: "UNDO" }
    ]);

    expect(retourA2).toEqual({
      actuel: 2,
      precedents: [0, 1]
    });
  });
});

const executer = actions =>
  actions.reduce((state, action) => {
    const nextState = reducerAvecUndo()(state, action);
    return nextState;
  }, reducerAvecUndo()(undefined, {}));
