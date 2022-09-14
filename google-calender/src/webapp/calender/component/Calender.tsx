import React from "react";
import ApiCalendar from "react-google-calendar-api";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

// calender-ljh
const Calender = () => {
  const ID = process.env.REACT_APP_GOOGLE_CALEDER_ID;
  const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const config = {
    clientId: ID === undefined ? "" : ID,
    apiKey: APIKEY === undefined ? "" : APIKEY,
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };
  console.log("Config : ", config);
  const apiCalendar = new ApiCalendar(config);
  const handleLogin = (name: string) => {
    if (name === "sign-in") {
      console.log(
        " apiCalendar.handleAuthClick() : ",
        apiCalendar.handleAuthClick()
      );
    } else if (name === "sign-out") {
      console.log(
        "apiCalendar.handleSignoutClick() : ",
        apiCalendar.handleSignoutClick()
      );
    }
  };

  return (
    <>
      <div>
        <button onClick={(e) => handleLogin("sign-in")}>sign-in</button>
        <button onClick={(e) => handleLogin("sign-out")}>sign-out</button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridWeek"
        googleCalendarApiKey={config.apiKey}
        events={{
          googleCalendarId: `${config.clientId}`,
        }}
        eventDisplay={"block"}
        eventTextColor={"#FFF"}
        eventColor={"#F2921D"}
        height={"660px"}
        // Toolbar
      />
    </>
  );
};
export default Calender;
