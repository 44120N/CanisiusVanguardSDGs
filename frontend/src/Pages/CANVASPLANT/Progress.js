import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";

export default function PlantingProgress(props) {
    const addThousandSeparator = (value) => {
        const parts = value.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };

    const value = parseInt(props.trees)*100/parseInt(props.total);
    return (
        <Stack gap={3} direction={"column"} flexWrap={"wrap"} padding={'3%'}>
            <Stack className="col">
                <Typography 
                    variant="h2" color={"primary"} 
                    fontSize={{xs: "2rem", sm: "3.75rem"}} 
                    textAlign={"center"}
                >
                    PLANTING PROGRESS
                </Typography>
            </Stack>
            <Stack className="row" direction={"column"}>
                <Stack className="col" direction={"row"} sx={{width: '100%'}} alignItems={'center'} gap={2}>
                    <Box sx={{width: '100%'}}>
                        <LinearProgress variant="determinate" value={value} sx={{height: '2vh', borderRadius:'32px'}} color={"secondary"}/>
                    </Box>
                    <Typography variant="h5" color={"primary"}>{value}%</Typography>
                </Stack>
                <Stack className="col">
                    <Typography variant="h4" fontSize={{xs: "1.5rem", sm: "2.125rem"}} color={"primary"}>{addThousandSeparator(props.trees)} tree(s) out of {addThousandSeparator(props.total)} trees</Typography>
                </Stack>
            </Stack>
            {/* <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
                <Stack className="col">
                    <Typography variant="h4" color={"secondary"} fontSize={{xs: "1.5rem", sm: "2.125rem"}} textAlign={"center"}>OUR SCHEDULE</Typography>
                </Stack>
            </Stack> */}
        </Stack>
    );
}