import { useEffect, useState } from 'react';


export default function Attendees() {
  const [attendees, setAttendees] = useState('');

  // const handleResponse = (_event: any, response: Response) => {
  //   console.log('Response: ', response);
  //   setAttendees(response.message);
  // };

  // useEffect((): any => {
  //   ipc.on('blind-routes', handleResponse);

  //   return () => ipc.off('blind-routes', handleResponse);
  // }, []);
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
