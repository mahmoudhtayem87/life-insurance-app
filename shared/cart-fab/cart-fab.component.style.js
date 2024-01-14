import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import ThemeVariables from "../../theme/theme.variables";
import themeVariables from "../../theme/theme.variables";


const CartFabStyle = StyleSheet.create({
    cartButtonStyle:{
        marginTop:ThemeVariables.margin.medium,
        borderColor: ThemeVariables.color.primary,
        buttonTitleStyle:{
            color:ThemeVariables.color.white,
        }
    },
    sheetCancelButtonContainer: {
        backgroundColor:themeVariables.color.dark,
        color:themeVariables.color.primary,
        padding:themeVariables.padding.big+10
    },
    sheetCancelButton: {
        color:themeVariables.color.primary,
    },

});
export default CartFabStyle;
