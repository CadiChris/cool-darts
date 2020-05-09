import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {
  BackButton,
  NativeRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-native';
import SplashScreen from './src/Kit/SplashScreen';
import {Styles} from './src/styles';
import InscriptionDesJoueurs from './src/InscriptionDesJoueurs/ui/InscriptionDesJoueurs.container';
import Burma from './src/Burma/ui/Burma';
import Cricket from './src/Cricket/ui/Cricket';
import Navigation from './src/Navigation/Navigation.container';

const App = ({store}) => (
  <SplashScreen dureeDuSplash={2750}>
    <Provider store={store}>
      <NativeRouter>
        <BackButton />

        <View style={Styles.container}>
          <Switch>
            <Route
              exact
              path="/inscription"
              component={InscriptionDesJoueurs}
            />

            <Route
              path="/jeu"
              render={({match}) => (
                <View style={{flex: 1}}>
                  <Route
                    exact
                    path={`${match.path}/cricket`}
                    component={Cricket}
                  />
                  <Route exact path={`${match.path}/burma`} component={Burma} />
                  <Navigation />
                </View>
              )}
            />

            <Redirect to="/inscription" />
          </Switch>
        </View>
      </NativeRouter>
    </Provider>
  </SplashScreen>
);

export default App;
