function elementPrecedent(actuel, tous) {
  const indexActuel = tous.indexOf(actuel);
  const auDebut = indexActuel === 0;
  const dernierElement = tous[tous.length - 1];

  if (auDebut) return dernierElement;

  return tous[indexActuel - 1];
}

function elementSuivant(actuel, tous) {
  const indexActuel = tous.indexOf(actuel);
  const suivant = tous[(indexActuel + 1) % tous.length];
  return suivant;
}

export { elementPrecedent, elementSuivant };
