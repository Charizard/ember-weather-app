export default WeatherIcons;

interface WebIcon {
  label: string;
  icon: string;
}

declare const WeatherIcons: {
  [key: string]: WebIcon,
};
