import React, { useEffect, useState } from "react";
import ApiCalendar from "react-google-calendar-api";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import { GoogleCalendarEventList } from "../../api/calendarApi";
import { CalendarState } from "../config";
import Login from "../../users/component/Login";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { useGoogleApi } from "react-gapi";

const Calender = () => {
  const ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID || "";
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || "";
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

  const [data, setData] = useState([]);
  useEffect(() => {
    GoogleCalendarEventList()
      .then((res) => {
        setData(
          res?.data?.items.map((el: CalendarState) => {
            return {
              title: el.summary,
              date: el?.created?.substring(0, 10),
            };
          })
        );
      })
      .catch((err) => console.error("calendar evnet list error : ", err));
  }, []);

  const config = {
    clientId: CLIENT_ID === undefined ? "" : CLIENT_ID,
    apiKey: API_KEY === undefined ? "" : API_KEY,
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };

  // https://github.com/ph-fritsche/react-gapi

  const gapi = useGoogleApi({
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
  console.log("gapi : ", gapi);

  const auth = gapi?.auth2?.getAuthInstance();
  console.log("auth : ", auth);

  return (
    <>
      <div>
        {!auth ? (
          <span>Loaging...</span>
        ) : auth?.isSignedIn.get() ? (
          `Logged in as "${auth.currentUser.get().getBasicProfile().getName()}"`
        ) : (
          // <Login />
          <button
            onClick={() => {
              auth.signIn();
              console.log("auth.signIn() : ", auth.signIn());
            }}
          >
            Login
          </button>
        )}

        <button onClick={(e) => console.log(e)}>일정 추가</button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin, interactionPlugin]}
        initialView="dayGridWeek"
        googleCalendarApiKey={config.apiKey}
        events={data}
        eventDisplay={"block"}
        eventTextColor={"#FFF"}
        eventColor={"#F2921D"}
        height={"660px"}
        // Toolbar
        // navLinkDayClick={(CalendarApi, date) =>
        //   console.log(`${CalendarApi} , ${date} `)
        // }
      />
    </>
  );
};
export default Calender;
