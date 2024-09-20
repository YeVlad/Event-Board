export const selectParticipants = (state) => state.participants.items;
export const selectAreParticipantLoading = (state) =>
  state.participants.isLoading;
export const selectErrorParticipant = (state) => state.participants.error;
