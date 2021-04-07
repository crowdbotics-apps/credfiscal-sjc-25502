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
      <View style={styles.View_124_19}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I124_19_8_1}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d9/163a/7a0fca9ce4a88e5f175df8b213f31839"
          }}
          style={styles.ImageBackground_I124_19_6_11}
        />
        <View style={styles.View_I124_19_12_2}>
          <Text style={styles.Text_I124_19_12_2}>Crédito Fiscal</Text>
        </View>
        <View style={styles.View_I124_19_26_68}>
          <Text style={styles.Text_I124_19_26_68}>Consumidor</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I124_19_22_0}
        />
        <View style={styles.View_I124_19_106_0}>
          <Text style={styles.Text_I124_19_106_0}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I124_19_301_2401}
        />
      </View>
      <View style={styles.View_124_20}>
        <Text style={styles.Text_124_20}>Usar créditos</Text>
      </View>
      <View style={styles.View_124_21} />
      <View style={styles.View_124_22}>
        <View style={styles.View_I124_22_37_362}>
          <View style={styles.View_I124_22_37_361} />
          <View style={styles.View_I124_22_36_398}>
            <Text style={styles.Text_I124_22_36_398}>
              Fulano de Tal da Silva
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6178/0af5/53c6b6bbee078d64d97b6e00935aeb2d"
            }}
            style={styles.ImageBackground_I124_22_36_397}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ba/f0be/a00a933fb601a2b74ba8ef46928ddd9a"
          }}
          style={styles.ImageBackground_I124_22_39_5}
        />
      </View>
      <View style={styles.View_124_23}>
        <View style={styles.View_I124_23_33_227}>
          <View style={styles.View_I124_23_33_227_31_265} />
        </View>
        <View style={styles.View_I124_23_33_324}>
          <Text style={styles.Text_I124_23_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I124_23_33_212}
        />
      </View>
      <View style={styles.View_124_24}>
        <View style={styles.View_I124_24_33_150}>
          <View style={styles.View_I124_24_33_150_31_265} />
        </View>
        <View style={styles.View_I124_24_33_321}>
          <Text style={styles.Text_I124_24_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I124_24_33_180}
        />
      </View>
      <View style={styles.View_124_26}>
        <View style={styles.View_124_27} />
        <View style={styles.View_124_28}>
          <Text style={styles.Text_124_28}>Buscar</Text>
        </View>
      </View>
      <View style={styles.View_124_29}>
        <Text style={styles.Text_124_29}>Buscar Serviços/Produtos</Text>
      </View>
      <View style={styles.View_124_30}>
        <View style={styles.View_124_31} />
        <View style={styles.View_124_32}>
          <Text style={styles.Text_124_32}>Salão de Beleza</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ca/ec84/513e7a4af649902614b951518246a640"
          }}
          style={styles.ImageBackground_124_33}
        />
      </View>
      <View style={styles.View_124_35}>
        <View style={styles.View_124_36} />
        <View style={styles.View_124_37}>
          <Text style={styles.Text_124_37}>Buscar pelo nome comercial</Text>
        </View>
      </View>
      <View style={styles.View_124_38}>
        <View style={styles.View_124_39} />
        <View style={styles.View_124_40} />
        <View style={styles.View_124_41} />
        <View style={styles.View_124_42}>
          <Text style={styles.Text_124_42}>Salão de Beleza Sou Linda</Text>
        </View>
        <View style={styles.View_124_43}>
          <Text style={styles.Text_124_43}>Cabelereiro Famoso</Text>
        </View>
        <View style={styles.View_124_44}>
          <Text style={styles.Text_124_44}>Salão da Sara</Text>
        </View>
        <View style={styles.View_124_45}>
          <Text style={styles.Text_124_45}>Corpo e CIA</Text>
        </View>
        <View style={styles.View_124_46}>
          <Text style={styles.Text_124_46}>Cabelereiro Careca</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea5e/7ebf/a135b551905c0ccf9fb2eaac56765e66"
          }}
          style={styles.ImageBackground_124_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9adf/b102/e1f81858b71e8c42a531755f7a9f6f68"
          }}
          style={styles.ImageBackground_124_48}
        />
      </View>
      <View style={styles.View_124_84} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1339/b9a0/afe97dd3c136572f5dab492672a4f284"
        }}
        style={styles.ImageBackground_132_1}
      />
      <View style={styles.View_140_92}>
        <View style={styles.View_124_85}>
          <Text style={styles.Text_124_85}>Salão da Sara</Text>
        </View>
        <View style={styles.View_124_87}>
          <Text style={styles.Text_124_87}>
            Rua Santa Clara, 220 Vila Adyana São José dos Campos
          </Text>
        </View>
        <View style={styles.View_140_91}>
          <Text style={styles.Text_140_91}>(12) 9912-1212 </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f099/49dd/3a398188f62bd016bf1bd5038ff7f00d"
          }}
          style={styles.ImageBackground_124_88}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d86/9cf2/b08a241cd2edc99b3f07375a26c43e55"
          }}
          style={styles.ImageBackground_125_1737}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4ce/4ba6/9a3e55878fd5fa485e89ed977981a566"
          }}
          style={styles.ImageBackground_140_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4ce/4ba6/9a3e55878fd5fa485e89ed977981a566"
          }}
          style={styles.ImageBackground_140_83}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d60/ec88/4492e97a0c785247e5fc4a0b1ace7a46"
          }}
          style={styles.ImageBackground_140_84}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_124_19: {
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
  ImageBackground_I124_19_8_1: {
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
  ImageBackground_I124_19_6_11: {
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
  View_I124_19_12_2: {
    flexGrow: 1,
    width: wp("31.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("4.84375%")
  },
  Text_I124_19_12_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_I124_19_26_68: {
    flexGrow: 1,
    width: wp("27.500000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%"),
    top: hp("8.125%")
  },
  Text_I124_19_26_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_I124_19_22_0: {
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
  View_I124_19_106_0: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I124_19_106_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I124_19_301_2401: {
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
  View_124_20: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%"),
    top: hp("19.6875%")
  },
  Text_124_20: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_124_21: {
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
  View_124_22: {
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
  View_I124_22_37_362: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I124_22_37_361: {
    width: wp("100%"),
    height: hp("5.15625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_I124_22_36_398: {
    width: wp("73.88888888888889%"),
    top: hp("0.6250000000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_I124_22_36_398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I124_22_36_397: {
    width: wp("4.444444444444445%"),
    height: hp("2.8125%"),
    top: hp("1.0937500000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%")
  },
  ImageBackground_I124_22_39_5: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.94444444444444%"),
    top: hp("1.7187500000000036%")
  },
  View_124_23: {
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
  View_I124_23_33_227: {
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
  View_I124_23_33_227_31_265: {
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
  View_I124_23_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I124_23_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I124_23_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_124_24: {
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
  View_I124_24_33_150: {
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
  View_I124_24_33_150_31_265: {
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
  View_I124_24_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I124_24_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I124_24_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_124_26: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%"),
    top: hp("48.4375%")
  },
  View_124_27: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
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
  View_124_28: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222225%"),
    top: hp("1.09375%")
  },
  Text_124_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_124_29: {
    width: wp("58.88888888888889%"),
    minWidth: wp("58.88888888888889%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.555555555555554%"),
    top: hp("23.75%")
  },
  Text_124_29: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_124_30: {
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
  View_124_31: {
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
  View_124_32: {
    width: wp("35.27777777777778%"),
    minWidth: wp("35.27777777777778%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333304%"),
    top: hp("1.09375%")
  },
  Text_124_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_124_33: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.00000000000001%")
  },
  View_124_35: {
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
  View_124_36: {
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
  View_124_37: {
    width: wp("49.44444444444444%"),
    minWidth: wp("49.44444444444444%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("1.5625%")
  },
  Text_124_37: {
    color: "rgba(188, 189, 190, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_124_38: {
    width: wp("92.22222222222223%"),
    minWidth: wp("92.22222222222223%"),
    height: hp("21.71875%"),
    minHeight: hp("21.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%"),
    top: hp("56.40625%")
  },
  View_124_39: {
    width: wp("92.22222222222223%"),
    minWidth: wp("92.22222222222223%"),
    height: hp("4.53125%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 241, 255, 1)"
  },
  View_124_40: {
    width: wp("92.22222222222223%"),
    minWidth: wp("92.22222222222223%"),
    height: hp("4.53125%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.75%"),
    backgroundColor: "rgba(222, 241, 255, 1)"
  },
  View_124_41: {
    width: wp("92.22222222222223%"),
    minWidth: wp("92.22222222222223%"),
    height: hp("4.53125%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.1875%"),
    backgroundColor: "rgba(222, 241, 255, 1)"
  },
  View_124_42: {
    width: wp("45.83333333333333%"),
    minWidth: wp("45.83333333333333%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("0.9375000000000071%")
  },
  Text_124_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_124_43: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111116%"),
    top: hp("18.125%")
  },
  Text_124_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_124_44: {
    width: wp("23.88888888888889%"),
    minWidth: wp("23.88888888888889%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("9.6875%")
  },
  Text_124_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_124_45: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111116%"),
    top: hp("5.46875%")
  },
  Text_124_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_124_46: {
    width: wp("33.05555555555556%"),
    minWidth: wp("33.05555555555556%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111116%"),
    top: hp("14.0625%")
  },
  Text_124_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  ImageBackground_124_47: {
    width: wp("4.713888698154026%"),
    height: hp("2.6515623927116394%"),
    top: hp("11.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%")
  },
  ImageBackground_124_48: {
    width: wp("1.6666666666666667%"),
    height: hp("0.9375%"),
    top: hp("13.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.22222222222222%")
  },
  View_124_84: {
    width: wp("67.77777777777779%"),
    minWidth: wp("67.77777777777779%"),
    height: hp("22.96875%"),
    minHeight: hp("22.96875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.277777777777779%"),
    top: hp("60.78125%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_132_1: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333062065972221%"),
    top: hp("28.125%")
  },
  View_140_92: {
    width: wp("66.11111111111111%"),
    minWidth: wp("66.11111111111111%"),
    height: hp("20.625%"),
    minHeight: hp("20.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.277777777777779%"),
    top: hp("60.78125%")
  },
  View_124_85: {
    width: wp("31.11111111111111%"),
    minWidth: wp("31.11111111111111%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666664%"),
    top: hp("2.34375%")
  },
  Text_124_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_124_87: {
    width: wp("61.38888888888889%"),
    minWidth: wp("61.38888888888889%"),
    minHeight: hp("6.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222221%"),
    top: hp("8.75%")
  },
  Text_124_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_140_91: {
    width: wp("23.88888888888889%"),
    minWidth: wp("23.88888888888889%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222225%"),
    top: hp("18.28125%")
  },
  Text_140_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_124_88: {
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
  ImageBackground_125_1737: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.888392984867096%"),
    minHeight: hp("4.888392984867096%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.88888888888889%"),
    top: hp("9.6875%"),
    resizeMode: "cover"
  },
  ImageBackground_140_82: {
    width: wp("58.333333333333336%"),
    minWidth: wp("58.333333333333336%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222221%"),
    top: hp("6.5625%")
  },
  ImageBackground_140_83: {
    width: wp("58.333333333333336%"),
    minWidth: wp("58.333333333333336%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222221%"),
    top: hp("17.03125%")
  },
  ImageBackground_140_84: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.34375%"),
    minHeight: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: hp("18.28125%")
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
