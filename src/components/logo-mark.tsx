/**
 * Vector trace of the real nolo. wordmark (from "NOLO LOGO.svg", group
 * "Opcion_1"). `gapColor` must match whatever solid background this sits
 * on: the two vertical lines are a deliberate cutout in the original file
 * (drawn in the background color) that "erases" a gap through the o's to
 * get the interlaced look, not a visual accident.
 */

export default function LogoMark({
  className = "",
  strokeColor = "#1c1cff",
  gapColor = "#fefefe",
}: {
  className?: string;
  strokeColor?: string;
  gapColor?: string;
}) {
  return (
    <svg viewBox="315 545 800 270" className={className} aria-label="nolo.">
      <path
        d="M342.63,808.39v-118.21c4.37-35.54,34.51-62.58,69.87-63.11,36.15-.55,67.55,26.76,72.03,63.11v64c.61,1.9,9.23,27.17,35.97,34.6,27.11,7.53,47.73-10.25,49.11-11.49l2.6-2.36"
        fill="none"
        stroke={strokeColor}
        strokeWidth="40"
        strokeMiterlimit="9.63"
      />
      <circle
        cx="638.76"
        cy="708.88"
        r="81.82"
        fill="none"
        stroke={strokeColor}
        strokeWidth="40"
        strokeMiterlimit="9.63"
      />
      <circle
        cx="947.76"
        cy="708.88"
        r="81.82"
        fill="none"
        stroke={strokeColor}
        strokeWidth="40"
        strokeMiterlimit="9.63"
      />
      <path
        d="M793.22,568.02v186.08c6.14,19.17,22.55,33.23,42.19,36.13,20.92,3.09,41.9-7.04,52.83-25.56"
        fill="none"
        stroke={strokeColor}
        strokeWidth="40"
        strokeMiterlimit="9.63"
      />
      <path
        d="M715.89,674.54c6.97,1.03,22.55,2.31,39.24-5.52,28.95-13.58,36.96-43.19,38.09-47.62"
        fill="none"
        stroke={strokeColor}
        strokeWidth="40"
        strokeMiterlimit="9.63"
      />
      <circle cx="1078.47" cy="783.91" r="26.81" fill={strokeColor} />
      <line
        x1="949.73"
        y1="579.6"
        x2="949.73"
        y2="831.56"
        stroke={gapColor}
        strokeWidth="30"
        strokeMiterlimit="9.63"
      />
      <line
        x1="638.76"
        y1="579.6"
        x2="638.76"
        y2="831.56"
        stroke={gapColor}
        strokeWidth="30"
        strokeMiterlimit="9.63"
      />
    </svg>
  );
}
