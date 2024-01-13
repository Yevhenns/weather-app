type FilteredResponse = {
  location: {
    name: string;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: string;
        condition: {
          text: string;
          icon: string;
        };
      };
    }[];
  };
};

interface ForecastDay {
  date: string;
  avgtemp: string;
  conditionText: string;
  icon: string;
}

type Forecast = ForecastDay[];

interface Theme {
  currentTheme: {
    containerBackgroundColor: string;
    textColor: string;
  };
}
