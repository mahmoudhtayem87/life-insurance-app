import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import ThemeVariables from "../../theme/theme.variables";
import themeVariables from "../../theme/theme.variables";


const LoginStyle = StyleSheet.create({
    companyName:{
        color:themeVariables.color.secondary,
        fontSize:themeVariables.typography.bigger,
        textTransform:'capitalize',
        fontWeight:'bold',
        padding:themeVariables.padding.medium
    },
    loadingContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    mainContainer:{
        flex: 1,
        overflow: 'hidden',
        backgroundColor: ThemeVariables.color.primary
    },
    view: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        overflow: 'hidden',
        borderTopRightRadius:themeVariables.border.radius.large,
        borderBottomRightRadius:themeVariables.border.radius.large,
        borderTopLeftRadius:themeVariables.border.radius.large,
        borderBottomLeftRadius:themeVariables.border.radius.large,
        top:-50,
        padding:themeVariables.padding.big,
        margin:themeVariables.margin.small,
        backgroundColor: ThemeVariables.color.dark
    },
    bannerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'start',
        width:'100%',
        height:Dimensions.get('window').height / 2,
        overflow: 'hidden',
        backgroundColor: ThemeVariables.color.dark
    },
    scrollView: {
        flex: 1,
        backgroundColor: ThemeVariables.color.lightGray
    },
    container: {
        flex: 1,
        width: Dimensions.get('window').width
    },
    input:{
        color:themeVariables.color.white,
    },
    icon:{
        color: themeVariables.color.primary
    },
    button:{
        backgroundColor:themeVariables.color.primary,
        minWidth:themeVariables.button.size.medium
    },
    banner: {
        flex: 1, // Take up all available space within the container
        resizeMode:"cover",
        height:'100%',
        width:Dimensions.get('window').width

    },
    actions:{
        flex: 1,
        display:"flex",
        flexDirection: 'row', // Arrange children components horizontally
        justifyContent: 'space-between', // Distribute space evenly between children components
        alignItems: 'start',
        width:'100%',
        padding:themeVariables.padding.small,
    }
});
export default LoginStyle;
