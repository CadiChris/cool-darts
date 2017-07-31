import { burma } from "./burma"
import { inscrireJoueur, demarrerPartie, volee } from "./burma.actions"

it("retourne le state initial", () => {
  expect(burma(undefined, {})).toMatchSnapshot()
})

it("inscrit un joueur", () => {
  expect(burma(undefined, inscrireJoueur("J1"))).toMatchSnapshot()
})

it("démarre la partie", () => {
  const burma1joueur = burma(undefined, inscrireJoueur("J1"))
  const burma2joueurs = burma(burma1joueur, inscrireJoueur("J2"))

  expect(burma(burma2joueurs, demarrerPartie())).toMatchSnapshot()
})

it("note une volée", () => {
  const burma1joueur = burma(undefined, inscrireJoueur("J1"))
  const burma2joueurs = burma(burma1joueur, inscrireJoueur("J2"))
  const burmaEnCours = burma(burma2joueurs, demarrerPartie())

  const j1faitUn15 = burma(burmaEnCours, volee('J1', 15, 1))
  expect(j1faitUn15).toMatchSnapshot()

  const j2faitDeux15 = burma(j1faitUn15, volee('J2', 15, 2))
  expect(j2faitDeux15).toMatchSnapshot()
})
