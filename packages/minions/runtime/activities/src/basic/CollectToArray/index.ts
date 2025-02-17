import {
  AbstractActivity,
  Activity,
  Input
} from '@rxdrag/minions-runtime';
import { INodeDefine } from '@rxdrag/minions-schema';

@Activity(CollectToArray.NAME)
export class CollectToArray extends AbstractActivity {
  public static NAME = 'system.collectToArray';
  public static PORT_FINISHED = "finished"

  private  values:unknown[] = []

  constructor(meta: INodeDefine) {
    super(meta);
  }

  @Input()
  inputHandler(inputValue?: unknown): void {
    this.values.push(inputValue)
  }

  @Input(CollectToArray.PORT_FINISHED)
  finishedHandler(){
    this.next(this.values)
  }
}
