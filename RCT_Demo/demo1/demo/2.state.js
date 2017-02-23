/**
 * Created by chengshuailiu on 16/11/25.
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';


export default class BlinkApp extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: this.formatData(new Date())};

        setInterval(() => {
            this.setState({showText: this.formatData(new Date())});
        }, 1000);
    }

    formatData(data) {
        var y = data.getFullYear();
        var M = data.getMonth() + 1;
        var d = data.getDate();
        var h = data.getHours();
        var m = data.getMinutes();
        var s = data.getSeconds();

        // return y + "年" + M + "月" + d + "日" + "  " + h + ":" + m + ":" + s;
        return `${y}年${M}月${d}日  ${h}:${m}:${s}`
    }

    render() {
        return (
            <View style={{flex:1,alignSelf:"center",justifyContent:"center"}}>
                <View>
                    <Text style={[{fontSize:40}]}>{this.state.showText}</Text>
                </View>
            </View>
        );
    }
}
