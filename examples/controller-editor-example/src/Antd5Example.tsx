import { ShellContainer } from "components/ShellContainer"
import { memo, useCallback, useState } from "react"
import { ControllerMetaEditorAntd5 } from "@rxdrag/controller-editor-antd5"
import { ILogicFlowControllerMeta } from "@rxdrag/minions-runtime-react"
import { activityMaterialLocales } from "@rxdrag/minions-react-materials"
import { Fieldy } from "@rxdrag/react-fieldy"
import { Form } from "antd"
import { activityMaterialCategories } from "materials"

export const Antd5Example = memo(() => {
  const [inputValue, setInputValue] = useState<ILogicFlowControllerMeta>({
    id: "test",
    "controllerType": "logicFlow",
    name: "测试",
    events: [],
    reactions: [],
    variables: [],
  })

  const handleChange = useCallback((meta?: ILogicFlowControllerMeta) => {
    setInputValue(meta || inputValue)
  }, [inputValue]);


  return (
    <Fieldy>
      <ShellContainer>
        <ControllerMetaEditorAntd5
          value={inputValue}
          onChange={handleChange}
          controllerMetas={[inputValue]}
          materialCategories={activityMaterialCategories}
          locales={activityMaterialLocales}
          eventMetas={[
            {
              name: "event1",
              label: "事件1"
            },
            {
              name: "event2",
              label: "事件2"
            },
            {
              name: "event3",
              label: "事件3"
            },
          ]}
          height={"100%"}
        />
      </ShellContainer>
    </Fieldy>
  )
})