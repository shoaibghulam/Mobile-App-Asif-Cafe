import { View, Text, Modal,Pressable,FlatList, Dimensions, TouchableOpacity  } from 'react-native'
import CheckBox from 'react-native-check-box'
import React,{useState} from 'react'
import {styles} from "./styles";
import { MenuItem } from '../components/MenuItem';
import { alldata } from '../data/alldata';
import PropTypes from 'deprecated-react-native-prop-types';


export const Home=(props)=> {
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
      <Text style={styles.menutitle}>Menu</Text>
      <Text style={styles.menutitleCaption}>Select Menu Itmes</Text>
     
      </View>
      <View style={styles.menuItemContainer}>
      {/* <FlatList
        data={alldata}
        renderItem={({item}) =>  <MenuItem 
        id={item.id}
        title={item.title}
        image={item.image}
        onPress={()=>setModalVisible(!modalVisible)}
        />}
        style={styles.flatlist}
      /> */}
      {alldata.map((e)=><MenuItem key={e.id} 
     title={e.title}
     image={e.image}
     onPress={()=>{setModalVisible(!modalVisible); setMenu(e.menu)}}
     /> )}
     
       
        
      </View>
      <View style={styles.screenNextBtn}>
      <TouchableOpacity style={styles.closeBtn} onPress={()=>props.navigation.navigate("cater",{menu:checkedItems})} activeOpacity={0.8}>
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
              style={styles.closeBtnicon}
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