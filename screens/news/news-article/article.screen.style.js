import {Dimensions, StyleSheet} from "react-native";
import themeVariables from "../../../theme/theme.variables";

const NewsArticleStyle = StyleSheet.create({
    ProductCard:{
        borderRadius:themeVariables.border.radius.small
    },
    mainContainer:{
        overflow: 'hidden',
        width:'100%',
        padding:themeVariables.padding.small,
        borderRadius:themeVariables.border.radius.small,
    },
    mainContainerContent:{
        height:1900,
        flexDirection: 'column', // Arrange children components horizontally
        justifyContent: 'center', // Distribute space evenly between children components
        alignItems: 'center',
    },
    space:{
        height:Dimensions.get('window').height * 0.15
    },
    stack:{
        flex:1,
        display:"flex",
        height:'100%',
        flexDirection: 'column', // Arrange children components horizontally
        justifyContent: 'space-between', // Distribute space evenly between children components
        alignItems: 'center',
        width:'100%'
    },
    stackItem:{
        width: Dimensions.get('window').width  - themeVariables.margin.small,
        height:Dimensions.get('window').height *0.5,
        maxHeight:400,
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
    description:{
        fontSize:themeVariables.typography.small,
        fontWeight:'300',
        color:themeVariables.color.dark,
        padding:themeVariables.padding.small
    }
});
export default NewsArticleStyle;
