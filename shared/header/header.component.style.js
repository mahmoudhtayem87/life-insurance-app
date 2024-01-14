import {StyleSheet} from "react-native";
import themeVariables from "../../theme/theme.variables";
import ThemeVariables from "../../theme/theme.variables";


const HeaderComponentStyle = StyleSheet.create({
    mainContainer:{
        color:themeVariables.color.white,
        borderBottomLeftRadius:themeVariables.border.radius.medium,
        borderBottomRightRadius:themeVariables.border.radius.medium,
        backgroundColor:themeVariables.color.primary,
        paddingTop:themeVariables.padding.big,
        borderBottomWidth:0
    },
    centerContainer:{
        color:themeVariables.color.white,
        fontSize:themeVariables.typography.medium,
        backgroundColor:themeVariables.color.primary,
        borderColor:themeVariables.color.primary,
        fontWeight:'bold'
    },
    headerButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        button:{
            marginStart:ThemeVariables.margin.medium
        }
    }
});

export default HeaderComponentStyle;
