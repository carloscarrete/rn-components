import { View, Text, useWindowDimensions, Image, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { ImageSourcePropType } from 'react-native'
import { colors } from '../../../config/theme/theme'
import { FlatList } from 'react-native'
import Button from '../../components/ui/Button'
import { ThemeContext } from '../../context/ThemeContext'

interface Slide {
    title: string,
    desc: string,
    image: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Title 1',
        desc: 'Description 1',
        image: require('../../assets/slide-1.png')
    },
    {
        title: 'Title 2',
        desc: 'Description 2',
        image: require('../../assets/slide-2.png')
    },
    {
        title: 'Title 3',
        desc: 'Description 3',
        image: require('../../assets/slide-3.png')
    },
]


const SlidesScreen = () => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null); // Corregido el tipo de FlatList

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const index = Math.round(contentOffset.x / layoutMeasurement.width);
        setCurrentSlideIndex(index > 0 ? index : 0);
    }

    const scrollToSlide = (index:number) => {
        if (!flatListRef.current) return;
        flatListRef.current.scrollToIndex({
            index,
            animated: true
        })
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background
        }}>
            <FlatList
                ref={flatListRef}
                data={items}
                renderItem={({ item }: { item: Slide }) => <SlideItem item={item} />}
                keyExtractor={item => item.title}
                horizontal
                pagingEnabled
                decelerationRate={'fast'}
                scrollEnabled={false}
                onScroll={onScroll}
            />


            {
                currentSlideIndex !== items.length - 1
                    ? <Button text='Siguiente'
                        onPress={() => scrollToSlide(currentSlideIndex+1)}
                        styles={{
                            marginTop: 20,
                            position: 'absolute',
                            bottom: 90,
                            right: 30,
                            width: 120
                        }}
                    />
                    : <Button text='Finalizar'
                        onPress={() => {
                            
                         }}
                    />
            }
        </View>
    )
}

export default SlidesScreen

interface SlideItemProps {
    item: Slide
}

const SlideItem = ({ item }: SlideItemProps) => {

    const { height, width } = useWindowDimensions()
    const {color} = useContext(ThemeContext);


    return (
        <View style={{
            flex: 1,
            backgroundColor: color.cardBackground,
            borderRadius: 5,
            padding: 40,
            justifyContent: 'center',
            width
        }}>

            <Image
                source={item.image}
                style={{
                    width: width * 0.7,
                    height: width * 0.7,
                    resizeMode: 'center',
                    alignSelf: 'center'
                }}
            />

            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: colors.primary
            }}>
                {item.title}
            </Text>

            <Text style={{
                fontSize: 16,
                color: colors.primary
            }}>
                {item.desc}
            </Text>
        </View>
    )
}