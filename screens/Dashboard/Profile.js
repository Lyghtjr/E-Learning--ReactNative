
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
    IconButton,TextButton,LineDivider, ProgressBar, ProfileValue, ProfileRadioButton
} from "../../components";

import { COLORS,FONTS,SIZES,icons,images } from '../../constants';

const Profile = () => {

    const [newCourseNotification,setNewCourseNotification] = React.useState(false);

    const [studyReminder,setStudyReminder] = React.useState(false);

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
                    <Image source ={images.profile} style={{

                        width:"100%",
                        height:"100%",
                        borderRadius:40,
                        borderWidth:1,
                        borderColor:COLORS.white
                    }}/>
                    <View
                    style={{
                        position:'absolute',
                        width:'100%',
                        height: '100%',
                        alignItems:'center',
                        justifyContent:'flex-end',

                    }}
                    >
                        <View
                        style={{
                            width:30,
                            height:30,
                            marginBottom:-15,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:15,
                            backgroundColor:COLORS.primary  
                        }}
                        >
                            <Image source={icons.camera} style={{

                                width:17,
                                height:17
                            }}
                            />
                        </View>

                    </View>
                </TouchableOpacity>
                <View
                style={{
                    flex:1,
                    marginLeft:SIZES.radius,
                    alignItems:'flex-start',

                }}
                >
                    <Text style={{
                        ...FONTS.h2,
                        color:COLORS.white
                    }}>
                        By LyghtJr
                    </Text>
                    <Text
                    style={{
                        ...FONTS.body4,
                        color:COLORS.white
                    }}
                    >
                        Full Stack Developer
                    </Text>
                    <ProgressBar
                    progress='58%'
                    containerStyle={{
                        marginTop:SIZES.radius,
                    }}
                    />
                    <View
                    style={{
                        flexDirection:'row',

                    }}
                    >
                        <Text
                        style={{
                            ...FONTS.body4,
                            flex: 1,
                            color:COLORS.white
                        }}
                        >Overall Progress</Text>
                        <Text
                        style={{
                            color:COLORS.white,
                            ...FONTS.body4,
                        }}
                        >58%</Text>

                    </View>
                    <TextButton
                    label="+ Become Member"
                    contentContainerStyle={{
                        height:35,
                        marginTop:SIZES.padding,
                        paddingHorizontal:SIZES.radius,
                        borderRadius:20,
                        backgroundColor:COLORS.white,
                    }}
                    labelStyle={{
                        color:COLORS.primary
                    }}
                    />
                </View>
            </View>
        )
    }
    
    
    function renderProfileSection1(){
        return (
            <View
            style={styles.profileSectionContainer}
            >
                <ProfileValue
                icon={icons.profile}
                label="Name"
                value="LyghtJr"
                />
                <LineDivider/>
                <ProfileValue
                icon={icons.email}
                label="Email"
                value="LyghtJr@gmail.com"
                />
                <LineDivider/>
                <ProfileValue
                icon={icons.password}
                label="Password"
                value="Updated yesterday"
                />
                <LineDivider/>
                <ProfileValue
                icon={icons.call}
                label="Contact Number"
                value="1234556789"
                />
            </View>
        )
    }

    function renderProfileSection2(){
        return (
            <View
            style={styles.profileSectionContainer}
            >
                <ProfileValue
                icon={icons.star}
                value="Pages"
                />

                <LineDivider/>
                <ProfileRadioButton
                icon={icons.new_icon}
                label="New Course Notification"
                isSelected={newCourseNotification}
                onPress={()=>{
                    setNewCourseNotification(!newCourseNotification);
                }} 
                />

<LineDivider/>
                <ProfileRadioButton
                icon={icons.reminder}
                label="Study Reminder"
                isSelected={studyReminder}
                onPress={()=>{
                    setStudyReminder(!studyReminder);
                }} 
                />
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

                {renderProfileSection1()}

                {renderProfileSection2()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    profileSectionContainer:{
        marginTop:SIZES.padding,
        paddingHorizontal:SIZES.padding,
        borderWidth:1,
        borderRadius:SIZES.radius,
        borderColor:COLORS.gray20
    }
})

export default Profile;