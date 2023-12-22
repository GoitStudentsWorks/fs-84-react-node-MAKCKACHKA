import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://healthy-hub-rest-api.onrender.com/api';

export const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Authorization

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', credentials);
      setAuthToken(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signin', credentials);
      setAuthToken(res.data.token);
      console.log(res.data);

      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    const url = '/auth/signout';
    // console.log('Full URL:', axios.defaults.baseURL + url);
    await axios.post(url);
    clearAuthHeader();
  } catch (error) {
    toast.error(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/forgot-password', credentials);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Recommended food

export const refreshRecommendedFood = createAsyncThunk(
  'auth/get-recommended-food',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/recommended-food');
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// User

export const getMonthlyStatistics = createAsyncThunk(
  'auth/getMonthlyStatistics',
  async (month, thunkAPI) => {
    try {
      const res = await axios.get('/user/statistics', {
        params: { month },
      });
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // // setAuthToken(state.auth.token);
      // console.log(state.auth.token);
      const res = await axios.get('/user/current');
      // console.log(res.data);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInformation = createAsyncThunk(
  'auth/updateUserInformation',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.put('/user/update', userData);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserGoal = createAsyncThunk(
  'auth/updateUserGoal',
  async (goalData, thunkAPI) => {
    try {
      const res = await axios.put('/user/goal', goalData);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserWeight = createAsyncThunk(
  'auth/addUserWeight',
  async (weightData, thunkAPI) => {
    try {
      const res = await axios.post('/user/weight', weightData);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFoodIntake = createAsyncThunk(
  'auth/addFoodIntake',
  async (foodIntakeData, thunkAPI) => {
    try {
      const res = await axios.post('/user/food-intake', foodIntakeData);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFoodIntake = createAsyncThunk(
  'auth/deleteFoodIntake',
  async (mealType, thunkAPI) => {
    try {
      const res = await axios.delete('/user/food-intake', {
        data: { mealType },
      });
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWaterIntake = createAsyncThunk(
  'auth/addWaterIntake',
  async (waterIntakeData, thunkAPI) => {
    try {
      const res = await axios.post('/user/water-intake', waterIntakeData);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWaterIntake = createAsyncThunk(
  'auth/deleteWaterIntake',
  async (_, thunkAPI) => {
    try {
      const res = await axios.delete('/user/water-intake');
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateFoodIntake = createAsyncThunk(
  'auth/updateFoodIntake',
  async ({ foodId, foodIntakeData }, thunkAPI) => {
    try {
      const res = await axios.put(
        `/user/food-intake/${foodId}`,
        foodIntakeData
      );
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserAvatar = createAsyncThunk(
  'auth/addUserAvatar',
  async (avatarData, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatarData);

      const res = await axios.post('/user/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
