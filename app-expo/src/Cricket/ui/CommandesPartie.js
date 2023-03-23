import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import i18n from "i18n-js";
import { useDispatch } from "react-redux";
import { Couleurs } from "../../styles";
import { Check } from "../../../assets/Check.svg.js";
import { DoigtQuiTouche } from "../../../assets/DoigtQuiTouche.svg.js";
import { PastilleJoueur } from "../../Kit/Pastille";
import { Corbeille } from "../../../assets/Corbeille.svg.js";
import { Undo } from "../../../assets/Undo.svg.js";
import { Redo } from "../../../assets/Redo.svg.js";
import { useCanRedo, useCanUndo } from "../../redux";
import { redo, undo } from "../../undo/undoable";

export function CommandesPartie({ joueur, touches, onSubmit, onTapCorbeille }) {
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

function UndoRedo({ corbeilleEnabled, onTapCorbeille }) {
  const dispatch = useDispatch();
  const undoEnabled = useCanUndo("cricket");
  const redoEnabled = useCanRedo("cricket");

  const grosBouton = [$.undoRedo.bouton, $.undoRedo.gros];
  const petitBouton = [$.undoRedo.bouton, $.undoRedo.petit];

  return (
    <View style={$.undoRedo.boite}>
      <TouchableNativeFeedback onPress={() => dispatch(undo())}>
        <View
          style={[...grosBouton, !undoEnabled ? $.undoRedo.disabled : null]}
        >
          <Undo width={20} height={20} />
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={onTapCorbeille}>
        <View
          style={[
            ...petitBouton,
            !corbeilleEnabled ? $.undoRedo.disabled : null,
          ]}
        >
          <Corbeille width={14} height={16} />
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => dispatch(redo())}>
        <View
          style={[...grosBouton, !redoEnabled ? $.undoRedo.disabled : null]}
        >
          <Redo width={20} height={20} />
        </View>
      </TouchableNativeFeedback>
    </View>
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
  undoRedo: {
    boite: {
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      columnGap: 10,
    },
    bouton: {
      elevation: 3,
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: sombreCinq,
      alignItems: "center",
      justifyContent: "center",
    },
    petit: { width: 34, height: 34, borderRadius: 17 },
    gros: { width: 44, height: 44, borderRadius: 22 },
    disabled: { opacity: 0.3 },
  },
});
