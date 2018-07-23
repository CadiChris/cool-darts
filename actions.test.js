import { voleeChiffree, voleeSurDouble } from "./actions";

it("crée une volée sur rang chiffré", () => {
  expect(voleeChiffree("J1", 15, 2)).toEqual({
    type: "VOLEE",
    payload: {
      lanceur: "J1",
      rang: 15,
      touches: [{ chiffre: 15, nombre: 2 }]
    }
  });
});

it("crée une volée sur rang double", () => {
  expect(voleeSurDouble("J1", [{ chiffre: 15, nombre: 2 }])).toEqual({
    type: "VOLEE",
    payload: {
      lanceur: "J1",
      rang: "DOUBLE",
      touches: [{ chiffre: 15, nombre: 2 }]
    }
  });
});
