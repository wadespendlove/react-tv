import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import Episodes from "./shows/ShowDetails";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [show, setShow] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);
  // const [episode, setEpisode] = useState(Episodes);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          show={show}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
        <ShowDetails show={show} selectedShow={selectedShow} />
      </main>
    </>
  );
}
