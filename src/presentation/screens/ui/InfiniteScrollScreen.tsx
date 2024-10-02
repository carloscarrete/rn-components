import { View, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import { colors } from '../../../config/theme/theme';
import FadeInImage from '../../components/ui/FadeInImage';

const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);
    const [loading, setLoading] = useState(false);

    const loadMoreNumbers = () => {
        if (!loading) {
            setLoading(true);
            setTimeout(() => {
                const newNumbers = [
                    numbers.length,
                    numbers.length + 1,
                    numbers.length + 2,
                ];
                setNumbers([...numbers, ...newNumbers]);
                setLoading(false);
            }, 1500);  // Reduce el tiempo de espera para mejorar la experiencia
        }
    };

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={styles.footer}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Title text='Infinite Scroll' />
            <FlatList
                data={numbers}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <ListItem number={item} />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={loadMoreNumbers}
                onEndReachedThreshold={0.3}  // Ajuste para cargar más rápido al acercarse al final
                ListFooterComponent={renderFooter}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

interface Props {
    number: number;
}

const ListItem = ({ number }: Props) => {
    return (

        <FadeInImage 
            uri={`https://picsum.photos/id/${number}/200/300`}
            style={styles.image}
         />

    //     <Image
    //        source={{ uri: `https://picsum.photos/id/${number}/200/300` }}
    //        style={styles.image}
    //    /> 

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.74)',  // Fondo negro como lo solicitaste
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    itemContainer: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        marginVertical: 15,
        shadowColor: '#fff',  // Sombras sutiles para dar profundidad
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        overflow: 'hidden',  // Asegura que los bordes estén bien redondeados
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,  // Asegura que la imagen también tenga bordes redondeados
    },
    footer: {
        paddingVertical: 20,
    }
});

export default InfiniteScrollScreen;
