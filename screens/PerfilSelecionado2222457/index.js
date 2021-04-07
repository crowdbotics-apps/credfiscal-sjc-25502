import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5f9/7213/65778b43f770478f9f684001b8be48ce"
        }}
        style={styles.ImageBackground_31_369}
      />
      <View style={styles.View_31_370}>
        <Text style={styles.Text_31_370}>Crédito Fiscal</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dcd/4ba7/ffd9a7ea77df15e442e2895cd5e57757"
        }}
        style={styles.ImageBackground_31_371}
      />
      <View style={styles.View_31_372} />
      <View style={styles.View_106_434}>
        <View style={styles.View_31_373} />
        <View style={styles.View_31_376}>
          <Text style={styles.Text_31_376}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ca/ec84/513e7a4af649902614b951518246a640"
          }}
          style={styles.ImageBackground_31_379}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
        }}
        style={styles.ImageBackground_31_381}
      />
      <View style={styles.View_106_429}>
        <View style={styles.View_31_375} />
        <View style={styles.View_31_378}>
          <Text style={styles.Text_31_378}>Contribuinte</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72fe/42f8/19126720d0d2ec64d1781fa6a1a599be"
          }}
          style={styles.ImageBackground_33_116}
        />
      </View>
      <View style={styles.View_33_118}>
        <Text style={styles.Text_33_118}>Perfil</Text>
      </View>
      <View style={styles.View_33_124}>
        <View style={styles.View_I33_124_26_79}>
          <Text style={styles.Text_I33_124_26_79}>avançar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f8/d62d/06b675d658c57057821740cec9995a8d"
          }}
          style={styles.ImageBackground_I33_124_33_92}
        />
      </View>
      <View style={styles.View_33_528}>
        <View style={styles.View_I33_528_33_150}>
          <View style={styles.View_I33_528_33_150_31_265} />
        </View>
        <View style={styles.View_I33_528_33_321}>
          <Text style={styles.Text_I33_528_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I33_528_33_180}
        />
      </View>
      <View style={styles.View_43_540}>
        <View style={styles.View_I43_540_33_227}>
          <View style={styles.View_I43_540_33_227_31_265} />
        </View>
        <View style={styles.View_I43_540_33_324}>
          <Text style={styles.Text_I43_540_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I43_540_33_212}
        />
      </View>
      <View style={styles.View_106_432}>
        <View style={styles.View_31_374} />
        <View style={styles.View_31_377}>
          <Text style={styles.Text_31_377}>Consumidor</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72fe/42f8/19126720d0d2ec64d1781fa6a1a599be"
          }}
          style={styles.ImageBackground_106_431}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_31_369: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_31_370: {
    width: wp("61.94444444444444%"),
    top: hp("22.65625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666668%")
  },
  Text_31_370: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.06480000257492066,
    textTransform: "none"
  },
  ImageBackground_31_371: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("12.1875%"),
    minHeight: hp("12.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("5.625%"),
    resizeMode: "cover"
  },
  View_31_372: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("88.75%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_106_434: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("42.5%")
  },
  View_31_373: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_31_376: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("1.09375%")
  },
  Text_31_376: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_31_379: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.09375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_31_381: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.4375000000000004%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_106_429: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("63.28125%")
  },
  View_31_375: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 108, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_31_378: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1.25%")
  },
  Text_31_378: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_33_116: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2.8125%"),
    minHeight: hp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("1.5625%")
  },
  View_33_118: {
    width: wp("16.38888888888889%"),
    top: hp("29.843750000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.94444444444444%")
  },
  Text_33_118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.04320000171661377,
    textTransform: "none"
  },
  View_33_124: {
    width: wp("23.61111111111111%"),
    minWidth: wp("23.61111111111111%"),
    height: hp("4.53125%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.44444444444444%"),
    top: hp("70.78125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_124_26_79: {
    flexGrow: 1,
    width: wp("17.142315970526802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.56640625%")
  },
  Text_I33_124_26_79: {
    color: "rgba(0, 108, 181, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I33_124_33_92: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    height: hp("3.5937499999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333343%"),
    top: hp("0.625%")
  },
  View_33_528: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("90.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_528_33_150: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_528_33_150_31_265: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_I33_528_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I33_528_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I33_528_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_43_540: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.94444444444444%"),
    top: hp("90.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I43_540_33_227: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I43_540_33_227_31_265: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_I43_540_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I43_540_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I43_540_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_106_432: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("53.28125%")
  },
  View_31_374: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 108, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_31_377: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1.25%")
  },
  Text_31_377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_431: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2.8125%"),
    minHeight: hp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("1.5625%")
  },
  View_2: { height: 640 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
