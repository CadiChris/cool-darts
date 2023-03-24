import { SvgXml } from "react-native-svg";
import { View } from "react-native";

export const FlecheBas = ({ width, height, transform }) => {
  const svgSource = `
  <svg width="12px" height="14px" viewBox="0 0 12 14">
    <g id="APPLICATION" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="1-ACCUEIL2-VARIANTE" transform="translate(-321.000000, -400.000000)" fill="#A6B1C9" fill-rule="nonzero">
            <g id="CHALLENGER" transform="translate(20.000000, 349.000000)">
                <g id="Group-8" transform="translate(0.000000, 37.000000)">
                    <g id="ACTIONS" transform="translate(301.000000, 10.000000)">
                        <path d="M10.9744606,12.1621096 L6.28696057,16.8496096 C6.10531959,17.0341795 5.86508531,17.125 5.62485102,17.125 C5.38461673,17.125 5.14496806,17.0334473 4.96215585,16.8503418 L0.27465585,12.1628418 C0.00641349084,11.8945994 -0.0736839759,11.4916503 0.0713940275,11.1409667 C0.216383965,10.7910153 0.558249385,10.5625 0.937351019,10.5625 L3.74985102,10.5625 L3.74985102,4.9375 C3.74985102,4.41982472 4.16967529,4 4.68735102,4 L6.56235102,4 C7.08002675,4 7.49985102,4.41982472 7.49985102,4.9375 L7.49985102,10.5625 L10.312351,10.5625 C10.6914527,10.5625 11.0333467,10.7909276 11.1783666,11.1411133 C11.3230932,11.4912113 11.2439913,11.8955078 10.9744606,12.1621096 Z" id="bas"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;

  return (
    <View style={transform}>
      <SvgXml xml={svgSource} width={width} height={height} />
    </View>
  );
};
