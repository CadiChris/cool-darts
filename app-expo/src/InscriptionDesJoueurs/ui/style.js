import { Couleurs } from "../../styles";
import { Layout } from "react-native-reanimated";

export const Inscrit = {
  ligne: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Couleurs.sombreUn,
    marginVertical: 3,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  pseudo: { flexDirection: "row", alignItems: "center", columnGap: 10 },
  texte: { fontSize: 18, color: Couleurs.blanc, fontWeight: "bold" },
  commandes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  actions: {
    uneAction: {
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 24,
    },
    fleche: {
      borderRightWidth: 1,
      borderRightColor: Couleurs.sombreTrois,
    },
    croix: { width: "auto", paddingLeft: 9 },
  },
};

export const $$spring = Layout.springify().damping(30).mass(1).stiffness(470);
