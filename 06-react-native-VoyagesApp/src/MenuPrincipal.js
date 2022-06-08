import {Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ListerVoyages} from "./ListerVoyages";
import {AjouterVoyage} from "./AjouterVoyage";

const Tab = createBottomTabNavigator();

export const MenuPrincipal = ({voyages, addVoyage}) => (
<NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="ListerV" children={props => <ListerVoyages voyages={voyages} {...props} />} />
        <Tab.Screen name="AjouterV" children={props => <AjouterVoyage addVoyage={addVoyage} {...props} />} />
    </Tab.Navigator>
</NavigationContainer>
);