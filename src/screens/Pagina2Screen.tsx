import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useEffect } from 'react';

export const Pagina2Screen = () => {
  
  const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect( () =>{
    navigator.setOptions({
      title: 'Esta es la página 2',
      headerBackTitle: ''
    })
  },[]);
  
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Pagina 2</Text>

        <Button
          title='Go to page 3'
          onPress={ () => navigator.navigate('Pagina3Screen')}/>
    </View>
  )
}
