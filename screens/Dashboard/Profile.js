
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';

import {
    IconButton,TextButton,LineDivider
} from "../../components";

import { COLORS,FONTS,SIZES,icons,images } from '../../constants';

const Profile = () => {

    function renderHeader(){
        return (
            <View
            style={{
                flexDirection:'row',
                marginTop:50,
                paddingHorizontal:SIZES.padding,
                justifyContent:'space-between'
            }}
            >
                <Text
                style={{
                    ...FONTS.h1
                }}
                >
                    Profile
                </Text>

                <IconButton
                icon={icons.sun}
                iconStyle={{
                    tintColor:COLORS.black
                }}
                />

            </View>
        )
    }

    function renderProfileCard(){
        return (
            <View
            style={{
                flexDirection:'row',
                marginTop:SIZES.padding,
                paddingHorizontal:SIZES.radius,
                paddingVertical:20,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.primary3
            }}
            >
                <TouchableOpacity
                style={{
                    width:80,
                    height:80,
                }}
                >

                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View 
        style={{
            flex:1,
            backgroundColor:COLORS.white

        }}
        >
            {renderHeader()}

            <ScrollView
            contentContainerStyle={{
                paddingHorizontal:SIZES.padding,
                paddingBottom:150
            }}
            >
                {renderProfileCard()}
            </ScrollView>
        </View>
    )
}

export default Profile;