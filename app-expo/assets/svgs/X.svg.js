import { SvgXml } from "react-native-svg";
import { View } from "react-native";

export const X = ({ width, height, transform }) => {
  const svgSource = `
<svg width="13px" height="13px" viewBox="0 0 13 13">
    <g id="APPLICATION" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2-CUT-THROAT-CRICKET-1C" transform="translate(-326.000000, -431.000000)" fill="#2ECFAB" fill-rule="nonzero">
            <g id="JEU" transform="translate(32.000000, 112.000000)">
                <g id="COLONNE" transform="translate(270.000000, 0.000000)">
                    <g id="Group-10" transform="translate(0.000000, 300.000000)">
                        <path d="M36.5220765,29.0280669 L32.8897045,25.3682494 L36.2601173,21.9723503 C36.8972106,21.3307698 36.8972106,20.2901135 36.2601173,19.6479768 C35.623024,19.0061182 34.590093,19.0063963 33.9529997,19.6479768 L30.5823108,23.0438759 L27.0468285,19.4813939 C26.4094584,18.8395354 25.3765281,18.8395354 24.7394348,19.4813939 C24.1028929,20.1235306 24.1028929,21.1636307 24.7394348,21.8057674 L28.2754692,25.3679713 L24.478027,29.1940936 C23.8406577,29.8365084 23.8406577,30.8766085 24.478027,31.5190233 C25.1151211,32.1603256 26.1477753,32.1603256 26.7845933,31.5190233 L30.5823108,27.6926228 L34.2152349,31.3524403 C34.8520522,31.9942989 35.8847072,31.9942989 36.5220765,31.3524403 C37.1594459,30.7103037 37.1591698,29.6693693 36.5220765,29.0280669" id="point"></path>
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
