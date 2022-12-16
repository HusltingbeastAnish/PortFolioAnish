import React from "react";

function Headerr() {
  return (
    <div id="wrap">
      <svg
        id="maskDemo"
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="200"
        viewBox="0 0 400 200"
      >
        <title>Invert SVG text fill color with masks</title>
        <defs>
          <mask id="theMask">
            <rect
              id="maskerH"
              width="400"
              height="200"
              x="-400"
              y="0"
              fill="#fff"
            />
            <rect
              id="maskerV"
              width="400"
              height="200"
              x="0"
              y="200"
              fill="#fff"
            />
          </mask>
        </defs>
        <rect
          id="bgFixed"
          width="400"
          height="200"
          fill="white"
          stroke="#94c356"
          stroke-width="4"
        />
        <g id="startColor" fill="#94c356" font-size="100">
          <text class="theCount" text-anchor="end" x="220" y="140">
            100
          </text>
          <text text-anchor="start" x="230" y="140">
            %
          </text>
        </g>

        <g mask="url(#theMask)">
          <rect id="bgChange" width="400" height="200" fill="#94c356" />
          <g id="end" fill="white" font-size="100">
            <text class="theCount" text-anchor="end" x="220" y="140">
              100
            </text>
            <text text-anchor="start" x="230" y="140">
              %
            </text>
          </g>
        </g>
      </svg>

      <div id="colorControls">
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
      </div>

      <button id="toggleDirection">Switch To Vertical</button>
    </div>
  );
}

export default Headerr;
