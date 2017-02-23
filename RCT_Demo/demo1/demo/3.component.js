/**
 * Created by chengshuailiu on 16/11/25.
 */
/**
 * Created by chengshuailiu on 16/11/25.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {title: props.title};
        console.log("constructor");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    render() {
        console.log("render");
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                   {this.state.title}
                </Text>
            </View>
        );
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(prop) {
        console.log("componentWillReceiveProps");
        this.setState({title: prop.title});
        console.log(prop);

    }

    shouldComponentUpdate(prop) {
        console.log("shouldComponentUpdate");
        console.log(prop);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
        console.log(nextProps);
        console.log(nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log(prevProps);
        console.log(prevState);
    }

    componentWillUnMount() {
        console.log("componentWillUnMount");
    }


}

export default class demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: "123456"
        }
    }


    render() {
        return (
            <View style={{flex:1}}>
                <Demo title={this.state.text1}></Demo>
                <Button
                    onPress={()=>{this.setState({text1:new Date().getTime()})}}
                    title="Learn More"
                    color="red"
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
