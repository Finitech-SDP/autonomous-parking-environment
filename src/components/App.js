import React from 'react';
import Canvas from './parkingLot/Canvas';
import Camera from './cameras/Camera';
import CameraDrawer from './cameras/CameraDrawer';
import ParkingLotDrawer from './parkingLot/ParkingLotDrawer';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Bar from './Bar';
import plan from '../actions/plan';
import processCommands from '../actions/processCommands';
import generateProblem from '../actions/generateProblem.js';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';

const darkTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: pink,
    type: 'dark'
  },
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parkingLotConfiguration: [
        [{ type: 'blocked' }, { type: 'parking', car: { license: 'SAG 984', status: 'AwaitingDelivery' } }, { type: 'road' }, { type: 'parking' }],
        [{ type: 'blocked' }, { type: 'parking' }, { type: 'road' }, { type: 'parking' }],
        [{ type: 'hub', car: { license: 'SAG 985', status: null } }, { type: 'road' }, { type: 'road' }, { type: 'parking', car: { license: 'SAG 986', status: 'AwaitingDelivery' } }],
        [{ type: 'hub' }, { type: 'road' }, { type: 'road' }, { type: 'parking' }],
        [{ type: 'hub', car: { license: 'SAG 988', status: 'AwaitingParking' } }, { type: 'road' }, { type: 'road' }, { type: 'parking', car: { license: 'SAG 987', status: null } }]
      ],
      carriedCar: null,
      robotGridStaticLocation: { column: 1, row: 4 },
      robotCommands: [],
      debugMode: false,
      gridSize: { rows: 5, columns: 4 },
      simulationOn: false,
      alreadyActivated: false,
      resizableCanvas: false
    };
    this.toggleDebugMode = this.toggleDebugMode.bind(this);
    this.toggleSimulation = this.toggleSimulation.bind(this);
    this.shiftPath = this.shiftPath.bind(this);
    this.removeCar = this.removeCar.bind(this);
    this.addCar = this.addCar.bind(this);
    this.changeRobotGridStaticLocation = this.changeRobotGridStaticLocation.bind(this);
  }

  removeCar(row, column) {
    // var carriedStatus = this.state.parkingLotConfiguration[row][column].car.status.includes("Park") ? "Parking in Progress" : "Delivery in Progress";
    let newParkingLotConfiguration = [...this.state.parkingLotConfiguration];
    let carriedCar = newParkingLotConfiguration[row][column].car;
    newParkingLotConfiguration[row][column] = { type: newParkingLotConfiguration[row][column].type }
    this.setState({
      carriedCar: carriedCar,
      parkingLotConfiguration: newParkingLotConfiguration,
    });
  }

  addCar(row, column) {
    // var carriedStatus = this.state.parkingLotConfiguration[row][column].car.status.includes("Park") ? "Parking in Progress" : "Delivery in Progress";
    let newParkingLotConfiguration = [...this.state.parkingLotConfiguration];
    newParkingLotConfiguration[row][column] = {
      type: newParkingLotConfiguration[row][column].type,
      car: {
        license: this.state.carriedCar.license,
        status: null // after AwaitingParking car is simply idle, after AwaitingDelivery car is awaiting owner
      }
    }
    this.setState({
      carriedCar: null,
      parkingLotConfiguration: newParkingLotConfiguration,
    });
  }

  shiftPath() {
    let newPath = [...this.state.robotCommands].shift();
    this.setState({
      robotCommands: newPath
    });
  }

  changeRobotGridStaticLocation(newColumn, newRow) {
    this.setState({
      robotGridStaticLocation: { column: newColumn, row: newRow }
    });
  }

  async toggleSimulation(forced) {
    if (this.state.simulationOn) {
      if (forced) {
        // not working
        this.setState({ robotPath: [], simulationOn: false });
      }
      else
        this.setState({ simulationOn: false, alreadyActivated: false });
    } else {
      let commands = await plan(generateProblem(
        this.state.robotGridStaticLocation,
        this.state.parkingLotConfiguration,
        null,
        null));
      if (commands !== -1) {
        this.setState({
          robotCommands: processCommands(commands, this.state.robotGridStaticLocation),
          simulationOn: true,
          alreadyActivated: false
        }, () => { this.setState({ alreadyActivated: true }) });
      }
    }
  }

  toggleDebugMode() {
    this.setState({
      debugMode: !this.state.debugMode
    });
  }

  render() {
    return (
      <Router>
        <ThemeProvider
          theme={darkTheme}
        >
          <CssBaseline />
          <Bar
            theme={darkTheme}
          />
          <Switch>
            <Route path="/overhead">
              <Camera />
              <CameraDrawer />
            </Route>
            <Route path="/">
              <Canvas
                parkingLotConfiguration={this.state.parkingLotConfiguration}
                shiftPath={this.shiftPath}
                carriedCar={this.state.carriedCar}
                resizable={this.state.resizableCanvas}
                alreadyActivated={this.state.alreadyActivated}
                removeCar={this.removeCar}
                addCar={this.addCar}
                toggleSimulation={this.toggleSimulation}
                changeRobotGridStaticLocation={this.changeRobotGridStaticLocation}
                simulationOn={this.state.simulationOn}
                gridSize={this.state.gridSize}
                robotGridStaticLocation={this.state.robotGridStaticLocation}
                robotPath={this.state.robotCommands}
                debugMode={this.state.debugMode}
              />
              <ParkingLotDrawer
                simulationOn={this.state.simulationOn}
                debugMode={this.state.debugMode}
                toggleDebugMode={this.toggleDebugMode}
                toggleSimulation={this.toggleSimulation}
              />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router >
    );
  }
}

export default App;
