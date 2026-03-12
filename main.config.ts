import * as Connector from "./main.connector";
import * as UI from "./main.ui";
import { Config } from "./core/config";

const config = new Config(
  UI,
  Connector,
  "index.html",
  "Index component"
);

config.build();
