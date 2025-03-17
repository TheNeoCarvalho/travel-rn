import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements'
import CategoryButtons from '@/components/CategoryButtons';
import Listings from '@/components/Listings';
import ListingData from '@/data/destinations.json';
import GroupData from '@/data/groups.json';
import GroupListings from '@/components/GroupListings';

export default function HomeScreen() {

  const [category, setCategory] = useState('Todos');
  const headerHeight = useHeaderHeight();

  const onCategoryChange = (category: string) => {
    setCategory(category);
  }

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
                <MaterialIcons name="notifications" size={24} color={Colors.primary} />
              </TouchableOpacity>
            </TouchableOpacity>
          )
        }} />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Explore os lugares mais bonitos do Brasil!</Text>
          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <MaterialIcons style={{ marginRight: 5 }} name='search' size={24} color={Colors.black} />
              <TextInput style={{ width: '90%' }} placeholder='Buscar..' />
            </View>
            <TouchableOpacity style={styles.filterBtn} onPress={() => { }}>
              <Ionicons name='options' size={24} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <CategoryButtons onCategoryChange={onCategoryChange} />
          <Listings listings={ListingData} />
          <GroupListings listings={GroupData} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  filterBtn: {
    backgroundColor: Colors.primary,
    padding: 12,
    marginLeft: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
