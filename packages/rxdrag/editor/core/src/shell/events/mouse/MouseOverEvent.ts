import { ICustomEvent } from '../../../interfaces/event'
import { AbstractMouseEvent } from './AbstractMouseEvent'

export class MouseOverEvent
  extends AbstractMouseEvent
  implements ICustomEvent
{
  type = 'mouse:over'
}
