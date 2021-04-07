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
      <View style={styles.View_69_96}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I69_96_8_1}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d9/163a/7a0fca9ce4a88e5f175df8b213f31839"
          }}
          style={styles.ImageBackground_I69_96_6_11}
        />
        <View style={styles.View_I69_96_12_2}>
          <Text style={styles.Text_I69_96_12_2}>Crédito Fiscal</Text>
        </View>
        <View style={styles.View_I69_96_26_68}>
          <Text style={styles.Text_I69_96_26_68}>Consumidor</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I69_96_22_0}
        />
        <View style={styles.View_I69_96_106_0}>
          <Text style={styles.Text_I69_96_106_0}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I69_96_301_2401}
        />
      </View>
      <View style={styles.View_69_97}>
        <Text style={styles.Text_69_97}>Doar créditos</Text>
      </View>
      <View style={styles.View_69_98} />
      <View style={styles.View_69_99}>
        <View style={styles.View_I69_99_37_362}>
          <View style={styles.View_I69_99_37_361} />
          <View style={styles.View_I69_99_36_398}>
            <Text style={styles.Text_I69_99_36_398}>
              Fulano de Tal da Silva
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6178/0af5/53c6b6bbee078d64d97b6e00935aeb2d"
            }}
            style={styles.ImageBackground_I69_99_36_397}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ba/f0be/a00a933fb601a2b74ba8ef46928ddd9a"
          }}
          style={styles.ImageBackground_I69_99_39_5}
        />
      </View>
      <View style={styles.View_69_100}>
        <View style={styles.View_I69_100_33_227}>
          <View style={styles.View_I69_100_33_227_31_265} />
        </View>
        <View style={styles.View_I69_100_33_324}>
          <Text style={styles.Text_I69_100_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I69_100_33_212}
        />
      </View>
      <View style={styles.View_69_101}>
        <View style={styles.View_I69_101_33_150}>
          <View style={styles.View_I69_101_33_150_31_265} />
        </View>
        <View style={styles.View_I69_101_33_321}>
          <Text style={styles.Text_I69_101_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I69_101_33_180}
        />
      </View>
      <View style={styles.View_69_106}>
        <View style={styles.View_69_107}>
          <Text style={styles.Text_69_107}>Saldo atual</Text>
        </View>
        <View style={styles.View_69_108}>
          <Text style={styles.Text_69_108}>R$ 267,00</Text>
        </View>
      </View>
      <View style={styles.View_69_148}>
        <View style={styles.View_69_149} />
        <View style={styles.View_69_150}>
          <Text style={styles.Text_69_150}>Selecione a entidade</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e74/696f/f41db971fd337ee4310732d9e6b6a27d"
          }}
          style={styles.ImageBackground_69_151}
        />
      </View>
      <View style={styles.View_69_169}>
        <View style={styles.View_69_153}>
          <View style={styles.View_69_154}>
            <View style={styles.View_69_155} />
            <View style={styles.View_69_156}>
              <Text style={styles.Text_69_156}>Casa das Crianças</Text>
            </View>
            <View style={styles.View_69_160}>
              <Text style={styles.Text_69_160}>Casa do Idoso</Text>
            </View>
            <View style={styles.View_69_161} />
            <View style={styles.View_69_162}>
              <Text style={styles.Text_69_162}>AA SJC</Text>
            </View>
            <View style={styles.View_69_163}>
              <Text style={styles.Text_69_163}>APAE SJC</Text>
            </View>
            <View style={styles.View_69_164}>
              <Text style={styles.Text_69_164}>GAC</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e266/b4dc/e98f4d57c16c0d38f9a83d2eb08ba3e3"
              }}
              style={styles.ImageBackground_69_165}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_131_0}>
        <View style={styles.View_69_110}>
          <Text style={styles.Text_69_110}>Valor a doar</Text>
        </View>
        <View style={styles.View_83_10} />
        <View style={styles.View_83_11}>
          <Text style={styles.Text_83_11}>50,00</Text>
        </View>
      </View>
      <View style={styles.View_83_13}>
        <View style={styles.View_83_14}>
          <Text style={styles.Text_83_14}>Saldo</Text>
        </View>
        <View style={styles.View_83_15}>
          <Text style={styles.Text_83_15}>R$ 217,00</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/189c/ae71/24eb5944740b4c0f6842357db621cfdd"
        }}
        style={styles.ImageBackground_131_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1339/b9a0/afe97dd3c136572f5dab492672a4f284"
        }}
        style={styles.ImageBackground_132_0}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_69_96: {
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
  ImageBackground_I69_96_8_1: {
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
  ImageBackground_I69_96_6_11: {
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
  View_I69_96_12_2: {
    flexGrow: 1,
    width: wp("31.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("4.84375%")
  },
  Text_I69_96_12_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_I69_96_26_68: {
    flexGrow: 1,
    width: wp("27.500000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%"),
    top: hp("8.125%")
  },
  Text_I69_96_26_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_I69_96_22_0: {
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
  View_I69_96_106_0: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I69_96_106_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I69_96_301_2401: {
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
  View_69_97: {
    width: wp("40.27777777777778%"),
    minWidth: wp("40.27777777777778%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("19.6875%")
  },
  Text_69_97: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_98: {
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
  View_69_99: {
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
  View_I69_99_37_362: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I69_99_37_361: {
    width: wp("100%"),
    height: hp("5.15625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_I69_99_36_398: {
    width: wp("73.88888888888889%"),
    top: hp("0.6250000000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_I69_99_36_398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I69_99_36_397: {
    width: wp("4.444444444444445%"),
    height: hp("2.8125%"),
    top: hp("1.0937500000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%")
  },
  ImageBackground_I69_99_39_5: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.94444444444444%"),
    top: hp("1.7187500000000036%")
  },
  View_69_100: {
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
  View_I69_100_33_227: {
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
  View_I69_100_33_227_31_265: {
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
  View_I69_100_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I69_100_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I69_100_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_69_101: {
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
  View_I69_101_33_150: {
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
  View_I69_101_33_150_31_265: {
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
  View_I69_101_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I69_101_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I69_101_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_69_106: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("27.500000000000004%")
  },
  View_69_107: {
    width: wp("25.27777777777778%"),
    minWidth: wp("25.27777777777778%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_69_107: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_108: {
    width: wp("23.055555555555557%"),
    minWidth: wp("23.055555555555557%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("0%")
  },
  Text_69_108: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_148: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("48.75%")
  },
  View_69_149: {
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
  View_69_150: {
    width: wp("46.111111111111114%"),
    minWidth: wp("46.111111111111114%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("1.09375%")
  },
  Text_69_150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_69_151: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.562500000000007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.00000000000001%")
  },
  View_69_169: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("26.875%"),
    minHeight: hp("26.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("55.78125000000001%")
  },
  View_69_153: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("26.875%"),
    minHeight: hp("26.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_69_154: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("26.875%"),
    minHeight: hp("26.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_69_155: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("26.875%"),
    minHeight: hp("26.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_69_156: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("6.874999999999993%")
  },
  Text_69_156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_69_160: {
    width: wp("32.22222222222222%"),
    minWidth: wp("32.22222222222222%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("1.874999999999993%")
  },
  Text_69_160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_69_161: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("4.53125%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.624999999999993%"),
    backgroundColor: "rgba(222, 241, 255, 1)"
  },
  View_69_162: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("16.874999999999993%")
  },
  Text_69_162: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_69_163: {
    width: wp("22.5%"),
    minWidth: wp("22.5%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("21.874999999999993%")
  },
  Text_69_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_69_164: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("11.874999999999993%")
  },
  Text_69_164: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_69_165: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("13.281249999999993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.666666666666664%")
  },
  View_131_0: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("4.0625%"),
    minHeight: hp("4.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("31.874999999999996%")
  },
  View_69_110: {
    width: wp("27.22222222222222%"),
    minWidth: wp("27.22222222222222%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.15625000000000355%")
  },
  Text_69_110: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_10: {
    width: wp("33.611111111111114%"),
    minWidth: wp("33.611111111111114%"),
    height: hp("4.0625%"),
    minHeight: hp("4.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(51, 98, 130, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_83_11: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.44444444444444%"),
    top: hp("0.15625000000000355%")
  },
  Text_83_11: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_13: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.888888888888886%"),
    top: hp("38.125%")
  },
  View_83_14: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_83_14: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_15: {
    width: wp("23.055555555555557%"),
    minWidth: wp("23.055555555555557%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.44444444444445%"),
    top: hp("0%")
  },
  Text_83_15: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_131_1: {
    width: wp("29.444444444444446%"),
    minWidth: wp("29.444444444444446%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("37.5%")
  },
  ImageBackground_132_0: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333062065972221%"),
    top: hp("25%")
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
