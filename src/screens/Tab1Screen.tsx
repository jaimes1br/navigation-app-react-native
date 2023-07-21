import { styles } from '../theme/appTheme';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

  const inset = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: inset.top}}
      >
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <TouchableIcon iconName='airplane-outline'/>
          <TouchableIcon iconName='attach-outline'/>
          <TouchableIcon iconName='battery-full-outline'/>
          <TouchableIcon iconName='bug-outline'/>
          <TouchableIcon iconName='construct-outline'/>
          <TouchableIcon iconName='cloudy-outline'/>
        </Text>
    </View>
  )
}
