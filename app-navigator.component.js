import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/login/login.screen";
import HomeScreen from "./screens/home/home.screen";
import ProductViewScreen from "./screens/product-view/product-view.screen";
import CartScreen from "./screens/cart/cart.screen";
import LandingScreen from "./screens/landing/landing.screen";
import StoreScreen from "./screens/store/store.screen";
import NewsScreen from "./screens/news/news.screen";
import NewsArticleScreen from "./screens/news/news-article/article.screen";


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{ headerShown: false }}  name="Login"  component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }}  name="Landing"  component={LandingScreen} />
            <Stack.Screen options={{ headerShown: false }}  name="Store"  component={StoreScreen} />
            <Stack.Screen options={{ headerShown: false }}  name="News"  component={NewsScreen} />
            <Stack.Screen options={{ headerShown: false }}  name="Article"  component={NewsArticleScreen} />
            <Stack.Screen options={{ headerShown: false }}  name="Product"  component={ProductViewScreen} />
            <Stack.Screen options={{ headerShown: false }}  name="Cart"  component={CartScreen} />
            {/* Add other screens as needed */}
        </Stack.Navigator>
    );
};

export default AppNavigator;
