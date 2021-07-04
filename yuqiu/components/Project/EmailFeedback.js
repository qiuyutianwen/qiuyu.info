/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { ReactBadge, NodejsBadge, HerokuBadge, MongoDBBadge } from "../Badges";

const emailFeedbackDescription = (
  <span>
    Integrated with Google Oauth2.0, Sendgrid API and Stripe API, the
    application is developed to help users to send emails to multiple customers,
    get feedbacks and track click events in the emails using&nbsp;
    <TextLink href="https://sendgrid.com/">SendGrid</TextLink>. Backend services
    are build with the use of&nbsp;
    <TextLink href="https://nodejs.org/en/">Node.js</TextLink>,&nbsp;
    <TextLink href="https://expressjs.com/">Express.js</TextLink>&nbsp;and&nbsp;
    <TextLink href="https://www.mongodb.com/">MongoDB</TextLink>. Frontend web
    application is built with&nbsp;
    <TextLink href="https://reactjs.org/">React</TextLink>. Both frontend and
    backend are deployed to&nbsp;
    <TextLink href="https://www.heroku.com/">Heroku</TextLink>.
  </span>
);

const emailFeedbackProject = (
  <Project
    key="EmailFeedback"
    title="EmailFeedback"
    badges={[NodejsBadge, ReactBadge, HerokuBadge, MongoDBBadge]}
    description={emailFeedbackDescription}
    links={[
      <IconTextLink
        key="CODE"
        title="CODE"
        iconType="CODE"
        href="https://github.com/qiuyutianwen/EmailFeedback"
      />,
      <IconTextLink
        key="WEBSITE"
        title="WEBSITE"
        iconType="WEBSITE"
        href="https://salty-ridge-88052.herokuapp.com/"
      />,
      <IconTextLink
        key="Web DEMO"
        title="WEB DEMO"
        iconType="DEMO"
        href="https://youtu.be/CJg1H5OUiCM"
      />,
    ]}
  />
);

export default emailFeedbackProject;
