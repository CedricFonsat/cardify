import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStack } from './MainStack';


const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
          <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Main" component={MainStack} />
          </Stack.Navigator>
      );
}