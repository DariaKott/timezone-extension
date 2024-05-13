export default function MakeHomeIcon({
  className,
  onClick,
  ...props
}: {
  className: string;
  onClick: () => void;
} & React.SVGProps<SVGSVGElement>) {
  return (
    // <?xml version="1.0" encoding="iso-8859-1"?>
    // <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      //   style="enable-background:new 0 0 512 512;"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M475.425,200.225L262.092,4.669c-6.951-6.359-17.641-6.204-24.397,0.35L36.213,200.574
			c-3.449,3.348-5.399,7.953-5.399,12.758v280.889c0,9.819,7.958,17.778,17.778,17.778h148.148c9.819,0,17.778-7.959,17.778-17.778
			v-130.37h82.963v130.37c0,9.819,7.958,17.778,17.778,17.778h148.148c9.819,0,17.778-7.953,17.778-17.778V213.333
			C481.185,208.349,479.099,203.597,475.425,200.225z M445.629,476.444H333.037v-130.37c0-9.819-7.959-17.778-17.778-17.778H196.741
			c-9.819,0-17.778,7.959-17.778,17.778v130.37H66.37V220.853L250.424,42.216l195.206,178.939V476.444z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}