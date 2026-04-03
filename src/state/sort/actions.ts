import { createAction } from "@reduxjs/toolkit";
import { SortValue } from "./types";

export const setSortByMethod = createAction<SortValue>(
  'SET_SORT_BY_METHOD'
)