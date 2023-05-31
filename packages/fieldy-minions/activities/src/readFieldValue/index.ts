import { Activity, Input, AbstractActivity } from "@rxdrag/minions-runtime"
import { IActivityDefine } from "@rxdrag/minions-schema"
import { IFieldyLogicFlowContext } from "../context"

export interface IReadFieldValueConfig {
  fieldPath?: string,
}

@Activity(ReadFieldValue.NAME)
export class ReadFieldValue extends AbstractActivity<IReadFieldValueConfig, IFieldyLogicFlowContext> {
  public static NAME = "fieldy.readFieldValue"

  constructor(meta: IActivityDefine<IReadFieldValueConfig>, context:IFieldyLogicFlowContext) {
    super(meta, context)
  }

  @Input()
  inputHandler(): void {
    const path = this.meta.config?.fieldPath 
    if(path){
      const field = this.context?.form?.getField(path)
      if(field){
        this.next(field.value)
      }
    }
  }
}
