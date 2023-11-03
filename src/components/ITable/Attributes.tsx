import {Attributes} from "./Template";
import {Input, Space} from "antd";
import {useEffect, useState} from "react";
import {AttributesProps} from "../../data";

/**
 * 按钮私有属性面板
 *
 * At 2023/10/31
 * By TangJiaHui
 */
export default function (props: AttributesProps<Attributes>) {
  const [attributes, setAttributes] = useState<Attributes>(props.attributes);

  function handleChange (attributes: Attributes) {
    setAttributes(attributes);
    props?.onChange?.(attributes);
  }

  useEffect(() => {
    setAttributes(props?.attributes)
  }, [props?.attributes])

  return (
    <Space style={{width: '100%'}} direction={'vertical'}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        标题标题：
        <Input
          style={{flex: 1}}
          value={attributes?.title}
          onChange={e => {
            handleChange({
              ...(attributes || {}),
              title: e.target.value
            })
          }}
        />
      </div>
    </Space>
  )
}