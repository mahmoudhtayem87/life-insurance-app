import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import ThemeVariables from "../../theme/theme.variables";
import themeVariables from "../../theme/theme.variables";


const HomeStyle = StyleSheet.create({
    ProductCard:{
        borderRadius:themeVariables.border.radius.small
    },
    mainContainer:{
        overflow: 'hidden',
        width:'100%',
        height:Dimensions.get('window').height * 0.35,
        maxHeight:230+themeVariables.padding.medium,
        padding:themeVariables.padding.small,
        borderRadius:themeVariables.border.radius.small,
    },
    mainContainerContent:{

        flexDirection: 'row', // Arrange children components horizontally
        justifyContent: 'center', // Distribute space evenly between children components
        alignItems: 'center',
    },
    space:{
        height:Dimensions.get('window').height * 0.15
    },
    stack:{
        flex:1,
        height:Dimensions.get('window').height /3,
        display:"flex",
        flexDirection: 'row', // Arrange children components horizontally
        justifyContent: 'center', // Distribute space evenly between children components
        alignItems: 'center',
        width:'100%'
    },
    stackItem:{
        width: Dimensions.get('window').width / 2 - themeVariables.margin.small,
        height:Dimensions.get('window').height *0.4,
        maxHeight:230,
        overflow:'hidden',
        color:themeVariables.color.white,
        backgroundColor:themeVariables.color.white,
        borderRadius:themeVariables.border.radius.small,
    },
    title:{
        fontSize:themeVariables.typography.big,
        marginBottom:themeVariables.margin.small,
        marginTop:themeVariables.margin.medium,
        fontWeight:'bold',
        color:themeVariables.color.info,
        paddingStart:themeVariables.padding.medium
    },
    priceTag:{
        position:'absolute',
        bottom:10,
        right:(Dimensions.get('window').width / 2 - themeVariables.margin.xSmall) / 2,
        zIndex:2,
        width:20,
        fontSize:themeVariables.typography.medium
    },
    badgeStyle:{
        width: 100,
        height:25
    },
    priceTagText:{
        fontSize:themeVariables.typography.medium
    }
});
export default HomeStyle;
