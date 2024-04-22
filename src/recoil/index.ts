import { RecoilState, atom } from "recoil";


// 创建recoil状态
const createState: <T = string>(
  key: string,
  defaultv?: T
) => () => RecoilState<T | undefined> = (key, defaultv) => {
  const state = atom({
    key,
    default: defaultv,
  });

  return () => state;
};


export const useSelectFileState = createState("fileList", "");