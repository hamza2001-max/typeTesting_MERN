import { FaCog } from "react-icons/fa";
import { testSettingsVInterface } from "../types";
import { TestSettingsModeSm } from "./TestSettingsModeSm";
import { useDispatch, useSelector } from "react-redux";
import { testSettingsVSlice } from "../redux/visibilitySlice";

export const TestSettings = () => {
  const testSettingsVSelector = useSelector(
    (state: testSettingsVInterface) => state.testSettingsV.testSettingsV
  );
  const testSettingsVDispatch = useDispatch();
  const { visibleTS } = testSettingsVSlice.actions;

  return (
    <section className="flex justify-center items-center flex-col">
      <button
        className="flex items-center text-custom-primary cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
        onClick={() => {
          testSettingsVSelector === false && testSettingsVDispatch(visibleTS());
        }}
      >
        <FaCog className="cursor-pointer mr-2" />
        Test Setting
      </button>
      {testSettingsVSelector && (
        <section
          className="w-72 p-4 rounded-xl flex flex-col text-sm bg-custom-fill z-10
        text-custom-primary border border-custom-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <TestSettingsModeSm />
        </section>
      )}
    </section>
  );
};
