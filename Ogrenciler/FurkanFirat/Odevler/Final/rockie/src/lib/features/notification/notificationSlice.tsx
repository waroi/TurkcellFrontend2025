import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NotificationType = 'success' | 'critical' | 'highlight';

interface NotificationState {
  message: string;
  type: NotificationType;
  visible: boolean;
}

const initialState: NotificationState = {
  message: '',
  type: 'success',
  visible: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<{ message: string; type?: NotificationType }>
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type || 'success';
      state.visible = true;
    },
    hideNotification: (state) => {
      state.message = '';
      state.visible = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
