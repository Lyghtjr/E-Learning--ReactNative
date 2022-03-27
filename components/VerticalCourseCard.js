import React from "react";

import {
    View,Text,Image,TouchableOpacity
} from "react-native";

import {SIZES,FONTS,COLORS,icons} from "../constants";

const VerticalCourseCard=({containerStyle,course})=>{
    return (
        <TouchableOpacity
         style={{
             width:270,
             ...containerStyle
         }}
        >
            {/* Thumbnail */}
            <Image source={course.thumbnail}
            resizeMode="cover"
            style={{
                width:"100%",
                height:150,
                marginBottom:SIZES.radius,
                borderRadius:SIZES.radius
            }}
            />
        </TouchableOpacity>
    )
}

export default VerticalCourseCard;