import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { useRef } from 'react'
import Colors from '@/constants/Colors'
import destinationCategories from '@/data/categories'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    onCategoryChange: (category: string) => void
}

const CategoryButtons = ({ onCategoryChange }: Props) => {

    const itemRef = useRef<TouchableOpacityProps[] | null[]>([])
    const [selectedCategory, setSelectedCategory] = React.useState(0)

    const handleSelectCategory = (index: number) => {
        const selected = itemRef.current[index]
        setSelectedCategory(index)

        onCategoryChange(destinationCategories[index].title)
    }
    return (
        <View>
            <Text style={styles.title}>Categorias</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingVertical: 5, marginBottom: 5 }}>
                {destinationCategories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        ref={(el) => itemRef.current[index] == el}
                        onPress={() => handleSelectCategory(index)}
                        style={selectedCategory === index ? styles.categoryActive : styles.categoryContainer}>
                        <MaterialIcons name={category.iconName} size={24} color={selectedCategory === index ? Colors.white : Colors.black} />
                        <Text style={selectedCategory === index ? styles.categoryTitleActive : styles.categoryTitle}>{category.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default CategoryButtons

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 700,
        color: Colors.black
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2
    },
    categoryTitle: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: 700,
        color: Colors.black
    },
    categoryTitleActive: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: 700,
        color: Colors.white
    },
    categoryImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 10,
        overflow: 'hidden'
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    categoryActive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2
    }
})