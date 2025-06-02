import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { EpisodeList } from "../components/EpisodesList";
import { episodes } from "../episodes";

document.querySelector("#root").innerHTML = render(
  <>
    <EpisodeList episodes={episodes} />
  </>
);
