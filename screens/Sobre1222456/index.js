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
        style={styles.ImageBackground_109_1500}
      />
      <View style={styles.View_25_6}>
        <Text style={styles.Text_25_6}>Crédito Fiscal</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dcd/4ba7/ffd9a7ea77df15e442e2895cd5e57757"
        }}
        style={styles.ImageBackground_25_7}
      />
      <View style={styles.View_25_8} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
        }}
        style={styles.ImageBackground_25_14}
      />
      <View style={styles.View_33_454}>
        <View style={styles.View_I33_454_31_299}>
          <View style={styles.View_I33_454_31_299_31_265} />
        </View>
        <View style={styles.View_I33_454_33_273}>
          <Text style={styles.Text_I33_454_33_273}>Sobre</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
          }}
          style={styles.ImageBackground_I33_454_31_318}
        />
      </View>
      <View style={styles.View_43_504}>
        <View style={styles.View_I43_504_33_227}>
          <View style={styles.View_I43_504_33_227_31_265} />
        </View>
        <View style={styles.View_I43_504_33_324}>
          <Text style={styles.Text_I43_504_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I43_504_33_212}
        />
      </View>
      <View style={styles.View_127_1}>
        <Text style={styles.Text_127_1}>Bem-vindo!</Text>
      </View>
      <View style={styles.View_127_2}>
        <Text style={styles.Text_127_2}>
          Com o Crédito Fiscal você poderá transformar suas compras em créditos
          para usar em outras compras ou abater das taxas do seu município
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fd6/ef68/6006febb50be0affb9649be68198c49b"
        }}
        style={styles.ImageBackground_127_3}
      />
      <View style={styles.View_127_4}>
        <View style={styles.View_I127_4_26_79}>
          <Text style={styles.Text_I127_4_26_79}>avançar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f8/d62d/06b675d658c57057821740cec9995a8d"
          }}
          style={styles.ImageBackground_I127_4_33_92}
        />
      </View>
      <View style={styles.View_109_1499}>
        <View style={styles.View_26_48} />
        <View style={styles.View_26_49}>
          <Text style={styles.Text_26_49}>
            Aplicativo Crédito Fiscal v 0.912
          </Text>
        </View>
        <View style={styles.View_108_7}>
          <Text style={styles.Text_108_7}>
            Computadores e Sistemas Ind e Com LTDA
          </Text>
        </View>
        <View style={styles.View_108_6}>
          <Text style={styles.Text_108_6}>
            CODIVAP©2021 Todos os direitos reservados Desenvolvido por:
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f099/49dd/3a398188f62bd016bf1bd5038ff7f00d"
          }}
          style={styles.ImageBackground_26_62}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b714/57d5/a1ee478069bb05d97163f2fc55f7bd69"
          }}
          style={styles.ImageBackground_25_1}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_109_1500: {
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
  View_25_6: {
    width: wp("61.94444444444444%"),
    top: hp("22.65625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.88888888888889%")
  },
  Text_25_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.06480000257492066,
    textTransform: "none"
  },
  ImageBackground_25_7: {
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
  View_25_8: {
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
  ImageBackground_25_14: {
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
  View_33_454: {
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
  View_I33_454_31_299: {
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
  View_I33_454_31_299_31_265: {
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
  View_I33_454_33_273: {
    flexGrow: 1,
    width: wp("8.88888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I33_454_33_273: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I33_454_31_318: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("1.5625%")
  },
  View_43_504: {
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
  View_I43_504_33_227: {
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
  View_I43_504_33_227_31_265: {
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
  View_I43_504_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I43_504_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I43_504_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_127_1: {
    width: wp("87.5%"),
    top: hp("34.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  Text_127_1: {
    color: "rgba(0, 108, 181, 1)",
    fontSize: 38,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.08640000343322754,
    textTransform: "none"
  },
  View_127_2: {
    width: wp("87.5%"),
    top: hp("49.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_127_2: {
    color: "rgba(0, 108, 181, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_127_3: {
    width: wp("38.88894822862413%"),
    minWidth: wp("38.88894822862413%"),
    height: hp("0.002263998321723193%"),
    minHeight: hp("0.002263998321723193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("65.3125%")
  },
  View_127_4: {
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
  View_I127_4_26_79: {
    flexGrow: 1,
    width: wp("17.142315970526802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.56640625%")
  },
  Text_I127_4_26_79: {
    color: "rgba(0, 108, 181, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I127_4_33_92: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    height: hp("3.5937499999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333343%"),
    top: hp("0.625%")
  },
  View_109_1499: {
    width: wp("69.44444444444444%"),
    minWidth: wp("69.44444444444444%"),
    height: hp("27.968749999999996%"),
    minHeight: hp("27.968749999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.277777777777779%"),
    top: hp("47.5%")
  },
  View_26_48: {
    width: wp("69.44444444444444%"),
    minWidth: wp("69.44444444444444%"),
    height: hp("27.968749999999996%"),
    minHeight: hp("27.968749999999996%"),
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
  View_26_49: {
    width: wp("57.77777777777777%"),
    minWidth: wp("57.77777777777777%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333332%"),
    top: hp("4.21875%")
  },
  Text_26_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_108_7: {
    width: wp("64.44444444444444%"),
    minWidth: wp("64.44444444444444%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("23.90625%")
  },
  Text_108_7: {
    color: "rgba(0, 108, 181, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_108_6: {
    width: wp("43.611111111111114%"),
    minWidth: wp("43.611111111111114%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.055555555555554%"),
    top: hp("9.375%")
  },
  Text_108_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_26_62: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.125%"),
    minHeight: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_1: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("4.379562139511108%"),
    minHeight: hp("4.379562139511108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.611111111111114%"),
    top: hp("19.0625%"),
    resizeMode: "cover"
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
