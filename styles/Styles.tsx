import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#8fe0ff",
  },
  mainText: {
    fontWeight: "700",
    fontSize: 26,
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
  border: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#75b4e3",
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
});
