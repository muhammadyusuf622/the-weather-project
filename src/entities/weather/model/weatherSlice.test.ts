import weatherReducer, { updateInfo, toggleDarkMode } from "./weatherSlice";

describe("weatherSlice reducer", () => {
  const initialState = {
    weather: [{ latitude: null, longitude: null }],
    darkMode: true,
  };

  it("initial state to'g'ri bo'lishi kerak", () => {
    expect(weatherReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("updateInfo action weather ni yangilaydi", () => {
    const newWeather = { latitude: 41.3, longitude: 69.2 };
    const nextState = weatherReducer(initialState, updateInfo(newWeather));
    expect(nextState.weather).toEqual([newWeather]);
  });

  it("toggleDarkMode action darkMode ni o'zgartiradi", () => {
    const nextState = weatherReducer(initialState, toggleDarkMode());
    expect(nextState.darkMode).toBe(false);

    const toggledAgainState = weatherReducer(nextState, toggleDarkMode());
    expect(toggledAgainState.darkMode).toBe(true);
  });
});
