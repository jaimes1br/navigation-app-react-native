import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { Button } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const ContacScreen = () => {
  const { authState ,signIn } =  useContext(AuthContext);
  return (
    <View style={ styles.globalMargin}>
        <Text style={styles.title}>Contact Screen</Text>

        {
          (!authState.isLoggedIn) && <Button title='SignIn' onPress={ signIn }/>
        }
    </View>
  )
}
