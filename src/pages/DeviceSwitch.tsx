import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import { arrowForwardOutline } from 'ionicons/icons';

const DeviceSwitch: React.FC = () => {
    return (
        <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> Device </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className = "ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol className = "ion-text-center">
              <IonLabel position = "floating"> Some text here</IonLabel>
              <IonInput type = "text" placeholder = "example@example.com"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton>
                <IonIcon slot="end" icon={arrowForwardOutline} />
                Next
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    );
}
export default DeviceSwitch;