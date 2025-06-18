import "./episodes.css";

/** A list of episode names that allows the user to select an episode */
export default function EpisodeList({
  name,
  episodes,
  selectedEpisode,
  setSelectedEpisode,
}) {
  return (
    <div className="episodes">
      <ol>
        <h2>{name}</h2>
        {episodes.map((episode) => {
          return (
            <li
              key={episode.number}
              onClick={() => setSelectedEpisode(episode)}
              className={episode === selectedEpisode ? "selected" : ""}
            >
              {episode.title}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
