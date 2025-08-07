import type { RootState } from "../../../app/store";

export const selectorWeather = (state: RootState) => state.weather.weather;