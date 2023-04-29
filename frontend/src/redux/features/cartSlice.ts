import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/type";

interface initialCart {
  shoppingCart: User | null | undefined;
}

const initialState: initialCart = {
  shoppingCart: null,
};
