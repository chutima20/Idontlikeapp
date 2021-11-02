import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import {Button, View, Text, StyleSheet, TextInput,Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
return (
    <Tab.Navigator
    
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#22b6c7',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'หน้าแรก') {
              iconName = focused ? 'md-home' : 'md-home-outline';
            } else if (route.name === 'เกี่ยวกับเรา') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'บริการของเรา') {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (route.name === 'ติดต่อเรา') {
              iconName = focused ? 'ios-call' : 'ios-call-outline';
            } else if (route.name === 'สมัครสมาชิก') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'เข้าสู่ระบบ') {
              iconName = focused ? 'body' : 'body-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={"green"} />;
          },
          //tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',

        })}

    >
          <Tab.Screen name="หน้าแรก" component={TabA} options={{ headerShown: false }}/>
          <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
          <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
          <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
          <Tab.Screen name="สมัครสมาชิก" component={TabE} options={{ headerShown: false }}/>
          <Tab.Screen name="เข้าสู่ระบบ" component={TabF} options={{ headerShown: false }}/>
    </Tab.Navigator>
);
}

function TabA({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        ยินดีต้อนรับสู่หน้าหลักเนอะจ้าว
      </Text>
      <Image
    source={require('./assets/123.jpg')}
    style={{
                  width: 200,
                  height: 330,
                  borderRadius: 200,
                }}
    />
    </View>
  );
}


function TabB({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
      ยินดีต้อนรับเข้าสู่ข้อมูลเกี่ยวกับเราเนอะจ้าว
      </Text>
    </View>
  );
}

function TabC({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
      ยินดีต้อนรับสู่หน้าการบริการของทางเราเนอะจ้าว
      </Text>
      <Image
    source={require('./assets/Ganyu.png')}
    style={{
                  width: 200,
                  height: 330,
                  borderRadius: 200,
                }}
    />
    </View>
  );
}

function TabD({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        ยินดีต้อนรับเข้าสู่หน้าการติดต่อเนอะจ้าว
      </Text>
    </View>
  );
}

function TabE({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        ยินดีต้อนรับเข้าสู่หน้าการสมัครเนอะจ้าว
      </Text>
      <TextInput
    
        onChangeText ={username=>this.setState({username})}
            placeholder="  ชื่อ" 
          style={{
            backgroundColor: '#F5DEB3',
            padding: 10,
            width: '60%',
            marginTop: 20,
            fontSize: 15,
            borderRadius : 15,

          }}
        />
        <TextInput
        onChangeText ={username=>this.setState({username})}
          placeholder="อีเมล"
          style={{
            backgroundColor: '#F5DEB3',
            padding: 10,
            width: '60%',
            marginTop: 15,
            fontSize: 15,
            borderRadius : 1,
            
          }}
        />
        <TextInput
        onChangeText ={username=>this.setState({username})}
          placeholder="เบอร์โทรศัพ"
          style={{
            backgroundColor: '#F5DEB3',
            padding: 10,
            width: '60%',
            marginTop: 15,
            fontSize: 15,
            borderRadius : 15,
            
          }}
        />
        <TextInput
        onChangeText ={username=>this.setState({username})}
          placeholder="ที่อยู่"
          style={{
            backgroundColor: '#F5DEB3',
            padding: 10,
            width: '60%',
            marginTop: 15,
            fontSize: 15,
            borderRadius : 1,
           
          }}
        />
   
          <TextInput
        onChangeText={password=>this.setState({password})}
          placeholder="รหัสผ่าน"
          secureTextEntry={true}
          style={{
            backgroundColor: '#F5DEB3',
            padding: 10,
            width: '60%',
            marginTop: 15,
            fontSize: 15,
            borderRadius : 1,
    
          }}
        />
    </View>
  );
}

function TabF({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        ยินดีต้อนรับเข้าสู่หน้าการเข้าสู่ระบบเนอะจ้าว
      </Text>
      <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'Username'}
    />

    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'Password'}
    />

    <Button
          title={'Login'}
          style={styles.input}
          onPress={""}
    />
    </View>
  );
  
}


export default function App() {
return(

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="หน้าแรก" component={HomeScreen}/>
        <Drawer.Screen name="เกี่ยวกับเรา" component={TabB} />
        <Drawer.Screen name="บริการของเรา" component={TabC} />
        <Drawer.Screen name="ติดต่อเรา" component={TabD} />
        <Drawer.Screen name="สมัครสมาชิก" component={TabE} />
        <Drawer.Screen name="เข้าสู่ระบบ" component={TabF} />
      </Drawer.Navigator>
    </NavigationContainer>

  /*
    <NavigationContainer>
    <HomeScreen />
  </NavigationContainer>
  */
);
}
const styles = StyleSheet.create({
  Container : {
    backgroundColor: 'skyblue',
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    backgroundColor: '#FFF',
    width: 200,
    borderRadius: 20,
    padding: 5,
  },
 }
 );