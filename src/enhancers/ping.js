export const ping = store => next => action => {
    console.log(`Event type: ${action.type}, more: ${action.payload}`);
    return next(action);
}; 