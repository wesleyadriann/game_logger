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
      <path d="M80-160v-160h160v160H80zm240 0v-160h560v160H320zM80-400v-160h160v160H80zm240 0v-160h560v160H320zM80-640v-160h160v160H80zm240 0v-160h560v160H320z" />
    </svg>
  );
}

export const Lists = React.memo(Icon);
