import {Dimensions, StyleSheet} from "react-native";
import ThemeVariables from "./theme.variables";

const SharedStyle = StyleSheet.create({
    stackContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:ThemeVariables.margin.big,
        minHeight:40
    },
    stackItem:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollViewStyle:{
        height:Dimensions.get('window')*0.5
    }
});

export default SharedStyle;
