"use strict"
import assert from "assert";
import {scoreVierge} from "./score";

describe('score.modele', () => {
  it('crée un score vierge', () => {
    expect(scoreVierge('J1')).toMatchSnapshot()
  })

  it('créé un nouveau score à chaque appel', () => {
    assert.notStrictEqual(scoreVierge(''), scoreVierge(''))
  })
})