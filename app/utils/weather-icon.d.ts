export default WeatherIcons;

interface IWebIcon {
  label: string;
  icon: string;
}

declare const WeatherIcons: {
  [key: string]: IWebIcon,
};
