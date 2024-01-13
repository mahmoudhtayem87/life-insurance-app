import {useState} from "react";
import {Button, Dialog, Icon, Input, Overlay} from "@rneui/base";
import {ActivityIndicator, View} from "react-native";
import LoginStyle from "./login.screen.style";
import banner from '../../assets/images/login/banner.png';
import { Image } from '@rneui/themed';
import {Login} from "../../services/auth.service";

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('admin@salam.com');
    const [password, setPassword] = useState('test');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        let result = await Login(username,password);
        if (result) {
            navigation.navigate('Home',{username:username,password:password});
        }else {
            alert('Invalid user name / password!');
        }
        setIsLoading(false);
    };

    return (
        <View style={LoginStyle.mainContainer}>
                    <Dialog  isVisible={isLoading}>
                        <Dialog.Loading />
                    </Dialog>
            <View style={LoginStyle.bannerContainer}>
                <Image
                    style={LoginStyle.banner}
                    source={banner}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>
            <View style={LoginStyle.view}>
                <Input
                    style={LoginStyle.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    leftIcon={<Icon name="user" type={'font-awesome'}  color={LoginStyle.icon.color} size={20}/>}
                />
                <Input
                    style={LoginStyle.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    leftIcon={<Icon name="lock" color={LoginStyle.icon.color} size={20}/>}
                />
                <View style={LoginStyle.actions}>
                    <Button style={LoginStyle.button} color={LoginStyle.button.backgroundColor} title="Login" disabled={username.length <= 0 || password.length <= 0 } onPress={handleLogin} />
                    <Button style={LoginStyle.button} color={LoginStyle.button.backgroundColor} title="Register" />
                </View>
            </View>
        </View>

    );
};

export default LoginScreen;
