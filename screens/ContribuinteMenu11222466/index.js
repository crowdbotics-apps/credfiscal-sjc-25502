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
      <View style={styles.View_44_44}>
        <Text style={styles.Text_44_44}>Saldo em créditos fiscais:</Text>
      </View>
      <View style={styles.View_44_45}>
        <Text style={styles.Text_44_45}>
          * o saldo pode levar até 30 dias para ser atualizado
        </Text>
      </View>
      <View style={styles.View_44_46}>
        <Text style={styles.Text_44_46}>R$ 292,00*</Text>
      </View>
      <View style={styles.View_44_47}>
        <Text style={styles.Text_44_47}>Créditos nos últimos 12 meses</Text>
      </View>
      <View style={styles.View_44_48} />
      <View style={styles.View_44_53}>
        <View style={styles.View_I44_53_39_547}>
          <Text style={styles.Text_I44_53_39_547}>Extrato</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf7f/8f6a/bf1fcb31a2c354a5bf5bf5aa30783974"
          }}
          style={styles.ImageBackground_I44_53_39_548}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f30/3c79/71dd6d3f0793c4a759f8af4689cd8220"
        }}
        style={styles.ImageBackground_44_54}
      />
      <View style={styles.View_44_55}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I44_55_106_665}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d9/163a/7a0fca9ce4a88e5f175df8b213f31839"
          }}
          style={styles.ImageBackground_I44_55_106_666}
        />
        <View style={styles.View_I44_55_106_667}>
          <Text style={styles.Text_I44_55_106_667}>Crédito Fiscal</Text>
        </View>
        <View style={styles.View_I44_55_106_668}>
          <Text style={styles.Text_I44_55_106_668}>Contribuinte</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I44_55_106_669}
        />
        <View style={styles.View_I44_55_103_360}>
          <Text style={styles.Text_I44_55_103_360}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I44_55_301_2693}
        />
      </View>
      <View style={styles.View_44_56}>
        <View style={styles.View_I44_56_43_664}>
          <View style={styles.View_I44_56_43_665} />
          <View style={styles.View_I44_56_43_666}>
            <Text style={styles.Text_I44_56_43_666}>
              Serviços de Beleza LTDA ME
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ba/f0be/a00a933fb601a2b74ba8ef46928ddd9a"
          }}
          style={styles.ImageBackground_I44_56_43_732}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ac/4f97/9d076b3daf21cf1f1771e134ebd65e8d"
          }}
          style={styles.ImageBackground_I44_56_43_731}
        />
      </View>
      <View style={styles.View_44_58}>
        <Text style={styles.Text_44_58}>Emitir NF</Text>
      </View>
      <View style={styles.View_49_528}>
        <View style={styles.View_I49_528_33_227}>
          <View style={styles.View_I49_528_33_227_31_265} />
        </View>
        <View style={styles.View_I49_528_33_324}>
          <Text style={styles.Text_I49_528_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I49_528_33_212}
        />
      </View>
      <View style={styles.View_61_472}>
        <View style={styles.View_I61_472_61_132} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_I61_472_61_133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_I61_472_61_134}
        />
        <View style={styles.View_I61_472_61_135}>
          <View style={styles.View_I61_472_61_136}>
            <Text style={styles.Text_I61_472_61_136}>Doar</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/092f/3bbd/ae32a63438f4091a20df5e379f018b75"
            }}
            style={styles.ImageBackground_I61_472_61_137}
          />
        </View>
        <View style={styles.View_I61_472_61_138}>
          <View style={styles.View_I61_472_61_139}>
            <Text style={styles.Text_I61_472_61_139}>Usar créditos</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acfd/1f9e/b06103d6aa9dd68d26b48a094d57773d"
            }}
            style={styles.ImageBackground_I61_472_61_140}
          />
        </View>
        <View style={styles.View_I61_472_61_141}>
          <View style={styles.View_I61_472_61_142}>
            <Text style={styles.Text_I61_472_61_142}>Extrato</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3381/43cb/dac60a68392f217d57eb231af2487b01"
            }}
            style={styles.ImageBackground_I61_472_61_143}
          />
        </View>
        <View style={styles.View_I61_472_61_147}>
          <View style={styles.View_I61_472_61_148}>
            <Text style={styles.Text_I61_472_61_148}>Sair</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ece9/17fe/c6a7673e00a454f2a264b07d632baf2f"
            }}
            style={styles.ImageBackground_I61_472_61_149}
          />
        </View>
        <View style={styles.View_I61_472_61_150}>
          <View style={styles.View_I61_472_61_151}>
            <Text style={styles.Text_I61_472_61_151}>Ajuda</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c16/44ee/f1615e22784d72562b8f8657d506e981"
            }}
            style={styles.ImageBackground_I61_472_61_152}
          />
        </View>
      </View>
      <View style={styles.View_62_957}>
        <View style={styles.View_I62_957_33_150}>
          <View style={styles.View_I62_957_33_150_31_265} />
        </View>
        <View style={styles.View_I62_957_33_321}>
          <Text style={styles.Text_I62_957_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I62_957_33_180}
        />
      </View>
      <View style={styles.View_85_116}>
        <View style={styles.View_I85_116_33_245}>
          <View style={styles.View_I85_116_33_245_31_265} />
        </View>
        <View style={styles.View_I85_116_33_323}>
          <Text style={styles.Text_I85_116_33_323}>Usar créditos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce53/e503/aedbdc13d264be7fdce476e36e11b8b0"
          }}
          style={styles.ImageBackground_I85_116_33_222}
        />
      </View>
      <View style={styles.View_183_147}>
        <View style={styles.View_I183_147_174_28}>
          <Text style={styles.Text_I183_147_174_28}>Avisos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0172/c44d/b11a0f24cca0d68b020c7aaa0f4f28bd"
          }}
          style={styles.ImageBackground_I183_147_174_29}
        />
      </View>
      <View style={styles.View_303_17}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35bd/c9fc/be9ea0ee4266d13baebce9ce77697717"
          }}
          style={styles.ImageBackground_I303_17_303_7}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_44_44: {
    width: wp("58.333333333333336%"),
    minWidth: wp("58.333333333333336%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.833333333333336%"),
    top: hp("19.6875%")
  },
  Text_44_44: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_45: {
    width: wp("70.55555555555556%"),
    minWidth: wp("70.55555555555556%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%"),
    top: hp("30.46875%")
  },
  Text_44_45: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 9,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_46: {
    width: wp("50.55555555555556%"),
    minWidth: wp("50.55555555555556%"),
    minHeight: hp("5.9375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.72222222222222%"),
    top: hp("25.156250000000004%")
  },
  Text_44_46: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_47: {
    width: wp("54.72222222222223%"),
    minWidth: wp("54.72222222222223%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77777777777778%"),
    top: hp("64.84375%")
  },
  Text_44_47: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_48: {
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
  View_44_53: {
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
  View_I44_53_39_547: {
    flexGrow: 1,
    width: wp("10.833333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.5625%")
  },
  Text_I44_53_39_547: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I44_53_39_548: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_44_54: {
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
  View_44_55: {
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
  ImageBackground_I44_55_106_665: {
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
  ImageBackground_I44_55_106_666: {
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
  View_I44_55_106_667: {
    flexGrow: 1,
    width: wp("31.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("4.84375%")
  },
  Text_I44_55_106_667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_I44_55_106_668: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.166666666666668%"),
    top: hp("8.125%")
  },
  Text_I44_55_106_668: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_I44_55_106_669: {
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
  View_I44_55_103_360: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I44_55_103_360: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I44_55_301_2693: {
    flexGrow: 1,
    width: wp("12.357652452256945%"),
    height: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.61111111111111%"),
    top: hp("4.375%"),
    resizeMode: "cover"
  },
  View_44_56: {
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
  View_I44_56_43_664: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I44_56_43_665: {
    width: wp("100%"),
    height: hp("5.15625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_I44_56_43_666: {
    width: wp("72.77777777777777%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_I44_56_43_666: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I44_56_43_732: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.94444444444444%"),
    top: hp("1.7187500000000036%")
  },
  ImageBackground_I44_56_43_731: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("1.0937500000000018%")
  },
  View_44_58: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.111111111111114%"),
    top: hp("22.96875%")
  },
  Text_44_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_528: {
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
  View_I49_528_33_227: {
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
  View_I49_528_33_227_31_265: {
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
  View_I49_528_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I49_528_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I49_528_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_61_472: {
    width: wp("37.22222222222222%"),
    minWidth: wp("37.22222222222222%"),
    height: hp("21.71875%"),
    minHeight: hp("21.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.38888888888889%"),
    top: hp("18.4375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I61_472_61_132: {
    flexGrow: 1,
    width: wp("37.22222222222222%"),
    height: hp("21.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I61_472_61_133: {
    flexGrow: 1,
    width: wp("32.746329837375214%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("12.187500000000004%")
  },
  ImageBackground_I61_472_61_134: {
    flexGrow: 1,
    width: wp("32.746329837375214%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("17.34375%")
  },
  View_I61_472_61_135: {
    flexGrow: 1,
    width: wp("32.77777777777778%"),
    height: hp("2.3246169090270996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("8.269119262695312%")
  },
  View_I61_472_61_136: {
    width: wp("25.833333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.94444444444445%")
  },
  Text_I61_472_61_136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_472_61_137: {
    width: wp("4.166666666666666%"),
    height: hp("2.3246169090270996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_472_61_138: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: hp("2.4795913696289062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("1.4515304565429688%")
  },
  View_I61_472_61_139: {
    width: wp("25.833333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.5%")
  },
  Text_I61_472_61_139: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_472_61_140: {
    width: wp("4.444444444444445%"),
    height: hp("2.4795913696289062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_472_61_141: {
    flexGrow: 1,
    width: wp("32.5%"),
    height: hp("2.3246169090270996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.499999999999993%"),
    top: hp("4.8596954345703125%")
  },
  View_I61_472_61_142: {
    width: wp("25.833333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%")
  },
  Text_I61_472_61_142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_472_61_143: {
    width: wp("3.3333333333333335%"),
    height: hp("1.2397956848144531%"),
    top: hp("0.464935302734375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_472_61_147: {
    flexGrow: 1,
    width: wp("32.22222222222222%"),
    height: hp("2.5153064727783203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: hp("18.28125%")
  },
  View_I61_472_61_148: {
    width: wp("25.833333333333336%"),
    top: hp("0.03570556640625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888886%")
  },
  Text_I61_472_61_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_472_61_149: {
    width: wp("3.3333333333333335%"),
    height: hp("2.03125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_472_61_150: {
    flexGrow: 1,
    width: wp("31.944444444444443%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.05555555555555%"),
    top: hp("13.437499999999996%")
  },
  View_I61_472_61_151: {
    width: wp("25.833333333333336%"),
    top: hp("0.15625000000000355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111114%")
  },
  Text_I61_472_61_151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_472_61_152: {
    width: wp("2.7777777777777777%"),
    height: hp("2.5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_957: {
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
  View_I62_957_33_150: {
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
  View_I62_957_33_150_31_265: {
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
  View_I62_957_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I62_957_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I62_957_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_85_116: {
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
  View_I85_116_33_245: {
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
  View_I85_116_33_245_31_265: {
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
  View_I85_116_33_323: {
    flexGrow: 1,
    width: wp("12.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444429%"),
    top: hp("8.125%")
  },
  Text_I85_116_33_323: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I85_116_33_222: {
    flexGrow: 1,
    width: wp("7.222222222222221%"),
    height: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888857%"),
    top: hp("2.1875%")
  },
  View_183_147: {
    width: wp("17.5%"),
    minWidth: wp("17.5%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444446%"),
    top: hp("90.46875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_147_174_28: {
    flexGrow: 1,
    width: wp("10.277777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("6.5625%")
  },
  Text_I183_147_174_28: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I183_147_174_29: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("0%")
  },
  View_303_17: {
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
  ImageBackground_I303_17_303_7: {
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
