import "./App.css";
import addActivityConfig from "./addActivityConfig";
// import { addMyactivityStyles } from "./styles";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
// import CustomButtonController from "./common/button/CustomButtonController";
// import CustomButtonTester from "./common/button/CustomButtonTester";
// import CustomDateInputController from "./common/dateInput/CustomDateInputController";
// import CustomDateInputTester from "./common/dateInput/CustomDateInputTester";
import CustomDropDownController from "./common/dropdown/CustomDropDownController";
import customDropDownTester from "./common/dropdown/customDropDownTester";
// import FileUploadInputController from "./common/fileUpload/FileUploadInputController";
// import FileUploadInputTester from "./common/fileUpload/FileUploadInputTester";
import CustomTagsController from "./common/tags/CustomTagsController";
import customTagsTester from "./common/tags/customTagsTester";
import CustomTextInputController from "./common/textInput/CustomTextInputController";
import customTextInputTester from "./common/textInput/customTextInputTester";
import { useState } from "react";
import { JsonForms } from "@jsonforms/react";

function App() {
  const [value, setValue] = useState({});
  // const classes = addMyactivityStyles();

  const renderers = [
    ...materialRenderers,
    {
      tester: customDropDownTester("Category/properties/id"),
      renderer: CustomDropDownController,
    },
    {
      tester: customTextInputTester("SurveyLink"),
      renderer: CustomTextInputController,
    },
    // {
    //   tester: customTextInputTester("CardHeaderText"),
    //   renderer: CustomTextInputController,
    // },
    // {
    //   tester: customTextInputTester("CardSubtext"),
    //   renderer: CustomTextInputController,
    // },
    // {
    //   tester: customTextInputTester("Points"),
    //   renderer: CustomTextInputController,
    // },
    { tester: customTagsTester("Tags"), renderer: CustomTagsController },
    // {
    //   tester: CustomDateInputTester("ActiveStartDate"),
    //   renderer: CustomDateInputController,
    // },
    // {
    //   tester: CustomDateInputTester("ActiveEndDate"),
    //   renderer: CustomDateInputController,
    // },
    // {
    //   tester: customTextInputTester("CardButtonText"),
    //   renderer: CustomTextInputController,
    // },
    // {
    //   tester: customTextInputTester("CardButtonUrl"),
    //   renderer: CustomTextInputController,
    // },
    // {
    //   tester: FileUploadInputTester("CardImage"),
    //   renderer: FileUploadInputController,
    // },
    // { tester: CustomButtonTester("Survey"), renderer: CustomButtonController },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <JsonForms
          schema={addActivityConfig.schema}
          uischema={addActivityConfig.uiSchema}
          data={value}
          renderers={renderers}
          cells={materialCells}
          onChange={({ errors, data }) => setValue(data)}
        />
      </header>
    </div>
  );
}

export default App;
