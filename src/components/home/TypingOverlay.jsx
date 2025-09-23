import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TypingOverlay = ({ esp = false }) => {
  const toRotate_esp = [
    "Desarrolladora _FullStack",
    "QA _Tester",
    "QA _Automation",
    "Desarrolladora _Frontend",
    "Desarrolladora _Backend"
  ];

  const toRotate = [
    "FullStack _Developer",
    "QA _Tester",
    "QA _Automation",
    "Frontend _Developer",
    "Backend _Developer"
  ];

  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState(' '.repeat(50));
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const period = 2000;
  const baseLength = 50;
  const overlayStart = 10;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % (esp ? toRotate_esp.length : toRotate.length);
    const fullText = esp ? toRotate_esp[i] : toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText === '' ? '_' : updatedText);

    let base = ' '.repeat(baseLength).split('');

    for (let j = 0; j < updatedText.length && j + overlayStart < baseLength; j++) {
      base[j + overlayStart] = updatedText[j];
    }

    const finalText = base.join('');
    setDisplayText(finalText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 2);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <Container fluid className="p-0 m-0">
      <Row className="m-0">
        <Col xs="auto" className="p-0">
          <span className="typing-text">
            {text}
            <span className="cursor">|</span>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default TypingOverlay;