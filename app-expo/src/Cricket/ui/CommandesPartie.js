import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import i18n from "i18n-js";
import { Couleurs } from "../../styles";
import { Check } from "../../../assets/svgs/Check.svg.js";
import { DoigtQuiTouche } from "../../../assets/svgs/DoigtQuiTouche.svg.js";
import { Maison } from "../../../assets/svgs/Maison.svg.js";
import { PastilleJoueur } from "../../Kit/Pastille";
import { UndoRedo } from "./UndoRedo";

export function CommandesPartie({
  joueur,
  touches,
  onSubmit,
  onTapCorbeille,
  partieTerminee,
}) {
  if (partieTerminee) return <PartieTerminee />;

  return (
    <View style={[$.fond]}>
      {joueur ? (
        <CommandesVisite joueur={joueur} touches={touches} onTap={onSubmit} />
      ) : (
        <Instructions />
      )}
      <UndoRedo
        corbeilleEnabled={touches[0] !== undefined}
        onTapCorbeille={onTapCorbeille}
      />
    </View>
  );
}

function PartieTerminee() {
  const navigation = useNavigation();

  return (
    <View style={[$.fond, $.partieTerminee]}>
      <TouchableNativeFeedback onPress={() => navigation.navigate("/")}>
        <View style={[$.boutonAccueil]}>
          <Maison width={40} height={40} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

function CommandesVisite({ joueur, touches, onTap }) {
  const [a, b, c] = touches;
  return (
    <Animated.View style={$.principal}>
      <View style={$.resume.ligne}>
        <View style={$.resume.boite}>
          <View style={$.resume.chiffres}>
            <UnChiffre touche={a} />
            <UnChiffre touche={b} />
            <UnChiffre touche={c} avecBordure={false} />
          </View>
          <Valider onTap={onTap} />
        </View>
      </View>
      <View style={$.joueur.boite}>
        <PastilleJoueur joueur={joueur} />
        <Text style={$.joueur.texte}>{joueur}</Text>
      </View>
    </Animated.View>
  );
}

function Instructions() {
  return (
    <View style={[$.instructions.boite]}>
      <DoigtQuiTouche width={60} height={60} transform={{ marginBottom: 20 }} />
      <Text style={$.instructions.texte}>
        {i18n.t("cricket.instructions1")}
      </Text>
      <Text style={$.instructions.texte}>
        {i18n.t("cricket.instructions2")}
      </Text>
    </View>
  );
}

function UnChiffre({ touche, avecBordure = true }) {
  const label = (chiffre) => (chiffre === 25 ? "Bull" : chiffre);

  return (
    <View
      style={[
        $.resume.unChiffre.boite,
        avecBordure ? $.resume.unChiffre.bordure : null,
      ]}
    >
      {!touche ? (
        <></>
      ) : (
        <>
          <Animated.Text
            key={touche.fois}
            entering={FadeInDown.springify().stiffness(400).mass(0.5)}
            style={$.resume.unChiffre.fois}
          >
            {touche.fois}
          </Animated.Text>
          <Text style={$.resume.unChiffre.x}>x</Text>
          <Animated.Text
            key={touche.chiffre}
            style={$.resume.unChiffre.valeur}
            entering={FadeIn.duration(100)}
          >
            {label(touche.chiffre)}
          </Animated.Text>
        </>
      )}
    </View>
  );
}

function Valider({ onTap }) {
  return (
    <TouchableOpacity onPressIn={onTap}>
      <View style={$.resume.check}>
        <Check width={18} height={16} />
      </View>
    </TouchableOpacity>
  );
}

const { sombreCinq, sombreSix, vertUn, sombreTrois, sombreQuatre, blanc } =
  Couleurs;

const $ = StyleSheet.create({
  fond: {
    backgroundColor: sombreQuatre,
    flex: 1,
    justifyContent: "space-between",
  },
  principal: { flex: 1, justifyContent: "center", rowGap: 25 },
  instructions: {
    boite: { flex: 1, justifyContent: "center", alignItems: "center" },
    texte: { color: sombreSix, textAlign: "center", lineHeight: 24 },
  },
  partieTerminee: { justifyContent: "center", alignItems: "center" },
  boutonAccueil: {
    elevation: 3,
    padding: 30,
    borderRadius: 50,
    backgroundColor: sombreCinq,
    alignItems: "center",
    justifyContent: "center",
  },
  joueur: {
    boite: {
      height: 40,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      columnGap: 10,
    },
    texte: { color: blanc, fontSize: 24, textAlign: "center" },
  },
  resume: {
    ligne: { alignSelf: "center" },
    boite: {
      borderRadius: 6,
      backgroundColor: sombreCinq,
      padding: 5,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
    },
    chiffres: { flexDirection: "row", marginHorizontal: 6 },
    unChiffre: {
      boite: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 12,
        alignItems: "baseline",
        height: 24,
        width: 70,
        columnGap: 3,
      },
      bordure: { borderRightWidth: 1, borderRightColor: sombreTrois },
      fois: { lineHeight: 26, color: blanc, fontSize: 20, fontWeight: "bold" },
      x: {
        lineHeight: 26,
        color: blanc,
        fontSize: 12,
        fontWeight: "100",
        fontStyle: "italic",
      },
      valeur: { color: blanc, fontSize: 24, lineHeight: 26, marginRight: 3 },
    },
    check: {
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 40,
      backgroundColor: vertUn,
      borderRadius: 6,
    },
  },
});
