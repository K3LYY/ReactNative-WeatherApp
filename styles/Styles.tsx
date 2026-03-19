import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mainText: {
    fontWeight: "500",
    fontSize: 28,
  },
  lightTextColor: {
    color: "#000000",
  },
  darkTextColor: {
    color: "#ffffff",
  },
  lightContainerColor: {
    backgroundColor: "#8fe0ff",
  },
  darkContainerColor: {
    backgroundColor: "#2b235a",
  },
  secondLightContainerColor: {
    backgroundColor: "#75b4e3",
  },
  secondDarkContainerColor: {
    backgroundColor: "#54416d",
  },
  text: {
    fontWeight: "500",
    fontSize: 20,
  },
  smallText: {
    fontSize: 16,
  },
  color: {
    color: "#ff0",
  },
  lightBorder: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 4,
  },
  darkBorder: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 4,
  },
  inputItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacingInInput: {
    marginRight: 10,
  },
  spacing: {
    padding: 5,
    margin: 5,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  bigLogo: {
    width: 200,
    height: 200,
  },
});
