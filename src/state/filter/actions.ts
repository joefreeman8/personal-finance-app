import { createAction } from "@reduxjs/toolkit";

import { CategoryValue } from "./types";


export const setCategory = createAction<CategoryValue>(
  'SET_CATEGORY'
)