import { useState } from "react";
import "./shows.css";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";
import EpisodeList from "../episodes/EpisodeList.jsx";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show, selectedShow }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  if (!selectedShow) {
    return (
      <div className="show-details">
        <p>Please select a show to learn more.</p>
      </div>
    );
  }
  return (
    <div className="show-details">
      {selectedShow && (
        <>
          <EpisodeList
            name={selectedShow.name}
            episodes={selectedShow.episodes}
            selectedEpisode={selectedEpisode}
            setSelectedEpisode={setSelectedEpisode}
          />
          <EpisodeDetails episode={selectedEpisode} />
        </>
      )}
    </div>
  );
}
