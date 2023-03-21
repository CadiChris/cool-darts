import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Couleurs } from "../../styles";
import { TableauDesScores } from "./TableauDesScores";
import { CommandesPartie } from "./CommandesPartie";
import { visiter } from "../domaine/actions";
import { aplatis, integreTouche } from "./Cricket.logique";

export function Cricket() {
  const dispatch = useDispatch();
  const [joueur, setJoueur] = useState(null);
  const [touches, setTouches] = useState([]);
  const onTap = (joueur, chiffre) => {
    setJoueur(joueur);
    setTouches(integreTouche(chiffre, touches));
  };
  const clearTouches = () => {
    setJoueur(null);
    setTouches([]);
  };
  const onSubmit = () => {
    dispatch(visiter(joueur, aplatis(touches)));
    clearTouches();
  };

  return (
    <View style={$.principal}>
      <TableauDesScores onTap={onTap} />

      <CommandesPartie
        joueur={joueur}
        touches={touches}
        onSubmit={onSubmit}
        onTapCorbeille={clearTouches}
      />
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: Couleurs.fond,
    paddingTop: 20,
  },
});
