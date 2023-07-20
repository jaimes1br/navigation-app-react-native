import { View,Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RouteParams {
//     id: number
//     name: string
// }

interface Props extends NativeStackScreenProps<RootStackParams,'PersonaScreen'>{};

export const PersonaScreen = ( { route, navigation }: Props) => {

    // const params = route.params as RouteParams;
    const params = route.params

    useEffect(()=>{
        navigation.setOptions({
            title: params.name
        })
    },[])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params,null,3)
                }
            </Text>
        </View>
    )
}
