import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import Title from '../../components/ui/Title'
import Button from '../../components/ui/Button'

const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)


    return (
        <CustomView margin>
            <Title text='Modal' safe />

            <Button text='Abrir Modal' onPress={() => { setIsVisible(true) }} />

            <Modal
                visible={isVisible}
                animationType='slide'
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center', 
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                    <View style={{
                        paddingHorizontal: 10,
                        backgroundColor: 'rgb(63, 78, 212)'
                    }}>
                        <Title text='Contenido interesante' safe />
                    </View>
                    <View style={{
                    }}>

                    </View>

                    <Button text='Cerrar Modal' onPress={()=>setIsVisible(false)}/>
                </View>
            </Modal>
        </CustomView>
    )
}

export default ModalScreen