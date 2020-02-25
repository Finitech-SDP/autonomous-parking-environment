import React from "react";
import { Rect, Group, Text } from "react-konva";

function DebugTile({ mapTile, cars, gridCellSize, debugName }) {

    var prettyCarStatus = "";
    for (var i = 0; i < cars.length; i++) {
        if (cars[i].location.row === mapTile.y && cars[i].location.column === mapTile.x) {
            switch (cars[i].status) {
                case "AwaitingParking":
                    prettyCarStatus = "Status: Awaiting Parking";
                    break;
                case "AwaitingDelivery":
                    prettyCarStatus = "Status: Awaiting Delivery";
                    break;
                case null:
                    if (mapTile.type === "parking")
                        prettyCarStatus = "Status: Idle";
                    else if (mapTile.type === "hub")
                        prettyCarStatus = "Status: Awaiting Owner";
                    break;
                default:
                    break;
            }
            break;
        }
    }

    // const color = 'rgba(220, 220, 220, 0.8)'
    // const statusButton = {
    //     position: 'absolute',
    //     background: color,
    //     top: mapTile.y * gridCellSize.height + gridCellSize.height * 1.1,
    //     left: mapTile.x * gridCellSize.width + gridCellSize.width / 13,
    //     width: gridCellSize.width * 0.95,
    //     height: gridCellSize.height / 4
    // }
    // const typeButton = {
    //     position: 'absolute',
    //     background: color,
    //     top: mapTile.y * gridCellSize.height + gridCellSize.height / 2,
    //     left: mapTile.x * gridCellSize.width + gridCellSize.width / 13,
    //     width: gridCellSize.width * 0.95,
    //     height: gridCellSize.height / 4
    // }

    // TODO: replace portal with rect
    // if (mapTile.type === "hub")
    //     portalButtonGroup = <Portal>
    //         <Button
    //             variant="light"
    //             style={typeButton}
    //         >
    //             {debugName}
    //         </Button>
    //         <Button
    //             variant="light"
    //             style={statusButton}
    //         >
    //             Available
    //         </Button>
    //     </Portal>;
    // else if (mapTile.type === "parking")
    //     portalButtonGroup = <Portal>
    //         <Button
    //             variant="light"
    //             style={typeButton}
    //         >
    //             {debugName}
    //         </Button>
    //         <Button
    //             variant="light"
    //             style={statusButton}
    //         >
    //             Available parking
    //         </Button>
    //     </Portal>;
    // else
    //     portalButtonGroup = <Portal>
    //         <Button
    //             variant="light"
    //             style={typeButton}
    //         >
    //             {debugName}
    //         </Button>
    //     </Portal>;

    return (
        <Group>
            <Rect
                x={mapTile.x * gridCellSize.width}
                y={mapTile.y * gridCellSize.height}
                width={gridCellSize.width}
                height={gridCellSize.height}
                fill={"rgba(255, 255, 255, 0.3)"}
                shadowBlur={5}
                stroke={"black"}
                strokeWidth={3}
            />
            {/* {portalButtonGroup} */}
            <Text
                x={mapTile.x * gridCellSize.width + gridCellSize.width / 15}
                y={mapTile.y * gridCellSize.height + gridCellSize.height / 12}
                text={"R" + mapTile.y + "C" + mapTile.x + " (" + debugName + ")"}
                fontSize={20}
            />
            <Text
                x={mapTile.x * gridCellSize.width + gridCellSize.width / 15}
                y={mapTile.y * gridCellSize.height + gridCellSize.height / 1.25}
                text={prettyCarStatus}
                fontSize={20}
            />
        </Group>
    );
}

export default DebugTile;
