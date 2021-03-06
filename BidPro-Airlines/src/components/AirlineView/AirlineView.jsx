import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

/**
 * Interactive components that displays the airline section
 */

export function AirlineView({ view: { name, path } }) {
  return (
    <div className="col-sm-12 col-md ">
      <div className="p-3">
        <h1>{name}</h1>
        <p>
          View the monthly bid data, import history &amp; download statistics.
        </p>
        <a href={path} className="view btn btn-outline-dark pr-2">
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            size="xs"
            className="iconview"
          ></FontAwesomeIcon>
          View
        </a>
      </div>
    </div>
  );
}

AirlineView.propTypes = {
  view: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }),
};
