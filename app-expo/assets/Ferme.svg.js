import { SvgXml } from "react-native-svg";
import { View } from "react-native";

export const Ferme = ({ width, height, transform }) => {
  const svgSource = `
<svg width="25px" height="25px" viewBox="0 0 25 25">
    <g id="APPLICATION" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2-CUT-THROAT-CRICKET-1C" transform="translate(-250.000000, -175.000000)" fill="#162F4B">
            <g id="JEU" transform="translate(32.000000, 112.000000)">
                <g id="COLONNE" transform="translate(200.000000, 0.000000)">
                    <g id="LIGNE/0" transform="translate(0.000000, 50.000000)">
                        <path d="M30.5,13 C37.4035594,13 43,18.5964406 43,25.5 C43,32.4035594 37.4035594,38 30.5,38 C23.5964406,38 18,32.4035594 18,25.5 C18,18.5964406 23.5964406,13 30.5,13 Z M33.1403208,21.8105163 L28.4789379,26.4262907 L26.9338405,24.8962093 C26.3345785,24.3029124 25.4009666,24.2563275 24.8592273,24.792868 C24.3172824,25.3294086 24.3641222,26.2538857 24.9633842,26.8471826 L27.3300272,29.1907713 C27.6396219,29.4973369 28.0383766,29.656519 28.4262431,29.6662836 L28.5330708,29.6661819 C28.9207318,29.6562139 29.3188702,29.49693 29.628054,29.1907713 L35.1106743,23.7615913 C35.7099362,23.1682945 35.7567761,22.2437156 35.214934,21.707175 C34.6731946,21.1707362 33.73948,21.2172194 33.1403208,21.8105163 Z" id="check"></path>
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
