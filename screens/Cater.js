import { View, Text, Modal,Pressable,FlatList, Dimensions, TouchableOpacity  } from 'react-native'
import CheckBox from 'react-native-check-box'
import React,{useState} from 'react'
import {styles} from "./styles";
import { MenuItem } from '../components/MenuItem';
import { alldata } from '../data/alldata';


export const Caters=(props)=> {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [menu,setMenu]=useState([])
  const checkValue=(value)=>{
    if (checkedItems.includes(value)) {
      // Value already exists, remove it from the array
      setCheckedItems(prevItems => prevItems.filter(item => item !== value));
    } else {
      // Value does not exist, add it to the array
      setCheckedItems(prevItems => [...prevItems, value]);
    }
    console.log(checkedItems)
  }
  return (
    <View>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>The Asif Cafe</Text>
        </View>
      <View style={styles.menuTitleContainer}>
      <Text style={styles.menutitle}>Caters</Text>
      <Text style={styles.menutitleCaption}>Select Caters</Text>
     
      </View>
      <View style={styles.menuItemContainer}>
      <Text>Number of Cock</Text>
      <Text>Server </Text>
      <Text>Male </Text>
      <Text>Female</Text>
       
        
      </View>
      <View style={styles.multiButton}>
      <TouchableOpacity style={styles.smallBtn} onPress={()=>props.navigation.navigate("home")} activeOpacity={0.8}>
          <Text style={styles.closeBtnTxt}>Back</Text>
         </TouchableOpacity>
      <TouchableOpacity style={styles.smallBtn}  onPress={()=>props.navigation.navigate("cater")} activeOpacity={0.8}>
          <Text style={styles.closeBtnTxt}>Next</Text>
         </TouchableOpacity>
      </View>
      <View>
        
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <View style={styles.closeView}>
            <Text style={styles.modelTitle}>Select Falavors</Text>
           <Pressable
              style={styles.closeBtn}
              onPress={() => setModalVisible(!modalVisible)}>
             <Text style={styles.closeBtnText}>X</Text>
            </Pressable>
           </View>
          <View style={styles.modelItmesContainer}>
               <FlatList
        data={menu}
        renderItem={({item}) =>   <CheckBox
        style={styles.checkBoxStyle}
        isChecked={checkedItems.includes(item)}
        onClick={()=>checkValue(item)}
        rightText={item}
        
        rightTextStyle={{fontSize:20,color: checkedItems.includes(item) ? "#2274E0" : "#333"}}
        checkedCheckBoxColor='#2274E0'
        uncheckedCheckBoxColor='#333'
   />}
        style={styles.flatlist}
       
      /> 
             
         <TouchableOpacity style={styles.closeBtn} onPress={()=>setModalVisible(!modalVisible)} activeOpacity={0.8}>
          <Text style={styles.closeBtnTxt}>Save</Text>
         </TouchableOpacity>
           
          </View>
          </View>
        </View>
      </Modal>
      </View>
      
    </View>
  )
}