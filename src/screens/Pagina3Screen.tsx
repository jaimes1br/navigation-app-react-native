import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '../theme/appTheme';
interface Props extends NativeStackScreenProps<any,any>{}

export const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Pagina 3</Text>
        <Button
          title='Regresar'
          onPress={() => navigation.pop()}/>
        <Button
          title='Ir a pagina 1'
          onPress={() => navigation.popToTop()}/>
    </View>
  )
}
