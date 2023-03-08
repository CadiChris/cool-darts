import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import i18n from "i18n-js";
import { Couleurs } from "../../styles";
import { Check } from "../../../assets/Check.svg.js";
import { DoigtQuiTouche } from "../../../assets/DoigtQuiTouche.svg.js";

export function CommandesPartie({ joueur, touches, onSubmit }) {
  if (!joueur) return <Instructions />;

  const [a, b, c] = touches;
  return (
    <View style={$.principal}>
      <View style={$.joueur.boite}>
        <Text style={$.joueur.texte}>{joueur}</Text>
      </View>
      <View style={$.resume.ligne}>
        <View style={$.resume.boite}>
          <View style={$.resume.chiffres}>
            <UnChiffre touche={a} />
            <UnChiffre touche={b} />
            <UnChiffre touche={c} avecBordure={false} />
          </View>
          <Valider onTap={onSubmit} />
        </View>
      </View>
      <View style={$.undoRedo}></View>
    </View>
  );
}

function Instructions() {
  return (
    <View style={[$.principal, $.instructions.boite]}>
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
      <Text style={$.resume.unChiffre.valeur}>
        {touche && label(touche.chiffre)}
      </Text>
      <Text style={$.resume.unChiffre.multiplicateur}>
        {touche && `x${touche.fois}`}
      </Text>
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

const $ = StyleSheet.create({
  principal: {
    backgroundColor: Couleurs.sombreQuatre,
    flex: 1,
    justifyContent: "space-around",
  },
  instructions: {
    boite: { justifyContent: "center", alignItems: "center" },
    texte: { color: Couleurs.sombreSix, textAlign: "center", lineHeight: 24 },
  },
  joueur: {
    boite: { height: 40, justifyContent: "center" },
    texte: { color: Couleurs.blanc, fontSize: 19, textAlign: "center" },
  },
  resume: {
    ligne: { alignSelf: "center" },
    boite: {
      borderRadius: 6,
      backgroundColor: Couleurs.sombreCinq,
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
      },
      bordure: { borderRightWidth: 1, borderRightColor: Couleurs.sombreTrois },
      valeur: {
        color: Couleurs.blanc,
        fontSize: 24,
        lineHeight: 26,
        marginRight: 3,
      },
      multiplicateur: { color: Couleurs.blanc, fontSize: 16 },
    },
    check: {
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 40,
      backgroundColor: Couleurs.vertUn,
      borderRadius: 6,
    },
  },
  undoRedo: { height: 44 },
});
