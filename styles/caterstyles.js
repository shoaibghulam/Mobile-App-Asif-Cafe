import { Dimensions, StyleSheet } from 'react-native';
export const caterStyle=StyleSheet.create({
    centerContainer:{
        width:Dimensions.get("window").width,
      
        alignItems:"center",
        justifyContent:"flex-end",
       
    },
    caterLogo:{
        marginTop:20,
        width:200,
        height:200,
        resizeMode:"center",
       
       
       
        
    },
    columnForm:{
        marginTop:20,
       flexDirection:"column",
       justifyContent:"center",
        padding:0,
        borderBottomColor: '#333',
        borderBottomWidth: 1,
    },
    columnFormLabel:{
        paddingLeft:10,
        fontSize:15,
        fontWeight:"500",
    },
    colTow:{
        
        marginTop:20,
        flexDirection:"row",
        gap:10,
        marginBottom: 10,
    },
    w50:{
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        width:Dimensions.get("window").width/2,
    },
    columnContainer:{
        marginTop:20,
   
    },
   
});
