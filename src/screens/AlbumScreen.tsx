import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const AlbumScreen = () => {
  const { authState, logout} =  useContext(AuthContext);

  return (
    <View style={ styles.globalMargin}>
        <Text style={styles.title}>Album Screen</Text>
        {
          (authState.isLoggedIn) && <Button title='Sing out' onPress={ logout}/>
        }
    </View>
  )
}
