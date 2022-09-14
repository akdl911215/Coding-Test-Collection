import { client } from "./client";
const URL = "https://www.googleapis.com/calendar/v3";
const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY;
const CALENDAR_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID;

export const GoogleCalendarEventList = () =>
  client.get(`${URL}/calendars/${CALENDAR_ID}/events?key=${APIKEY}`);
