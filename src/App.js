import React from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router-dom';

const Brew = () => (
  <IonPage>
    <IonSegment>
      <IonSegmentButton>Espresso</IonSegmentButton>
      <IonSegmentButton>Macchiato</IonSegmentButton>
      <IonSegmentButton checked>Flat white</IonSegmentButton>
    </IonSegment>
    <IonButton expand="full">Brew</IonButton>
  </IonPage>
);

const Settings = () => <IonPage>Settings</IonPage>;

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Smart Brewer</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/brew" component={Brew} exact />
              <Route path="/settings" component={Settings} exact />
              <Redirect from="/" to="/brew" />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="brew" href="/brew">
                <IonLabel>Brew</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/settings">
                <IonLabel>Settings</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
