import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import { Home, Settings } from 'lucide-react-native' 

const Tab = createBottomTabNavigator();



export const MainStack = () => {
  return (
    <Tab.Navigator screenOptions={
      {
        headerShown: false,
        tabBarActiveTintColor: "#00A3FF",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: "#191923",
            borderTopWidth: 1,
            borderTopColor: 'rgba(0, 0, 0, 0.5)',
          },
          null
        ]
      
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{

         tabBarIcon: ({ color, size }) => (
          <Home color={color} size={size}/>
         ),
      }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{

tabBarIcon: ({ color, size }) => (
 <Settings color={color} size={size}/>
),
}} />
    </Tab.Navigator>
  );
}