import { Dimensions, StyleSheet } from 'react-native';
export const styles=StyleSheet.create({
    header:{
        backgroundColor:"#2274E0",
        height:80,
        paddingTop:10,
        alignItems:"center",
        justifyContent:"center",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,

    },
    headerTitle:{
        color:"#ffffff",
        fontSize:30,
        fontWeight:"500"
    },
    menuTitleContainer:{
       padding:20,
    },
    menutitle:{
        fontSize:35,
        fontWeight:"600"
    },
    menutitleCaption:{
        color:"#686868",
        bottom:7,
        left:5,
    },
    menuItemContainer:{
      //  flex:1,
        marginTop:20,
        // flexWrap: 'wrap',
        flexDirection:"column",
        gap:16,
        width:Dimensions.get("window").width,
        

    },
  
    








    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        width:Dimensions.get("window").width,
        position:"absolute",
        bottom:0,
      },
      modalView: {
       
        backgroundColor: '#f1f1f1',
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height/1.2,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15,
        overflow:"hidden",
      },
    
      closeView:{
      
        backgroundColor:"#2274E0",
        flexDirection:"row",
        alignItems:"flex-start",
        width:Dimensions.get('window').width,
        height:50,
        paddingHorizontal:10,
        paddingVertical:10,
      },
      modelTitle:{
        flex:2,
        textAlign:"center",
        fontSize:20,
        color:"#fff",
        fontWeight:"600"
      },
      closeBtnicon: {
        paddingHorizontal:10,
        backgroundColor: '#fff',
        paddingVertical:5,
        borderRadius:140,
      },
      closeBtnText:{
        color:"#2274E0",
        fontSize:17,
      },

      modelItmesContainer:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        // width:300,
        marginTop:10,
        paddingHorizontal:20,
        paddingTop:30,
        paddingBottom:30,
        gap:10,
        width:Dimensions.get("screen").width
      },
      modelItem:{
        // backgroundColor:"#0085ad",
        width:Dimensions.get("window").width,
        paddingHorizontal:40,
        height:50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"#333"
      },
      modelItemTitle:{
        flex:2,
        fontSize:18,
        paddingRight:30,
      },
      checkBoxStyle:{
        width:Dimensions.get("window").width,
       
        // padding:10,
      },
      closeBtn:{
        backgroundColor:"#2274E0",
        padding:20,
        width:"80%",
        alignItems:"center",
        borderRadius:5,
      },
      closeBtnTxt:{
        fontSize:20,
        color:"#fff",
        fontWeight:"600"
      },
      screenNextBtn:{
        position:"relative",
        top:150,
        alignItems:"center",
      },
      multiButton:{ 
      position:"relative",
      flexDirection:"row",
      top:150,
      alignItems:"center",
      paddingHorizontal:20,
      gap:10,
    },
      smallBtn:{
        backgroundColor:"#2274E0",
        padding:20,
        width:"50%",
        alignItems:"center",
        borderRadius:5,
      },
      caterLogo:{
        width:"70%",
       
        resizeMode:"contain",
        alignItems:"center",
        justifyContent:"center"
      }

})