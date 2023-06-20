 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Caters } from './screens/Cater';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="cater" component={Caters} />
    </Stack.Navigator>

  </NavigationContainer>
  );
}


