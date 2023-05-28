import "./index.css";
import appearGoblin from "../components/appearGoblin.js";
import clickCell from "../components/clickCell.js";
import { field } from "../constants/constants.js";

setInterval(appearGoblin, 1000);
field.addEventListener("click", clickCell);
