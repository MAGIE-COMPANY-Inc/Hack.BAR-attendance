import type { ReactNode, VFC } from "react";
import type { HeaderProps } from "../layouts/Header";
import { Header } from "../layouts/Header";

type Props = HeaderProps & {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { children, ...headerProps } = props;

  return (
    <div className="pb-20">
      <div
        className="pt-4 pb-1 mx-auto"
      >
        <Header {...headerProps} />
      </div>
      <div className="flex min-h-screen w-screen">
        <main className="w-full bg-sky">{children}</main>
      </div>
      <footer>
        <div className="p-8">
          <div className="text-gray-600 text-center">
            <p>Hack.BAR 勤怠管理システム.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
