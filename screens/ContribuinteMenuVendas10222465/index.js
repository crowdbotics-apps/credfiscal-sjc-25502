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
      <View style={styles.View_61_384} />
      <View style={styles.View_61_385}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I61_385_106_665}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d9/163a/7a0fca9ce4a88e5f175df8b213f31839"
          }}
          style={styles.ImageBackground_I61_385_106_666}
        />
        <View style={styles.View_I61_385_106_667}>
          <Text style={styles.Text_I61_385_106_667}>Crédito Fiscal</Text>
        </View>
        <View style={styles.View_I61_385_106_668}>
          <Text style={styles.Text_I61_385_106_668}>Contribuinte</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I61_385_106_669}
        />
        <View style={styles.View_I61_385_103_360}>
          <Text style={styles.Text_I61_385_103_360}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I61_385_301_2693}
        />
      </View>
      <View style={styles.View_61_386}>
        <View style={styles.View_I61_386_43_664}>
          <View style={styles.View_I61_386_43_665} />
          <View style={styles.View_I61_386_43_666}>
            <Text style={styles.Text_I61_386_43_666}>
              Serviços de Beleza LTDA ME
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ba/f0be/a00a933fb601a2b74ba8ef46928ddd9a"
          }}
          style={styles.ImageBackground_I61_386_43_732}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ac/4f97/9d076b3daf21cf1f1771e134ebd65e8d"
          }}
          style={styles.ImageBackground_I61_386_43_731}
        />
      </View>
      <View style={styles.View_61_401}>
        <View style={styles.View_I61_401_33_227}>
          <View style={styles.View_I61_401_33_227_31_265} />
        </View>
        <View style={styles.View_I61_401_33_324}>
          <Text style={styles.Text_I61_401_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I61_401_33_212}
        />
      </View>
      <View style={styles.View_61_407}>
        <View style={styles.View_I61_407_33_236}>
          <View style={styles.View_I61_407_33_236_31_265} />
        </View>
        <View style={styles.View_I61_407_33_326}>
          <Text style={styles.Text_I61_407_33_326}>Config</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5986/f579/e1f9e3cbd075dca4c8e4abdfc3706e27"
          }}
          style={styles.ImageBackground_I61_407_33_216}
        />
      </View>
      <View style={styles.View_73_90}>
        <View style={styles.View_I73_90_73_48}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1716/7e73/d258871d5c0fc778f366eb4a59912b39"
            }}
            style={styles.ImageBackground_I73_90_73_49}
          />
        </View>
        <View style={styles.View_I73_90_73_32}>
          <Text style={styles.Text_I73_90_73_32}>Extrato Recebtos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7321/5a95/0612f8452f5ff39f7ec3e82bb4c7f38e"
          }}
          style={styles.ImageBackground_I73_90_73_33}
        />
      </View>
      <View style={styles.View_81_323}>
        <View style={styles.View_81_324} />
        <View style={styles.View_81_325}>
          <Text style={styles.Text_81_325}>Emitir NFS-e</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abb0/415b/cee275ff6c0db5531345ac948f120d9a"
          }}
          style={styles.ImageBackground_81_326}
        />
      </View>
      <View style={styles.View_81_327}>
        <View style={styles.View_81_328} />
        <View style={styles.View_81_329}>
          <Text style={styles.Text_81_329}>Cadastro de Serviços/Produtos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a43e/0c75/59425725bf16400b880bca87cbc56d3c"
          }}
          style={styles.ImageBackground_81_330}
        />
      </View>
      <View style={styles.View_81_331}>
        <View style={styles.View_81_332} />
        <View style={styles.View_81_333}>
          <Text style={styles.Text_81_333}>Gestão dos créditos fiscais</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f229/fa8b/3293e7c0b0b74cb1f63594d2d45b81b3"
          }}
          style={styles.ImageBackground_81_334}
        />
      </View>
      <View style={styles.View_61_294}>
        <View style={styles.View_I61_294_49_1066} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60c/f6d8/eb72c0fb151922644bd9dd1df708495a"
          }}
          style={styles.ImageBackground_I61_294_49_1067}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60c/f6d8/eb72c0fb151922644bd9dd1df708495a"
          }}
          style={styles.ImageBackground_I61_294_49_1068}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60c/f6d8/eb72c0fb151922644bd9dd1df708495a"
          }}
          style={styles.ImageBackground_I61_294_49_1069}
        />
        <View style={styles.View_I61_294_49_1070}>
          <View style={styles.View_I61_294_49_1071}>
            <Text style={styles.Text_I61_294_49_1071}>Perfil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f342/b1c0/013834b29d78c5f6dbac2f5470840b02"
            }}
            style={styles.ImageBackground_I61_294_49_1072}
          />
        </View>
        <View style={styles.View_I61_294_49_1073}>
          <View style={styles.View_I61_294_49_1074}>
            <Text style={styles.Text_I61_294_49_1074}>Configurações</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3659/7d65/499bd07ba9e770481879dd8ccc7edda0"
            }}
            style={styles.ImageBackground_I61_294_49_1075}
          />
        </View>
        <View style={styles.View_I61_294_49_1091}>
          <View style={styles.View_I61_294_49_1092}>
            <Text style={styles.Text_I61_294_49_1092}>Emitir NFS-e</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c496/f7ac/5ec02b628eb4a2a4359bb93895178122"
            }}
            style={styles.ImageBackground_I61_294_49_1093}
          />
        </View>
        <View style={styles.View_I61_294_54_325}>
          <View style={styles.View_I61_294_49_1077}>
            <Text style={styles.Text_I61_294_49_1077}>Sair</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05c9/60ca/0441325d720c037f5c7fd9edd0091813"
            }}
            style={styles.ImageBackground_I61_294_54_323}
          />
        </View>
        <View style={styles.View_I61_294_56_1}>
          <View style={styles.View_I61_294_54_327}>
            <Text style={styles.Text_I61_294_54_327}>Token fiscal</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dba9/a80a/4d35c5a6d7bff54b5e932acd3b369067"
            }}
            style={styles.ImageBackground_I61_294_54_333}
          />
        </View>
        <View style={styles.View_I61_294_49_1104}>
          <View style={styles.View_I61_294_49_1105}>
            <Text style={styles.Text_I61_294_49_1105}>Ajuda</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8269/0c21/4a9b146e74df260638c2499052aa6612"
            }}
            style={styles.ImageBackground_I61_294_49_1106}
          />
        </View>
        <View style={styles.View_I61_294_75_368}>
          <View style={styles.View_I61_294_49_1108}>
            <Text style={styles.Text_I61_294_49_1108}>Gestão dos créditos</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9726/0bc0/8595ab6e23938185c623b5b070a6cd38"
            }}
            style={styles.ImageBackground_I61_294_74_2}
          />
        </View>
        <View style={styles.View_I61_294_75_337}>
          <View style={styles.View_I61_294_75_71}>
            <Text style={styles.Text_I61_294_75_71}>Cadastro Serv/Prod</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93f5/21c9/26bbb4fc950c5cd429ac00dca13fc56b"
            }}
            style={styles.ImageBackground_I61_294_75_307}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_61_384: {
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
  View_61_385: {
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
  ImageBackground_I61_385_106_665: {
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
  ImageBackground_I61_385_106_666: {
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
  View_I61_385_106_667: {
    flexGrow: 1,
    width: wp("31.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("4.84375%")
  },
  Text_I61_385_106_667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_I61_385_106_668: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.166666666666668%"),
    top: hp("8.125%")
  },
  Text_I61_385_106_668: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_I61_385_106_669: {
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
  View_I61_385_103_360: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I61_385_103_360: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I61_385_301_2693: {
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
  View_61_386: {
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
  View_I61_386_43_664: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I61_386_43_665: {
    width: wp("100%"),
    height: hp("5.15625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_I61_386_43_666: {
    width: wp("72.77777777777777%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_I61_386_43_666: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_386_43_732: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.94444444444444%"),
    top: hp("1.7187500000000036%")
  },
  ImageBackground_I61_386_43_731: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("1.0937500000000018%")
  },
  View_61_401: {
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
  View_I61_401_33_227: {
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
  View_I61_401_33_227_31_265: {
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
  View_I61_401_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I61_401_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I61_401_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_61_407: {
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
  View_I61_407_33_236: {
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
  View_I61_407_33_236_31_265: {
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
  View_I61_407_33_326: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555558%"),
    top: hp("6.5625%")
  },
  Text_I61_407_33_326: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I61_407_33_216: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    height: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("1.40625%")
  },
  View_73_90: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    height: hp("12.65625%"),
    minHeight: hp("12.65625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.888888888888886%"),
    top: hp("86.5625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_90_73_48: {
    flexGrow: 1,
    width: wp("13.88888888888889%"),
    height: hp("7.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.07408311631945%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I73_90_73_49: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("7.8125%"),
    minHeight: hp("7.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I73_90_73_32: {
    flexGrow: 1,
    width: wp("20.555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.2222222222222143%"),
    top: hp("8.28125%")
  },
  Text_I73_90_73_32: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I73_90_73_33: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: hp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%"),
    top: hp("1.875%")
  },
  View_81_323: {
    width: wp("52.5%"),
    minWidth: wp("52.5%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("28.4375%")
  },
  View_81_324: {
    width: wp("52.5%"),
    minWidth: wp("52.5%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
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
  View_81_325: {
    width: wp("21.666666666666668%"),
    minWidth: wp("21.666666666666668%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444446%"),
    top: hp("2.6562499999999964%")
  },
  Text_81_325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_326: {
    width: wp("5%"),
    height: hp("3.4375000000000004%"),
    top: hp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333336%")
  },
  View_81_327: {
    width: wp("52.5%"),
    minWidth: wp("52.5%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("44.84375%")
  },
  View_81_328: {
    width: wp("52.5%"),
    minWidth: wp("52.5%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
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
  View_81_329: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444446%"),
    top: hp("1.40625%")
  },
  Text_81_329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_330: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666668%"),
    top: hp("2.34375%")
  },
  View_81_331: {
    width: wp("52.5%"),
    minWidth: wp("52.5%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%"),
    top: hp("61.25000000000001%")
  },
  View_81_332: {
    width: wp("52.5%"),
    minWidth: wp("52.5%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
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
  View_81_333: {
    width: wp("26.38888888888889%"),
    minWidth: wp("26.38888888888889%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444446%"),
    top: hp("1.406249999999993%")
  },
  Text_81_333: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_334: {
    width: wp("7.777777777777778%"),
    height: hp("4.375%"),
    top: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666668%")
  },
  View_61_294: {
    width: wp("47.77777777777778%"),
    minWidth: wp("47.77777777777778%"),
    height: hp("33.28125%"),
    minHeight: hp("33.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.83333333333333%"),
    top: hp("18.28125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I61_294_49_1066: {
    flexGrow: 1,
    width: wp("48.05555555555556%"),
    height: hp("33.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.05306243896484375%"),
    backgroundColor: "rgba(51, 98, 130, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I61_294_49_1067: {
    flexGrow: 1,
    width: wp("41.69407738579644%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8530612521701428%"),
    top: hp("29.07520294189453%")
  },
  ImageBackground_I61_294_49_1068: {
    flexGrow: 1,
    width: wp("41.69407738579644%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8530612521701428%"),
    top: hp("16.088523864746094%")
  },
  ImageBackground_I61_294_49_1069: {
    flexGrow: 1,
    width: wp("41.69407738579644%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8530612521701428%"),
    top: hp("24.333724975585938%")
  },
  View_I61_294_49_1070: {
    flexGrow: 1,
    width: wp("36.134863959418404%"),
    height: hp("2.368478775024414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7796088324652857%"),
    top: hp("20.826797485351562%")
  },
  View_I61_294_49_1071: {
    width: wp("28.722589280870224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.412278917100693%")
  },
  Text_I61_294_49_1071: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_294_49_1072: {
    width: wp("3.706139458550347%"),
    height: hp("2.2105765342712402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_294_49_1073: {
    flexGrow: 1,
    width: wp("36.134863959418404%"),
    height: hp("2.368474006652832%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7796088324652857%"),
    top: hp("17.35301971435547%")
  },
  View_I61_294_49_1074: {
    width: wp("28.722589280870224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.412278917100693%")
  },
  Text_I61_294_49_1074: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_294_49_1075: {
    width: wp("4.014984766642252%"),
    height: hp("2.0526814460754395%"),
    top: hp("0.3157806396484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_294_49_1091: {
    flexGrow: 1,
    width: wp("35.51717970106337%"),
    height: hp("2.526376247406006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0884467230902786%"),
    top: hp("1.4988327026367188%")
  },
  View_I61_294_49_1092: {
    width: wp("28.722589280870224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.7946031358507%")
  },
  Text_I61_294_49_1092: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_294_49_1093: {
    width: wp("3.706139988369412%"),
    height: hp("2.3684781789779663%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_294_54_325: {
    flexGrow: 1,
    width: wp("35.51717970106337%"),
    height: hp("2.526376247406006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3972846137152786%"),
    top: hp("30.018692016601562%")
  },
  View_I61_294_49_1077: {
    width: wp("28.722589280870224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.7946031358507%")
  },
  Text_I61_294_49_1077: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_294_54_323: {
    width: wp("3.706141048007541%"),
    height: hp("2.069578170776367%"),
    top: hp("0.12279510498046875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_294_56_1: {
    flexGrow: 1,
    width: wp("36.13487243652344%"),
    height: hp("3.8207554817199707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0884467230902786%"),
    top: hp("11.515350341796875%")
  },
  View_I61_294_54_327: {
    width: wp("29.03143776787652%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.1034410264757%")
  },
  Text_I61_294_54_327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_294_54_333: {
    width: wp("3.706139988369412%"),
    height: hp("1.9103777408599854%"),
    top: hp("0.795974731445316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_294_49_1104: {
    flexGrow: 1,
    width: wp("35.208333333333336%"),
    height: hp("2.547168731689453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3972846137152786%"),
    top: hp("25.206375122070312%")
  },
  View_I61_294_49_1105: {
    width: wp("28.722587161593964%"),
    top: hp("0.15918731689453125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.485731336805557%")
  },
  Text_I61_294_49_1105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_294_49_1106: {
    width: wp("3.088449902004666%"),
    height: hp("2.547168731689453%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_294_75_368: {
    flexGrow: 1,
    width: wp("42.39818149142795%"),
    height: hp("2.3879706859588623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: hp("5.3066253662109375%")
  },
  View_I61_294_49_1108: {
    width: wp("34.984071519639755%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.4141099717882%")
  },
  Text_I61_294_49_1108: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_294_74_2: {
    width: wp("4.166666666666666%"),
    height: hp("2.3879706859588623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I61_294_75_337: {
    flexGrow: 1,
    width: wp("42.798402574327255%"),
    height: hp("2.5471699237823486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.500000000000007%"),
    top: hp("8.808975219726559%")
  },
  View_I61_294_75_71: {
    width: wp("34.984071519639755%"),
    top: hp("0.1591873168945348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.814331054687493%")
  },
  Text_I61_294_75_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I61_294_75_307: {
    width: wp("4.444444444444445%"),
    height: hp("2.387971878051758%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
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
