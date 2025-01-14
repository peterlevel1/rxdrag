import React, { memo } from "react"
import { Field } from "../Field"

//动态增加字段用这个，否则不要碰它
export const ObjectField = memo((
  props: {
    name: string,
    initialValue?: unknown,
    value?: unknown,
    defaultValue?: unknown,
    children?: React.ReactNode
  }
) => {
  const { name, value, initialValue, defaultValue, children } = props

  return (
    <Field name={name} value={value} initialValue={initialValue} defaultValue={defaultValue} type="object">
      {children}
    </Field>
  )
})
