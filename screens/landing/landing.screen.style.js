import {Dimensions, StyleSheet} from "react-native";
import themeVariables from "../../theme/theme.variables";

const LandingScreenStyle = StyleSheet.create({
    scrollViewStyle:{
        height:Dimensions.get('window').height - 130,
        padding:themeVariables.padding.medium
    },
    scrollViewStyleNoFooter:{
        height:Dimensions.get('window').height - 65,
        padding:themeVariables.padding.medium
    }

});
export default LandingScreenStyle;
