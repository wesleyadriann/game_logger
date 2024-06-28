import * as React from "react";

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      viewBox="0 -960 960 960"
      width="1em"
      fill="#e8eaed"
      {...props}
    >
      <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80zm300-440zm86 160h134v-240H510l-16-80H280v240h290l16 80z" />
    </svg>
  );
}

export const Flag = React.memo(Icon);
