const mockVide = () => null;
jest.mock('react-native-keep-awake', () => mockVide);

// https://github.com/stefalda/ReactNativeLocalization/issues/37#issuecomment-319688961
jest.mock(
  'react-native-localization',
  () =>
    class RNLocalization {
      language = 'fr';

      constructor(props) {
        this.props = props;
        this.setLanguage(this.language);
      }

      setLanguage(interfaceLanguage) {
        this.language = interfaceLanguage;
        if (this.props[interfaceLanguage]) {
          const localizedStrings = this.props[this.language];
          for (const key in localizedStrings) {
            if (localizedStrings.hasOwnProperty(key))
              this[key] = localizedStrings[key];
          }
        }
      }
    },
);
