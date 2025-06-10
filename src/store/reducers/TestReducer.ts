import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface ResultsTests {
    results: ResultTestState[]
}
export interface ResultTestState {
    id: number | null,
    result: string
}

const initialState: ResultsTests = {
    results: []
}

export const resultsTest = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setResultTest: (state, action: PayloadAction<ResultTestState>) =>{
            const existingResultIndex = state.results.findIndex(
                (test) => test.id === action.payload.id
            );
            if (existingResultIndex >= 0) {
                const updatedResults = state.results.map((result, index) =>
                    index === existingResultIndex
                        ? { ...result, result: action.payload.result }
                        : result
                );
                return { ...state, results: updatedResults };
            } else {
                return {
                    ...state,
                    results: [...state.results, { id: action.payload.id, result: action.payload.result }],
                };
            }
        },


    },
})

export const { setResultTest } = resultsTest.actions

export default resultsTest.reducer