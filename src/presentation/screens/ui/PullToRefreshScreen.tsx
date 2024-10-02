import { View, Text, RefreshControl } from 'react-native'
import React, { useContext, useState } from 'react'
import Title from '../../components/ui/Title'
import CustomView from '../../components/ui/CustomView'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext'

const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const { top } = useSafeAreaInsets();
    const { color } = useContext(ThemeContext);


    const onRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false)
        }, 2000)
    }

    return (
        <ScrollView
            style={{backgroundColor:color.background}}
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    onRefresh={onRefresh}
                    colors={
                        [colors.primary, 'orange', 'blue', 'green']
                    }
                    style={[globalStyles.mainContainer, globalStyles.globalMargin]}
                />
            }>
            <CustomView margin>
                <Title text='Pull To Refresh' safe />
            </CustomView>
        </ScrollView>
    )
}

export default PullToRefreshScreen