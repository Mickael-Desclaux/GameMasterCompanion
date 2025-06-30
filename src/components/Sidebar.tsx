import {Card, List, ListItem, Typography} from "@material-tailwind/react";

export default function Sidebar() {

    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Game Master Companion
                </Typography>
            </div>
            <List>
                <ListItem>
                    Chapitres
                </ListItem>
                <ListItem>
                    Personnages
                </ListItem>
                <ListItem>
                    Sorts
                </ListItem>
                <ListItem>
                    Notes
                </ListItem>
                <ListItem>
                    Paramètres
                </ListItem>
            </List>
        </Card>

    )
}