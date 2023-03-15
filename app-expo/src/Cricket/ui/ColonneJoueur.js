import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Couleurs } from "../../styles";
import { useCricketFn, useInscriptionFn } from "../../redux";
import { scoreDuJoueur } from "../domaine/reducer";
import { X } from "../../../assets/X.svg.js";
import { Ferme } from "../../../assets/Ferme.svg.js";
import { HauteurLigneDeTableau } from "./style";
import { Pastille } from "../../Kit/Pastille";
import { couleurDuJoueur } from "../../InscriptionDesJoueurs/domaine/reducer";

export function ColonneJoueur({ joueur, onTap }) {
  const score = useCricketFn(scoreDuJoueur, joueur);
  const t = (chiffre) => score.cible[chiffre].touches;

  return (
    <View style={$.principal}>
      <View style={$.vignette}>
        <Pastille
          lettre={joueur.charAt(0)}
          couleur={useInscriptionFn(couleurDuJoueur, joueur)}
        />
      </View>
      <Chiffre nbTouches={t(20)} onTap={() => onTap(joueur, 20)} />
      <Chiffre nbTouches={t(19)} onTap={() => onTap(joueur, 19)} />
      <Chiffre nbTouches={t(18)} onTap={() => onTap(joueur, 18)} />
      <Chiffre nbTouches={t(17)} onTap={() => onTap(joueur, 17)} />
      <Chiffre nbTouches={t(16)} onTap={() => onTap(joueur, 16)} />
      <Chiffre nbTouches={t(15)} onTap={() => onTap(joueur, 15)} />
      <Chiffre nbTouches={t(25)} onTap={() => onTap(joueur, 25)} />
      <Score penalite={score.penalite}>{score.penalite}</Score>
    </View>
  );
}

const Chiffre = ({ nbTouches, onTap }) => {
  const ouvert = nbTouches < 3;
  return (
    <TouchableOpacity onPressIn={onTap}>
      {ouvert ? (
        <View style={[$.case, $.chiffre]}>
          {Array.from({ length: nbTouches }, (_, i) => (
            <X key={i} width={15} height={15} />
          ))}
        </View>
      ) : (
        <View style={[$.case, $.ferme]}>
          <Ferme width={24} height={24} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const Score = ({ penalite }) => {
  const [valeur, setValeur] = useState(penalite);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setValeur((valeur) => {
          if (valeur === penalite) {
            clearInterval(interval);
            return valeur;
          } else return valeur + 1;
        }),
      10
    );

    return () => clearInterval(interval);
  }, [penalite]);

  return <Text style={$.score}>{valeur}</Text>;
};

const $ = StyleSheet.create({
  principal: {
    flexDirection: "column",
    flex: 1,
    marginHorizontal: 5,
  },
  vignette: {
    backgroundColor: Couleurs.sombreUn,
    alignItems: "center",
    justifyContent: "center",
    height: HauteurLigneDeTableau,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 2,
  },
  case: {
    height: HauteurLigneDeTableau,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 2,
  },
  chiffre: {
    backgroundColor: Couleurs.sombreUn,
    paddingHorizontal: 10,
  },
  ferme: {
    backgroundColor: Couleurs.vertUn,
    height: HauteurLigneDeTableau,
  },
  score: {
    height: HauteurLigneDeTableau,
    backgroundColor: Couleurs.sombreCinq,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    color: Couleurs.blanc,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});
