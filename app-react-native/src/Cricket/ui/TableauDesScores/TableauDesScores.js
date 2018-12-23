import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";
import { View } from "react-native";
import { scale } from "react-native-size-matters";
import Celebration from "../../../Kit/Celebration";
import { Styles } from "../../../styles";
import Vainqueurs from "./Vainqueurs";
import { split } from "../../../utils/tableau";
import { ColonneDesChiffres } from "./ColonneDesChiffres";
import { LARGEUR_COLONNE_JOUEUR } from "./dimensions";
import { ColonneJoueur } from "./ColonneJoueur";
import Visite from "./Visite";

class TableauDesScores extends Component {
  state = {
    lanceur: "",
    visite: []
  };

  visiter(joueur, chiffre) {
    const { lanceur, visite } = this.state;

    if (!lanceur) this.setState({ lanceur: joueur });

    this.setState({ visite: [...visite, chiffre] });
  }

  nouvelleVisite() {
    this.setState({
      lanceur: "",
      visite: []
    });
  }

  validerVisite() {
    const { visite, lanceur } = this.state;
    const { onLancerDansSimple } = this.props;
    visite.forEach(c => onLancerDansSimple(lanceur, c));
    this.nouvelleVisite();
  }

  render() {
    const { scores, vainqueurs, actif } = this.props;
    const { visite, lanceur } = this.state;

    return (
      <Animatable.View style={[{ flex: 1 }]} animation="bounceInRight">
        {vainqueurs.length > 0 && <Celebration />}
        <View style={{ flexDirection: "row" }}>
          {split(scores).premier.map(score => (
            <ColonneJoueur
              key={score.joueur}
              score={score}
              style={[
                {
                  width: LARGEUR_COLONNE_JOUEUR(scores.length)
                },
                Styles.bordureDroite
              ]}
              actif={actif}
              onLancerDansSimple={(joueur, chiffre) =>
                this.visiter(joueur, chiffre)
              }
            />
          ))}

          {ColonneDesChiffres}

          {split(scores).second.map(score => (
            <ColonneJoueur
              key={score.joueur}
              score={score}
              style={[
                {
                  width: LARGEUR_COLONNE_JOUEUR(scores.length)
                },
                Styles.bordureGauche
              ]}
              actif={actif}
              onLancerDansSimple={(joueur, chiffre) =>
                this.visiter(joueur, chiffre)
              }
            />
          ))}
        </View>

        {vainqueurs.length > 0 ? (
          <Vainqueurs noms={vainqueurs} />
        ) : (
          lanceur !== "" && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                paddingHorizontal: scale(10)
              }}
            >
              <Visite
                joueur={lanceur}
                chiffres={visite}
                onValider={() => this.validerVisite()}
                onAnnuler={() => this.nouvelleVisite()}
              />
            </View>
          )
        )}
      </Animatable.View>
    );
  }
}

TableauDesScores.propTypes = {
  scores: PropTypes.array.isRequired,
  onLancerDansSimple: PropTypes.func.isRequired,
  vainqueurs: PropTypes.array.isRequired,
  actif: PropTypes.bool.isRequired
};

export default TableauDesScores;
