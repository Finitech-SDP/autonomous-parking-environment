import React, { createRef } from "react";
import { Image, Arrow, Layer } from "react-konva";
import RobotImage from '../../../assets/monitor_icons/robot.png';
import CarImage from '../../../assets/monitor_icons/racecar.png';

class Robot extends React.Component {
    constructor() {
        super()
        this.simulatorRobotImageRef = createRef();
        this.parkingRobotImageRef = createRef();

        this.state = {
            activePath: [],
            globalPath: [],
            localPaths: []
        }
    }

    componentDidMount() {
        const carImage = new window.Image();
        carImage.src = CarImage;
        carImage.onload = () => {
            this.setState({
                carImage: carImage
            });
        };
        const robotImage = new window.Image();
        robotImage.src = RobotImage;
        robotImage.onload = () => {
            this.setState({
                robotImage: robotImage
            });
        };

        this.updatePaths = this.updatePaths.bind(this);
        this.executeSimulation = this.executeSimulation.bind(this);
    }

    setScale = (x, y) => {
        this.simulatorRobotImageRef.current.to({
            scaleX: x,
            scaleY: y,
            duration: 0.1
        });
    };

    propToGrid = (robotCanvasLocation) => {
        var robotGridLocation = this.props.fromCanvasToGrid(robotCanvasLocation);

        if ((robotGridLocation.col >= 0 && robotGridLocation.col < this.props.configuration[0].length) &&
            (robotGridLocation.row >= 0 && robotGridLocation.row < this.props.configuration.length) &&
            (this.props.configuration[robotGridLocation.row][robotGridLocation.col].car === null ||
                this.props.configuration[robotGridLocation.row][robotGridLocation.col].car === undefined ||
                this.props.carriedCar === null)) {
            this.props.changeRobotGridLocation({ newColumn: robotGridLocation.col, newRow: robotGridLocation.row });
            var canvasLocation = this.props.fromGridToCanvas({ col: robotGridLocation.col, row: robotGridLocation.row });
        } else {
            canvasLocation = this.props.cavasRobotLocation;
        }

        this.simulatorRobotImageRef.current.to({
            x: canvasLocation.x,
            y: canvasLocation.y,
            duration: 0.1
        });
    };

    updatePaths = () => {
        let newGlobalPath = [];
        for (var i = 0; i < this.props.robotCommands.length; i++) {
            let xCoord = this.props.parkingLotOffset.x + this.props.robotCommands[i].col * this.props.gridCellSize.width + this.props.gridCellSize.width / 2;
            let yCoord = this.props.parkingLotOffset.y + this.props.robotCommands[i].row * this.props.gridCellSize.height + this.props.gridCellSize.height / 2;
            newGlobalPath.push(xCoord);
            newGlobalPath.push(yCoord);
        }

        let localPathsArray = [];
        let newPathStop = [];
        for (i = 0; i < this.props.robotCommands.length; i++) {
            let xCoord = this.props.parkingLotOffset.x + this.props.robotCommands[i].col * this.props.gridCellSize.width + this.props.gridCellSize.width / 2;
            let yCoord = this.props.parkingLotOffset.y + this.props.robotCommands[i].row * this.props.gridCellSize.height + this.props.gridCellSize.height / 2;
            newPathStop.push(xCoord);
            newPathStop.push(yCoord);
            if (this.props.robotCommands[i].pickupCar || this.props.robotCommands[i].dropCar) {
                localPathsArray.push(newPathStop);
                newPathStop = [];
                let xCoord = this.props.parkingLotOffset.x + this.props.robotCommands[i].col * this.props.gridCellSize.width + this.props.gridCellSize.width / 2;
                let yCoord = this.props.parkingLotOffset.y + this.props.robotCommands[i].row * this.props.gridCellSize.height + this.props.gridCellSize.height / 2;
                newPathStop.push(xCoord);
                newPathStop.push(yCoord);
            }
        }

        this.setState({
            localPaths: localPathsArray,
            globalPath: newGlobalPath,
            activePath: this.props.globalPlanView ? newGlobalPath : localPathsArray[this.props.simulatorLocalPathsProgress]
        });
    }

