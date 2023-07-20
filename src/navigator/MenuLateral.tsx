import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    
    const { width } = useWindowDimensions();
     
    return (
        <Drawer.Navigator
        screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front',
            headerShown: false,
            headerTransparent: true
          }}
          drawerContent={(props) => <MenuInterno {...props}/>}
        >
            <Drawer.Screen name="Tabs" component={ Tabs } />
            <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
        </Drawer.Navigator>
    )
}


const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            <View style={styles.acatarContent}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                    }} 
                    style={styles.avatar}   
                />
            </View> 
            <View style={styles.menuContainer}>
                <TouchableOpacity 
                    style={styles.menuBtn}
                    onPress={() => navigation.navigate('Tabs')}>
                    <Text style={styles.menuTextBnt}> 
                        <Icon style={{marginRight: 5}} name="compass-outline" size={20} color={colores.primary} />
                        Navegacion stack
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.menuBtn}
                    onPress={() => navigation.navigate('SettingsScreen')}>
                    <Text style={styles.menuTextBnt}>
                        <Icon style={{marginRight: 5}} name="settings-outline" size={20} color={colores.primary} />
                        Settings
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    
    )
}