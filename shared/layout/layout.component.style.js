import {Dimensions, StyleSheet} from "react-native";
import themeVariables from "../../theme/theme.variables";

const LayoutComponentStyle = StyleSheet.create({
    scrollViewStyle:{
        height:Dimensions.get('window').height - 130,
        padding:themeVariables.padding.medium,
        width:Dimensions.get('window').width
    },
    scrollViewStyleNoFooter:{
        height:Dimensions.get('window').height - 70,
        padding:themeVariables.padding.medium,
        width:Dimensions.get('window').width
    }

});

export default LayoutComponentStyle;
