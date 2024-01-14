import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import NewsStyle from './news.screen.style';
import {getProductsAll, getProductsByCategory} from "../../services/products.service";
import Config from "../../services/config.service";
import {Badge, Button, Card, Icon, Skeleton} from "@rneui/base";
import themeVariables from "../../theme/theme.variables";
import {getAccountCarts, getOpenCarts} from "../../services/cart.service";
import LayoutComponent from "../../shared/layout/layout.component";
import {getData} from "../../services/storage.service";
import {getNewsByFolderId} from "../../services/news.service";
import ConfigService from "../../services/config.service";
import configService from "../../services/config.service";
import {getContentFieldByName} from "../../services/util.service";




const NewsScreen = ({navigation, route}) => {
    const [loadingNews, setLoadingNews] = useState(false);

    const [news, setNews] = useState(null);


    const onArticleClick = (article)=>{
        navigation.navigate('Article',
            {
                item:article
            }
        );
    }

    useEffect(() => {


        const loadNews = async () => {
            setLoadingNews(true);
            let data = await getNewsByFolderId(ConfigService.NewsFolderId);
            setNews(data.items)
            setLoadingNews(false);
        }
        loadNews().then(result => {
        });


    }, [])

    return (
        <LayoutComponent navigation={navigation} route={route} showBottomNav={true} showBack={false} showCart={false} title={'News'}
                         pageContent={
                             <View>
                                 {loadingNews && (
                                     <View style={NewsStyle.stack}>
                                         <Skeleton style={NewsStyle.stackItem} width={NewsStyle.stackItem.width}
                                                   height={NewsStyle.stackItem.height}/>
                                         <Skeleton style={NewsStyle.stackItem} width={NewsStyle.stackItem.width}
                                                   height={NewsStyle.stackItem.height}/>
                                         <Skeleton style={NewsStyle.stackItem} width={NewsStyle.stackItem.width}
                                                   height={NewsStyle.stackItem.height}/>
                                     </View>
                                 )}
                                 {!loadingNews && news && (
                                     <View style={NewsStyle.stack}>
                                         {news.map(item => (
                                             <TouchableOpacity key={item.id + 'btn'} onPress={()=>{onArticleClick(item)}}>
                                                 <Card key={item.id}
                                                       wrapperStyle={{elevation: themeVariables.shadow.big}}
                                                       containerStyle={NewsStyle.stackItem}>
                                                     <Card.Title>{item.title}</Card.Title>
                                                     <Card.Divider/>
                                                     <Card.Image
                                                         style={{padding: 0}}
                                                         source={{
                                                             uri: getContentFieldByName('Image',item),
                                                         }}
                                                     />
                                                     <Card.Divider/>
                                                     <Text style={NewsStyle.description}>
                                                         {getContentFieldByName('Description',item)}
                                                     </Text>
                                                 </Card>
                                             </TouchableOpacity>
                                         ))}
                                     </View>
                                 )}
                             </View>
                         }
        ></LayoutComponent>

    );

}

export default NewsScreen;
