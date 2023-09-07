 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Caters } from './screens/Cater';
import { UserInfo } from './screens/UserInfo';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="cater" component={Caters} />
      <Stack.Screen name="userInfo" component={UserInfo} />
    </Stack.Navigator>

  </NavigationContainer>
  );
}


