import { StyleSheet,Dimensions } from "react-native";

export const menustyle= StyleSheet.create({
    menuItems:{
        flexDirection:"row",
        // width:Dimensions.get("window").width/2.1,
        width:Dimensions.get("window").width,
        height:75,
        alignItems:"center",
        justifyContent:"flex-start"

    },
    menuItemImage:{
        width:70,
        height:70,
        resizeMode:"contain",
        // alignItems:"center",
        // marginLeft:8,
    },
    menuItemTitle:{
        color:"#fff",
        fontSize:22,
        // textAlign:"center",
       paddingTop:10,
       paddingLeft:10,
    },
    color1:{
        backgroundColor:"#D35A9D"
    },
    color2:{
        backgroundColor:"#31C9A3"
    },
    color3:{
        backgroundColor:"#0085ad"
    }
})