import { View, Text,TouchableOpacity,Image} from 'react-native'
import {Picker} from '@react-native-picker/picker';

import React,{useState} from 'react'
import {styles} from "./styles";
import {caterStyle as ct} from '../styles/caterstyles';



export const Caters=(props)=> {
  const { menu } = props.route.params;
  // console.log("My Menu is ",menu)
  const [cooks,setCooks]=useState('')
  const [male,setMale]=useState('')
  const [female,setFemale]=useState('')
  const [servant,setServant]=useState({
    cooks:0,
    male:0,
    female:0,
  })
  console.log(servant)
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
        selectedValue={servant.cooks}
        onValueChange={(itemValue) =>
          setServant({
            ...servant,
             cooks:itemValue,
                      })}
                      
          itemStyle={{textAlign:"right"}}
          placeholder="Choose Service"
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
      <View style={ct.columnContainer}>
      <Text style={ct.columnFormLabel}>Select No Maids</Text>
      <View style={ct.colTow}>
        <View style={ct.w50}>
        <Text style={ct.columnFormLabel}>Males</Text>
        <Picker
        prompt="Select Number of Male"    
        selectedValue={servant.male}
        onValueChange={(itemValue) =>
          setServant({
            ...servant,
             male:itemValue,
                      })}
          
          style={{padding:0,margin:0,}}
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
        selectedValue={servant.female}
        onValueChange={(itemValue) =>
          setServant({
            ...servant,
             female:itemValue,
                      })}
          style={{padding:0,margin:0,}}
          
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
      <TouchableOpacity style={styles.smallBtn}  onPress={()=>props.navigation.navigate("userInfo")} activeOpacity={0.8}>
          <Text style={styles.closeBtnTxt}>Next</Text>
         </TouchableOpacity>
      </View>
      
    </View>
  )
}