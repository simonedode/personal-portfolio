import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

export default function ActionAreaCard(props) {
    return (
        <Card sx={{ maxWidth: 345, margin: "0 2% 0" }} >
            <CardActionArea>
                <a href={props.href}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.path}
                        alt={props.alt}
                    />
                    <CardContent sx={{height: "100%"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.body}
                        </Typography>
                    </CardContent>
                </a>
            </CardActionArea>
        </Card>
    );
}
