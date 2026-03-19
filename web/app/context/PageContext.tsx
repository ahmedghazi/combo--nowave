"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";

type PageContextType = {
  settings: {
    pathname: string;
  };
  userHistory: string[];
};
const PageContext = createContext({} as PageContextType);

interface PageContextProps {
  // location?: object;
  children: ReactNode;
  // pageContext: object;
}

export const PageContextProvider = (props: PageContextProps) => {
  const { children } = props;
  const pathname = usePathname();
  // console.log(pathname);
  const [userHistory, setUserHistory] = useState<string[]>([pathname]);
  const settings = {
    pathname,
  };

  const _format = () => {
    // const wh = window.innerHeight;

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const header = document.querySelector("header");
    let headerBounding = { height: 50 };
    if (header) {
      headerBounding = header.getBoundingClientRect();

      document.documentElement.style.setProperty(
        "--header-h",
        headerBounding.height + "px",
      );
    }
  };

  useEffect(() => {
    _format();
    window.addEventListener("resize", _format);

    return () => {
      window.removeEventListener("resize", _format);
    };
  }, []);

  useEffect(() => {
    setUserHistory((prev) => [...prev, pathname]);
  }, [pathname]);

  return (
    <PageContext.Provider value={{ settings, userHistory }}>
      {children}
    </PageContext.Provider>
  );
};

// export default PageContext;
// export { PageContext, PageContextProvider };

export const usePageContext = () => useContext(PageContext);
