import React from 'react'
import { View, Text, StyleSheet, FlatList, ListRenderItem, TouchableOpacity, Image } from 'react-native'
import { ListingsType } from '@/types/listingsType'
import Colors from '@/constants/Colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {
    listings: any[]
}

const Listings = ({ listings }: Props) => {

    const renderItem: ListRenderItem<ListingsType> = ({ item }) => (

        <Link href={`/listings/${item.id}`}>
            <TouchableOpacity>
                <View style={styles.item}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image} />
                    <View style={styles.bookmark}>
                        <Ionicons name="bookmark-outline" size={24} color={Colors.white} />
                    </View>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.itemText}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="map-marker-alt" size={18} color={Colors.primary} />
                            <Text style={{ marginLeft: 6 }}>{item.location}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="star" size={18} color={Colors.primary} />
                            <Text style={{ marginLeft: 6 }}>{item.rating}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )


    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={listings}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Listings

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 220
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 30
    },
    bookmark: {
        position: 'absolute',
        top: 185,
        right: 25,
        padding: 6,
        backgroundColor: Colors.primary,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    itemText: {
        fontSize: 20,
        fontWeight: 600,
        color: Colors.black,
        marginBottom: 10
    }
})