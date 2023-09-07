import { View, Text, Modal,Pressable,FlatList, TouchableOpacity,Image} from 'react-native'
import {Picker} from '@react-native-picker/picker';

import CheckBox from 'react-native-check-box'
import React,{useState} from 'react'
import {styles} from "./styles";
import {caterStyle as ct} from '../styles/caterstyles';



export const Caters=(props)=> {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [cooks,setCooks]=useState('')
  const [male,setMale]=useState('')
  const [female,setFemale]=useState('')
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
      <View style={ct.centerContainer}>
        <Image source={require('../assets/images/catering.png')}  style={ct.caterLogo}/>
      </View>
      <View style={ct.columnForm}>
      <Text style={ct.columnFormLabel}>Select No Cooks</Text>
      <Picker
        prompt="Select Numbered Cooks"   
        selectedValue={cooks}
       style={{padding:0,margin:0,}}
        onValueChange={(itemValue, itemIndex) =>
          setCooks(itemValue)    }
          
      >
        <Picker.Item label="1" value={1}  />
        <Picker.Item label="2" value={2}  />
        <Picker.Item label="3" value={3}  />
        <Picker.Item label="4" value={4}  />
        <Picker.Item label="5" value={5}  />
        <Picker.Item label="6" value={6}  />
        <Picker.Item label="7" value={7}  />
        <Picker.Item label="8" value={8}  />
        <Picker.Item label="9" value={9}  />
       
        {/* Add more Picker.Item elements as needed */}
      </Picker>
     
       
        
      </View>
      <View style={ct.columnForm}>
      <Text style={ct.columnFormLabel}>Select No Maids</Text>
      <View style={ct.colTow}>
        <View style={ct.w50}>
        <Text style={ct.columnFormLabel}>Males</Text>
        <Picker
        prompt="Select Number of Male"    
        selectedValue={male}
       style={{padding:0,margin:0,}}
        onValueChange={(itemValue) =>
          setMale(itemValue)    }
          
      >
        <Picker.Item label="1" value={1}  />
        <Picker.Item label="2" value={2}  />
        <Picker.Item label="3" value={3}  />
        <Picker.Item label="4" value={4}  />
        <Picker.Item label="5" value={5}  />
        <Picker.Item label="6" value={6}  />
        <Picker.Item label="7" value={7}  />
        <Picker.Item label="8" value={8}  />
        <Picker.Item label="9" value={9}  />
       
        {/* Add more Picker.Item elements as needed */}
      </Picker>
        </View>
        <View style={ct.w50}>
        <Text style={ct.columnFormLabel}>Females</Text>
        <Picker
        prompt="Select Number of Female"   
        selectedValue={female}
       style={{padding:0,margin:0,}}
        onValueChange={(itemValue, itemIndex) =>
          setFemale(itemValue)    }
          
      >
        <Picker.Item label="1" value={1}  />
        <Picker.Item label="2" value={2}  />
        <Picker.Item label="3" value={3}  />
        <Picker.Item label="4" value={4}  />
        <Picker.Item label="5" value={5}  />
        <Picker.Item label="6" value={6}  />
        <Picker.Item label="7" value={7}  />
        <Picker.Item label="8" value={8}  />
        <Picker.Item label="9" value={9}  />
       
        {/* Add more Picker.Item elements as needed */}
      </Picker>
        </View>
      </View>
      
      {/* <Text>Number of Cock</Text>
      <Text>Server </Text>
      <Text>Male </Text>
      <Text>Female</Text> */}
       
        
      </View>
      <View style={styles.multiButton}>
      <TouchableOpacity style={styles.smallBtn} onPress={()=>props.navigation.navigate("home")} activeOpacity={0.8}>
          <Text style={styles.closeBtnTxt}>Back</Text>
         </TouchableOpacity>
      <TouchableOpacity style={styles.smallBtn}  onPress={()=>props.navigation.navigate("cater")} activeOpacity={0.8}>
          <Text style={styles.closeBtnTxt}>Next</Text>
         </TouchableOpacity>
      </View>
      
    </View>
  )
}