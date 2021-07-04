/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { PHPBadge, JavaScriptBadge, MySQLBadge, HerokuBadge } from "../Badges";

const fancyMarketDescription = (
  <span>
    FancyMarket is platform to show all our team members’ own websites. Users
    could login to review and rate these websites. Two dynamic charts show top 5
    most visited website and top 5 highest rated website. Backend services are
    built with&nbsp;<TextLink href="https://www.php.net/">PHP</TextLink>
    &nbsp;and&nbsp;<TextLink href="https://www.mysql.com/">Mysql</TextLink>.
    Frontend applications and animations are developed with&nbsp;
    <TextLink href="https://www.javascript.com/">JavaScript</TextLink>, HTML and
    CSS.
  </span>
);

const fancyMarketProject = (
  <Project
    key="FancyMarket"
    title="FancyMarket"
    badges={[PHPBadge, JavaScriptBadge, MySQLBadge, HerokuBadge]}
    description={fancyMarketDescription}
    links={[
      <IconTextLink
        key="CODE"
        title="CODE"
        iconType="CODE"
        href="https://github.com/qiuyutianwen/Market-place"
      />,
      <IconTextLink
        key="WEBSITE"
        title="WEBSITE"
        iconType="WEBSITE"
        href="https://sleepy-meadow-98391.herokuapp.com/"
      />,
      <IconTextLink
        key="Web DEMO"
        title="WEB DEMO"
        iconType="DEMO"
        href="https://youtu.be/XTzPi3lRjXI"
      />,
    ]}
  />
);

export default fancyMarketProject;
