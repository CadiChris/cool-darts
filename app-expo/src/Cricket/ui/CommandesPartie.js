import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Couleurs } from "../../styles";

export function CommandesPartie({ joueur, touches }) {
  const [a, b, c] = touches;
  return (
    <View style={$.principal}>
      <View style={$.joueur.boite}>
        <Text style={$.joueur.texte}>{joueur}</Text>
      </View>
      <View style={$.resume.ligne}>
        <View style={$.resume.boite}>
          <View style={$.resume.chiffres}>
            <View
              style={[$.resume.unChiffre.boite, $.resume.unChiffre.bordure]}
            >
              <Text style={$.resume.unChiffre.valeur}>{a && a.chiffre}</Text>
              <Text style={$.resume.unChiffre.multiplicateur}>
                {a && `x${a.fois}`}
              </Text>
            </View>
            <View
              style={[$.resume.unChiffre.boite, $.resume.unChiffre.bordure]}
            >
              <Text style={$.resume.unChiffre.valeur}>{b && b.chiffre}</Text>
              <Text style={$.resume.unChiffre.multiplicateur}>
                {b && `x${b.fois}`}
              </Text>
            </View>
            <View style={$.resume.unChiffre.boite}>
              <Text style={$.resume.unChiffre.valeur}>{c && c.chiffre}</Text>
              <Text style={$.resume.unChiffre.multiplicateur}>
                {c && `x${c.fois}`}
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={$.resume.check}></View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={$.undoRedo}></View>
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    backgroundColor: Couleurs.sombreQuatre,
    flex: 1,
    justifyContent: "space-around",
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
      width: 50,
      height: 40,
      backgroundColor: Couleurs.vertUn,
      borderRadius: 6,
    },
  },
  undoRedo: { height: 44 },
});
