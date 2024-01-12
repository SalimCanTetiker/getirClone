import { View, FlatList, Image } from 'react-native'
import React, { useState } from 'react'

import styles from './ProductImages.style';

const ProductImages = ({images}:{images:string[]}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const onViewRef = React.useRef((viewableItems) => {
        if (viewableItems.viewableItems.length > 0) {
            setActiveIndex(viewableItems.viewableItems[0].index || 0);
        }
    });
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                style={styles.flatList}
                renderItem={(item) => (
                    <Image
                        source={{ uri: item.item }}
                        style={styles.image}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
            />
            <View style={styles.dots}>
                {images.map((image, index) => (
                    <View key={index} style={[styles.dot, { backgroundColor: index === activeIndex ? '#5D3EBD' : '#F2F0FD' }]} />
                ))}
            </View>
        </View>
    )
}

export default ProductImages