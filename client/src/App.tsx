import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { TestSettings } from "./components/TestSettings";
import { TestGrounds } from "./components/TestGrounds";
import {
  customPromptVSlice,
  testSettingsVSlice,
  themeVSlice,
} from "./redux/visibilitySlice";
import {
  customPromptVSInterface,
  testSettingsVInterface,
  themeInterface,
  themeVInterface,
} from "./types";

function App() {
  const themeVDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();

  const { inVisibleTheme } = themeVSlice.actions;
  const { inVisibleTS } = testSettingsVSlice.actions;
  const { inVisibleCustom } = customPromptVSlice.actions;

  const theme = useSelector((state: themeInterface) => state.theme.theme);
  const testSettingsVSelector = useSelector(
    (state: testSettingsVInterface) => state.testSettingsV.testSettingsV
  );
  const customPromptVSelector = useSelector(
    (state: customPromptVSInterface) => state.customPromptV.customPromptV
  );
  const themeVSelector = useSelector(
    (state: themeVInterface) => state.themeV.themeV
  );

  return (
    <div
      className={`${theme} App relative bg-custom-fill h-screen`}
      onClick={() => {
        themeVSelector === true && themeVDispatch(inVisibleTheme());
        testSettingsVSelector === true && testSettingsVDispatch(inVisibleTS());
        customPromptVSelector === true &&
          customPromptVDispatch(inVisibleCustom());
      }}
    >
      <Navigation />
      <section className="flex flex-col items-center">
        <TestSettings />
        <TestGrounds />
      </section>
      <Footer />
    </div>
  );
}

export default App;
