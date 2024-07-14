import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import apiServices from '../services/requestHandler';
const initialState = {
  loading: false,
  getClaimsListData: [],
  getuserLoading: false,
  getclaimDataId: [],modalToggle:false,userLoader:false,userData:[]
};

export const userlist: any = createAsyncThunk(
  'userlist',
  async (data, thunkAPI) => {
    const res = await apiServices.userlist();

    console.log(res, 'res');

    try {
      if (res?.status == 200) {
        return res?.data
      }
    } catch (error) {
      const err: any = thunkAPI.rejectWithValue(error);
      if (err?.payload?.status !== 200) {
        // SnackbarUtils.error(err?.payload?.data?.message, false);
      }
    }
  },
);
export const userLogin: any = createAsyncThunk(
  'userLogin',
  async (data, thunkAPI) => {
    const res = await apiServices.userLogin(data);

    console.log(res, 'res');

    try {
      if (res?.status == 200) {
        return res?.data
      }
    } catch (error) {
      const err: any = thunkAPI.rejectWithValue(error);
      if (err?.payload?.status !== 200) {
        
      }
    }
  },
);
const userSlice = createSlice({
  name: 'User Slice',
  initialState: initialState,
  reducers: {
    toggleEditClaim: (state: any, { payload }) => {
      state.isEdit = payload;
    },
    modalFuc:(state:any,{ payload }:any)=>{
state.modalToggle=payload
    },
  },
  extraReducers: {
   
    [userLogin.pending]: (state: any) => {
      state.userLoader = true;
    },
    [userLogin.fulfilled]: (state: any, { payload }: any) => {
      state.userLoader = false;
      state.userData = payload;
      console.log(payload, 'payload');
    },
    [userLogin.rejected]: (state: any) => {
      state.userLoader = false;
    },
    [userlist.pending]: (state: any) => {
      state.getuserLoading = true;
    },
    [userlist.fulfilled]: (state: any, { payload }: any) => {
      state.getuserLoading = false;
      state.getclaimDataId = payload;
      console.log(payload, 'payload');
    },
    [userlist.rejected]: (state: any) => {
      state.getuserLoading = false;
    },
  },
});
export const {modalFuc}:any=userSlice.actions
export const userReducer = userSlice.reducer;
