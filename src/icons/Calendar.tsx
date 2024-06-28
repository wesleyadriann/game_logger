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
      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200zm0-80h560v-400H200v400zm0-480h560v-80H200v80zm0 0v-80 80z" />
    </svg>
  );
}

export const Calendar = React.memo(Icon);
