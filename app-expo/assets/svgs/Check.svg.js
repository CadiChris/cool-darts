import { SvgXml } from "react-native-svg";
import { View } from "react-native";

export const Check = ({ width, height, transform }) => {
  const svgSource = `
<svg width="16px" height="14px" viewBox="0 0 16 14" >
    <g id="APPLICATION" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2-CUT-THROAT-CRICKET-1B" transform="translate(-304.000000, -683.000000)" fill="#208871" fill-rule="nonzero">
            <g id="RESULTAT" transform="translate(0.000000, 586.000000)">
                <g id="ACTIONS" transform="translate(52.000000, 33.000000)">
                    <g id="CHAMP" transform="translate(0.000000, 45.897037)">
                        <g id="OK" transform="translate(235.000000, 5.000000)">
                            <path d="M32.4561716,14.5831931 C31.6760669,13.7463485 30.3315178,13.8188623 29.4687286,14.7444055 L22.7563373,21.9450135 L20.531397,19.5580865 C19.6684597,18.6325434 18.3240586,18.5598709 17.5439539,19.3968741 C16.7635534,20.2338773 16.8310027,21.6760618 17.6939399,22.6016048 L21.1019059,26.2576033 C21.5477223,26.7358456 22.121929,26.9841697 22.6804567,26.9994024 C22.7007211,27.0003544 22.7212814,26.9990851 22.7415457,26.9995611 C22.77246,26.9994024 22.8035222,27.0008304 22.8342886,26.9992437 C23.3925205,26.9836937 23.9658398,26.7352108 24.4110645,26.2576033 L32.3060377,17.7880825 C33.1689749,16.8625394 33.2364242,15.4201964 32.4561716,14.5831931" id="icon-ok"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
`;

  return (
    <View style={transform}>
      <SvgXml xml={svgSource} width={width} height={height} />
    </View>
  );
};
