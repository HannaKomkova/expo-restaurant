import {Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native'
import {router, usePathname} from 'expo-router'
import google from '../../assets/img/google.png'
import facebook from '../../assets/img/facebook.png'


function App(){

  const pathname = usePathname()

  const isLogin = pathname === '/login'
  const isSignUp = pathname === '/signUp'

  return (<>
      <ImageBackground 
      source={require('../../assets/img/SIGNUP.png')} 
      style={{ flex: 1, width: "100%", backgroundColor: '#FFFFFF'}}
      resizeMode='cover'>
      
    <View style={styles.card}>

          <View style={styles.tabsItems}>

            <TouchableOpacity onPress={() => router.push('/login')}
              style={[ styles.tab, isLogin && styles.activeTab]}>

              <Text style={[ styles.tabText, isLogin && styles.activeTabText]}>
                Log In
              </Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/signUp')} 
            style={[styles.tab, isSignUp && styles.activeTab]}>

              <Text  style={[ styles.tabText, isSignUp && styles.activeTabText ]}>
                Sign Up
              </Text>

            </TouchableOpacity>
          </View>

      <View style={styles.inputItems}>
        <TextInput placeholder='Enter  email or username' style={styles.input}/>
        <TextInput placeholder='Password' style={styles.input}/ >
      </View>

      <TouchableOpacity> 
        <Text style={styles.forgotText}> Forgot Password? </Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <View style={styles.socialImg}>
          <Image source={google}/>
          <Image source={facebook}/>
        </View>
        
    </View> 
    </ImageBackground>   
  </>)
  }
  


const styles = StyleSheet.create({

  card:{
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderRadius: 17,
    borderColor: '#766F6FCC',
    marginTop: 178,
    marginHorizontal: 29,
    marginBottom:200,
    paddingTop: 30,
    paddingLeft: 31,
    paddingRight:33,
    paddingBottom:96,
    backgroundColor: '#FFFFFF'
  },

  tabsItems:{
    flexDirection: 'row',
    gap: 33,
    alignItems: 'center',
    marginBottom: 40,
    justifyContent: 'center'
  }, 

  tab: {
    paddingTop: 3,
    paddingBottom: 4,
    paddingHorizontal: 28,
    borderWidth: 1,
    borderColor: '#BE0127',
    borderRadius: 17,
    backgroundColor: '#F8E0A0',
  },

  activeTab: {
    backgroundColor: '#BE0127',
  },

  tabText: {
    fontFamily: 'roboto-bold',
    fontSize: 14,
    color: '#BE0127',
  },

  activeTabText: {
    color: '#FFFFFF',
  },

  inputItems:{
    flexDirection: 'column',
    gap: 36,
    marginBottom: 13
    
  },

  input:{
    fontFamily: 'roboto-light',
    fontSize: 14,
    color: '#766F6F',
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#918B8B'
  }, 

  forgotText:{
    fontFamily: 'roboto-light',
    fontSize: 14,
    color: '#766F6F',
    textAlign: 'right',
    marginBottom: 29
  }, 

  button:{
    backgroundColor: '#BE0127',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#BE0127',
    paddingVertical: 6,
    paddingHorizontal: 45,
    width: 140,
    alignSelf: 'center',
    marginBottom: 17
  },

  buttonText:{
    fontFamily: 'roboto-bold',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center'
  },

  orText:{
    fontFamily: 'roboto-light',
    fontSize: 12,
    color: '#766F6F',
    textAlign: 'center',
    marginBottom: 18
  },

  socialImg:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18
  }
})

export default App;