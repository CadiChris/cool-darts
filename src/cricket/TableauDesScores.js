import React from 'react'
import { Grid } from 'semantic-ui-react'
import Score from './Score'

export default ({scores}) => (
  <div>
    <Grid columns={8} celled='internally' textAlign='center'>
      <Grid.Row>
        <Grid.Column width={5}></Grid.Column>
        <Grid.Column width={1}>15</Grid.Column>
        <Grid.Column width={1}>16</Grid.Column>
        <Grid.Column width={1}>17</Grid.Column>
        <Grid.Column width={1}>18</Grid.Column>
        <Grid.Column width={1}>19</Grid.Column>
        <Grid.Column width={1}>20</Grid.Column>
        <Grid.Column width={1}>Bull</Grid.Column>
      </Grid.Row>
      {
        scores.map((score, index) => (
          <Score score={score} key={index}/>
        ))
      }
    </Grid>
  </div>
)