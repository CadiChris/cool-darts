import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useCanRedo, useCanUndo } from "../../redux";
import { redo, undo } from "../../undo/undoable";
import { Undo } from "../../../assets/Undo.svg.js";
import { Corbeille } from "../../../assets/Corbeille.svg.js";
import { Redo } from "../../../assets/Redo.svg.js";
import { Couleurs } from "../../styles";
import { Maison } from "../../../assets/Maison.svg.js";
import { RouteModaleRetourAccueil } from "../../Kit/RetourAccueil/ConfirmeRetourAccueil";

export function UndoRedo({ corbeilleEnabled, onTapCorbeille }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const undoEnabled = useCanUndo("cricket");
  const redoEnabled = useCanRedo("cricket");

  const grosBouton = [$.bouton, $.gros];
  const petitBouton = [$.bouton, $.petit];

  return (
    <View style={$.principal}>
      <View style={[$.section]}>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate(RouteModaleRetourAccueil)}
        >
          <View style={[...petitBouton]}>
            <Maison width={14} height={16} />
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={[$.section, $.undoRedo]}>
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

      <View style={$.section}></View>
    </View>
  );
}

const { sombreCinq } = Couleurs;

const $ = StyleSheet.create({
  principal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  section: { flex: 1 },
  undoRedo: {
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
});
