import { StyleSheet } from 'react-native';

export const colores = {
    primary: '#5856D6'
}


export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20,
        marginTop: 10
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    btnPersona: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        color: 'white',
        justifyContent: 'center',
        margin: 10
    },
    btnText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    acatarContent:{
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer:{
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuBtn: {
        marginVertical: 10,
        flexDirection: 'row',
        alignContent: 'center'
    },
    menuTextBnt: {
        fontSize: 20
    }

})