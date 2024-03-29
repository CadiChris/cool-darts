import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Couleurs } from "../../styles";
import { AvecConfirmationRetourAccueil } from "../../Kit/RetourAccueil/AvecConfirmationRetourAccueil";
import { TableauDesScores } from "./TableauDesScores";
import { CommandesPartie } from "./CommandesPartie";
import { visiter } from "../domaine/actions";
import { aplatis, integreTouche } from "./Cricket.logique";
import { AvecSurveillanceFinDePartie } from "./AvecSurveillanceFinDePartie";
import { useCricketFn } from "../../redux";
import { selectVainqueurs } from "../domaine/reducer";

export function Cricket() {
  const dispatch = useDispatch();
  const [joueur, setJoueur] = useState(null);
  const [touches, setTouches] = useState([]);
  const vainqueurs = useCricketFn(selectVainqueurs);
  const partieTerminee = vainqueurs.length > 0;

  const onTap = (joueur, chiffre) => {
    if (partieTerminee) return;

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
    <AvecConfirmationRetourAccueil>
      <AvecSurveillanceFinDePartie>
        <View style={$.principal}>
          <TableauDesScores onTap={onTap} />

          <CommandesPartie
            joueur={joueur}
            touches={touches}
            onSubmit={onSubmit}
            onTapCorbeille={clearTouches}
            partieTerminee={partieTerminee}
          />
        </View>
      </AvecSurveillanceFinDePartie>
    </AvecConfirmationRetourAccueil>
  );
}

const $ = StyleSheet.create({
  principal: { flex: 1, backgroundColor: Couleurs.fond, paddingTop: 20 },
});
