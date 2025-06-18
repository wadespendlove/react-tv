import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ show, selectedShow, setSelectedShow }) {
  return (
    <nav className="shows">
      {show.map(({ name, genre, episodes }) => {
        return (
          <a
            key={name}
            onClick={() => {
              setSelectedShow({ name, genre, episodes });
            }}
            className={show === selectedShow ? "selected" : ""}
          >
            {name}
          </a>
        );
      })}
    </nav>
  );
}
