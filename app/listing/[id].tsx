import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { ListingsType } from '@/types/listingsType'
import ListingData from '@/data/destinations.json'
import { Feather, FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'

const { width } = Dimensions.get('window')
const IMG_HEIGHT = 300

const ListingDetails = () => {
    const { id } = useLocalSearchParams()
    const listing: ListingsType = (ListingData as ListingsType[]).find(
        (item) => item.id === Number(id)
    )

    const route = useRouter()

    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginTop: 16, marginLeft: 8, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 10, padding: 6 }}
                            onPress={() => { route.back() }}>
                            <View style={{ backgroundColor: Colors.white, padding: 6, borderRadius: 8 }}>
                                <Feather name="arrow-left" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ marginTop: 16, marginLeft: 8, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 10, padding: 6 }} onPress={() => { }}>
                            <View style={{ backgroundColor: Colors.white, padding: 6, borderRadius: 8 }}>
                                <Ionicons name="bookmark-outline" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
            <View style={styles.container}>
                <Animated.ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
                    <Animated.Image source={{ uri: listing.image }} style={styles.image} />
                    <View style={styles.contentWrapper}>
                        <Text style={styles.listingName}>{listing.name}</Text>
                        <View style={styles.listingLocation}>
                            <FontAwesome5 name="map-marker-alt" size={18} color={Colors.primary} />
                            <Text style={styles.listingLocationText}>{listing.location}</Text>
                        </View>
                        <View style={styles.listingWrapperDuration}>
                            <View style={styles.listingDuration}>
                                <View style={styles.listingDurationItem}>
                                    <View style={styles.listingDurationItemIcon}>
                                        <Ionicons name="time" size={18} color={Colors.primary} />
                                    </View>
                                    <View>
                                        <Text style={styles.dutationText}>Duração</Text>
                                        <Text style={styles.durationTime}>{listing.duration} Dias</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.listingDuration}>
                                <View style={styles.listingDurationItem}>
                                    <View style={styles.listingDurationItemIcon}>
                                        <FontAwesome name="users" size={18} color={Colors.primary} />
                                    </View>
                                    <View>
                                        <Text style={styles.dutationText}>Pessoas</Text>
                                        <Text style={styles.durationTime}>{listing.duration}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.listingDuration}>
                                <View style={styles.listingDurationItem}>
                                    <View style={styles.listingDurationItemIcon}>
                                        <Ionicons name="star" size={18} color={Colors.primary} />
                                    </View>
                                    <View>
                                        <Text style={styles.dutationText}>Pontuação</Text>
                                        <Text style={styles.durationTime}>{listing.rating}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.listingDescription}>{listing.description}</Text>
                    </View>
                </Animated.ScrollView>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerBtn}>
                    <Text style={styles.footerBtnText} > Reservar agora</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            </View >
        </>
    )
}

export default ListingDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentWrapper: {
        padding: 20,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        flex: 1,
    },
    image: {
        width: width,
        height: IMG_HEIGHT,
        resizeMode: 'cover',
    },
    listingName: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        letterSpacing: 0.5,
    },
    listingLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 5,
    },
    listingLocationText: {
        fontSize: 16,
        marginLeft: 5,
        color: Colors.black,
    },
    listingWrapperDuration: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    listingDuration: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    listingDurationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listingDurationItemIcon: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
    },
    dutationText: {
        fontSize: 12,
        color: "#777",
        fontWeight: '600'
    },
    durationTime: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.black,
    },
    listingDescription: {
        textAlign: 'justify',
        fontSize: 16,
        color: Colors.black,
        marginBottom: 20,
        lineHeight: 24,
    },
    footer: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 20,
        borderColor: '#eee',
    },
    footerBtn: {
        width: width,
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerBtnText: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.white,
    }
})