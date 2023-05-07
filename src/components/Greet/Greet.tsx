import { GreetProps } from "./Greet.types";

export const Greet = ({ name }: GreetProps) => {
  return <h2>Hello {name ? name : 'anonymous'}</h2>;
};
