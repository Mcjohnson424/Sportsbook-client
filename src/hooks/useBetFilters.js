import { useContext } from "react";
import BetContext from "../contexts/BetContext";

export default function useBetFilteres() {
  const values = useContext(BetContext);
  return values;
}
