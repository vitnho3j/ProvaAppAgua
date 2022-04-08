import { StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const estilos = StyleSheet.create({
    image:{
        width: "50%",
        height: 200,
        alignSelf:"center"
    },
    form:{
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: "100%",  
        opacity:0.7 ,
        height:"100%",
 
          
    },
    inputDescription:{
        backgroundColor: "#999",
        borderRadius: 9,
        height:90

    },
    textButtonCamera:{

    },
    input:{
        backgroundColor: "#999",
        borderRadius: 9,
        height: 35

    },
    label:{
        fontSize: 18,
        lineHeight: 40,
    },
    button:{
        marginTop: 10,
        backgroundColor: "black",
        borderRadius: 300,
        height: 60,
        color: "white",
        width:80,
        alignSelf:"center"
    },
    buttonText:{
      marginTop:6,
      fontSize: 20,
      paddingTop:10,
      alignSelf:"center"

    },
    result:{
        alignItems: "center"
    }

 
})
