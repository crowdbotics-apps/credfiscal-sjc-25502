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
      <View style={styles.View_71_156}>
        <Text style={styles.Text_71_156}>Extrato de Créditos</Text>
      </View>
      <View style={styles.View_71_157} />
      <View style={styles.View_71_159}>
        <View style={styles.View_I71_159_33_227}>
          <View style={styles.View_I71_159_33_227_31_265} />
        </View>
        <View style={styles.View_I71_159_33_324}>
          <Text style={styles.Text_I71_159_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I71_159_33_212}
        />
      </View>
      <View style={styles.View_71_160}>
        <View style={styles.View_I71_160_33_150}>
          <View style={styles.View_I71_160_33_150_31_265} />
        </View>
        <View style={styles.View_I71_160_33_321}>
          <Text style={styles.Text_I71_160_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I71_160_33_180}
        />
      </View>
      <View style={styles.View_132_13}>
        <View style={styles.View_71_161}>
          <Text style={styles.Text_71_161}>Saldo atual</Text>
        </View>
        <View style={styles.View_71_162}>
          <Text style={styles.Text_71_162}>R$ 267,00</Text>
        </View>
      </View>
      <View style={styles.View_71_163} />
      <View style={styles.View_71_164} />
      <View style={styles.View_71_165} />
      <View style={styles.View_71_166}>
        <View style={styles.View_71_167}>
          <View style={styles.View_71_168} />
        </View>
        <View style={styles.View_71_169}>
          <Text style={styles.Text_71_169}>30 dias</Text>
        </View>
      </View>
      <View style={styles.View_71_170}>
        <View style={styles.View_71_171}>
          <View style={styles.View_71_172} />
        </View>
        <View style={styles.View_71_173}>
          <Text style={styles.Text_71_173}>60 dias</Text>
        </View>
      </View>
      <View style={styles.View_71_174}>
        <View style={styles.View_71_175}>
          <View style={styles.View_71_176} />
        </View>
        <View style={styles.View_71_177}>
          <Text style={styles.Text_71_177}>90 dias</Text>
        </View>
      </View>
      <View style={styles.View_73_179}>
        <View style={styles.View_71_178}>
          <View style={styles.View_71_179} />
        </View>
        <View style={styles.View_71_180}>
          <Text style={styles.Text_71_180}>7 dias</Text>
        </View>
      </View>
      <View style={styles.View_71_181}>
        <Text style={styles.Text_71_181}>Zona Azul</Text>
      </View>
      <View style={styles.View_71_182}>
        <Text style={styles.Text_71_182}>PG Fulano de Tal da Silva</Text>
      </View>
      <View style={styles.View_71_183}>
        <Text style={styles.Text_71_183}>ISSQN</Text>
      </View>
      <View style={styles.View_71_184}>
        <Text style={styles.Text_71_184}>Taxa Publicidade</Text>
      </View>
      <View style={styles.View_71_185}>
        <Text style={styles.Text_71_185}>PG Joaquina Maria</Text>
      </View>
      <View style={styles.View_71_186}>
        <Text style={styles.Text_71_186}>01/02/21</Text>
      </View>
      <View style={styles.View_71_187}>
        <Text style={styles.Text_71_187}>01/02/21</Text>
      </View>
      <View style={styles.View_71_188}>
        <Text style={styles.Text_71_188}>19/02/21</Text>
      </View>
      <View style={styles.View_71_189}>
        <Text style={styles.Text_71_189}>08/02/21</Text>
      </View>
      <View style={styles.View_71_190}>
        <Text style={styles.Text_71_190}>01/02/21</Text>
      </View>
      <View style={styles.View_71_191}>
        <Text style={styles.Text_71_191}>15,00</Text>
      </View>
      <View style={styles.View_71_192}>
        <Text style={styles.Text_71_192}>56,12</Text>
      </View>
      <View style={styles.View_71_193}>
        <Text style={styles.Text_71_193}>-121,50</Text>
      </View>
      <View style={styles.View_71_194}>
        <Text style={styles.Text_71_194}>2,15</Text>
      </View>
      <View style={styles.View_71_195}>
        <Text style={styles.Text_71_195}>18,96</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29c4/57ac/db8412ac3f0bd04aeed782182bd1047e"
        }}
        style={styles.ImageBackground_75_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29c4/57ac/db8412ac3f0bd04aeed782182bd1047e"
        }}
        style={styles.ImageBackground_75_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae2/9920/a2ee0d04225b0ed463d8a520810c63e5"
        }}
        style={styles.ImageBackground_75_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae2/9920/a2ee0d04225b0ed463d8a520810c63e5"
        }}
        style={styles.ImageBackground_143_1947}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae2/9920/a2ee0d04225b0ed463d8a520810c63e5"
        }}
        style={styles.ImageBackground_143_1946}
      />
      <View style={styles.View_93_0}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I93_0_106_665}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d9/163a/7a0fca9ce4a88e5f175df8b213f31839"
          }}
          style={styles.ImageBackground_I93_0_106_666}
        />
        <View style={styles.View_I93_0_106_667}>
          <Text style={styles.Text_I93_0_106_667}>Crédito Fiscal</Text>
        </View>
        <View style={styles.View_I93_0_106_668}>
          <Text style={styles.Text_I93_0_106_668}>Contribuinte</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I93_0_106_669}
        />
        <View style={styles.View_I93_0_103_360}>
          <Text style={styles.Text_I93_0_103_360}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I93_0_301_2693}
        />
      </View>
      <View style={styles.View_93_9}>
        <View style={styles.View_I93_9_43_664}>
          <View style={styles.View_I93_9_43_665} />
          <View style={styles.View_I93_9_43_666}>
            <Text style={styles.Text_I93_9_43_666}>
              Serviços de Beleza LTDA ME
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ba/f0be/a00a933fb601a2b74ba8ef46928ddd9a"
          }}
          style={styles.ImageBackground_I93_9_43_732}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ac/4f97/9d076b3daf21cf1f1771e134ebd65e8d"
          }}
          style={styles.ImageBackground_I93_9_43_731}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1339/b9a0/afe97dd3c136572f5dab492672a4f284"
        }}
        style={styles.ImageBackground_132_11}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_71_156: {
    width: wp("57.22222222222222%"),
    minWidth: wp("57.22222222222222%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.38888888888889%"),
    top: hp("19.6875%")
  },
  Text_71_156: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_157: {
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
  View_71_159: {
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
  View_I71_159_33_227: {
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
  View_I71_159_33_227_31_265: {
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
  View_I71_159_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I71_159_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I71_159_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_71_160: {
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
  View_I71_160_33_150: {
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
  View_I71_160_33_150_31_265: {
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
  View_I71_160_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I71_160_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I71_160_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_132_13: {
    width: wp("55.833333333333336%"),
    minWidth: wp("55.833333333333336%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.22222222222222%"),
    top: hp("27.187499999999996%")
  },
  View_71_161: {
    width: wp("25.27777777777778%"),
    minWidth: wp("25.27777777777778%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_71_161: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_162: {
    width: wp("23.055555555555557%"),
    minWidth: wp("23.055555555555557%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.777777777777786%"),
    top: hp("0%")
  },
  Text_71_162: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_163: {
    width: wp("92.22222222222223%"),
    minWidth: wp("92.22222222222223%"),
    height: hp("4.53125%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("42.96875%"),
    backgroundColor: "rgba(222, 241, 255, 1)"
  },
  View_71_164: {
    width: wp("92.22222222222223%"),
    minWidth: wp("92.22222222222223%"),
    height: hp("4.53125%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("51.71875%"),
    backgroundColor: "rgba(222, 241, 255, 1)"
  },
  View_71_165: {
    width: wp("92.22222222222223%"),
    minWidth: wp("92.22222222222223%"),
    height: hp("4.53125%"),
    minHeight: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("60.15625%"),
    backgroundColor: "rgba(222, 241, 255, 1)"
  },
  View_71_166: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%"),
    top: hp("32.65625%")
  },
  View_71_167: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_168: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
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
  View_71_169: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5000000000000036%"),
    top: hp("1.09375%")
  },
  Text_71_169: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_170: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.388888888888886%"),
    top: hp("32.65625%")
  },
  View_71_171: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_172: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
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
  View_71_173: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("1.09375%")
  },
  Text_71_173: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_174: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.83333333333333%"),
    top: hp("32.65625%")
  },
  View_71_175: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_176: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
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
  View_71_177: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("1.09375%")
  },
  Text_71_177: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_73_179: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("32.65625%")
  },
  View_71_178: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_179: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)",
    borderColor: "rgba(51, 98, 130, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_71_180: {
    width: wp("13.61111111111111%"),
    minWidth: wp("13.61111111111111%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("1.09375%")
  },
  Text_71_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_181: {
    width: wp("17.5%"),
    minWidth: wp("17.5%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77777777777778%"),
    top: hp("43.90625%")
  },
  Text_71_181: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_182: {
    width: wp("43.611111111111114%"),
    minWidth: wp("43.611111111111114%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77777777777778%"),
    top: hp("61.09375%")
  },
  Text_71_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_183: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77777777777778%"),
    top: hp("52.65625000000001%")
  },
  Text_71_183: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_184: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5%"),
    top: hp("48.4375%")
  },
  Text_71_184: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_185: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5%"),
    top: hp("57.03125%")
  },
  Text_71_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_186: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%"),
    top: hp("43.90625%")
  },
  Text_71_186: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_187: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%"),
    top: hp("61.09375%")
  },
  Text_71_187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_188: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%"),
    top: hp("52.65625000000001%")
  },
  Text_71_188: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_189: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("48.4375%")
  },
  Text_71_189: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_190: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("57.03125%")
  },
  Text_71_190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_191: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("43.90625%")
  },
  Text_71_191: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_192: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("61.09375%")
  },
  Text_71_192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_193: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.66666666666667%"),
    top: hp("52.65625000000001%")
  },
  Text_71_193: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_194: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.22222222222221%"),
    top: hp("48.4375%")
  },
  Text_71_194: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_71_195: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("57.03125%")
  },
  Text_71_195: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  ImageBackground_75_39: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.34375%"),
    minHeight: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.38888888888889%"),
    top: hp("57.1875%")
  },
  ImageBackground_75_40: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.34375%"),
    minHeight: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.38888888888889%"),
    top: hp("61.25000000000001%")
  },
  ImageBackground_75_41: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.34375%"),
    minHeight: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.38888888888889%"),
    top: hp("52.96875%")
  },
  ImageBackground_143_1947: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.34375%"),
    minHeight: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.38888888888889%"),
    top: hp("48.4375%")
  },
  ImageBackground_143_1946: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("2.34375%"),
    minHeight: hp("2.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.38888888888889%"),
    top: hp("43.90625%")
  },
  View_93_0: {
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
  ImageBackground_I93_0_106_665: {
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
  ImageBackground_I93_0_106_666: {
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
  View_I93_0_106_667: {
    flexGrow: 1,
    width: wp("31.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("4.84375%")
  },
  Text_I93_0_106_667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_I93_0_106_668: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.166666666666668%"),
    top: hp("8.125%")
  },
  Text_I93_0_106_668: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_I93_0_106_669: {
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
  View_I93_0_103_360: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I93_0_103_360: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I93_0_301_2693: {
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
  View_93_9: {
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
  View_I93_9_43_664: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.15625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I93_9_43_665: {
    width: wp("100%"),
    height: hp("5.15625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_I93_9_43_666: {
    width: wp("72.77777777777777%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_I93_9_43_666: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I93_9_43_732: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.94444444444444%"),
    top: hp("1.7187500000000036%")
  },
  ImageBackground_I93_9_43_731: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("1.0937500000000018%")
  },
  ImageBackground_132_11: {
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
