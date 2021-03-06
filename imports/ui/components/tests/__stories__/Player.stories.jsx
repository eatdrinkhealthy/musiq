// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import { text, boolean } from "@kadira/storybook-addon-knobs";
import ReactPlayer from "react-player";
import Player from "../../Player";

storiesOf("Components", module)
  .add("ReactPlayer (au natural) - with controls", (): React$Element<*> => (
    <ReactPlayer
      url={text("URL", "https://www.youtube.com/watch?v=uUcEGOLfUTE")}
      playing={boolean("Playing", false)}
      controls
    />
  ))
  .add("ReactPlayer (au natural) - without controls", (): React$Element<*> => (
    <ReactPlayer
      url={text("URL", "https://www.youtube.com/watch?v=uUcEGOLfUTE")}
      playing={boolean("Playing", false)}
      controls={false}
    />
  ))
.add("Player", (): React$Element<*> => (
  <Player nowPlayingUrl="https://www.youtube.com/watch?v=uUcEGOLfUTE" />
));
