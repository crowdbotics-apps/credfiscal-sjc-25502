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
      <View style={styles.View_183_11}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I183_11_8_1}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d9/163a/7a0fca9ce4a88e5f175df8b213f31839"
          }}
          style={styles.ImageBackground_I183_11_6_11}
        />
        <View style={styles.View_I183_11_12_2}>
          <Text style={styles.Text_I183_11_12_2}>Crédito Fiscal</Text>
        </View>
        <View style={styles.View_I183_11_26_68}>
          <Text style={styles.Text_I183_11_26_68}>Consumidor</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I183_11_22_0}
        />
        <View style={styles.View_I183_11_106_0}>
          <Text style={styles.Text_I183_11_106_0}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I183_11_301_2401}
        />
      </View>
      <View style={styles.View_183_12}>
        <Text style={styles.Text_183_12}>Saldo em créditos fiscais:</Text>
      </View>
      <View style={styles.View_183_13}>
        <Text style={styles.Text_183_13}>
          * o saldo pode levar até 30 dias para ser atualizado
        </Text>
      </View>
      <View style={styles.View_183_14}>
        <Text style={styles.Text_183_14}>R$ 267,00*</Text>
      </View>
      <View style={styles.View_183_15}>
        <Text style={styles.Text_183_15}>Créditos nos últimos 12 meses</Text>
      </View>
      <View style={styles.View_183_16} />
      <View style={styles.View_183_17}>
        <View style={styles.View_I183_17_33_245}>
          <View style={styles.View_I183_17_33_245_31_265} />
        </View>
        <View style={styles.View_I183_17_33_323}>
          <Text style={styles.Text_I183_17_33_323}>Usar créditos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce53/e503/aedbdc13d264be7fdce476e36e11b8b0"
          }}
          style={styles.ImageBackground_I183_17_33_222}
        />
      </View>
      <View style={styles.View_183_18}>
        <View style={styles.View_I183_18_37_362}>
          <View style={styles.View_I183_18_37_361} />
          <View style={styles.View_I183_18_36_398}>
            <Text style={styles.Text_I183_18_36_398}>
              Fulano de Tal da Silva
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6178/0af5/53c6b6bbee078d64d97b6e00935aeb2d"
            }}
            style={styles.ImageBackground_I183_18_36_397}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ba/f0be/a00a933fb601a2b74ba8ef46928ddd9a"
          }}
          style={styles.ImageBackground_I183_18_39_5}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f30/3c79/71dd6d3f0793c4a759f8af4689cd8220"
        }}
        style={styles.ImageBackground_183_19}
      />
      <View style={styles.View_183_20}>
        <View style={styles.View_I183_20_39_547}>
          <Text style={styles.Text_I183_20_39_547}>Extrato</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf7f/8f6a/bf1fcb31a2c354a5bf5bf5aa30783974"
          }}
          style={styles.ImageBackground_I183_20_39_548}
        />
      </View>
      <View style={styles.View_183_21}>
        <View style={styles.View_I183_21_33_227}>
          <View style={styles.View_I183_21_33_227_31_265} />
        </View>
        <View style={styles.View_I183_21_33_324}>
          <Text style={styles.Text_I183_21_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I183_21_33_212}
        />
      </View>
      <View style={styles.View_183_22}>
        <View style={styles.View_I183_22_61_30} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_I183_22_61_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_I183_22_61_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_I183_22_61_33}
        />
        <View style={styles.View_I183_22_61_34}>
          <View style={styles.View_I183_22_61_35}>
            <Text style={styles.Text_I183_22_61_35}>Perfil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a17/73f8/14a1cf554fe4f8c8aa3028585bf324dc"
            }}
            style={styles.ImageBackground_I183_22_61_36}
          />
        </View>
        <View style={styles.View_I183_22_61_37}>
          <View style={styles.View_I183_22_61_38}>
            <Text style={styles.Text_I183_22_61_38}>Configurações</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d2e/34cf/bbb26586446d002d22e2cff985ea7b77"
            }}
            style={styles.ImageBackground_I183_22_61_39}
          />
        </View>
        <View style={styles.View_I183_22_61_41}>
          <Text style={styles.Text_I183_22_61_41}>Sair</Text>
        </View>
        <View style={styles.View_I183_22_61_43}>
          <View style={styles.View_I183_22_61_44}>
            <Text style={styles.Text_I183_22_61_44}>Doar</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/775e/49fc/7dda6f3d2ebd5b1e3ab1f830764fa8b3"
            }}
            style={styles.ImageBackground_I183_22_61_45}
          />
        </View>
        <View style={styles.View_I183_22_61_46}>
          <View style={styles.View_I183_22_61_47}>
            <Text style={styles.Text_I183_22_61_47}>Usar créditos</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cde4/e08f/bd9f926581346540f8478fc6f4d838fb"
            }}
            style={styles.ImageBackground_I183_22_61_48}
          />
        </View>
        <View style={styles.View_I183_22_61_49}>
          <View style={styles.View_I183_22_61_50}>
            <Text style={styles.Text_I183_22_61_50}>Extrato</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6450/414b/076d1fa473ebde1ae9b0e90bd5d1789a"
            }}
            style={styles.ImageBackground_I183_22_61_51}
          />
        </View>
        <View style={styles.View_I183_22_61_52}>
          <View style={styles.View_I183_22_61_53}>
            <Text style={styles.Text_I183_22_61_53}>Denunciar</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec3c/c5a9/1eda5e3ab53157b6422a93a7b6a2075b"
            }}
            style={styles.ImageBackground_I183_22_61_54}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ece9/17fe/c6a7673e00a454f2a264b07d632baf2f"
          }}
          style={styles.ImageBackground_I183_22_61_58}
        />
      </View>
      <View style={styles.View_183_23}>
        <View style={styles.View_I183_23_33_236}>
          <View style={styles.View_I183_23_33_236_31_265} />
        </View>
        <View style={styles.View_I183_23_33_326}>
          <Text style={styles.Text_I183_23_33_326}>Config</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5986/f579/e1f9e3cbd075dca4c8e4abdfc3706e27"
          }}
          style={styles.ImageBackground_I183_23_33_216}
        />
      </View>
      <View style={styles.View_183_24}>
        <View style={styles.View_I183_24_174_28}>
          <Text style={styles.Text_I183_24_174_28}>Avisos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0172/c44d/b11a0f24cca0d68b020c7aaa0f4f28bd"
          }}
          style={styles.ImageBackground_I183_24_174_29}
        />
      </View>
      <View style={styles.View_303_13}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35bd/c9fc/be9ea0ee4266d13baebce9ce77697717"
          }}
          style={styles.ImageBackground_I303_13_303_7}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_183_11: {
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
  ImageBackground_I183_11_8_1: {
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
  ImageBackground_I183_11_6_11: {
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
  View_I183_11_12_2: {
    flexGrow: 1,
    width: wp("31.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("4.84375%")
  },
  Text_I183_11_12_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_I183_11_26_68: {
    flexGrow: 1,
    width: wp("27.500000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%"),
    top: hp("8.125%")
  },
  Text_I183_11_26_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_I183_11_22_0: {
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
  View_I183_11_106_0: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I183_11_106_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I183_11_301_2401: {
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
  View_183_12: {
    width: wp("58.05555555555556%"),
    minWidth: wp("58.05555555555556%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.11111111111111%"),
    top: hp("19.6875%")
  },
  Text_183_12: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_13: {
    width: wp("70.27777777777777%"),
    minWidth: wp("70.27777777777777%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("30.46875%")
  },
  Text_183_13: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 9,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_14: {
    width: wp("50.55555555555556%"),
    minWidth: wp("50.55555555555556%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.72222222222222%"),
    top: hp("26.406249999999996%")
  },
  Text_183_14: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_15: {
    width: wp("54.72222222222223%"),
    minWidth: wp("54.72222222222223%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77777777777778%"),
    top: hp("64.84375%")
  },
  Text_183_15: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_16: {
    width: wp("100.55555555555556%"),
    minWidth: wp("100.55555555555556%"),
    height: hp("5.625%"),
    minHeight: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2777777777777778%"),
    top: hp("94.375%"),
    backgroundColor: "rgba(211, 238, 255, 1)"
  },
  View_183_17: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    height: hp("12.03125%"),
    minHeight: hp("12.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.77777777777778%"),
    top: hp("87.03125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_17_33_245: {
    flexGrow: 1,
    width: wp("13.88888888888889%"),
    height: hp("7.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_17_33_245_31_265: {
    flexGrow: 1,
    width: wp("13.88888888888889%"),
    height: hp("7.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_I183_17_33_323: {
    flexGrow: 1,
    width: wp("12.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444429%"),
    top: hp("8.125%")
  },
  Text_I183_17_33_323: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I183_17_33_222: {
    flexGrow: 1,
    width: wp("7.222222222222221%"),
    height: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888857%"),
    top: hp("2.1875%")
  },
  View_183_18: {
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
  View_I183_18_37_362: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I183_18_37_361: {
    width: wp("100%"),
    height: hp("5.15625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_I183_18_36_398: {
    width: wp("73.88888888888889%"),
    top: hp("0.6250000000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_I183_18_36_398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_18_36_397: {
    width: wp("4.444444444444445%"),
    height: hp("2.8125%"),
    top: hp("1.0937500000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%")
  },
  ImageBackground_I183_18_39_5: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.94444444444444%"),
    top: hp("1.7187500000000036%")
  },
  ImageBackground_183_19: {
    width: wp("95.55555555555556%"),
    minWidth: wp("95.55555555555556%"),
    height: hp("27.65625%"),
    minHeight: hp("27.65625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("37.03125%"),
    resizeMode: "cover"
  },
  View_183_20: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38888888888889%"),
    top: hp("90.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_20_39_547: {
    flexGrow: 1,
    width: wp("10.833333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.5625%")
  },
  Text_I183_20_39_547: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I183_20_39_548: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_21: {
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
  View_I183_21_33_227: {
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
  View_I183_21_33_227_31_265: {
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
  View_I183_21_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I183_21_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I183_21_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_183_22: {
    width: wp("37.22222222222222%"),
    minWidth: wp("37.22222222222222%"),
    height: hp("31.093749999999996%"),
    minHeight: hp("31.093749999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.66666666666667%"),
    top: hp("18.59375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_22_61_30: {
    flexGrow: 1,
    width: wp("37.22222222222222%"),
    height: hp("31.093749999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_I183_22_61_31: {
    flexGrow: 1,
    width: wp("32.746329837375214%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("26.099138259887695%")
  },
  ImageBackground_I183_22_61_32: {
    flexGrow: 1,
    width: wp("32.746329837375214%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("17.7243709564209%")
  },
  ImageBackground_I183_22_61_33: {
    flexGrow: 1,
    width: wp("32.746329837375214%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("12.878694534301758%")
  },
  View_I183_22_61_34: {
    flexGrow: 1,
    width: wp("32.5%"),
    height: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("22.5%")
  },
  View_I183_22_61_35: {
    width: wp("25.833333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%")
  },
  Text_I183_22_61_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_22_61_36: {
    width: wp("3.3333333333333335%"),
    height: hp("2.1875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I183_22_61_37: {
    flexGrow: 1,
    width: wp("32.5%"),
    height: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("19.0625%")
  },
  View_I183_22_61_38: {
    width: wp("25.833333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%")
  },
  Text_I183_22_61_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_22_61_39: {
    width: wp("3.6111111111111107%"),
    height: hp("2.03125%"),
    top: hp("0.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I183_22_61_41: {
    flexGrow: 1,
    width: wp("25.833333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666671%"),
    top: hp("27.5%")
  },
  Text_I183_22_61_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I183_22_61_43: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    height: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("8.906250000000004%")
  },
  View_I183_22_61_44: {
    width: wp("25.833333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444457%")
  },
  Text_I183_22_61_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_22_61_45: {
    width: wp("4.166666666666666%"),
    height: hp("2.34375%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I183_22_61_46: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666572%"),
    top: hp("1.875%")
  },
  View_I183_22_61_47: {
    width: wp("25.833333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.500000000000014%")
  },
  Text_I183_22_61_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_22_61_48: {
    width: wp("4.444444444444445%"),
    height: hp("2.5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I183_22_61_49: {
    flexGrow: 1,
    width: wp("32.5%"),
    height: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("5.46875%")
  },
  View_I183_22_61_50: {
    width: wp("25.833333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%")
  },
  Text_I183_22_61_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_22_61_51: {
    width: wp("3.3333333333333335%"),
    height: hp("1.25%"),
    top: hp("0.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I183_22_61_52: {
    flexGrow: 1,
    width: wp("32.5%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("13.90625%")
  },
  View_I183_22_61_53: {
    width: wp("25.833333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%")
  },
  Text_I183_22_61_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_22_61_54: {
    width: wp("3.888888888888889%"),
    height: hp("1.8749998509883883%"),
    top: hp("0.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_22_61_58: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("27.5%")
  },
  View_183_23: {
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
  View_I183_23_33_236: {
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
  View_I183_23_33_236_31_265: {
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
  View_I183_23_33_326: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555558%"),
    top: hp("6.5625%")
  },
  Text_I183_23_33_326: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I183_23_33_216: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    height: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("1.40625%")
  },
  View_183_24: {
    width: wp("17.5%"),
    minWidth: wp("17.5%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444446%"),
    top: hp("90.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_24_174_28: {
    flexGrow: 1,
    width: wp("10.277777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("6.5625%")
  },
  Text_I183_24_174_28: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I183_24_174_29: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("0%")
  },
  View_303_13: {
    width: wp("97.22222222222221%"),
    minWidth: wp("97.22222222222221%"),
    height: hp("14.0625%"),
    minHeight: hp("14.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    top: hp("70.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I303_13_303_7: {
    flexGrow: 1,
    width: wp("97.22222222222221%"),
    height: hp("14.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
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
