import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { title } from "process";

const dispatch: AppDispatch = useDispatch()
const tokenList = useSelector((state: RootState) => state.token.tokenList);
const tokenSet = useSelector((state: RootState) => state.token.tokenSet);

const updateTokenList = (newTokenList) => {
    dispatch(setTokenList(newTokenList));
}

const updateTokenDataSet = (newTokenSet) => {
    dispatch(setTokenDataset(newTokenSet));
};

const fetchDataAsync = async () => {
    try {
        const data = await fetchDataAsync();
        if (data) {
            updateTokenList(data);
        }
    }catch (error) {
        console.error("Error fetching data:", error);
    }
};

<Row 
title = {dataTitle}
dataList = {tokenList}
dataTypes = {dataTypes}
dataset = {tokenSet}

/>

const tokenSlices = createSlice({
    name: "token",
    initialState: { 
        tokenList: {}, tokenSet: {}
    },
    reducers: {
        setTokenList: (state, action) => {
            state.tokenList = action.payload;
        },
        setTokenDataset: (state, action) => {
            state.tokenSet = action.payload;
        },
    },
    
})


export const { setTokenList, setTokenDataset } = tokenSlices.actions;
export default tokenSlices.reducer;