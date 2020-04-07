import { EventEmitter } from 'events';

class GlobalDispatcher extends EventEmitter {}

export default new GlobalDispatcher();

export const BUSY_STATE_CHANGED = 'BUSY_STATE_ChANGED';