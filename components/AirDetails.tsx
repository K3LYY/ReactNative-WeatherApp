import { View, Text } from "react-native";

interface IAirDetails {
  SO2: number;
  NO2: number;
  PM10: number;
  PM25: number;
  O3: number;
  CO: number;
  system: string;
}

const AirDetails = ({ SO2, NO2, PM10, PM25, O3, CO, system }: IAirDetails) => {
  const checkPollution = (unit: number, type: string) => {
    switch (type) {
      case "SO2": {
        if (unit < 20) {
          return "bg-green-500";
        } else if (unit >= 20 && unit < 80) {
          return "bg-lime-300";
        } else if (unit >= 80 && unit < 250) {
          return "bg-amber-300";
        } else if (unit >= 250 && unit < 350) {
          return "bg-orange-500";
        } else {
          return "bg-red-600";
        }
      }
      case "NO2": {
        if (unit < 40) {
          return "bg-green-500";
        } else if (unit >= 40 && unit < 70) {
          return "bg-lime-300";
        } else if (unit >= 70 && unit < 150) {
          return "bg-amber-300";
        } else if (unit >= 150 && unit < 200) {
          return "bg-orange-500";
        } else {
          return "bg-red-600";
        }
      }
      case "PM10": {
        if (unit < 20) {
          return "bg-green-500";
        } else if (unit >= 20 && unit < 50) {
          return "bg-lime-300";
        } else if (unit >= 50 && unit < 100) {
          return "bg-amber-300";
        } else if (unit >= 100 && unit < 200) {
          return "bg-orange-500";
        } else {
          return "bg-red-600";
        }
      }
      case "PM25": {
        if (unit < 10) {
          return "bg-green-500";
        } else if (unit >= 10 && unit < 25) {
          return "bg-lime-300";
        } else if (unit >= 25 && unit < 50) {
          return "bg-amber-300";
        } else if (unit >= 50 && unit < 75) {
          return "bg-orange-500";
        } else {
          return "bg-red-600";
        }
      }
      case "O3": {
        if (unit < 60) {
          return "bg-green-500";
        } else if (unit >= 60 && unit < 100) {
          return "bg-lime-300";
        } else if (unit >= 100 && unit < 140) {
          return "bg-amber-300";
        } else if (unit >= 140 && unit < 180) {
          return "bg-orange-500";
        } else {
          return "bg-red-600";
        }
      }
      case "CO": {
        if (unit < 4400) {
          return "bg-green-500";
        } else if (unit >= 4400 && unit < 9400) {
          return "bg-lime-300";
        } else if (unit >= 9400 && unit < 12400) {
          return "bg-amber-300";
        } else if (unit >= 12400 && unit < 15400) {
          return "bg-orange-500";
        } else {
          return "bg-red-600";
        }
      }
    }
  };

  return (
    <div className="place-content-evenly justify-center flex-wrap grid grid-cols-3 grid-rows-2">
      <div className="detal">
        <span className={`${checkPollution(SO2, "SO2")}`}>{SO2}</span>
        <br /> {system} SO2
      </div>
      <div className="detal">
        <span className={`${checkPollution(NO2, "NO2")}`}>{NO2}</span>
        <br /> {system} NO2
      </div>
      <div className="detal">
        <span className={`${checkPollution(PM10, "PM10")}`}>{PM10}</span>
        <br /> {system} PM10
      </div>
      <div className="detal">
        <span className={`${checkPollution(PM25, "PM25")}`}>{PM25}</span>
        <br /> {system} PM2,5
      </div>
      <div className="detal">
        <span className={`${checkPollution(O3, "O3")}`}>{O3}</span>
        <br /> {system} O3
      </div>
      <div className="detal">
        <span className={checkPollution(CO, "CO")}>{CO}</span>
        <br /> {system} CO
      </div>
    </div>
  );
};

export default AirDetails;
