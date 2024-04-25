
import React, { useState } from 'react';

const RenderClock = (props) => {
  const { hours, minutes, seconds } = props;

  const newHours = hours < 10 ? '0' + hours : hours;
  const newMinutes = minutes < 10 ? '0' + minutes : minutes;
  const newSeconds = seconds < 10 ? '0' + seconds : seconds;

  return (
    <div style={styles.clock}>
      {newHours + ':' + newMinutes + ':' + newSeconds}
    </div>
  );
};

export default function App() {
  const [now, setNow] = useState(new Date());
  const [clockList, setClocklist] = useState([]);
  const setNewTime = () => {
    setNow(new Date());
  };
  const setNewClock = () => {
    setClocklist([...clockList, 1]);
  };
  return (
    <div style={styles.container}>
      <div style={styles.paragraph}>Ray</div>
      <div style={styles.paragraph}>
        <RenderClock
          hours={now.getHours()}
          minutes={now.getMinutes()}
          seconds={now.getSeconds()}
        />
      </div>
      <div style={styles.paragraph}>
        <div style={styles.clock}>
          <button onClick={setNewTime}>
            Refresh
          </button>
        </div>
      </div>
      <div style={styles.paragraph}>
        <div style={styles.clock}>
          <button onClick={setNewClock}>
            Add
          </button>
        </div>

      </div>

      {clockList.map((r) => {
        return (
          <div style={styles.paragraph}>
            <RenderClock
              hours={now.getHours()}
              minutes={now.getMinutes()}
              seconds={now.getSeconds()}
            />
          </div>
        );
      })}

    </div>
  );
}

const styles = {
  container: {
    margin: "0 auto",
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    width: "500px"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    divAlign: 'center',
    display: "flex",
    backgroundColor: '#ffffff',
    justifyContent: "center",
    height: "50px",
    alignItems: "center"
  },
  clock: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,

  },
};
