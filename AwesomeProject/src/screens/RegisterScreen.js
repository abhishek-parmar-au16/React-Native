import react,{useState,useEffect} from 'react';
import {View ,Text ,TextInput,Button ,TouchableOpacity,StyleSheet} from 'react-native'


const RegisterScreen = () => {
    const [email,setEmail] =useState(null);
    const [password ,setPassword] =useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput style={styles.input} value={email} onChangeText={text =>setEmail(text)} placeholder="Enter Email" />
                <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={text =>setPassword(text)} secureTextEntry />
                <Button title="Login" />

                <View style={{flexDirection:'row',marginTop:20}}> 
                    <Text>Dont Have an Account</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper:{
        width: '80%'
    },
    input:{
        marginBottom:12,
        borderWidth:1,
        borderColor :'#bbb',
        borderRadius:5,
        paddingHorizontal:14,
    },
    link :{
        color: 'blue',
    }
  });

export default RegisterScreen;