import { colores, styles } from '../theme/appTheme';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {

  const inset = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: inset.top}}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <Icon name="airplane-outline" size={60} color={colores.primary} />
          <Icon name="attach-outline" size={60} color={colores.primary} />
          <Icon name="battery-full-outline" size={60} color={colores.primary} />
          <Icon name="bug-outline" size={60} color={colores.primary} />
          <Icon name="construct-outline" size={60} color={colores.primary} />
          <Icon name="cloudy-outline" size={60} color={colores.primary} />
        </Text>
    </View>
  )
}
