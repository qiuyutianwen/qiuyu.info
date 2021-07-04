/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { ReactBadge, JavaBadge, MySQLBadge, AWSBadge } from "../Badges";

const bitcornerDescription = (
  <span>
    BitCorner is a prototype of bitcoin trading platform. Users could send buy
    or sell orders, and choose market order or limit order. The Backend server
    would automatically choose orders that could be matched. Backend services
    are developed with&nbsp;
    <TextLink href="https://spring.io/">Java Spring boot</TextLink>
    &nbsp;and&nbsp;
    <TextLink href="https://www.mysql.com/">Mysql</TextLink>. Frontend web
    application is built with&nbsp;
    <TextLink href="https://reactjs.org/">React</TextLink>. Both frontend and
    backend are deployed to&nbsp;
    <TextLink href="https://aws.amazon.com/elasticbeanstalk/">
      AWS Elastic Beanstalk
    </TextLink>
    .
  </span>
);

const bitcornerProject = (
  <Project
    key="BitCorner"
    title="BitCorner"
    badges={[JavaBadge, ReactBadge, MySQLBadge, AWSBadge]}
    description={bitcornerDescription}
    links={[
      <IconTextLink
        key="CODE"
        title="CODE"
        iconType="CODE"
        href="https://github.com/qiuyutianwen/BitCorner-Teamwork"
      />,
    ]}
  />
);

export default bitcornerProject;
