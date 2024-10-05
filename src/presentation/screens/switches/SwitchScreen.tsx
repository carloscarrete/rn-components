import { View, Text, Switch } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import CustomSwitch from '../../components/ui/CustomSwitch'
import Separetor from '../../components/ui/Separetor'
import { ThemeContext } from '../../context/ThemeContext'
import Title from '../../components/ui/Title'

const SwitchScreen = () => {

    //const [isEnabled, setIsEnable] = useState(false);
    //const toggleSwitch = () => setIsEnable(prevState => !prevState);
    const [state, setState] = useState({
        isActive: true,
        debugMode: false,
        alwaysUpdate: true,
        globalTimer: false
    })

    const { color } = useContext(ThemeContext);

    return (
        <CustomView margin>
            <Title text='Switches' />
            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    onChange={(value) => setState({ ...state, isActive: value })}
                    text='Encendido' />
                <Separetor />

                <CustomSwitch
                    text='Debug Mode'
                    isOn={state.debugMode}
                    onChange={(value) => setState({ ...state, debugMode: value })
                    }
                />
                <Separetor />
                <CustomSwitch
                    text='Always Update'
                    isOn={state.alwaysUpdate}
                    onChange={(value)=>setState({...state, alwaysUpdate: value})
                }
                />
                <Separetor />
                <CustomSwitch 
                text='Global Timer'
                isOn={state.globalTimer}
                onChange={(value)=>setState({...state, globalTimer: value})
            }
                />
            </Card>
        </CustomView>
    )
}

export default SwitchScreen