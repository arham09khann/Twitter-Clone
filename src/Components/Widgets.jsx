import React from "react";
import "./Widgets.css";
import { Search } from "@mui/icons-material";
import { LinkedInEmbed } from "react-social-media-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <LinkedInEmbed
          //   url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
          //   url="https://www.linkedin.com/in/arham09/"
          url="https://www.linkedin.com/embed/feed/update/urn:li:share:7044322498129117184"
          width={400}
          height={550}
        />
        {/* <LinkedInEmbed
          //   url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
          //   url="https://www.linkedin.com/in/arham09/"
          url="https://www.linkedin.com/embed/feed/update/urn:li:share:7044322498129117184"
          width={400}
          height={550}
        /> */}
      </div>
    </div>
  );
}

export default Widgets;
