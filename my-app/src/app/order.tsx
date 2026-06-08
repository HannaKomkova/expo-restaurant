import {Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native'
import {router, usePathname} from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import Burger from '../../assets/img/burger.png'
import Pizza from '../../assets/img/pizza.png'
import Drinks from '../../assets/img/drinks.png'
import arrowLeft from '../../assets/img/arrowLeft.png'
import arrowRight from '../../assets/img/arrowRight.png'
import burger1 from '../../assets/img/burger1.png'
import burger2 from '../../assets/img/burger2.png'


function App(){

  return (<>
      <ImageBackground 
      source={require('../../assets/img/SIGNUP.png')} 
      style={{ flex: 1, width: "100%", backgroundColor: '#FFFFFF'}}
      resizeMode='cover'>

      <View style={styles.container}>

        <Text style={styles.header}>Choose the FOOD you LOVE</Text>

        <View style={styles.input}>
            <TextInput placeholder='Search for a food item' style={styles.inputText}/>
        </View>

        <Text style={styles.categoriesText}>Categories</Text>

        <View style={styles.tabItems}>
            <TouchableOpacity style={styles.tab}>
                <View style={styles.tabActiveCardImg}>
                    <Image source={Burger}/>
                </View>
                <Text style={styles.tabActiveCardText}>Burgers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <View style={styles.tabRegularCardImg}>
                    <Image source={Pizza}/>
                </View>
                <Text style={styles.tabRegularCardText}>Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <View style={styles.tabRegularCardImg}>
                    <Image source={Drinks}/>
                </View>
                <Text style={styles.tabRegularCardText}>Drinks</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.categoriesText}>Burgers</Text>

        <View style={styles.foodItems}>
            <TouchableOpacity>
                <Image source={arrowLeft}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activeFoodItem}>
                <LinearGradient
                    colors={['rgba(190,1,39,0.94)', '#F13A21']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.activeFoodItemCard}>
                <Image source={burger1} style={styles.activeFoodItemImg}/>
                <Text style={styles.activeFoodItemDescription}>Chicken Burger</Text>
                <Text style={styles.activeFoodItemPrice}>$3.5</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.regularFoodItem}>
                <Image source={burger2} style={styles.regularFoodItemImg}/>
                <Text style={styles.regularFoodItemDescription}>Double Cheesy Burger</Text>
                <Text style={styles.regularFoodItemPrice}>$3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={arrowRight}/>
            </TouchableOpacity>
        </View>
                
      </View>
    </ImageBackground>   
  </>)
  }
  


const styles = StyleSheet.create({
    container:{
        marginTop: 60,
        marginHorizontal:15
    },

    header:{
        fontFamily: 'roboto-bold',
        fontSize: 24,
        color: '#FFFFFF',
        width: 187,
        marginBottom: 21
    },

    input:{
        paddingVertical:10,
        paddingHorizontal:12,
        borderRadius:18,
        borderWidth:1,
        borderColor: '#FFFFFF',
        backgroundColor: '#F8E0A0E0',
        marginBottom: 100
    },

    inputText:{
        fontFamily: 'roboto-regular',
        fontSize: 13,
        color: '#FFFFFF',
    },

    categoriesText:{
        fontFamily: 'roboto-regular',
        fontSize: 18,
        color: '#000000',
        marginBottom: 29
    },

    tabItems:{
        flexDirection: 'row',
        gap:8,
        alignItems: 'center',
        marginBottom: 30,
        justifyContent: 'space-between'
    },

    tab:{
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 70,
    },

    tabActiveCardImg:{
        shadowColor: '#F13A21',
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 6,
        paddingHorizontal: 39,
        paddingVertical: 19,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#BE0127",
        backgroundColor: '#FFFFFF'
    },

    tabActiveCardText:{
        fontFamily: 'roboto-regular',
        fontSize: 13,
        color: '#BE0127'
    },

    tabRegularCardImg:{
        backgroundColor: '#FFFFFF',
        borderRadius: 17,
        shadowColor: '#766F6F',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 5,
        paddingHorizontal: 39,
        paddingVertical: 19,
        borderRadius: 10,
        backgroundColor: '#E5E5E573'
    },

    tabRegularCardText:{
        fontFamily: 'roboto-regular',
        fontSize: 13,
        color: '#000000BF'
    },

    foodItems:{
        flexDirection: 'row',
        gap:7,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    activeFoodItem:{
        flexDirection:'column',
        gap: 3
    },

    activeFoodItemCard:{
        borderRadius: 10,
        width: 150,
        paddingTop: 8,
        paddingBottom:25,
        paddingLeft: 10,
        paddingRight: 16,
        shadowColor: '#F13A21',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 8,
    },

    activeFoodItemImg:{
        marginBottom: 12,
        width: '100%'
    },

    activeFoodItemDescription:{
        fontFamily: 'roboto-regular',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 26
    },
    
    activeFoodItemPrice:{
        fontFamily: 'roboto-regular',
        fontSize: 24,
        color: '#FFFFFF'
    }, 

    regularFoodItem:{
        paddingVertical:15,
        paddingHorizontal: 5,
        marginRight: 19,
        width: 119,
        // height: 165,
        borderWidth: 1,
        borderColor: '#918B8B',
        borderRadius: 10
    },

    regularFoodItemImg:{
        marginBottom:7,
        width: '100%'
    },

    regularFoodItemDescription:{
        fontFamily: 'roboto-regular',
        fontSize: 14,
        color: '#000000',
        marginBottom: 22
    },

    regularFoodItemPrice:{
        fontFamily: 'roboto-regular',
        fontSize: 24,
        color: '#000000'
    }



})

export default App;