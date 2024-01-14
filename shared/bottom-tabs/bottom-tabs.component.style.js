import {Dimensions, StyleSheet} from "react-native";
import ThemeVariables from "../../theme/theme.variables";


const BottomTabsComponentStyle = StyleSheet.create({
    footer:{
        bottom:0,
        position:'absolute',
        width:'100%',
        display:'flex',
        backgroundColor:ThemeVariables.color.primary,
    },
    footerContent:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        flex:1
    },
    tabButtonContainer: {
        flex:1,
        alignItems: 'center', // align items in the center
        justifyContent: 'space-between', // space between icon and text
        borderWidth: 0,
        width: Dimensions.get('window').width / 2,
        height: 60,
        padding:ThemeVariables.padding.small,
        backgroundColor:ThemeVariables.color.primary
    },
    tabButtonContainerSelected: {
        flex:1,
        alignItems: 'center', // align items in the center
        justifyContent: 'space-between', // space between icon and text
        borderWidth: 0,
        width: Dimensions.get('window').width /2,
        height: 60,
        padding:ThemeVariables.padding.small,
        backgroundColor:ThemeVariables.color.dark
    },
    icon: {
        height:25,
        color:ThemeVariables.color.white

    },
    tabButtonText: {
        marginTop:0,
        textAlign: 'center',
        textTransform:'capitalize',
        color:ThemeVariables.color.white,
        fontSize:ThemeVariables.typography.small,
        fontWeight:'bold'
    }
});

export default BottomTabsComponentStyle;
