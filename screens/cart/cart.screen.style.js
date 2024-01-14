import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import ThemeVariables from "../../theme/theme.variables";
import themeVariables from "../../theme/theme.variables";


const CartStyle = StyleSheet.create({
    loadingBox:{
        height:Dimensions.get('window').height * 0.40,
        padding: ThemeVariables.padding.medium
    },
    loadingBox2:{
        marginTop:ThemeVariables.margin.big,
        height:Dimensions.get('window').height * 0.1,
        padding: ThemeVariables.padding.medium
    },
    cartMainContainer:{
        height:Dimensions.get('window').height * 0.80,
        padding:ThemeVariables.padding.medium
    },
    cartItemsContainer:{
        height:Dimensions.get('window').height * 0.7,
    },
    CartTotal:{
        color:themeVariables.color.secondary,
        fontWeight:'bold',
        fontSize:themeVariables.typography.medium,
        textAlign:'center',
        padding:themeVariables.padding.medium
    }
});
export default CartStyle;
