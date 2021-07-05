/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink from "../TextLink";
import Project from "./Project";
import {
  JavaBadge,
  DynamoDBBadge,
  JavaScriptBadge,
  AWSBadge,
  AppiumBadge,
  DockerBadge,
} from "../Badges";

const raDescription = (
  <span>
    With the use of&nbsp;
    <TextLink href="https://www.docker.com/">Docker Image</TextLink>
    &nbsp;and&nbsp;
    <TextLink href="https://appium.io/">Appium server</TextLink>, we created an
    online Android Emulator for testing of Image Detection AI apps. Backend
    services are built with&nbsp;
    <TextLink href="https://spring.io/">Java Spring boot</TextLink>
    &nbsp;and&nbsp;
    <TextLink href="https://www.mysql.com/">Mysql</TextLink>&nbsp;, and frontend
    applications are developed with&nbsp;
    <TextLink href="https://www.javascript.com/">JavaScript</TextLink>. The
    project is deployed to&nbsp;
    <TextLink href="https://aws.amazon.com/elasticbeanstalk/">
      AWS Elastic Beanstalk
    </TextLink>
    .
  </span>
);

const raProject = (
  <Project
    key="SJSU RA Project"
    title="SJSU RA Project"
    badges={[
      JavaBadge,
      JavaScriptBadge,
      DynamoDBBadge,
      AWSBadge,
      DockerBadge,
      AppiumBadge,
    ]}
    description={raDescription}
    links={[]}
  />
);

export default raProject;
