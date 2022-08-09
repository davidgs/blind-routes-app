import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FloatingLabel, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

export default function Attendees() {
  const [attendees, setAttendees] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedID, setSelectedID] = useState('');

  useEffect(() => {
    const q = JSON.parse('{ "Name": 1, "id": 1 }');
    window.electronAPI
      .getData('Attendees', 'projection', q)
      // eslint-disable-next-line promise/always-return
      .then((response) => {
        console.log('UseEffect: ', response);
        setAttendees(response);
      })
      .catch((error: Error) => {
        console.log('Error: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Attendees</h1>
      <Form.Group as={Col} md={12}>
        <FloatingLabel>
          <>
            <Form.Select
              required
              id="type"
              aria-label="Attendees"
              value={selectedValue}
              onChange={(eventKey) => {
                const jval = JSON.parse(eventKey.target.value);
                console.log('onSelect', eventKey.target.value);
                console.log('ID: ', jval.id);
                setSelectedValue(jval.Name);
                setSelectedID(jval.id);
              }}
            >
              <option defaultValue>
                {selectedValue === '' ? 'Choose one ...' : selectedValue }
              </option>
              {attendees.map((attendee) => (
                <option
                  key={attendee.id}
                  value={`{"Name": "${attendee.Name}", "id": "${attendee.id}" }`}
                >
                  {attendee.Name}
                </option>
              ))}
            </Form.Select>
          </>
        </FloatingLabel>
      </Form.Group>
      <ul />
    </div>
  );
}
