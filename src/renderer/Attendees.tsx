import { useEffect, useState } from 'react';

export default function Attendees() {
  const [attendees, setAttendees] = useState({});

  //   // eslint-disable-next-line promise/catch-or-return
  useEffect(() => {
    window.electronAPI
      .getData(null, 'Attendees')
      // eslint-disable-next-line promise/always-return
      .then((response) => {
        console.log('UseEffect: ', response);
        setAttendees(response);
      })
      .catch((error: Error) => {
        console.log('Error: ', error);
      });
  });

  return (
    <div>
      <h1>Attendees</h1>
      <ul>
        {/* {Object.keys(attendees).map((key) => (
          // <li key={key}>{attendees[key]}</li>
        ))} */}
      </ul>
    </div>
  );
}
