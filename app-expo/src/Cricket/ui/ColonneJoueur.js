import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import Animated, {
  BounceIn,
  CurvedTransition,
  PinwheelIn,
} from "react-native-reanimated";
import { Couleurs } from "../../styles";
import { useCricketFn } from "../../redux";
import { scoreDuJoueur } from "../domaine/reducer";
import { X } from "../../../assets/X.svg.js";
import { Ferme } from "../../../assets/Ferme.svg.js";
import { HauteurLigneDeTableau } from "./style";
import { PastilleJoueur } from "../../Kit/Pastille";

export function ColonneJoueur({ joueur, onTap }) {
  const score = useCricketFn(scoreDuJoueur, joueur);
  const t = (chiffre) => score.cible[chiffre].touches;

  return (
    <View style={$.principal}>
      <View style={$.vignette}>
        <PastilleJoueur joueur={joueur} />
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
    <TouchableNativeFeedback onPress={onTap}>
      {ouvert ? (
        <View style={[$.case, $.chiffre]}>
          {Array.from({ length: nbTouches }, (_, i) => (
            <Animated.View
              key={i}
              entering={BounceIn.duration(260)}
              layout={CurvedTransition.duration(100)}
            >
              <X width={15} height={15} />
            </Animated.View>
          ))}
        </View>
      ) : (
        <Animated.View style={[$.case, $.ferme]} entering={PinwheelIn}>
          <Ferme width={24} height={24} />
        </Animated.View>
      )}
    </TouchableNativeFeedback>
  );
};

const Score = ({ penalite }) => {
  const [valeur, setValeur] = useState(penalite);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setValeur((valeurPrecedente) => {
          if (valeurPrecedente === penalite) {
            clearInterval(interval);
            return valeurPrecedente;
          }

          return penalite > valeurPrecedente
            ? valeurPrecedente + 1
            : valeurPrecedente - 1;
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
