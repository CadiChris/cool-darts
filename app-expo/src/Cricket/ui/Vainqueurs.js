import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import i18n from "i18n-js";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Couleurs } from "../../styles";
import { Win } from "../../../assets/svgs/Win.svg.js";
import { useCricketFn } from "../../redux";
import { selectVainqueurs } from "../domaine/reducer";
import { PastilleJoueur } from "../../Kit/Pastille";

export const RouteVainqueurs = "Modales/Vainqueurs";

export const Vainqueurs = () => {
  const navigation = useNavigation();
  const vainqueurs = useCricketFn(selectVainqueurs);

  return (
    <View style={[$.principal]}>
      <View style={[$.boite]}>
        <Coupe />
        <View style={[$.vainqueurs]}>
          {vainqueurs.map((v) => (
            <View style={[$.ligneVainqueur]} key={v}>
              <View style={$.pastille}>
                <PastilleJoueur joueur={v} />
              </View>
              <Text style={$.texteVainqueur}>{v}</Text>
            </View>
          ))}
        </View>
        <View style={$.boutons}>
          <TouchableNativeFeedback onPress={() => navigation.navigate("/")}>
            <View style={[$.bouton.boite, $.bouton.quitter]}>
              <Text style={[$.bouton.texte, $.bouton.texteQuitter]}>
                {i18n.t("quitter")}
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigation.goBack()}>
            <View style={[$.bouton.boite]}>
              <Text style={[$.bouton.texte, $.bouton.texteTableau]}>
                {i18n.t("voirScore")}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

function Coupe() {
  const $$coupe = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withRepeat(
          withSequence(
            withTiming(0.95, { duration: 1500 }),
            withTiming(1.05, { duration: 1500 })
          ),
          -1,
          true
        ),
      },
    ],
  }));

  return (
    <Animated.View style={[$$coupe]}>
      <Win width={132} height={140} />
    </Animated.View>
  );
}

const { vertTrois, vertUn, blanc } = Couleurs;

const $ = StyleSheet.create({
  principal: {
    backgroundColor: "#000c",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 35,
  },
  boite: {
    backgroundColor: vertUn,
    paddingVertical: 22,
    paddingHorizontal: 25,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
  },
  vainqueurs: { marginTop: 10 },
  ligneVainqueur: { flexDirection: "row", alignItems: "center", columnGap: 15 },
  pastille: { transform: [{ scale: 1.5 }] },
  texteVainqueur: { fontSize: 30, fontWeight: "bold", color: vertTrois },
  boutons: { marginTop: 60, rowGap: 15, width: "100%" },
  bouton: {
    boite: {
      paddingVertical: 10,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: vertTrois,
    },
    quitter: { backgroundColor: vertTrois },
    texte: { fontSize: 19, fontWeight: "bold", textAlign: "center" },
    texteQuitter: { color: blanc },
    texteTableau: { color: vertTrois },
  },
});
