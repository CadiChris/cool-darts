import undoable, { undo } from "./undoable";

const reducerDeTest = (state = 0, action) => {
  switch (action.type) {
    case "+":
      return state + 1;
    case "+10":
      return state + 10;
    default:
      return state;
  }
};

const incrementer = () => ({ type: "+" });
const plus10 = () => ({ type: "+10" });

describe("reducerDeTest", () => {
  it("a 0 comme state initial", () => {
    expect(reducerDeTest(undefined, {})).toEqual(0);
  });
  it("incrémente", () => {
    expect(reducerDeTest(undefined, incrementer())).toEqual(1);
  });
});

const reducerAvecUndo = () => undoable(reducerDeTest);

describe("undoable", () => {
  describe("la structure", () => {
    it("wrap le résultat du reducer dans une structure avec actuel & precedent", () => {
      expect(reducerAvecUndo()(undefined, {})).toEqual({
        actuel: 0,
        precedents: []
      });
    });

    it("alimente actuel et precedent sur une action", () => {
      expect(reducerAvecUndo()(undefined, incrementer())).toEqual({
        actuel: 1,
        precedents: [0]
      });
    });
  });

  describe("le undo", () => {
    it("permet le undo", () => {
      const retourA2 = executer([
        incrementer(),
        incrementer(),
        incrementer(),
        undo()
      ]);

      expect(retourA2).toEqual({
        actuel: 2,
        precedents: [0, 1]
      });
    });

    it("ne fait rien s'il n'y a rien à undo", () => {
      const apresPleinDeUndoInutiles = executer([
        incrementer(),
        undo(),
        undo(),
        undo()
      ]);

      expect(apresPleinDeUndoInutiles).toEqual({
        actuel: 0,
        precedents: []
      });
    });
  });

  describe("le vidage des précédents", () => {
    it("vide les précédents lorsqu'une action de vidage arrive", () => {
      const reducerQuiVideSurPlus10 = () =>
        undoable(reducerDeTest, [plus10().type]);

      const incrementsPuisVidage = [
        incrementer(),
        incrementer(),
        plus10()
      ].reduce(
        reducerQuiVideSurPlus10(),
        reducerQuiVideSurPlus10()(undefined, {})
      );

      const precedentsVides = [];
      expect(incrementsPuisVidage).toEqual({
        actuel: 12,
        precedents: precedentsVides
      });
    });
  });
});

const executer = actions =>
  actions.reduce((state, action) => {
    const nextState = reducerAvecUndo()(state, action);
    return nextState;
  }, reducerAvecUndo()(undefined, {}));
