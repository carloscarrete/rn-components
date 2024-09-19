import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import CustomSwitch from '../../components/ui/CustomSwitch'
import Separetor from '../../components/ui/Separetor'

const SwitchScreen = () => {

    //const [isEnabled, setIsEnable] = useState(false);
    //const toggleSwitch = () => setIsEnable(prevState => !prevState);
    const [state, setState] = useState({
        isActive: true,
        debugMode: false,
        alwaysUpdate: true
    })

    return (
        <CustomView style={{ marginTop: 50, paddingHorizontal: 10 }}>
            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    onChange={(value) => setState({ ...state, isActive: value })}
                    text='Encendido' />
                <Separetor />

                <CustomSwitch
                    text='Debud Mode'
                    isOn={state.debugMode}
                    onChange={(value) => setState({ ...state, debugMode: value })
                    }
                />
                <Separetor />
                <CustomSwitch
                    text='Always Update'
                    isOn={state.alwaysUpdate}
                    onChange={(value) => setState({ ...state, alwaysUpdate: value })
                    }
                />
            </Card>
        </CustomView>
    )
}

export default SwitchScreen