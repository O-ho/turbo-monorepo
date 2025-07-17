import {type ImageProps} from "next/image";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

export default function Home() {
  return (
      <div>
       metalogos 홈 페이지 변경점
      </div>
  );
}
