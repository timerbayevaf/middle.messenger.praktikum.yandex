type FunctionElement = (props: JSX.HTMLAttributes) => JSX.Element;

interface BlockProps {}

interface BlockState {}
interface RouteProps extends BlockProps {
  rootQuery: string;
  isPrivate: boolean;
}

interface RouteOptions {
  isPrivate: boolean;
}

interface RouteTarget {
  location: {
    pathname: string;
  };
}

export {
  FunctionElement,
  RouteProps,
  RouteOptions,
  BlockProps,
  BlockState,
  RouteTarget,
};
