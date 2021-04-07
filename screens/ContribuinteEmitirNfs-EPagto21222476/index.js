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
      <View style={styles.View_82_1}>
        <Text style={styles.Text_82_1}>Emissão NFS-e</Text>
      </View>
      <View style={styles.View_82_2} />
      <View style={styles.View_82_3}>
        <View style={styles.View_I82_3_33_227}>
          <View style={styles.View_I82_3_33_227_31_265} />
        </View>
        <View style={styles.View_I82_3_33_324}>
          <Text style={styles.Text_I82_3_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I82_3_33_212}
        />
      </View>
      <View style={styles.View_82_4}>
        <View style={styles.View_I82_4_33_150}>
          <View style={styles.View_I82_4_33_150_31_265} />
        </View>
        <View style={styles.View_I82_4_33_321}>
          <Text style={styles.Text_I82_4_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I82_4_33_180}
        />
      </View>
      <View style={styles.View_82_5}>
        <View style={styles.View_82_7} />
        <View style={styles.View_82_8}>
          <Text style={styles.Text_82_8}>Finalizar</Text>
        </View>
      </View>
      <View style={styles.View_82_9}>
        <View style={styles.View_82_10}>
          <Text style={styles.Text_82_10}>Total a pagar</Text>
        </View>
        <View style={styles.View_82_11}>
          <Text style={styles.Text_82_11}>R$ 170,00</Text>
        </View>
      </View>
      <View style={styles.View_82_136}>
        <View style={styles.View_82_13}>
          <Text style={styles.Text_82_13}>Saldo a receber</Text>
        </View>
        <View style={styles.View_82_14}>
          <View style={styles.View_82_15} />
        </View>
        <View style={styles.View_82_16}>
          <Text style={styles.Text_82_16}>170,00</Text>
        </View>
      </View>
      <View style={styles.View_82_90}>
        <View style={styles.View_82_72}>
          <View style={styles.View_82_73} />
        </View>
        <View style={styles.View_82_74}>
          <Text style={styles.Text_82_74}>0,00</Text>
        </View>
      </View>
      <View style={styles.View_82_118}>
        <View style={styles.View_82_119}>
          <View style={styles.View_82_120} />
        </View>
        <View style={styles.View_82_121}>
          <Text style={styles.Text_82_121}>0,00</Text>
        </View>
      </View>
      <View style={styles.View_82_127}>
        <View style={styles.View_82_128}>
          <View style={styles.View_82_129} />
        </View>
        <View style={styles.View_82_130}>
          <Text style={styles.Text_82_130}>0,00</Text>
        </View>
      </View>
      <View style={styles.View_82_117}>
        <View style={styles.View_82_17} />
        <View style={styles.View_82_18}>
          <Text style={styles.Text_82_18}>Meio de pagto</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e74/696f/f41db971fd337ee4310732d9e6b6a27d"
          }}
          style={styles.ImageBackground_82_19}
        />
      </View>
      <View style={styles.View_82_122}>
        <View style={styles.View_82_123} />
        <View style={styles.View_82_124}>
          <Text style={styles.Text_82_124}>Meio de pagto</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e74/696f/f41db971fd337ee4310732d9e6b6a27d"
          }}
          style={styles.ImageBackground_82_125}
        />
      </View>
      <View style={styles.View_82_131}>
        <View style={styles.View_82_132} />
        <View style={styles.View_82_133}>
          <Text style={styles.Text_82_133}>Meio de pagto</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e74/696f/f41db971fd337ee4310732d9e6b6a27d"
          }}
          style={styles.ImageBackground_82_134}
        />
      </View>
      <View style={styles.View_82_34}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I82_34_106_665}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d9/163a/7a0fca9ce4a88e5f175df8b213f31839"
          }}
          style={styles.ImageBackground_I82_34_106_666}
        />
        <View style={styles.View_I82_34_106_667}>
          <Text style={styles.Text_I82_34_106_667}>Crédito Fiscal</Text>
        </View>
        <View style={styles.View_I82_34_106_668}>
          <Text style={styles.Text_I82_34_106_668}>Contribuinte</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I82_34_106_669}
        />
        <View style={styles.View_I82_34_103_360}>
          <Text style={styles.Text_I82_34_103_360}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I82_34_301_2693}
        />
      </View>
      <View style={styles.View_82_35}>
        <View style={styles.View_I82_35_43_664}>
          <View style={styles.View_I82_35_43_665} />
          <View style={styles.View_I82_35_43_666}>
            <Text style={styles.Text_I82_35_43_666}>
              Serviços de Beleza LTDA ME
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ba/f0be/a00a933fb601a2b74ba8ef46928ddd9a"
          }}
          style={styles.ImageBackground_I82_35_43_732}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ac/4f97/9d076b3daf21cf1f1771e134ebd65e8d"
          }}
          style={styles.ImageBackground_I82_35_43_731}
        />
      </View>
      <View style={styles.View_82_36}>
        <Text style={styles.Text_82_36}>Forma de Pagamento</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1339/b9a0/afe97dd3c136572f5dab492672a4f284"
        }}
        style={styles.ImageBackground_132_20}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_82_1: {
    width: wp("45.83333333333333%"),
    minWidth: wp("45.83333333333333%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.22222222222222%"),
    top: hp("20.15625%")
  },
  Text_82_1: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_2: {
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
  View_82_3: {
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
  View_I82_3_33_227: {
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
  View_I82_3_33_227_31_265: {
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
  View_I82_3_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I82_3_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I82_3_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_82_4: {
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
  View_I82_4_33_150: {
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
  View_I82_4_33_150_31_265: {
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
  View_I82_4_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I82_4_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I82_4_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_82_5: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.666666666666664%"),
    top: hp("87.34375%")
  },
  View_82_7: {
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
  View_82_8: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.111111111111114%"),
    top: hp("1.09375%")
  },
  Text_82_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_9: {
    width: wp("64.72222222222223%"),
    minWidth: wp("64.72222222222223%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%"),
    top: hp("32.8125%")
  },
  View_82_10: {
    width: wp("29.166666666666668%"),
    minWidth: wp("29.166666666666668%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_82_10: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_11: {
    width: wp("30.555555555555557%"),
    minWidth: wp("30.555555555555557%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.16666666666667%"),
    top: hp("0%")
  },
  Text_82_11: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_136: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("67.34375%")
  },
  View_82_13: {
    width: wp("35.27777777777778%"),
    minWidth: wp("35.27777777777778%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.09375%")
  },
  Text_82_13: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_14: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("0%")
  },
  View_82_15: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
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
  View_82_16: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("1.09375%")
  },
  Text_82_16: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_90: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.88888888888889%"),
    top: hp("40.78125%")
  },
  View_82_72: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_82_73: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
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
  View_82_74: {
    width: wp("20.555555555555554%"),
    minWidth: wp("20.555555555555554%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888893%"),
    top: hp("1.09375%")
  },
  Text_82_74: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_118: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.88888888888889%"),
    top: hp("49.375%")
  },
  View_82_119: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_82_120: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
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
  View_82_121: {
    width: wp("20.555555555555554%"),
    minWidth: wp("20.555555555555554%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888893%"),
    top: hp("1.093749999999993%")
  },
  Text_82_121: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_127: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.88888888888889%"),
    top: hp("57.96875%")
  },
  View_82_128: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_82_129: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
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
  View_82_130: {
    width: wp("20.555555555555554%"),
    minWidth: wp("20.555555555555554%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888893%"),
    top: hp("1.093749999999993%")
  },
  Text_82_130: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_117: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%"),
    top: hp("40.3125%")
  },
  View_82_17: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
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
  View_82_18: {
    width: wp("31.944444444444443%"),
    minWidth: wp("31.944444444444443%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%"),
    top: hp("1.09375%")
  },
  Text_82_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_19: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.38888888888889%")
  },
  View_82_122: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%"),
    top: hp("48.90625%")
  },
  View_82_123: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
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
  View_82_124: {
    width: wp("31.944444444444443%"),
    minWidth: wp("31.944444444444443%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%"),
    top: hp("1.09375%")
  },
  Text_82_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_125: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.38888888888889%")
  },
  View_82_131: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%"),
    top: hp("57.49999999999999%")
  },
  View_82_132: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
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
  View_82_133: {
    width: wp("31.944444444444443%"),
    minWidth: wp("31.944444444444443%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%"),
    top: hp("1.093750000000007%")
  },
  Text_82_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_134: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.250000000000007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.38888888888889%")
  },
  View_82_34: {
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
  ImageBackground_I82_34_106_665: {
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
  ImageBackground_I82_34_106_666: {
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
  View_I82_34_106_667: {
    flexGrow: 1,
    width: wp("31.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("4.84375%")
  },
  Text_I82_34_106_667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_I82_34_106_668: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.166666666666668%"),
    top: hp("8.125%")
  },
  Text_I82_34_106_668: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_I82_34_106_669: {
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
  View_I82_34_103_360: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I82_34_103_360: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I82_34_301_2693: {
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
  View_82_35: {
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
  View_I82_35_43_664: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I82_35_43_665: {
    width: wp("100%"),
    height: hp("5.15625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_I82_35_43_666: {
    width: wp("72.77777777777777%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_I82_35_43_666: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I82_35_43_732: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.94444444444444%"),
    top: hp("1.7187500000000036%")
  },
  ImageBackground_I82_35_43_731: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("1.0937500000000018%")
  },
  View_82_36: {
    width: wp("48.333333333333336%"),
    minWidth: wp("48.333333333333336%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.833333333333336%"),
    top: hp("23.75%")
  },
  Text_82_36: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_132_20: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
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
