import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatsScreen } from '../screens/ChatsScreen';
import { ContacScreen } from '../screens/ContacScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();


export const TopTabNavigator = ()  => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator 
            style={{
                paddingTop: top
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            
            screenOptions={({route}) => ({
                    tabBarPressColor: colores.primary,
                    tabBarShowIcon: true,
                    tabBarIndicatorStyle: {
                        backgroundColor: colores.primary
                    },
                    tabBarActiveTintColor: colores.primary,        
                    tabBarStyle: [{borderTopColor: colores.primary, shadowColor: 'transparent', elevation: 0},null],
                    tabBarIcon: ({color,focused}) => {
                        let iconName: string = '';
                        switch(route.name){
                          case 'Chats':
                            iconName = 'chatbox-ellipses-outline'
                            break;
                          
                          case 'Contact':
                            iconName = 'people-outline'
                            break;
                          case 'Album':
                            iconName = 'albums-outline'
                            break;
                        }
                        return   <Icon name={`${iconName}`} size={25} color={color} />
                      },
                }
            )}
        >
            <Tab.Screen name="Chats" component={ChatsScreen} />
            <Tab.Screen name="Contact" component={ContacScreen} />
            <Tab.Screen name="Album" component={AlbumScreen} />
        </Tab.Navigator>
    );
}