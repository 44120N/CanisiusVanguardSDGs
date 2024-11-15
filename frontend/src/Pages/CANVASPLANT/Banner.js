import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Banner(props) {
    const addThousandSeparator = (value) => {
        const parts = value.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };

    return (
        <Stack gap={{xs: 2, sm: 4}} direction={"column"} flexWrap={"wrap"} sx={{background:`linear-gradient(0deg, rgba(253,111,45,1) 0%, rgba(34,193,195,1) 100%)`}} paddingTop={"3%"}>
            <Stack className="col" id={'home'}>
                <Typography variant="h2" color={"white.light"} textAlign={"center"} fontSize={{xs: "3rem", sm: "4.5rem"}}>#CANVASPLANT</Typography>
            </Stack>
            <Stack className="col">
                <Typography variant="h4" color={"white.light"} textAlign={"center"} fontSize={{xs: "2rem", sm: "3rem"}}>JOIN THE MOVEMENT</Typography>
            </Stack>
            <Stack className="col">
                <Typography variant="p" color={"white.light"} textAlign={"center"} fontSize={{xs: "0.9rem", sm: "1rem"}}>
                    The 17 UN Sustainable Development Goals (SDGs) are a plan to create a better 
                    and more sustainable future for all. <br/>
                    Reforestation and land restoration help to benefit all 17 SDGs. 
                    Plant with us and track our progress!
                </Typography>
            </Stack>
            <Stack className="col">
                <Typography variant="h1" color={"white.light"} textAlign={"center"} fontSize={{xs: "4rem", sm: "7rem"}}>{addThousandSeparator(props.total)}</Typography>
            </Stack>
            <Stack className="col" justifyContent={"center"} direction={"row"}>
                <img src="/static/images/grass.svg" style={{width: "150%"}}/>
            </Stack>
        </Stack>
    );
}