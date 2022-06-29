import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
// component =function
import { sum2Number, substract2Number, PI } from '../ulities/Calculation'
import { images, icons } from '../constants'
import { UIButton } from '../components'
// read object, variable, function from other modules

function Welcome(props) {
    //state => when a state is changed => UI is reloaded
    //like getter/setter
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influencer',
            isSelected: true,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Individual',
            isSelected: false,
        },
    ])
    debugger
    return <View style={{
        flex: 100,
    }}>
        <ImageBackground
            source={
                images.background}
            resizeMode='cover'
            style={{
                flex: 100,
            }}
        >
            <View style={{
                flex: 20,

            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    height: 50,
                }} >
                    <Image
                        source={icons.fire}
                        style={{
                            marginStart: 10,
                            marginEnd: 5,
                            height: 30,
                            width: 30,
                        }}
                    ></Image>
                    <Text style={{
                        color: 'white',
                        flex: 1
                    }}>YOURCOMPANY.CO</Text>
                    {/* <View style={{flex:1}}/> */}
                    <Image
                        source={icons.question}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: 'white',
                            marginRight: 10,

                        }}
                    ></Image>
                </View>
            </View>
            <View style={{
                flex: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontSize: 13,
                }} >Welcom to</Text>
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontWeight: 'bold',
                }}>YOURCOMPANY.CO !</Text>
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontSize: 13,
                }}>Please select your account type</Text>
            </View>
            <View style={{
                flex: 40,
                // backgroundColor: 'purple'
            }}>
                {accountTypes.map((accountType, index) =>
                    <UIButton key={index} onPress={() => {
                        // debugger 
                        setAccountTypes(accountTypes.map(eachAccountType => {
                            return {
                                ...eachAccountType,
                                isSelected: eachAccountType.name == accountType.name,
                            }
                        }))
                    }}
                        title={accountType.name}
                        isSelected={accountType.isSelected}
                    />)
                }
            </View>
            <View style={{
                flex: 20,
                backgroundColor: 'yellow'
            }} />
        </ImageBackground>
    </View>
}
export default Welcome
// creat a variable which reference to a function
/*
const Welcome = (props) => {
    // destructuring an object
    debugger
    const {x, y} = props
    const {person} = props
    // const => let => var
    // destructuring person object 
    const {name , age ,email} = person 
    const {products} = props
    return <View style>
        <Text>Name= {name}, Age={age}, Email= {email} </Text>
        <Text>Value of x= {x} , Value of y = {y}</Text>
        {products.map(eachProduct => 
            <Text>{eachProduct.productName}, {eachProduct.year} </Text>)}
            <Text> sum 2 and 3= {sum2Number(2,3)}</Text>
            <Text>substract 3 and 2 = {substract2Number(3,2)} </Text>
            <Text>PI= {PI}</Text>
    </View>
}
*/
