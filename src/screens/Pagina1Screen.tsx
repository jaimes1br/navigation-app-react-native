import { View, Text, Button, TouchableOpacity } from 'react-native';
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { colores, styles } from '../theme/appTheme';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends NativeStackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}

export const Pagina1Screen = ( { navigation }: Props ) => {

  useEffect(() =>{
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity 
         style={{marginLeft: 8}}
         onPress={() => navigation.toggleDrawer()}>
            <Icon name='menu-outline' size={30} color={colores.primary}/>
        </TouchableOpacity>
      )
    })
  },[]);

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina 1</Text>

        <Button
          title='Go to page 2'
          onPress={ () => navigation.navigate('Pagina2Screen')}/>


        <Text style={{ marginVertical: 20, fontSize: 20 }}>Navegar con argumentos</Text>
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              ...styles.btnPersona,
              backgroundColor: '#5856D6'
            }}
            onPress={() => navigation.navigate('PersonaScreen',{
              id: 1,
              name: 'Brandon'
            })}>
              <Icon name='man-outline' size={60} color='white' />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.btnPersona,
             
              backgroundColor: '#FF9427'
            }}
            onPress={() => navigation.navigate('PersonaScreen',{
              id: 2,
              name: 'Andrea'
            })}>
              <Icon name='woman-outline' size={60} color='white'/>
          </TouchableOpacity>
        </View>

    </View>
  )
}
