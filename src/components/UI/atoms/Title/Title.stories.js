import TitleAtom from "./UI/atoms/TitleAtom";

export default {
  title: "TitleAtom",
  component:TitleAtom,
}

export const Template = () => <TitleAtom text="ThisIsATitle" color="blue-main" size="2xl"/>
