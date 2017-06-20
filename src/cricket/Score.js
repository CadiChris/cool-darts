import React from 'react'
import { Grid, Label, Icon, Dimmer } from 'semantic-ui-react'
export default ({score}) => {


  const symbolesDesTouches = (nbDeTouches) => {
    const symboles = []
    for (let i = 0; i < nbDeTouches; i++)
      symboles.push(<Icon name="close" key={i}/>)
    return symboles
  }

  const chiffresTableau = [];
  for (let chiffre in score.cible) {
    chiffresTableau.push(
      <Grid.Column width={1} key={chiffre}>
        <Dimmer active={score.cible[chiffre].ferme}>
          <Icon name='lock'/>
        </Dimmer>
        {symbolesDesTouches(score.cible[chiffre].touches)}
      </Grid.Column>
    )
  }

  return (
    <Grid.Row>
      <Grid.Column width={5} textAlign='left'>{score.joueur} &nbsp;
        <Label>
          {score.points}
        </Label>
      </Grid.Column>
      {chiffresTableau}
    </Grid.Row>
  )
}