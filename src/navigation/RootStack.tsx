import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import { MainStack } from './MainStack';


const Stack = createNativeStackNavigator();

export const RootStack = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name="App" component={AppStack} />
            <Stack.Screen name="Auth" component={AuthStack} />
          
          </Stack.Navigator>
        </NavigationContainer>
      );
}