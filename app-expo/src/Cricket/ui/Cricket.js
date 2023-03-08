import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Couleurs } from "../../styles";
import { TableauDesScores } from "./TableauDesScores";
import { CommandesPartie } from "./CommandesPartie";

export function Cricket() {
  const [joueur, setJoueur] = useState(null);
  const [touches, setTouches] = useState([]);
  const onTap = (joueur, chiffre) => {
    setJoueur(joueur);
    setTouches(integreTouche(chiffre, touches));
  };

  return (
    <View style={$.principal}>
      <View style={$.titre.boite}>
        <Text style={$.titre.texte}>Cricket</Text>
      </View>

      <TableauDesScores onTap={onTap} />

      <CommandesPartie joueur={joueur} touches={touches} />
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: Couleurs.fond,
  },
  titre: {
    boite: {
      marginVertical: 30,
      height: 30,
      flexDirection: "row",
      justifyContent: "center",
    },
    texte: {
      color: Couleurs.blanc,
      textAlign: "center",
      fontSize: 25,
    },
  },
});

export function integreTouche(chiffre, touches) {
  const chiffreExistant = touches.find((t) => t.chiffre === chiffre);

  if (!chiffreExistant) return [...touches, { chiffre, fois: 1 }];

  return touches.map((t) => {
    return t.chiffre !== chiffre ? t : { chiffre: t.chiffre, fois: t.fois + 1 };
  });
}
