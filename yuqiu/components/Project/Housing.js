/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { JavaBadge, JavaScriptBadge, MySQLBadge, HerokuBadge } from "../Badges";

const housingDescription = (
  <span>
    Housing is a house trading and rental platform. Users could login to send
    buy or sell or rental orders. They could send application messages and bid
    price with each other.Backend services are built with&nbsp;
    <TextLink href="https://www.php.net/">Java Spring boot</TextLink>
    &nbsp;and&nbsp;<TextLink href="https://www.mysql.com/">Mysql</TextLink>.
    Frontend applications and animations are developed with&nbsp;
    <TextLink href="https://www.javascript.com/">JavaScript</TextLink>, HTML and
    CSS.
  </span>
);

const housingProject = (
  <Project
    key="Housing"
    title="Housing"
    badges={[JavaBadge, JavaScriptBadge, MySQLBadge, HerokuBadge]}
    description={housingDescription}
    links={[
      <IconTextLink
        key="CODE"
        title="CODE"
        iconType="CODE"
        href="https://github.com/qiuyutianwen/housing"
      />,
      <IconTextLink
        key="WEBSITE"
        title="WEBSITE"
        iconType="WEBSITE"
        href="https://cmpe202-qiuyu.herokuapp.com/"
      />,
    ]}
  />
);

export default housingProject;
