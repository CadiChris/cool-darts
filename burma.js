const burma = (state = STATE_INITIAL, action) => {
  switch (action.type) {
    default: return state
  }
}

const STATE_INITIAL = {
  joueurs: [],
  lanceur: undefined,
  scores: [],
  phase: "INSCRIPTION"
}

export {
  burma
}