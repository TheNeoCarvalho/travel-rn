import { View, Text, StyleSheet, FlatList, ListRenderItem, Image } from 'react-native'
import React from 'react'
import { GroupTypes } from '@/types/groupTypes'
import Colors from '@/constants/Colors'
import { MaterialIcons } from '@expo/vector-icons'

const GroupListings = ({ listings }: { listings: GroupTypes[] }) => {

    const renderItem: ListRenderItem<GroupTypes> = ({ item }) => (
        <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginVertical: 4, marginLeft: 8 }}>
                <Text>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                    <MaterialIcons name="star" size={18} color={Colors.primary} />
                    <Text style={{ fontWeight: '700' }}>{item.rating}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '300', color: '#999', marginLeft: 4 }}>({item.reviews})</Text>
                </View>
            </View>
        </View>
    )

    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={styles.title}>Agências de Viagens</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={listings}
                renderItem={renderItem}
            />
        </View >
    )
}

export default GroupListings

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 10,
        marginHorizontal: 8,
        flexDirection: 'row',
    },
    title: {
        fontSize: 22,
        fontWeight: 700,
        color: Colors.black,
        marginVertical: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    }
})

