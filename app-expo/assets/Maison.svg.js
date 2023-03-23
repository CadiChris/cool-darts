import { SvgXml } from "react-native-svg";
import { View } from "react-native";

export const Maison = ({ width, height, transform }) => {
  const svgSource = `<svg width="24px" height="22px" viewBox="0 0 24 22">
    <g id="APPLICATION" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2-CUT-THROAT-CRICKET-1C" transform="translate(-32.000000, -56.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="TOP" transform="translate(32.187500, 52.000000)">
                <path d="M23.625,14.5041016 C23.5976562,14.8595703 23.4609375,15.1603516 23.2148437,15.4064453 L23.2148437,15.4064453 C22.96875,15.6525391 22.6679687,15.7892578 22.3125,15.8166016 L21,15.8166016 L21.0410156,22.3791016 C21.0136719,23.1173828 20.7539062,23.7326172 20.2617187,24.2248047 C19.7695312,24.7169922 19.1542969,24.9767578 18.4160156,25.0041016 L5.25,25.0041016 C4.51171875,24.9767578 3.89648437,24.7169922 3.40429687,24.2248047 C2.91210937,23.7326172 2.65234375,23.1173828 2.625,22.3791016 L2.625,15.8166016 L1.3125,15.8166016 C0.9296875,15.7892578 0.615234375,15.6525391 0.369140625,15.4064453 C0.123046875,15.1603516 0,14.8595703 0,14.5041016 C0,14.1212891 0.13671875,13.7931641 0.41015625,13.5197266 L10.9101562,4.33222656 C11.2109375,4.08613281 11.5117187,3.97675781 11.8125,4.00410156 C12.140625,4.00410156 12.4277344,4.09980469 12.6738281,4.29121094 L23.1738281,13.5197266 C23.5019531,13.7931641 23.6523437,14.1212891 23.625,14.5041016 Z M14.4375,13.1916016 C14.4101562,12.2072266 13.9726562,11.4552734 13.125,10.9357422 C12.25,10.4435547 11.375,10.4435547 10.5,10.9357422 C9.65234375,11.4552734 9.21484375,12.2072266 9.1875,13.1916016 C9.21484375,14.1759766 9.65234375,14.9279297 10.5,15.4474609 C11.375,15.9396484 12.25,15.9396484 13.125,15.4474609 C13.9726562,14.9279297 14.4101562,14.1759766 14.4375,13.1916016 Z M10.5,17.1291016 C9.5703125,17.1564453 8.79101562,17.4708984 8.16210938,18.0724609 L8.16210938,18.0724609 C7.56054688,18.7013672 7.24609375,19.4806641 7.21875,20.4103516 C7.24609375,20.8205078 7.46484375,21.0392578 7.875,21.0666016 L15.75,21.0666016 C16.1601562,21.0392578 16.3789062,20.8205078 16.40625,20.4103516 C16.3789062,19.4806641 16.0644531,18.7013672 15.4628906,18.0724609 C14.8339844,17.4708984 14.0546875,17.1564453 13.125,17.1291016 L10.5,17.1291016 Z" id="home"></path>
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