    simulationTimer = null;
    executeSimulation(index, givenCommmands) {
        if (givenCommmands[index - 1].pickupCar !== undefined)
            this.props.liftCarFromTile({
                row: givenCommmands[index - 1].row,
                col: givenCommmands[index - 1].col
            },
                this.props.simulatorInterface
            );
        else if (givenCommmands[index - 1].dropCar !== undefined)
            this.props.dropCarOnTile({
                row: givenCommmands[index - 1].row,
                col: givenCommmands[index - 1].col
            },
                this.props.simulatorInterface
            );

        if (index !== givenCommmands.length) {
            this.simulatorRobotImageRef.current.to({
                x: this.props.fromGridToCanvas(givenCommmands[index]).x,
                y: this.props.fromGridToCanvas(givenCommmands[index]).y,
                duration: 1
            });
        }

        index += 1;
        if (index > givenCommmands.length || !this.props.simulationOn) {
            this.props.toggleSimulation("Executed plan, entering standby");
            return;
        }
        this.simulationTimer = setTimeout(this.executeSimulation.bind({}, index, givenCommmands), 1050);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.simulatorLocalPathsProgress !== this.props.simulatorLocalPathsProgress && !this.props.globalPlanView) {
            this.setState({
                activePath: this.state.localPaths[this.props.simulatorLocalPathsProgress]
            });
        }

        if (prevProps.gridCellSize !== this.props.gridCellSize) {
            this.updatePaths();
        }

        if (prevProps.globalPlanView !== this.props.globalPlanView) {
            this.setState({
                activePath: this.props.globalPlanView ? this.state.globalPath : this.state.localPaths[this.props.simulatorLocalPathsProgress]
            });
        }

        if (prevProps.simulationOn !== this.props.simulationOn) {
            if (this.props.simulationOn) {
                this.updatePaths();
                this.executeSimulation(1, this.props.robotCommands);
            } else {
                clearTimeout(this.simulationTimer);
                this.updatePaths();
                this.propToGrid({
                    x: this.simulatorRobotImageRef.current.attrs.x,
                    y: this.simulatorRobotImageRef.current.attrs.y
                });
            }
        }
    }

    render() {
        return (
            <Layer>
                {/* Robot path */}
                < Arrow
                    points={this.state.activePath}
                    shadowBlur={0.5}
                    stroke={"black"}
                    strokeWidth={0.7}
                />
                {/* Simulator robot is asyncronous, hence two robot images! */}
                <Image
                    ref={this.simulatorRobotImageRef}
                    x={this.props.cavasRobotLocation.x}
                    y={this.props.cavasRobotLocation.y}
                    width={this.props.gridCellSize.width}
                    height={this.props.gridCellSize.height}
                    image={this.props.carriedCar !== null ? this.state.carImage : this.state.robotImage}
                    shadowBlur={5}
                    draggable={!this.props.simulationOn}
                    visible={this.props.simulatorInterface}
                    onClick={() => { this.props.changeRobotIsCarrying() }}
                    onDragStart={() => { this.setScale(1.2, 1.2) }}
                    onDragEnd={() => {
                        this.setScale(1, 1);
                        this.propToGrid(this.simulatorRobotImageRef.current._lastPos);
                    }}
                />
                <Image
                    ref={this.parkingRobotImageRef}
                    x={this.props.cavasRobotLocation.x}
                    y={this.props.cavasRobotLocation.y}
                    width={this.props.gridCellSize.width}
                    height={this.props.gridCellSize.height}
                    visible={!this.props.simulatorInterface}
                    listening={false}
                    image={this.props.carriedCar !== null ? this.state.carImage : this.state.robotImage}
                    shadowBlur={5}
                />
            </Layer>
        );
    }
}

export default Robot;