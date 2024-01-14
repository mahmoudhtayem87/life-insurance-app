import {Dimensions, StyleSheet} from "react-native";
import ThemeVariables from "../../theme/theme.variables";
import themeVariables from "../../theme/theme.variables";

const ProductViewStyle = StyleSheet.create({
    mainProductCard:{
        borderRadius:themeVariables.border.radius.medium
    },
    loadingMainBox: {
        width: '100%',
        height: '100%',
    },
    loadingBox: {
        width: '100%',
        height: Dimensions.get('window').height * 0.85,
        marginBottom: themeVariables.margin.big,
        padding: themeVariables.padding.medium
    },
    productImage: {
        height: Dimensions.get('window').height * 0.3
    },
    mainScreenScroll: {
        height: Dimensions.get('window').height * 0.5
    },
    optionsBox: {
        marginTop: themeVariables.margin.small
    },
    priceTagContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: themeVariables.padding.small,
        right: themeVariables.padding.small,
        backgroundColor: themeVariables.color.primary,
        padding: themeVariables.padding.medium,
        zIndex: 2
    },
    priceTag: {
        color: themeVariables.color.white,
        fontSize: themeVariables.typography.big
    },
    title: {
        marginTop: themeVariables.margin.medium,
        marginBottom: themeVariables.margin.small,
        fontWeight: 'bold',
        color: themeVariables.color.dark,
        fontSize: themeVariables.typography.medium
    },
    sheetCancelButtonContainer: {
        backgroundColor:themeVariables.color.dark,
        color:themeVariables.color.primary,
        padding:themeVariables.padding.big+10
    },
    sheetCancelButton: {
        color:themeVariables.color.primary,
    },
    cartButtonStyle:{
        marginTop:ThemeVariables.margin.medium,
        borderColor: ThemeVariables.color.primary,
        buttonTitleStyle:{
            color:ThemeVariables.color.primary,
        }
    }
});

export default ProductViewStyle;
