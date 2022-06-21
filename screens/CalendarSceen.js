import React from "react";
import { Text, View, Button } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const CalendarScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
      }}
    >
      <Calendar
        displayLoadingIndicator={false} // 데이터 불러올 때 활용하면 좋을듯
        style={{
          borderWidth: 1,
          borderColor: "gray",
          width: "100%",
          backgroundColor: "white",
        }}
        markingType="multi-period"
        markedDates={{
          "2022-06-17": {
            periods: [
              { startingDay: true, endingDay: true, color: "#5f9ea0" },
              { startingDay: false, endingDay: true, color: "#ffa500" },
              { startingDay: true, endingDay: false, color: "#f0e68c" },
            ],
          },
          "2022-06-18": {
            periods: [
              { startingDay: false, endingDay: false, color: "#5f9ea0" },
              { startingDay: false, endingDay: false, color: "#ffa500" },
              { startingDay: false, endingDay: false, color: "#f0e68c" },
            ],
          },
          "2022-06-20": {
            periods: [
              { startingDay: true, endingDay: false, color: "#ffa500" },
              { color: "transparent" },
              { startingDay: false, endingDay: false, color: "#f0e68c" },
            ],
          },
        }}
      />
    </View>
  );
};

export default CalendarScreen;
