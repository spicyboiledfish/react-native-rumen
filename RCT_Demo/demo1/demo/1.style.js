//1、学习Text 和 View 组件
//2、学习内联,外联样式的编码方法
// import React, {Component} from 'react';
// import { StyleSheet, Text, View} from 'react-native';


// export default class LotsOfStyles extends Component {
//     render() {
//         return (
//             <View style={styles.baseView}>
//                 <Text style={styles.red}>钱总好帅</Text>
//                 <Text style={styles.bigblue}>just bigblue</Text>
//                 <Text style={[styles.bigblue, styles.red,{padding:40}]}>钱总好美</Text>
//                 <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     baseView:{
//        marginTop:40,
//     },
//     bigblue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30,
//     },
//     red: {
//         color: 'black',
//     },
//
// });
//

/*
var styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
            },
            android: {
                backgroundColor: 'blue',
            },
        }),
    },
});
*/

//3,了解Flex布局于基础样式 http://reactnative.cn/docs/0.38/layout-props.html
import React, {Component} from 'react';
import {AppRegistry, View,Platform} from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex: 1,flexDirection:"row"}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                </View>
                <View style={{flex: 3,flexDirection:"row-reverse"}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                </View>
                <View style={{flex: 1,flexDirection:"column-reverse"}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                </View>
                <View style={{flex: 1,flexDirection:"column"}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                </View>
                {


                    // <View style={{flex: 1,flexDirection:"column-reverse"}}>
                    //     <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    //     <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                    //     <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                    // </View>
                    // <View style={{flex: 1,flexDirection:"column"}}>
                    // <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    // <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                    // <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                    // </View>
                }

            </View>
        );
    }
};