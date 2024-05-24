import "./UnixTimestamp.css";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { Space, Row, Col, Button, Input, Typography, DatePicker } from "antd";

const UnixTimestamp = () => {
  const [toggleTimestamp, setToggleTimestamp] = useState(false);
  const [toggleDatetime, setToggleDatetime] = useState(false); 
  const [datetime, setDatetime] = useState();
  const [current, setCurrent] = useState(new Date());
  const [timestamp, setTimestamp] = useState("1716514721");
  const [timestampResult, setTimestampResult] = useState({});
  const [datetimeResult, setDatetimeResult] = useState({});

  const toGMT = (timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000);
    return timestamp !== "" ?  date.toUTCString() + " +0000" : date.toUTCString();
  }

  const toLocalTime = (timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toString();
  }

  const relativeFromNow = (timestamp) => {
    return moment.unix(timestamp).fromNow();
  }

  const handleTimestampConvert = () => {
    const rel = relativeFromNow(parseInt(timestamp));
    setTimestampResult({
      "GMT": toGMT(timestamp),
      "LocalTime": toLocalTime(timestamp),
      "Relative": rel,
    });
    setToggleTimestamp(true);
  }

  const handleDatetimeConvert = () => {
    const ts = Math.floor(new Date(datetime).getTime() / 1000);
    const rel = relativeFromNow(ts);
    setDatetimeResult({
      "Unix": ts,
      "GMT": toGMT(ts),
      "LocalTime": toLocalTime(ts),
      "Relative": rel,
    });
    setToggleDatetime(true);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Space direction="vertical" className="container">
      <h3>The Current Epoch Unix Timestamp</h3>
      <Row>
        <Col xs={24} md={12} gutter={8}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Typography.Text>Enter a timestamp</Typography.Text>
              <Input placeholder={timestamp} onChange={(e) => setTimestamp(e.target.value)} />
            </Col>
            <Col span={24}>
              <Button onClick={handleTimestampConvert}>Convert</Button>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: 'center' }}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Typography.Title level={2}>{Math.floor(current.getTime() / 1000)}</Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Text>Seconds since Jan 01 1970. (UTC)</Typography.Text>
            </Col>
            <Col span={24}>
              <Typography.Text>{current.toLocaleTimeString()}</Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
      {toggleTimestamp && (
        <Space direction="vertical" className="date-result">
          <div>
            <span className="label-result">Format:</span>Seconds
          </div>
          <div>
            <span className="label-result">GMT:</span>{timestampResult.GMT}
          </div>
          <div>
            <span className="label-result">Your Time Zone:</span>{timestampResult.LocalTime}
          </div>
          <div>
            <span className="label-result">Relative:</span>{timestampResult.Relative}
          </div>
        </Space>
      )}
      
      <Space direction="vertical">
        <Typography.Text>Select a Date & Time</Typography.Text>
        <DatePicker showTime onChange={(_, dateString) => setDatetime(dateString)} style={{ width: "100%"}}/>
        <Button onClick={handleDatetimeConvert}>Convert</Button>
      </Space>
      {toggleDatetime && (
        <Space direction="vertical" className="date-result">
          <div>
            <span className="label-result">Unix Timestamp:</span>{datetimeResult.Unix}
          </div>
          <div>
            <span className="label-result">GMT:</span>{datetimeResult.GMT}
          </div>
          <div>
            <span className="label-result">Your Time Zone:</span>{datetimeResult.LocalTime}
          </div>
          <div>
            <span className="label-result">Relative:</span>{datetimeResult.Relative}
          </div>
        </Space>
      )}
    </Space>
  );
};

export default UnixTimestamp;
