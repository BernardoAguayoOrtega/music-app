// create and import Player component
export const Player = () => (
  <>
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control" />
    </div>
  </>
);
