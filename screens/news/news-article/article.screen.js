import LayoutComponent from "../../../shared/layout/layout.component";
import {Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import NewsStyle from "../news.screen.style";
import {Card, Skeleton} from "@rneui/base";
import themeVariables from "../../../theme/theme.variables";
import {getContentFieldByName} from "../../../services/util.service";
import React from "react";
import RenderHtml from 'react-native-render-html';

import NewsArticleStyle from "./article.screen.style";

const NewsArticleScreen = ({navigation, route}) => {
    const { width } = useWindowDimensions();
    const { item } = route.params;
    return (
        <LayoutComponent navigation={navigation} route={route} showBottomNav={false} showBack={true} showCart={false} title={item.title}
                         pageContent={
                             <View>
                                 <Card key={item.id}>
                                     <Card.Title>{item.title}</Card.Title>
                                     <Card.Divider/>
                                     <Card.Image
                                         style={{padding: 0}}
                                         source={{
                                             uri: getContentFieldByName('Image',item),
                                         }}
                                     />
                                     <Card.Divider/>
                                     <Text style={NewsArticleStyle.description}>
                                         {getContentFieldByName('Description',item)}
                                     </Text>
                                     <RenderHtml
                                         contentWidth={width}
                                         source={{html:getContentFieldByName('RichText42031959',item)}}
                                     />
                                 </Card>
                             </View>
                         }
        ></LayoutComponent>
    )
}

export default NewsArticleScreen;
