import React from 'react';
import Colors from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => { }} style={{ width: 40, height: 40, marginLeft: 10 }}>
              <Image source={{ uri: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" }} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => { }} style={{ width: 40, height: 40, marginRight: 10 }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  shadowColor: '#171717',
                  shadowOffset: { width: 2, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 4
                }}>
                <MaterialIcons name="notifications" size={24} color={Colors.black} />
              </TouchableOpacity>
            </TouchableOpacity>
          )
        }} />
      <View>
        <Text>Teste</Text>
      </View>
    </>
  );
}
