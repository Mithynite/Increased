import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import HomeScreen from '../../screens/home-screen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    title: "Home", 
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    ),
                }}
            />
            {/* Add more Tab.Screen components for other screens here */}
        </Tab.Navigator>
    )
}
