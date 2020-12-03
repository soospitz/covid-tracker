import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({
    confirmed: "",
    recovered: "",
    deaths: "",
  });
  const [chart, setChart] = useState([]);
  const [countryName, setCountryName] = useState([]);
  const [CountryOption, setCountryOption] = useState([]);

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api")
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        let datas = {
          confirmed: body.confirmed.value,
          recovered: body.recovered.value,
          deaths: body.deaths.value,
        };
        setData(datas);
      });
  }, []);

  const handleClick = (event, value) => {
    setInput(value.name);

    fetch(`https://covid19.mathdro.id/api/countries/${value.name}`)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        let dataCountry = {
          confirmed: body.confirmed.value,
          recovered: body.recovered.value,
          deaths: body.deaths.value,
        };
        setData(dataCountry);
        console.log(dataCountry, "datas");
      });
    fetch(`https://covid19.mathdro.id/api/countries/${value.name}/confirmed`)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        let newCountryName = body[0].countryRegion;
        setCountryName(newCountryName);
      });
  };

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/daily")
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        let chartData = body.map((data) => ({
          reportDate: data.reportDate,
          confirmed: data.totalConfirmed,
          recovered: data.recovered.total,
          deaths: data.deaths.total,
        }));
        setChart(chartData);
        console.log(chartData, "key.totalConfirmed");
      });
  }, []);

  //country options
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/countries/")
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        let countryNameList = body.countries;
        setCountryOption(countryNameList);
        console.log(countryNameList, "countryNameList");
      });
  }, []);
  //global chart 
  const globalChart = {
    labels: chart.map((data) => {
      return data.reportDate;
    }),
    datasets: [
      {
        label: "Confirmed",
        data: chart.map((data) => {
          return data.confirmed;
        }),
        fill: true,
        backgroundColor: "rgba(225,225,225,0.2)",
        borderColor: "#fff",
      },
      {
        label: "Deaths",
        data: chart.map((data) => {
          return data.deaths;
        }),
        fill: false,
        borderColor: "#fc6978",
      },
    ],
  };
  //country data chart
  const countryChart = {
    labels: ["Confirmed", "Deaths", "Recovered"],
    datasets: [
      {
        label: ["Confirmed", "Deaths", "Recovered"],
        data: [data.confirmed, data.deaths, data.recovered],
        backgroundColor: ["#ffffff", "#fc6978", "#69fca4"],
      },
    ],
  };
  //style for autocomplete
  const useStyles = makeStyles({
    option: {
      fontSize: 15,
      "& > span": {
        marginRight: 10,
        fontSize: 18,
      },
    },
    floatingLabelFocusStyle: {
      color: "#d5d8dc",
    },
    inputRoot: {
      color: "white",
      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: "2px",
        borderColor: "white",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#96d1ea",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "& MuiOutlinedInput-root": {
        borderColor: "white",
        color: "white",
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      <div className="top">
        <h1>Covid 19 Tracker</h1>
        <div className="search">
          <Autocomplete
            id="country-select-demo"
            style={{ width: 600 }}
            options={CountryOption}
            onChange={handleClick}
            classes={{
              option: classes.option,
              inputRoot: classes.inputRoot,
            }}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
              <React.Fragment>
                {option.name} ({option.iso2})
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                color="#fff"
                variant="outlined"
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle,
                }}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="country">
            {input === "" ? <h2>Global</h2> : <h2>{countryName}</h2>}
          </div>
          <div className="confirmed">
            <h5>Total Confirmed</h5>
            <h1>{new Intl.NumberFormat().format(data.confirmed)}</h1>
          </div>
          <div className="death">
            <h5>Total Deaths</h5>
            <h1>{new Intl.NumberFormat().format(data.deaths)}</h1>
          </div>
          <div className="recovered">
            <h5>Total Recovered</h5>
            <h1>{new Intl.NumberFormat().format(data.recovered)}</h1>
          </div>
        </div>
        <div className="right" id="line">
          {input === "" ? (
            <Line data={globalChart} />
          ) : (
            <Bar data={countryChart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
