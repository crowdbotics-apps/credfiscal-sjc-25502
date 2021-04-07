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
      <View style={styles.View_43_766}>
        <View style={styles.View_43_664}>
          <View style={styles.View_43_665} />
          <View style={styles.View_43_666}>
            <Text style={styles.Text_43_666}>Serviços de Beleza LTDA ME</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ba/f0be/a00a933fb601a2b74ba8ef46928ddd9a"
          }}
          style={styles.ImageBackground_43_732}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ac/4f97/9d076b3daf21cf1f1771e134ebd65e8d"
          }}
          style={styles.ImageBackground_43_731}
        />
      </View>
      <View style={styles.View_39_500}>
        <View style={styles.View_37_362}>
          <View style={styles.View_37_361} />
          <View style={styles.View_36_398}>
            <Text style={styles.Text_36_398}>Fulano de Tal da Silva</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6178/0af5/53c6b6bbee078d64d97b6e00935aeb2d"
            }}
            style={styles.ImageBackground_36_397}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ba/f0be/a00a933fb601a2b74ba8ef46928ddd9a"
          }}
          style={styles.ImageBackground_39_5}
        />
      </View>
      <View style={styles.View_56_2}>
        <View style={styles.View_49_1066} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60c/f6d8/eb72c0fb151922644bd9dd1df708495a"
          }}
          style={styles.ImageBackground_49_1067}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60c/f6d8/eb72c0fb151922644bd9dd1df708495a"
          }}
          style={styles.ImageBackground_49_1068}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60c/f6d8/eb72c0fb151922644bd9dd1df708495a"
          }}
          style={styles.ImageBackground_49_1069}
        />
        <View style={styles.View_49_1070}>
          <View style={styles.View_49_1071}>
            <Text style={styles.Text_49_1071}>Perfil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f342/b1c0/013834b29d78c5f6dbac2f5470840b02"
            }}
            style={styles.ImageBackground_49_1072}
          />
        </View>
        <View style={styles.View_49_1073}>
          <View style={styles.View_49_1074}>
            <Text style={styles.Text_49_1074}>Configurações</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3659/7d65/499bd07ba9e770481879dd8ccc7edda0"
            }}
            style={styles.ImageBackground_49_1075}
          />
        </View>
        <View style={styles.View_49_1091}>
          <View style={styles.View_49_1092}>
            <Text style={styles.Text_49_1092}>Emitir NFS-e</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c496/f7ac/5ec02b628eb4a2a4359bb93895178122"
            }}
            style={styles.ImageBackground_49_1093}
          />
        </View>
        <View style={styles.View_54_325}>
          <View style={styles.View_49_1077}>
            <Text style={styles.Text_49_1077}>Sair</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05c9/60ca/0441325d720c037f5c7fd9edd0091813"
            }}
            style={styles.ImageBackground_54_323}
          />
        </View>
        <View style={styles.View_56_1}>
          <View style={styles.View_54_327}>
            <Text style={styles.Text_54_327}>Token fiscal</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7782/fbf6/98bf960486b913994729e961751af3f6"
            }}
            style={styles.ImageBackground_54_333}
          />
        </View>
        <View style={styles.View_49_1104}>
          <View style={styles.View_49_1105}>
            <Text style={styles.Text_49_1105}>Ajuda</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8269/0c21/4a9b146e74df260638c2499052aa6612"
            }}
            style={styles.ImageBackground_49_1106}
          />
        </View>
        <View style={styles.View_75_368}>
          <View style={styles.View_49_1108}>
            <Text style={styles.Text_49_1108}>Gestão dos créditos</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9726/0bc0/8595ab6e23938185c623b5b070a6cd38"
            }}
            style={styles.ImageBackground_74_2}
          />
        </View>
        <View style={styles.View_75_337}>
          <View style={styles.View_75_71}>
            <Text style={styles.Text_75_71}>Cadastro Serv/Prod</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93f5/21c9/26bbb4fc950c5cd429ac00dca13fc56b"
            }}
            style={styles.ImageBackground_75_307}
          />
        </View>
      </View>
      <View style={styles.View_61_59}>
        <View style={styles.View_61_30} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_61_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_61_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_61_33}
        />
        <View style={styles.View_61_34}>
          <View style={styles.View_61_35}>
            <Text style={styles.Text_61_35}>Perfil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a17/73f8/14a1cf554fe4f8c8aa3028585bf324dc"
            }}
            style={styles.ImageBackground_61_36}
          />
        </View>
        <View style={styles.View_61_37}>
          <View style={styles.View_61_38}>
            <Text style={styles.Text_61_38}>Configurações</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d2e/34cf/bbb26586446d002d22e2cff985ea7b77"
            }}
            style={styles.ImageBackground_61_39}
          />
        </View>
        <View style={styles.View_61_41}>
          <Text style={styles.Text_61_41}>Sair</Text>
        </View>
        <View style={styles.View_61_43}>
          <View style={styles.View_61_44}>
            <Text style={styles.Text_61_44}>Doar</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/775e/49fc/7dda6f3d2ebd5b1e3ab1f830764fa8b3"
            }}
            style={styles.ImageBackground_61_45}
          />
        </View>
        <View style={styles.View_61_46}>
          <View style={styles.View_61_47}>
            <Text style={styles.Text_61_47}>Usar créditos</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cde4/e08f/bd9f926581346540f8478fc6f4d838fb"
            }}
            style={styles.ImageBackground_61_48}
          />
        </View>
        <View style={styles.View_61_49}>
          <View style={styles.View_61_50}>
            <Text style={styles.Text_61_50}>Extrato</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6450/414b/076d1fa473ebde1ae9b0e90bd5d1789a"
            }}
            style={styles.ImageBackground_61_51}
          />
        </View>
        <View style={styles.View_61_52}>
          <View style={styles.View_61_53}>
            <Text style={styles.Text_61_53}>Denunciar</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec3c/c5a9/1eda5e3ab53157b6422a93a7b6a2075b"
            }}
            style={styles.ImageBackground_61_54}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ece9/17fe/c6a7673e00a454f2a264b07d632baf2f"
          }}
          style={styles.ImageBackground_61_58}
        />
      </View>
      <View style={styles.View_77_82}>
        <View style={styles.View_77_80} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6a2/939a/115f932943fdc614d0174f412e597b6c"
          }}
          style={styles.ImageBackground_77_79}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b25d/d092/57b556458b43af053087c892e5805b1c"
        }}
        style={styles.ImageBackground_77_69}
      />
      <View style={styles.View_77_74}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70b9/52d9/cbabc2378242e77c13dbb3d3f0077813"
          }}
          style={styles.ImageBackground_77_71}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8743/c765/06489794037a7c008fc7f763bb04766f"
        }}
        style={styles.ImageBackground_77_65}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282b/0802/b7c6197fe406d6fdb885621652074922"
        }}
        style={styles.ImageBackground_80_69}
      />
      <View style={styles.View_26_101}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_106_665}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d9/163a/7a0fca9ce4a88e5f175df8b213f31839"
          }}
          style={styles.ImageBackground_106_666}
        />
        <View style={styles.View_106_667}>
          <Text style={styles.Text_106_667}>Crédito Fiscal</Text>
        </View>
        <View style={styles.View_106_668}>
          <Text style={styles.Text_106_668}>Contribuinte</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_106_669}
        />
        <View style={styles.View_103_360}>
          <Text style={styles.Text_103_360}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_301_2693}
        />
      </View>
      <View style={styles.View_25_17}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_8_1}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d9/163a/7a0fca9ce4a88e5f175df8b213f31839"
          }}
          style={styles.ImageBackground_6_11}
        />
        <View style={styles.View_12_2}>
          <Text style={styles.Text_12_2}>Crédito Fiscal</Text>
        </View>
        <View style={styles.View_26_68}>
          <Text style={styles.Text_26_68}>Consumidor</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_22_0}
        />
        <View style={styles.View_106_0}>
          <Text style={styles.Text_106_0}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_301_2401}
        />
      </View>
      <View style={styles.View_33_390}>
        <View style={styles.View_33_150}>
          <View style={styles.View_I33_150_31_265} />
        </View>
        <View style={styles.View_33_321}>
          <Text style={styles.Text_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_33_180}
        />
      </View>
      <View style={styles.View_33_348}>
        <View style={styles.View_33_245}>
          <View style={styles.View_I33_245_31_265} />
        </View>
        <View style={styles.View_33_323}>
          <Text style={styles.Text_33_323}>Usar créditos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce53/e503/aedbdc13d264be7fdce476e36e11b8b0"
          }}
          style={styles.ImageBackground_33_222}
        />
      </View>
      <View style={styles.View_58_6}>
        <View style={styles.View_58_3}>
          <Text style={styles.Text_58_3}>Token Fiscal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/328b/32c2/6dd55aaf689323524568a45a847569a4"
          }}
          style={styles.ImageBackground_58_4}
        />
      </View>
      <View style={styles.View_33_383}>
        <View style={styles.View_31_299}>
          <View style={styles.View_I31_299_31_265} />
        </View>
        <View style={styles.View_33_273}>
          <Text style={styles.Text_33_273}>Sobre</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
          }}
          style={styles.ImageBackground_31_318}
        />
      </View>
      <View style={styles.View_77_83}>
        <View style={styles.View_77_17}>
          <Text style={styles.Text_77_17}>Salvar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4521/78da/736e65811d0075f13ffacc59fda6a0f2"
          }}
          style={styles.ImageBackground_77_18}
        />
      </View>
      <View style={styles.View_33_362}>
        <View style={styles.View_33_227}>
          <View style={styles.View_I33_227_31_265} />
        </View>
        <View style={styles.View_33_324}>
          <Text style={styles.Text_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_33_212}
        />
      </View>
      <View style={styles.View_33_411}>
        <View style={styles.View_33_181}>
          <View style={styles.View_I33_181_31_265} />
        </View>
        <View style={styles.View_33_328}>
          <Text style={styles.Text_33_328}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11e4/2c26/a69707547be8f10ae036d98765a6be65"
          }}
          style={styles.ImageBackground_33_290}
        />
      </View>
      <View style={styles.View_33_369}>
        <View style={styles.View_33_254}>
          <View style={styles.View_I33_254_31_265} />
        </View>
        <View style={styles.View_33_325}>
          <Text style={styles.Text_33_325}>Receber Crédito</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/305c/fe24/d1d9608a64534fc9be5ce3b855f0f1bf"
          }}
          style={styles.ImageBackground_33_226}
        />
      </View>
      <View style={styles.View_77_47}>
        <View style={styles.View_77_44}>
          <Text style={styles.Text_77_44}>Pesquisar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992c/e392/224ebda0b14d90d35c34a64d80befdbb"
          }}
          style={styles.ImageBackground_77_46}
        />
      </View>
      <View style={styles.View_39_408}>
        <View style={styles.View_39_222}>
          <Text style={styles.Text_39_222}>Perfil</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f76/b86c/c6dcabcacc2dc1e0e60e229bafcb9b54"
          }}
          style={styles.ImageBackground_39_32}
        />
      </View>
      <View style={styles.View_44_42}>
        <View style={styles.View_44_30}>
          <Text style={styles.Text_44_30}>Participar Créd Fiscal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1e7/ee25/9e857766b106c41d8595b781afe1757f"
          }}
          style={styles.ImageBackground_44_31}
        />
      </View>
      <View style={styles.View_174_37}>
        <View style={styles.View_174_32}>
          <Text style={styles.Text_174_32}>Avisos</Text>
        </View>
        <View style={styles.View_174_33}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d0/7c55/d4c5651d1192857311b3055e89692b47"
            }}
            style={styles.ImageBackground_174_34}
          />
          <View style={styles.View_174_35}>
            <Text style={styles.Text_174_35}>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_183_119}>
        <View style={styles.View_183_115}>
          <Text style={styles.Text_183_115}>Avisos</Text>
        </View>
        <View style={styles.View_183_116}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6556/f1ce/54879ed6ab97b274613cf2921bd4a79e"
            }}
            style={styles.ImageBackground_183_117}
          />
          <View style={styles.View_183_118}>
            <Text style={styles.Text_183_118}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_174_36}>
        <View style={styles.View_174_28}>
          <Text style={styles.Text_174_28}>Avisos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0172/c44d/b11a0f24cca0d68b020c7aaa0f4f28bd"
          }}
          style={styles.ImageBackground_174_29}
        />
      </View>
      <View style={styles.View_49_195}>
        <View style={styles.View_49_175}>
          <View style={styles.View_I49_175_31_265} />
        </View>
        <View style={styles.View_49_176}>
          <Text style={styles.Text_49_176}>Ler NF</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/385d/fdc1/cfd65e61314af487cf4e71007632b3bb"
          }}
          style={styles.ImageBackground_49_194}
        />
      </View>
      <View style={styles.View_33_404}>
        <View style={styles.View_33_168}>
          <View style={styles.View_I33_168_31_265} />
        </View>
        <View style={styles.View_33_327}>
          <Text style={styles.Text_33_327}>Início</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b648/1752/c5adcec41b92a1d86e51127f929df176"
          }}
          style={styles.ImageBackground_33_194}
        />
      </View>
      <View style={styles.View_77_78}>
        <View style={styles.View_77_41}>
          <Text style={styles.Text_77_41}>Incluir</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b5e/7fa4/165f4e89bdcf534d23e0b4a43a8f2979"
          }}
          style={styles.ImageBackground_77_42}
        />
      </View>
      <View style={styles.View_75_306}>
        <View style={styles.View_75_29}>
          <Text style={styles.Text_75_29}>Gestão Créditos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f828/730c/2f8ec666ae858f45356b7aa3dca3cc28"
          }}
          style={styles.ImageBackground_75_30}
        />
      </View>
      <View style={styles.View_73_76}>
        <View style={styles.View_73_48}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1716/7e73/d258871d5c0fc778f366eb4a59912b39"
            }}
            style={styles.ImageBackground_73_49}
          />
        </View>
        <View style={styles.View_73_32}>
          <Text style={styles.Text_73_32}>Extrato Recebtos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7321/5a95/0612f8452f5ff39f7ec3e82bb4c7f38e"
          }}
          style={styles.ImageBackground_73_33}
        />
      </View>
      <View style={styles.View_39_564}>
        <View style={styles.View_39_547}>
          <Text style={styles.Text_39_547}>Extrato</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf7f/8f6a/bf1fcb31a2c354a5bf5bf5aa30783974"
          }}
          style={styles.ImageBackground_39_548}
        />
      </View>
      <View style={styles.View_77_77}>
        <View style={styles.View_77_39}>
          <Text style={styles.Text_77_39}>Excluir</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd9c/4fa7/e02e8deb190d27ff295e2474664c4e98"
          }}
          style={styles.ImageBackground_77_75}
        />
      </View>
      <View style={styles.View_43_491}>
        <View style={styles.View_43_489}>
          <Text style={styles.Text_43_489}>Emitir NF</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c0d/c4ed/0a744d0f58928857386fba4df2a5e244"
          }}
          style={styles.ImageBackground_43_490}
        />
      </View>
      <View style={styles.View_33_397}>
        <View style={styles.View_33_159}>
          <View style={styles.View_I33_159_31_265} />
        </View>
        <View style={styles.View_33_334}>
          <Text style={styles.Text_33_334}>Doar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7a6/1f0d/a9ebf49f0beae0b7e427e187f7d54df2"
          }}
          style={styles.ImageBackground_33_347}
        />
      </View>
      <View style={styles.View_42_471}>
        <View style={styles.View_42_465}>
          <Text style={styles.Text_42_465}>Denunciar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98f8/fe27/4e3d3a48627bab1b300fb4fd79c36a44"
          }}
          style={styles.ImageBackground_42_466}
        />
      </View>
      <View style={styles.View_75_31}>
        <View style={styles.View_75_27}>
          <Text style={styles.Text_75_27}>Créditos Recebidos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0365/4a60/9b056056190e810b530fcd4949bc8ef0"
          }}
          style={styles.ImageBackground_75_28}
        />
      </View>
      <View style={styles.View_33_376}>
        <View style={styles.View_33_236}>
          <View style={styles.View_I33_236_31_265} />
        </View>
        <View style={styles.View_33_326}>
          <Text style={styles.Text_33_326}>Config</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5986/f579/e1f9e3cbd075dca4c8e4abdfc3706e27"
          }}
          style={styles.ImageBackground_33_216}
        />
      </View>
      <View style={styles.View_33_355}>
        <View style={styles.View_33_195}>
          <View style={styles.View_I33_195_31_265} />
        </View>
        <View style={styles.View_33_322}>
          <Text style={styles.Text_33_322}>Avançar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f05e/7c83/5f3429ae63731b628c368d03de13c66e"
          }}
          style={styles.ImageBackground_33_208}
        />
      </View>
      <View style={styles.View_77_52}>
        <View style={styles.View_77_43}>
          <Text style={styles.Text_77_43}>Alterar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7d7/a804/e66bdf2c3cbd1abb0827b8eb385565c6"
          }}
          style={styles.ImageBackground_77_45}
        />
      </View>
      <View style={styles.View_33_96}>
        <View style={styles.View_26_79}>
          <Text style={styles.Text_26_79}>avançar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f8/d62d/06b675d658c57057821740cec9995a8d"
          }}
          style={styles.ImageBackground_33_92}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
        }}
        style={styles.ImageBackground_103_1296}
      />
      <View style={styles.View_39_407}>
        <Text style={styles.Text_39_407}>Xxxxx</Text>
      </View>
      <View style={styles.View_174_30}>
        <Text style={styles.Text_174_30}>Xxxxx</Text>
      </View>
      <View style={styles.View_39_217} />
      <View style={styles.View_174_31} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0af/2b09/dc21d502e8f3de7d834ef1745fa94598"
        }}
        style={styles.ImageBackground_75_23}
      />
      <View style={styles.View_19_5}>
        <Text style={styles.Text_19_5}>PREFEITURA SÃO JOSÉ DOS CAMPOS</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1631/92e3/c62ad358f8dd05cd36094fd027edc841"
        }}
        style={styles.ImageBackground_103_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8ce/a065/f6ec9db8b6cf545a13f1e9285494ca3b"
        }}
        style={styles.ImageBackground_238_0}
      />
      <View style={styles.View_303_8}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35bd/c9fc/be9ea0ee4266d13baebce9ce77697717"
          }}
          style={styles.ImageBackground_303_7}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_43_766: {
    width: wp("22.415940224159403%"),
    minWidth: wp("22.415940224159403%"),
    height: hp("4.810495626822157%"),
    minHeight: hp("4.810495626822157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.924034869240344%"),
    top: hp("16.76384839650146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_43_664: {
    flexGrow: 1,
    width: wp("22.415940224159403%"),
    height: hp("4.810495626822157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_43_665: {
    width: wp("22.415940224159403%"),
    height: hp("4.810495626822157%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_43_666: {
    width: wp("16.313823163138235%"),
    top: hp("0.7288629737609327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4283935242839405%")
  },
  Text_43_666: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_43_732: {
    flexGrow: 1,
    width: wp("1.1207970112079702%"),
    height: hp("1.749271137026239%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.61021170610212%"),
    top: hp("1.6034985422740533%")
  },
  ImageBackground_43_731: {
    flexGrow: 1,
    width: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6849315068493169%"),
    top: hp("1.020408163265305%")
  },
  View_39_500: {
    width: wp("22.415940224159403%"),
    minWidth: wp("22.415940224159403%"),
    height: hp("4.810495626822157%"),
    minHeight: hp("4.810495626822157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.204234122042344%"),
    top: hp("16.76384839650146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_362: {
    flexGrow: 1,
    width: wp("22.415940224159403%"),
    height: hp("4.810495626822157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_37_361: {
    width: wp("22.415940224159403%"),
    height: hp("4.810495626822157%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_36_398: {
    width: wp("16.562889165628892%"),
    top: hp("0.5830903790087447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4283935242839405%")
  },
  Text_36_398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_36_397: {
    width: wp("0.9962640099626401%"),
    height: hp("2.623906705539359%"),
    top: hp("1.020408163265305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7471980074719724%")
  },
  ImageBackground_39_5: {
    flexGrow: 1,
    width: wp("1.1207970112079702%"),
    height: hp("1.749271137026239%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.610211706102113%"),
    top: hp("1.6034985422740533%")
  },
  View_56_2: {
    width: wp("10.709838107098381%"),
    minWidth: wp("10.709838107098381%"),
    height: hp("31.049562682215743%"),
    minHeight: hp("31.049562682215743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.986301369863014%"),
    top: hp("25.510204081632654%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_49_1066: {
    flexGrow: 1,
    width: wp("10.772104607721046%"),
    height: hp("31.486880466472307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04950431623542073%"),
    backgroundColor: "rgba(51, 98, 130, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_49_1067: {
    flexGrow: 1,
    width: wp("9.346119463814894%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41538870349470614%"),
    top: hp("27.125562662285898%")
  },
  ImageBackground_49_1068: {
    flexGrow: 1,
    width: wp("9.346119463814894%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41538870349470614%"),
    top: hp("15.009710462030792%")
  },
  ImageBackground_49_1069: {
    flexGrow: 1,
    width: wp("9.346119463814894%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41538870349470614%"),
    top: hp("22.70199967542821%")
  },
  View_49_1070: {
    flexGrow: 1,
    width: wp("8.099969505224548%"),
    height: hp("2.209659498565051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6230754543508752%"),
    top: hp("19.430248382835277%")
  },
  View_49_1071: {
    width: wp("6.4384384440306865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6615396121964494%")
  },
  Text_49_1071: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_49_1072: {
    width: wp("0.8307660056526308%"),
    height: hp("2.0623454547136935%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_49_1073: {
    flexGrow: 1,
    width: wp("8.099969505224548%"),
    height: hp("2.2096550499385024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6230754543508752%"),
    top: hp("16.18941504475674%")
  },
  View_49_1074: {
    width: wp("6.4384384440306865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6615396121964494%")
  },
  Text_49_1074: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_49_1075: {
    width: wp("0.8999965852996332%"),
    height: hp("1.915038083802159%"),
    top: hp("0.29461919044961604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_49_1091: {
    flexGrow: 1,
    width: wp("7.961509771097641%"),
    height: hp("2.3569690937898597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6923043713029244%"),
    top: hp("1.3983367830949334%")
  },
  View_49_1092: {
    width: wp("6.4384384440306865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5230665765099616%")
  },
  Text_49_1092: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_49_1093: {
    width: wp("0.8307661244165556%"),
    height: hp("2.2096589424867323%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_54_325: {
    flexGrow: 1,
    width: wp("7.961509771097641%"),
    height: hp("2.3569690937898597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7615332882549808%"),
    top: hp("28.005785705744348%")
  },
  View_49_1077: {
    width: wp("6.4384384440306865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5230665765099616%")
  },
  Text_49_1077: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_54_323: {
    width: wp("0.8307663619444053%"),
    height: hp("1.930801791977952%"),
    top: hp("0.1145743767652263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_56_1: {
    flexGrow: 1,
    width: wp("8.099971405447345%"),
    height: hp("3.564553219097349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6923043713029244%"),
    top: hp("10.74316619784074%")
  },
  View_54_327: {
    width: wp("6.507669736261238%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.592295493462018%")
  },
  Text_54_327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_54_333: {
    width: wp("0.8307661244165556%"),
    height: hp("1.7822766095486744%"),
    top: hp("0.7426136784233819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_49_1104: {
    flexGrow: 1,
    width: wp("7.892278953922789%"),
    height: hp("2.3763673298560493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7615332882549808%"),
    top: hp("23.51614282013028%")
  },
  View_49_1105: {
    width: wp("6.438437968974986%"),
    top: hp("0.14852184595937246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4538376595579052%")
  },
  Text_49_1105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_49_1106: {
    width: wp("0.6923050838864755%"),
    height: hp("2.3763673298560493%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_75_368: {
    flexGrow: 1,
    width: wp("9.503951019249104%"),
    height: hp("2.2278443717400465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6226650062266472%"),
    top: hp("4.950769719159986%")
  },
  View_49_1108: {
    width: wp("7.842008559819622%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6619500603206774%")
  },
  Text_49_1108: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_74_2: {
    width: wp("0.933997509339975%"),
    height: hp("2.2278443717400465%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_75_337: {
    flexGrow: 1,
    width: wp("9.593664337956296%"),
    height: hp("2.3763684420126867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5603985056039846%"),
    top: hp("8.21827702202533%")
  },
  View_75_71: {
    width: wp("7.842008559819622%"),
    top: hp("0.14852184595936535%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7516557781366728%")
  },
  Text_75_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_75_307: {
    width: wp("0.9962640099626401%"),
    height: hp("2.2278454838966835%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_59: {
    width: wp("8.34371108343711%"),
    minWidth: wp("8.34371108343711%"),
    height: hp("29.008746355685133%"),
    minHeight: hp("29.008746355685133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.24034869240349%"),
    top: hp("24.927113702623906%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_61_30: {
    flexGrow: 1,
    width: wp("8.34371108343711%"),
    height: hp("29.008746355685133%"),
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
  ImageBackground_61_31: {
    flexGrow: 1,
    width: wp("7.340397721952104%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49813200498131494%"),
    top: hp("24.349050271615347%")
  },
  ImageBackground_61_32: {
    flexGrow: 1,
    width: wp("7.340397721952104%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49813200498131494%"),
    top: hp("16.535856285873727%")
  },
  ImageBackground_61_33: {
    flexGrow: 1,
    width: wp("7.340397721952104%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49813200498131494%"),
    top: hp("12.015108603430214%")
  },
  View_61_34: {
    flexGrow: 1,
    width: wp("7.2851805728518055%"),
    height: hp("2.186588921282799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5603985056039846%"),
    top: hp("20.991253644314874%")
  },
  View_61_35: {
    width: wp("5.790784557907846%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.494396014943959%")
  },
  Text_61_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_36: {
    width: wp("0.7471980074719801%"),
    height: hp("2.0408163265306123%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_37: {
    flexGrow: 1,
    width: wp("7.2851805728518055%"),
    height: hp("2.186588921282799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5603985056039846%"),
    top: hp("17.78425655976676%")
  },
  View_61_38: {
    width: wp("5.790784557907846%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.494396014943959%")
  },
  Text_61_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_39: {
    width: wp("0.809464508094645%"),
    height: hp("1.8950437317784257%"),
    top: hp("0.291545189504383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_41: {
    flexGrow: 1,
    width: wp("5.790784557907846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0547945205479436%"),
    top: hp("25.65597667638484%")
  },
  Text_61_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_43: {
    flexGrow: 1,
    width: wp("7.347447073474471%"),
    height: hp("2.186588921282799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49813200498131494%"),
    top: hp("8.309037900874635%")
  },
  View_61_44: {
    width: wp("5.790784557907846%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5566625155666287%")
  },
  Text_61_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_45: {
    width: wp("0.933997509339975%"),
    height: hp("2.186588921282799%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_46: {
    flexGrow: 1,
    width: wp("7.4719800747198%"),
    height: hp("2.3323615160349855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37359900373598975%"),
    top: hp("1.7492711370262413%")
  },
  View_61_47: {
    width: wp("5.790784557907846%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.681195516811954%")
  },
  Text_61_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_48: {
    width: wp("0.9962640099626401%"),
    height: hp("2.3323615160349855%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_49: {
    flexGrow: 1,
    width: wp("7.2851805728518055%"),
    height: hp("2.186588921282799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5603985056039846%"),
    top: hp("5.102040816326529%")
  },
  View_61_50: {
    width: wp("5.790784557907846%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.494396014943959%")
  },
  Text_61_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_51: {
    width: wp("0.7471980074719801%"),
    height: hp("1.1661807580174928%"),
    top: hp("0.43731778425656387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_52: {
    flexGrow: 1,
    width: wp("7.2851805728518055%"),
    height: hp("2.3323615160349855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5603985056039846%"),
    top: hp("12.973760932944607%")
  },
  View_61_53: {
    width: wp("5.790784557907846%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.494396014943959%")
  },
  Text_61_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_54: {
    width: wp("0.8717310087173101%"),
    height: hp("1.7492709980066592%"),
    top: hp("0.14577259475218796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_61_58: {
    flexGrow: 1,
    width: wp("0.7471980074719801%"),
    height: hp("1.8950437317784257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5603985056039846%"),
    top: hp("25.65597667638484%")
  },
  View_77_82: {
    width: wp("1.2453300124533%"),
    minWidth: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    minHeight: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.023661270236616%"),
    top: hp("67.05539358600583%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_80: {
    flexGrow: 1,
    width: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  ImageBackground_77_79: {
    flexGrow: 1,
    width: wp("0.49813200498132004%"),
    height: hp("1.1661806885077028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41096498482253807%"),
    top: hp("0.845479270112051%")
  },
  ImageBackground_77_69: {
    width: wp("1.2453300124533%"),
    minWidth: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    minHeight: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.115815691158154%"),
    top: hp("67.05539358600583%")
  },
  View_77_74: {
    width: wp("1.2453300124533%"),
    minWidth: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    minHeight: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.163138231631383%"),
    top: hp("67.05539358600583%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_77_71: {
    flexGrow: 1,
    width: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_77_65: {
    width: wp("1.2453300124533%"),
    minWidth: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    minHeight: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.068493150684931%"),
    top: hp("67.05539358600583%")
  },
  ImageBackground_80_69: {
    width: wp("1.2453300124533%"),
    minWidth: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    minHeight: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.95890410958904%"),
    top: hp("67.05539358600583%")
  },
  View_26_101: {
    width: wp("22.415940224159403%"),
    minWidth: wp("22.415940224159403%"),
    height: hp("11.9533527696793%"),
    minHeight: hp("11.9533527696793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.73723536737236%"),
    top: hp("1.749271137026239%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_106_665: {
    flexGrow: 1,
    width: wp("22.415940224159403%"),
    height: hp("8.746355685131196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2069970845481053%"),
    resizeMode: "cover"
  },
  ImageBackground_106_666: {
    flexGrow: 1,
    width: wp("3.922789539227895%"),
    height: hp("6.41399416909621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12453300124532518%"),
    top: hp("4.081632653061224%"),
    resizeMode: "cover"
  },
  View_106_667: {
    flexGrow: 1,
    width: wp("6.973848069738481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.226650062266501%"),
    top: hp("4.518950437317784%")
  },
  Text_106_667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_106_668: {
    flexGrow: 1,
    width: wp("6.288916562889166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.537982565379821%"),
    top: hp("7.580174927113703%")
  },
  Text_106_668: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_106_669: {
    flexGrow: 1,
    width: wp("22.415940224159403%"),
    height: hp("3.206997084548105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_103_360: {
    flexGrow: 1,
    width: wp("6.288916562889166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.877957658779572%"),
    top: hp("9.475218658892128%")
  },
  Text_103_360: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_301_2693: {
    flexGrow: 1,
    width: wp("2.7700839868072853%"),
    height: hp("5.1020408163265305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.621419676214188%"),
    top: hp("4.081632653061224%"),
    resizeMode: "cover"
  },
  View_25_17: {
    width: wp("22.415940224159403%"),
    minWidth: wp("22.415940224159403%"),
    height: hp("11.9533527696793%"),
    minHeight: hp("11.9533527696793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.204234122042344%"),
    top: hp("1.749271137026239%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_1: {
    flexGrow: 1,
    width: wp("22.415940224159403%"),
    height: hp("8.746355685131196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2069970845481053%"),
    resizeMode: "cover"
  },
  ImageBackground_6_11: {
    flexGrow: 1,
    width: wp("3.922789539227895%"),
    height: hp("6.41399416909621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12453300124533229%"),
    top: hp("4.081632653061224%"),
    resizeMode: "cover"
  },
  View_12_2: {
    flexGrow: 1,
    width: wp("6.973848069738481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2266500622664935%"),
    top: hp("4.518950437317784%")
  },
  Text_12_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  View_26_68: {
    flexGrow: 1,
    width: wp("6.164383561643835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.600249066002483%"),
    top: hp("7.580174927113703%")
  },
  Text_26_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_22_0: {
    flexGrow: 1,
    width: wp("22.415940224159403%"),
    height: hp("3.206997084548105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_106_0: {
    flexGrow: 1,
    width: wp("6.288916562889166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.877957658779572%"),
    top: hp("9.475218658892128%")
  },
  Text_106_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_301_2401: {
    flexGrow: 1,
    width: wp("2.7700839868072853%"),
    height: hp("5.1020408163265305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.621419676214195%"),
    top: hp("3.7900874635568518%"),
    resizeMode: "cover"
  },
  View_33_390: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.351183063511831%"),
    top: hp("44.75218658892128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_150: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_150_31_265: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_321: {
    flexGrow: 1,
    width: wp("2.054794520547945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24906600249065924%"),
    top: hp("6.12244897959183%")
  },
  Text_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_180: {
    flexGrow: 1,
    width: wp("1.3075965130759652%"),
    height: hp("2.3323615160349855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4981320049813194%"),
    top: hp("1.8950437317784221%")
  },
  View_33_348: {
    width: wp("3.4869240348692405%"),
    minWidth: wp("3.4869240348692405%"),
    height: hp("11.224489795918368%"),
    minHeight: hp("11.224489795918368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.636363636363635%"),
    top: hp("3.498542274052478%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_245: {
    flexGrow: 1,
    width: wp("3.1133250311332503%"),
    height: hp("7.288629737609329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18679950186799665%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_245_31_265: {
    flexGrow: 1,
    width: wp("3.1133250311332503%"),
    height: hp("7.288629737609329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_323: {
    flexGrow: 1,
    width: wp("2.73972602739726%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4358655043586577%"),
    top: hp("7.5801749271137036%")
  },
  Text_33_323: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_222: {
    flexGrow: 1,
    width: wp("1.61892901618929%"),
    height: hp("3.206997084548105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8717310087173118%"),
    top: hp("2.0408163265306127%")
  },
  View_58_6: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("10.204081632653061%"),
    minHeight: hp("10.204081632653061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.463262764632628%"),
    top: hp("31.924198250728864%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_58_3: {
    flexGrow: 1,
    width: wp("2.054794520547945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18679950186799488%"),
    top: hp("6.122448979591837%")
  },
  Text_58_3: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_58_4: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_33_383: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.303860523038605%"),
    top: hp("44.75218658892128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_299: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_299_31_265: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_273: {
    flexGrow: 1,
    width: wp("1.9925280199252802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24906600249066013%"),
    top: hp("6.12244897959183%")
  },
  Text_33_273: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_31_318: {
    flexGrow: 1,
    width: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6226650062266499%"),
    top: hp("1.4577259475218654%")
  },
  View_77_83: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.463262764632628%"),
    top: hp("56.70553935860059%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_17: {
    flexGrow: 1,
    width: wp("2.1170610211706102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18679950186799488%"),
    top: hp("6.12244897959183%")
  },
  Text_77_17: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_77_18: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_33_362: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.398505603985056%"),
    top: hp("31.924198250728864%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_227: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_227_31_265: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_324: {
    flexGrow: 1,
    width: wp("1.36986301369863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5603985056039846%"),
    top: hp("6.122448979591837%")
  },
  Text_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_212: {
    flexGrow: 1,
    width: wp("1.1207970112079702%"),
    height: hp("2.9158778510357823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6849315068493151%"),
    top: hp("1.4577259475218654%")
  },
  View_33_411: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.398505603985056%"),
    top: hp("44.75218658892128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_181: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_181_31_265: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_328: {
    flexGrow: 1,
    width: wp("1.36986301369863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5603985056039846%"),
    top: hp("6.12244897959183%")
  },
  Text_33_328: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_290: {
    flexGrow: 1,
    width: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.622665006226649%"),
    top: hp("1.4577259475218654%")
  },
  View_33_369: {
    width: wp("3.61145703611457%"),
    minWidth: wp("3.61145703611457%"),
    height: hp("11.661807580174926%"),
    minHeight: hp("11.661807580174926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.932752179327522%"),
    top: hp("3.498542274052478%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_254: {
    flexGrow: 1,
    width: wp("3.1133250311332503%"),
    height: hp("7.288629737609329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2407658293119539%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_254_31_265: {
    flexGrow: 1,
    width: wp("3.1133250311332503%"),
    height: hp("7.288629737609329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_325: {
    flexGrow: 1,
    width: wp("3.61145703611457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.72594752186589%")
  },
  Text_33_325: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_226: {
    flexGrow: 1,
    width: wp("0.9962640099626401%"),
    height: hp("3.498542274052478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3075965130759641%"),
    top: hp("2.0408163265306127%")
  },
  View_77_47: {
    width: wp("2.6774595267745953%"),
    minWidth: wp("2.6774595267745953%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.273972602739725%"),
    top: hp("56.70553935860059%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_44: {
    flexGrow: 1,
    width: wp("3.4246575342465753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.37359900373598975%"),
    top: hp("6.12244897959183%")
  },
  Text_77_44: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_77_46: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12453300124533051%"),
    top: hp("0%")
  },
  View_39_408: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.54047322540473%"),
    top: hp("44.75218658892128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_222: {
    flexGrow: 1,
    width: wp("1.86799501867995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3113325031133236%"),
    top: hp("6.12244897959183%")
  },
  Text_39_222: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_39_32: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_42: {
    width: wp("3.3623910336239105%"),
    minWidth: wp("3.3623910336239105%"),
    height: hp("10.204081632653061%"),
    minHeight: hp("10.204081632653061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.919053549190536%"),
    top: hp("3.9358600583090384%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_30: {
    flexGrow: 1,
    width: wp("3.7982565379825655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.18679950186799488%"),
    top: hp("6.122448979591836%")
  },
  Text_44_30: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_44_31: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.435865504358655%"),
    top: hp("0%")
  },
  View_174_37: {
    width: wp("3.922789539227895%"),
    minWidth: wp("3.922789539227895%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.666251556662515%"),
    top: hp("20.408163265306122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_174_32: {
    flexGrow: 1,
    width: wp("2.303860523038605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8094645080946448%"),
    top: hp("6.122448979591837%")
  },
  Text_174_32: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_174_33: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7471980074719813%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  ImageBackground_174_34: {
    width: wp("1.4943960149439601%"),
    minWidth: wp("1.4943960149439601%"),
    height: hp("3.498542274052478%"),
    minHeight: hp("3.498542274052478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4981320049813194%"),
    top: hp("1.166180758017493%")
  },
  View_174_35: {
    width: wp("0.43586550435865506%"),
    minWidth: wp("0.43586550435865506%"),
    minHeight: hp("2.0408163265306123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9962640099626396%"),
    top: hp("1.8950437317784257%")
  },
  Text_174_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_183_119: {
    width: wp("3.922789539227895%"),
    minWidth: wp("3.922789539227895%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.900373599003736%"),
    top: hp("20.408163265306122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_183_115: {
    flexGrow: 1,
    width: wp("2.303860523038605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8094645080946457%"),
    top: hp("6.122448979591837%")
  },
  Text_183_115: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_183_116: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7471980074719795%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  ImageBackground_183_117: {
    width: wp("1.4943960149439601%"),
    minWidth: wp("1.4943960149439601%"),
    height: hp("3.498542274052478%"),
    minHeight: hp("3.498542274052478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49813200498132204%"),
    top: hp("1.166180758017493%")
  },
  View_183_118: {
    width: wp("0.43586550435865506%"),
    minWidth: wp("0.43586550435865506%"),
    minHeight: hp("2.0408163265306123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.058530510585305%"),
    top: hp("1.8950437317784257%")
  },
  Text_183_118: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_174_36: {
    width: wp("3.922789539227895%"),
    minWidth: wp("3.922789539227895%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5566625155666252%"),
    top: hp("20.408163265306122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_174_28: {
    flexGrow: 1,
    width: wp("2.303860523038605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8094645080946452%"),
    top: hp("6.122448979591837%")
  },
  Text_174_28: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_174_29: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.74719800747198%"),
    top: hp("0%")
  },
  View_49_195: {
    width: wp("3.61145703611457%"),
    minWidth: wp("3.61145703611457%"),
    height: hp("9.7667638483965%"),
    minHeight: hp("9.7667638483965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.104607721046076%"),
    top: hp("3.498542274052478%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_49_175: {
    flexGrow: 1,
    width: wp("3.1133250311332503%"),
    height: hp("7.288629737609329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24076582931195745%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I49_175_31_265: {
    flexGrow: 1,
    width: wp("3.1133250311332503%"),
    height: hp("7.288629737609329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_49_176: {
    flexGrow: 1,
    width: wp("3.61145703611457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.72594752186589%")
  },
  Text_49_176: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_49_194: {
    flexGrow: 1,
    width: wp("1.4943960149439601%"),
    height: hp("3.498542274052478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0585305105853067%"),
    top: hp("1.8950437317784257%")
  },
  View_33_404: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.44582814445828%"),
    top: hp("44.75218658892128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_168: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_168_31_265: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_327: {
    flexGrow: 1,
    width: wp("1.86799501867995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31133250311332716%"),
    top: hp("6.12244897959183%")
  },
  Text_33_327: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_194: {
    flexGrow: 1,
    width: wp("1.1207970112079702%"),
    height: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6849315068493151%"),
    top: hp("1.3119533527696774%")
  },
  View_77_78: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.493150684931507%"),
    top: hp("56.70553935860059%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_41: {
    flexGrow: 1,
    width: wp("2.179327521793275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12453300124532873%"),
    top: hp("6.12244897959183%")
  },
  Text_77_41: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_77_42: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_75_306: {
    width: wp("2.86425902864259%"),
    minWidth: wp("2.86425902864259%"),
    height: hp("10.204081632653061%"),
    minHeight: hp("10.204081632653061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.054794520547945%"),
    top: hp("31.924198250728864%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_75_29: {
    flexGrow: 1,
    width: wp("2.86425902864259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.122448979591837%")
  },
  Text_75_29: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_75_30: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24906600249066013%"),
    top: hp("0%")
  },
  View_73_76: {
    width: wp("3.61145703611457%"),
    minWidth: wp("3.61145703611457%"),
    height: hp("11.807580174927114%"),
    minHeight: hp("11.807580174927114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.650062266500623%"),
    top: hp("3.498542274052478%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_73_48: {
    flexGrow: 1,
    width: wp("3.1133250311332503%"),
    height: hp("7.288629737609329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24076582931195745%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_73_49: {
    width: wp("3.1133250311332503%"),
    minWidth: wp("3.1133250311332503%"),
    height: hp("7.288629737609329%"),
    minHeight: hp("7.288629737609329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_73_32: {
    flexGrow: 1,
    width: wp("4.60772104607721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.49813200498132204%"),
    top: hp("7.72594752186589%")
  },
  Text_73_32: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_73_33: {
    flexGrow: 1,
    width: wp("0.7471980074719801%"),
    height: hp("2.623906705539359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9339975093399744%"),
    top: hp("1.7492711370262395%")
  },
  View_39_564: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.493150684931507%"),
    top: hp("44.75218658892128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_547: {
    flexGrow: 1,
    width: wp("2.428393524283935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.12244897959183%")
  },
  Text_39_547: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_39_548: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_77_77: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.54047322540473%"),
    top: hp("56.70553935860059%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_39: {
    flexGrow: 1,
    width: wp("2.303860523038605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06226650062266259%"),
    top: hp("6.12244897959183%")
  },
  Text_77_39: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_77_75: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_43_491: {
    width: wp("3.1755915317559156%"),
    minWidth: wp("3.1755915317559156%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1830635118306352%"),
    top: hp("3.9358600583090384%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_43_489: {
    flexGrow: 1,
    width: wp("3.1755915317559156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.122448979591836%")
  },
  Text_43_489: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_43_490: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37359900373599%"),
    top: hp("0%")
  },
  View_33_397: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.44582814445828%"),
    top: hp("31.924198250728864%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_159: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_159_31_265: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_334: {
    flexGrow: 1,
    width: wp("1.61892901618929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4358655043586577%"),
    top: hp("6.122448979591837%")
  },
  Text_33_334: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_347: {
    flexGrow: 1,
    width: wp("1.2453300124533%"),
    height: hp("2.9154518950437316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6226650062266508%"),
    top: hp("1.4577259475218654%")
  },
  View_42_471: {
    width: wp("3.4246575342465753%"),
    minWidth: wp("3.4246575342465753%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.915317559153175%"),
    top: hp("56.70553935860059%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_42_465: {
    flexGrow: 1,
    width: wp("3.4246575342465753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.12244897959183%")
  },
  Text_42_465: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_42_466: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49813200498132115%"),
    top: hp("0%")
  },
  View_75_31: {
    width: wp("2.86425902864259%"),
    minWidth: wp("2.86425902864259%"),
    height: hp("10.204081632653061%"),
    minHeight: hp("10.204081632653061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.1519302615193%"),
    top: hp("44.75218658892128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_75_27: {
    flexGrow: 1,
    width: wp("3.5491905354919058%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3113325031133236%"),
    top: hp("6.12244897959183%")
  },
  Text_75_27: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_75_28: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18679950186799843%"),
    top: hp("0%")
  },
  View_33_376: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.493150684931507%"),
    top: hp("31.924198250728864%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_236: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_236_31_265: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_326: {
    flexGrow: 1,
    width: wp("2.2415940224159403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12453300124532873%"),
    top: hp("6.122448979591837%")
  },
  Text_33_326: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_216: {
    flexGrow: 1,
    width: wp("1.36986301369863%"),
    height: hp("3.206997084548105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5603985056039846%"),
    top: hp("1.3119533527696774%")
  },
  View_33_355: {
    width: wp("2.8019925280199254%"),
    minWidth: wp("2.8019925280199254%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.226650062266501%"),
    top: hp("31.924198250728864%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_195: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12453300124533051%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_195_31_265: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_322: {
    flexGrow: 1,
    width: wp("2.8019925280199254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.122448979591837%")
  },
  Text_33_322: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_208: {
    flexGrow: 1,
    width: wp("1.3075965130759652%"),
    height: hp("2.3323615160349855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7471980074719804%"),
    top: hp("1.7492711370262342%")
  },
  View_77_52: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("8.16326530612245%"),
    minHeight: hp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.44582814445828%"),
    top: hp("56.70553935860059%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_43: {
    flexGrow: 1,
    width: wp("2.303860523038605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06226650062266614%"),
    top: hp("6.12244897959183%")
  },
  Text_77_43: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_77_45: {
    flexGrow: 1,
    width: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_33_96: {
    width: wp("5.292652552926526%"),
    minWidth: wp("5.292652552926526%"),
    height: hp("4.227405247813411%"),
    minHeight: hp("4.227405247813411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5603985056039851%"),
    top: hp("57.288629737609334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_79: {
    flexGrow: 1,
    width: wp("3.8426113009898186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5284256559766689%")
  },
  Text_26_79: {
    color: "rgba(0, 108, 181, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_33_92: {
    flexGrow: 1,
    width: wp("1.36986301369863%"),
    height: hp("3.3527696793002915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.549190535491905%"),
    top: hp("0.5830903790087447%")
  },
  ImageBackground_103_1296: {
    width: wp("2.7700839868072853%"),
    minWidth: wp("2.7700839868072853%"),
    height: hp("5.1020408163265305%"),
    minHeight: hp("5.1020408163265305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.96388542963886%"),
    top: hp("2.7696793002915454%"),
    resizeMode: "cover"
  },
  View_39_407: {
    width: wp("2.054794520547945%"),
    minWidth: wp("2.054794520547945%"),
    minHeight: hp("2.0408163265306123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.851805728518055%"),
    top: hp("38.0466472303207%")
  },
  Text_39_407: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_174_30: {
    width: wp("2.054794520547945%"),
    minWidth: wp("2.054794520547945%"),
    minHeight: hp("2.0408163265306123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.774595267745955%"),
    top: hp("26.53061224489796%")
  },
  Text_174_30: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_39_217: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    minHeight: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.54047322540473%"),
    top: hp("31.924198250728864%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_174_31: {
    width: wp("2.4906600249066%"),
    minWidth: wp("2.4906600249066%"),
    height: hp("5.830903790087463%"),
    minHeight: hp("5.830903790087463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.463262764632628%"),
    top: hp("20.408163265306122%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  ImageBackground_75_23: {
    width: wp("1.5566625155666252%"),
    minWidth: wp("1.5566625155666252%"),
    height: hp("3.9358600583090384%"),
    minHeight: hp("3.9358600583090384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.31257783312578%"),
    top: hp("11.370262390670554%")
  },
  View_19_5: {
    width: wp("7.063713406269458%"),
    minWidth: wp("7.063713406269458%"),
    minHeight: hp("3.206997084548105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.78455790784558%"),
    top: hp("8.309037900874635%")
  },
  Text_19_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.016200000643730166,
    textTransform: "none"
  },
  ImageBackground_103_0: {
    width: wp("9.028642590286426%"),
    minWidth: wp("9.028642590286426%"),
    height: hp("5.247813411078718%"),
    minHeight: hp("5.247813411078718%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.78829389788294%"),
    top: hp("16.3265306122449%"),
    resizeMode: "cover"
  },
  ImageBackground_238_0: {
    width: wp("21.793275217932752%"),
    minWidth: wp("21.793275217932752%"),
    height: hp("13.119533527696792%"),
    minHeight: hp("13.119533527696792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1133250311332503%"),
    top: hp("80.466472303207%"),
    resizeMode: "cover"
  },
  View_303_8: {
    width: wp("21.793275217932752%"),
    minWidth: wp("21.793275217932752%"),
    height: hp("13.119533527696792%"),
    minHeight: hp("13.119533527696792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.389788293897883%"),
    top: hp("80.466472303207%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_303_7: {
    flexGrow: 1,
    width: wp("21.793275217932752%"),
    height: hp("13.119533527696792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2: { height: 686 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
