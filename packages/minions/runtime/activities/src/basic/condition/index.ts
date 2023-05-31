import { AbstractActivity, Activity } from "@rxdrag/minions-runtime"
import { IActivityDefine } from "@rxdrag/minions-schema"

export interface IConditionConfig {
  trueExpression?: string
}

@Activity(Condition.NAME)
export class Condition extends AbstractActivity<IConditionConfig> {
  public static NAME = "system.condition"

  constructor(meta: IActivityDefine<IConditionConfig>) {
    super(meta)
    if (Object.keys(meta.inPorts || {}).length !== 1) {
      throw new Error("Condition inputs count error")
    }
  }

  execute(inputValue: any): void {
    let result = inputValue
    if (this.meta.config?.trueExpression) {
      // eslint-disable-next-line no-new-func
      const func = new Function('inputValue', "return " + this.meta.config?.trueExpression)
      result = func(inputValue)
    }

    const flowTo = result ? "true" : "false";
    this.next(inputValue, flowTo)
  }
}
