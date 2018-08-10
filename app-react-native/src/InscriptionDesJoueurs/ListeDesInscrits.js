import React from "react";
import PropTypes from "prop-types";
import { Platform, Text, View } from "react-native";
import Button from "apsl-react-native-button";
import Icon from "react-native-vector-icons/FontAwesome";
import { Boutons, Textes } from "../styles";
import TexteApparaissant from "../Technique/TexteApparaissant";
import FadeInView from "../Technique/FadeInView";

const ListeDesInscrits = ({ inscrits, onDesinscription }) => (
  <View style={{ flex: 1 }}>
    {inscrits.map((nom, index) => (
      <View
        key={index}
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <TexteApparaissant style={[Textes.basique, Textes.mav]}>
          <Text style={[Textes.light, { ...unPeuTransparent }]}>
            #{index + 1}
          </Text>
          {`  ${nom}`}
        </TexteApparaissant>
        <FadeInView dureeDuFade={100}>
          <Button
            style={[
              Boutons.deCommande,
              { width: 30, height: 30, marginTop: 10 }
            ]}
            onPress={() => onDesinscription(nom)}
          >
            <Icon name="remove" size={20} color="white" />
          </Button>
        </FadeInView>
      </View>
    ))}
  </View>
);

ListeDesInscrits.propTypes = {
  inscrits: PropTypes.array.isRequired,
  onDesinscription: PropTypes.func.isRequired
};

const unPeuTransparent = Platform.select({
  ios: { opacity: 0.5 },
  android: { color: "#8498AB" }
});

export default ListeDesInscrits;
