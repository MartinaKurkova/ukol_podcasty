import "./index.css";
import { Episode } from "../Episode";

export const EpisodeList = ({ episodes }) => (
        <div className="episodes-list">
            {episodes.map((episode) => (
                <Episode
                    key={episode.num}
                    num={episode.num}
                    title={episode.title}
                    guest={episode.guest}
                    />
            ))}
        </div>
    );
