import { Text, Image, View } from "react-native";
import { estilos } from '../Style/index';

export default function Title() {
    return (
        <View>
            <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/1846/1846793.png"}} style={estilos.image}/>
        </View>
    );
}
