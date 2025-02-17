import { createUuid } from "@rxdrag/shared";
import { splitArraySchema } from "./schema";
import { ReactNode } from "react";
import { NodeType, IActivityMaterial } from "@rxdrag/minions-schema";
import { SplitArray } from "@rxdrag/minions-activities";
import { splitArrayIcon } from "../../icons";

export const splitArrayMaterial: IActivityMaterial<ReactNode> = {
  icon: splitArrayIcon,
  label: "$splitArray",
  activityType: NodeType.Activity,
  defaultPorts: {
    inPorts: [
      {
        id: createUuid(),
        name: "input",
        label: "",
      },
    ],
    outPorts: [
      {
        id: createUuid(),
        name: "output1",
        label: "output1",
      },
      {
        id: createUuid(),
        name: "output2",
        label: "output2",
      },
    ],
  },
  schema: splitArraySchema,
  activityName: SplitArray.NAME
}