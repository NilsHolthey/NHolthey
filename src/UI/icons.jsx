const svgObject = {
  delete:
    'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  checkCircle:
    'M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z',
  add: 'M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z',
  chevronLeftCircle:
    'M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z',
  dropzone:
    'M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z',
  chevronRightCircle:
    'M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z',

  calendar:
    'M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1H6M5 8H19V19H5V7M11 9V14H13V9H11M11 16V18H13V16H11Z',
  check:
    'M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z',
  alert:
    'M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z',
  home: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z',
  analytics: 'M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z',
  github:
    'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  instagram: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
  twitter:
    'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  mail: 'M495.826,232a206.644,206.644,0,0,0-18.882-78.412,227.033,227.033,0,0,0-51.61-71.261C379.708,39.555,319.571,16,256,16A240,240,0,0,0,86.294,425.706a240,240,0,0,0,337.671,1.722l-22.4-22.856A206.824,206.824,0,0,1,256,464C141.309,464,48,370.691,48,256S141.309,48,256,48c112.748,0,208,87.925,208,192v36c0,28.673-25.122,52-56,52s-56-23.327-56-52V160H320v26.751a99.988,99.988,0,1,0,12.55,132.437C347.956,343.62,376.01,360,408,360c48.523,0,88-37.682,88-84V232ZM252,328a68,68,0,1,1,68-68A68.077,68.077,0,0,1,252,328Z',
  quoteClose: 'M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z',
  quoteOpen: 'M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z',
};

function SvgIcon({
  strokeWidth,
  polyline,
  polyline2,
  polygon,
  line2,
  line,
  rect,
  variant,
  size = '24px',
  color = 'currentColor',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: size, height: size }}
      strokeWidth={strokeWidth}
      stroke="#f8f8f8"
    >
      {polyline}
      {polyline2}
      {polygon}
      {rect}
      {line2}
      <path fill={color} d={svgObject[variant]} />
      {line}
    </svg>
  );
}
export default SvgIcon;
