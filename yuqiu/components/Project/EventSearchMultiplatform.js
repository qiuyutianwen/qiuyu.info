/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import {
  AngularBadge,
  NodejsBadge,
  JavaBadge,
  GCPBadge,
  AndroidBadge,
} from "../Badges";

const eventSearchDescription = (
  <span>
    Integrated with Google Maps API, TicketMaster API, Spotify API and IPinfo
    API, the search application is developed on both Web and Android platform.
    Users could search events information of sports, films and arts at current
    position or specific address. Backend services are build with the use
    of&nbsp;
    <TextLink href="https://nodejs.org/en/">Node.js</TextLink>&nbsp;and&nbsp;
    <TextLink href="https://expressjs.com/">Express.js</TextLink>. Frontend web
    application is built with&nbsp;
    <TextLink href="https://angular.io/">Angular</TextLink>, and Android
    application is developed with&nbsp;
    <TextLink href="https://developer.android.com/studio">
      Android Studio
    </TextLink>
    &nbsp;with Java. Both frontend and backend are deployed to&nbsp;
    <TextLink href="https://cloud.google.com/">Google Cloud Platform</TextLink>.
  </span>
);

const eventSearchProject = (
  <Project
    key="EventSearch"
    title="EventSearch"
    badges={[NodejsBadge, JavaBadge, AngularBadge, GCPBadge, AndroidBadge]}
    description={eventSearchDescription}
    links={[
      <IconTextLink
        key="CODE"
        title="CODE"
        iconType="CODE"
        href="https://github.com/qiuyutianwen/eventSearch-Multiplatform"
      />,
      <IconTextLink
        key="WEBSITE"
        title="WEBSITE"
        iconType="WEBSITE"
        href="https://hw8-eventserach-angular.uw.r.appspot.com/"
      />,
      <IconTextLink
        key="Web DEMO"
        title="WEB DEMO"
        iconType="DEMO"
        href="https://youtu.be/H2fhPucsf1o"
      />,
      <IconTextLink
        key="Android DEMO"
        title="ANDROID DEMO"
        iconType="DEMO"
        href="https://youtu.be/0L6LxN0kkB8"
      />,
    ]}
  />
);

export default eventSearchProject;
