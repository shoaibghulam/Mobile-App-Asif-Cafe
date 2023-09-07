import { View, Text,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView } from 'react-native'
import {Picker} from '@react-native-picker/picker';

import React,{useState} from 'react'
import {styles as main} from "./styles";
import {userstyles as user} from '../styles/userstyles';



export const UserInfo=(props)=> {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

  return (
    <KeyboardAvoidingView  >
     <ScrollView>
        <View style={main.header}>
            <Text style={main.headerTitle}>The Asif Cafe</Text>
        </View>
      
    <View style={user.formContianer}>
    <Text style={user.label}>First Name:</Text>
      <TextInput
        style={user.input}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholder="Enter First Name"
      />
      
      <Text style={user.label}>Last Name:</Text>
      <TextInput
        style={user.input}
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        placeholder="Enter Last Name"
      />

      <Text style={user.label}>Email:</Text>
      <TextInput
        style={user.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter Email"
        keyboardType="email-address"
      />

      <Text style={user.label}>Contact Number:</Text>
      <TextInput
        style={user.input}
        value={contactNumber}
        onChangeText={(text) => setContactNumber(text)}
        placeholder="Enter Contact Number"
        keyboardType="phone-pad"
      />

      <Text style={user.label}>City:</Text>
      <TextInput
        style={user.input}
        value={city}
        onChangeText={(text) => setCity(text)}
        placeholder="Enter City"
      />

      <Text style={user.label}>Address:</Text>
      <TextInput
        style={[user.input, user.multilineInput]}
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="Enter Address"
        multiline
        numberOfLines={4}
      />
    </View>
      <View style={user.multiButton}>
      <TouchableOpacity style={main.smallBtn} onPress={()=>props.navigation.navigate("home")} activeOpacity={0.8}>
          <Text style={main.closeBtnTxt}>Back</Text>
         </TouchableOpacity>
      <TouchableOpacity style={main.smallBtn}  onPress={()=>props.navigation.navigate("cater")} activeOpacity={0.8}>
          <Text style={main.closeBtnTxt}>Submit</Text>
         </TouchableOpacity>
      </View>
      </ScrollView> 
    </KeyboardAvoidingView>
  )
}