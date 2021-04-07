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
      <View style={styles.View_123_88}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I123_88_8_1}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d9/163a/7a0fca9ce4a88e5f175df8b213f31839"
          }}
          style={styles.ImageBackground_I123_88_6_11}
        />
        <View style={styles.View_I123_88_12_2}>
          <Text style={styles.Text_I123_88_12_2}>Crédito Fiscal</Text>
        </View>
        <View style={styles.View_I123_88_26_68}>
          <Text style={styles.Text_I123_88_26_68}>Consumidor</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I123_88_22_0}
        />
        <View style={styles.View_I123_88_106_0}>
          <Text style={styles.Text_I123_88_106_0}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I123_88_301_2401}
        />
      </View>
      <View style={styles.View_123_89}>
        <Text style={styles.Text_123_89}>Usar créditos</Text>
      </View>
      <View style={styles.View_123_90} />
      <View style={styles.View_123_91}>
        <View style={styles.View_I123_91_37_362}>
          <View style={styles.View_I123_91_37_361} />
          <View style={styles.View_I123_91_36_398}>
            <Text style={styles.Text_I123_91_36_398}>
              Fulano de Tal da Silva
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6178/0af5/53c6b6bbee078d64d97b6e00935aeb2d"
            }}
            style={styles.ImageBackground_I123_91_36_397}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ba/f0be/a00a933fb601a2b74ba8ef46928ddd9a"
          }}
          style={styles.ImageBackground_I123_91_39_5}
        />
      </View>
      <View style={styles.View_123_92}>
        <View style={styles.View_I123_92_33_227}>
          <View style={styles.View_I123_92_33_227_31_265} />
        </View>
        <View style={styles.View_I123_92_33_324}>
          <Text style={styles.Text_I123_92_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I123_92_33_212}
        />
      </View>
      <View style={styles.View_123_93}>
        <View style={styles.View_I123_93_33_150}>
          <View style={styles.View_I123_93_33_150_31_265} />
        </View>
        <View style={styles.View_I123_93_33_321}>
          <Text style={styles.Text_I123_93_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I123_93_33_180}
        />
      </View>
      <View style={styles.View_123_98}>
        <Text style={styles.Text_123_98}>Buscar Serviços/Produtos</Text>
      </View>
      <View style={styles.View_123_102}>
        <View style={styles.View_123_103} />
        <View style={styles.View_123_104}>
          <Text style={styles.Text_123_104}>Buscar por ramo de atividade</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ca/ec84/513e7a4af649902614b951518246a640"
          }}
          style={styles.ImageBackground_123_105}
        />
      </View>
      <View style={styles.View_140_97}>
        <View style={styles.View_123_319} />
        <View style={styles.View_123_320}>
          <Text style={styles.Text_123_320}>Manut de Computadores</Text>
        </View>
        <View style={styles.View_123_321}>
          <Text style={styles.Text_123_321}>Sapataria</Text>
        </View>
        <View style={styles.View_123_322}>
          <Text style={styles.Text_123_322}>Administradora Imóveis </Text>
        </View>
        <View style={styles.View_123_323}>
          <Text style={styles.Text_123_323}>Pintura em Geral</Text>
        </View>
        <View style={styles.View_123_324}>
          <Text style={styles.Text_123_324}>Oficina Mecânica</Text>
        </View>
        <View style={styles.View_123_325} />
        <View style={styles.View_123_326}>
          <Text style={styles.Text_123_326}>Barbearia</Text>
        </View>
        <View style={styles.View_123_327}>
          <Text style={styles.Text_123_327}>Lavanderia</Text>
        </View>
        <View style={styles.View_123_328}>
          <Text style={styles.Text_123_328}>Salão de Beleza</Text>
        </View>
      </View>
      <View style={styles.View_123_339}>
        <View style={styles.View_123_340} />
        <View style={styles.View_123_341}>
          <Text style={styles.Text_123_341}>Buscar pelo nome comercial</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1339/b9a0/afe97dd3c136572f5dab492672a4f284"
        }}
        style={styles.ImageBackground_132_5}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_123_88: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.812499999999998%"),
    minHeight: hp("12.812499999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I123_88_8_1: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4375000000000004%"),
    resizeMode: "cover"
  },
  ImageBackground_I123_88_6_11: {
    flexGrow: 1,
    width: wp("17.5%"),
    height: hp("6.875000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555556%"),
    top: hp("4.375%"),
    resizeMode: "cover"
  },
  View_I123_88_12_2: {
    flexGrow: 1,
    width: wp("31.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("4.84375%")
  },
  Text_I123_88_12_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_I123_88_26_68: {
    flexGrow: 1,
    width: wp("27.500000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%"),
    top: hp("8.125%")
  },
  Text_I123_88_26_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_I123_88_22_0: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I123_88_106_0: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I123_88_106_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I123_88_301_2401: {
    flexGrow: 1,
    width: wp("12.357652452256945%"),
    height: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.61111111111111%"),
    top: hp("4.0625%"),
    resizeMode: "cover"
  },
  View_123_89: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%"),
    top: hp("19.6875%")
  },
  Text_123_89: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_90: {
    width: wp("100.55555555555556%"),
    minWidth: wp("100.55555555555556%"),
    height: hp("5.625%"),
    minHeight: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94.375%"),
    backgroundColor: "rgba(211, 238, 255, 1)"
  },
  View_123_91: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.15625%"),
    minHeight: hp("5.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.812499999999998%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_91_37_362: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I123_91_37_361: {
    width: wp("100%"),
    height: hp("5.15625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_I123_91_36_398: {
    width: wp("73.88888888888889%"),
    top: hp("0.6250000000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_I123_91_36_398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I123_91_36_397: {
    width: wp("4.444444444444445%"),
    height: hp("2.8125%"),
    top: hp("1.0937500000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%")
  },
  ImageBackground_I123_91_39_5: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.94444444444444%"),
    top: hp("1.7187500000000036%")
  },
  View_123_92: {
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
  View_I123_92_33_227: {
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
  View_I123_92_33_227_31_265: {
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
  View_I123_92_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I123_92_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I123_92_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_123_93: {
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
  View_I123_93_33_150: {
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
  View_I123_93_33_150_31_265: {
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
  View_I123_93_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I123_93_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I123_93_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_123_98: {
    width: wp("58.88888888888889%"),
    minWidth: wp("58.88888888888889%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.555555555555554%"),
    top: hp("23.75%")
  },
  Text_123_98: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_102: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%"),
    top: hp("39.0625%")
  },
  View_123_103: {
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
  View_123_104: {
    width: wp("43.611111111111114%"),
    minWidth: wp("43.611111111111114%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333304%"),
    top: hp("1.5625%")
  },
  Text_123_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_123_105: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.00000000000001%")
  },
  View_140_97: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("42.5%"),
    minHeight: hp("42.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%"),
    top: hp("45.625%")
  },
  View_123_319: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("42.5%"),
    minHeight: hp("42.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_123_320: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888875%"),
    top: hp("6.875%")
  },
  Text_123_320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_123_321: {
    width: wp("21.38888888888889%"),
    minWidth: wp("21.38888888888889%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888875%"),
    top: hp("26.875%")
  },
  Text_123_321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_123_322: {
    width: wp("53.05555555555556%"),
    minWidth: wp("53.05555555555556%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888875%"),
    top: hp("31.875%")
  },
  Text_123_322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_123_323: {
    width: wp("37.22222222222222%"),
    minWidth: wp("37.22222222222222%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888875%"),
    top: hp("36.875%")
  },
  Text_123_323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_123_324: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888875%"),
    top: hp("1.875%")
  },
  Text_123_324: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_123_325: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("4.53125%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.40625%"),
    backgroundColor: "rgba(222, 241, 255, 1)"
  },
  View_123_326: {
    width: wp("21.666666666666668%"),
    minWidth: wp("21.666666666666668%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888875%"),
    top: hp("16.875%")
  },
  Text_123_326: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_123_327: {
    width: wp("24.444444444444443%"),
    minWidth: wp("24.444444444444443%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888875%"),
    top: hp("21.875%")
  },
  Text_123_327: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_123_328: {
    width: wp("35.55555555555556%"),
    minWidth: wp("35.55555555555556%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888875%"),
    top: hp("11.874999999999993%")
  },
  Text_123_328: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_123_339: {
    width: wp("70.83333333333334%"),
    minWidth: wp("70.83333333333334%"),
    height: hp("5.46875%"),
    minHeight: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.88888888888889%"),
    top: hp("31.25%")
  },
  View_123_340: {
    width: wp("70.83333333333334%"),
    minWidth: wp("70.83333333333334%"),
    height: hp("5.46875%"),
    minHeight: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(51, 98, 130, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_123_341: {
    width: wp("49.44444444444444%"),
    minWidth: wp("49.44444444444444%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("1.5625%")
  },
  Text_123_341: {
    color: "rgba(188, 189, 190, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  ImageBackground_132_5: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.33309597439236%"),
    top: hp("28.125%")
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
