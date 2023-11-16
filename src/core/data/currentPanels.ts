/**
 * 运行时面板变量
 *
 * At 2023/11/01
 * By TangJiaHui
 */
import { engine, JsonNode } from '..';

interface CurrentPanels {
  // 编辑区域
  editor: {
    // 更新json
    setJson?: (json: JsonNode[]) => void;
    // 刷新json
    refreshJson: (newJson?: JsonNode[]) => void;
    // 面板节点
    domRef?: React.RefObject<HTMLDivElement>;
  };
}

export const currentPanels: CurrentPanels = {
  editor: {
    setJson: undefined,
    domRef: undefined,
    refreshJson(newJson?: JsonNode[]) {
      const target = newJson || [...engine.json.getJson()];
      // // 设置json
      engine.json.setJson(target);
      // // 触发 setJson 更新整个页面
      currentPanels.editor.setJson?.(target);
    },
  },
};