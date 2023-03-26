import React from 'react'
import { Image, View } from 'react-native'

const myOj = {
    name: 'nisim', 
    age: 30
}
const {name} = myOj

const ProfileImage = ({url}) => {
    return <View style={{width: 40, height: 40, borderRadius: 100, overflow: 'hidden'}}>
        <Image style={{width: '100%', height: '100%'}} source={{uri: url}}/>
    </View>
}

export default ProfileImage