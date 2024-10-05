import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    code: string
}

const CodeBlock = ({code}:Props) => {
  return (
    <View style={styles.codeContainer}>
      <Text style={styles.codeText}>{code}</Text>
    </View>
  )
}

export default CodeBlock

const styles = StyleSheet.create({
    codeContainer: {
        backgroundColor: '#282c34', // Fondo oscuro típico de los bloques de código
        padding: 20,
        borderRadius: 10,
        marginVertical: 15,
        shadowColor: '#fff', // Sombras sutiles para dar profundidad
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8
    },
    codeText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Courier',
        lineHeight: 19,
    }
})