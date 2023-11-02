import {globalEvent} from "./globalEvent";
import {EVENT} from "../enum";

/**
 * 全局变量
 */
export interface GlobalVariable {
  maxZIndex: number; // 最大zIndex
  setMaxZIndex: (zIndex: number) => void; // 设置最大zIndex
}

export const globalVariable: GlobalVariable = {
  maxZIndex: 1,
  setMaxZIndex: (zIndex: number) => {
    if (zIndex < globalVariable.maxZIndex) {
      return;
    }
    globalVariable.maxZIndex = zIndex
    globalEvent.notify(EVENT.SET_MAX_Z_INDEX, zIndex)
  },
}