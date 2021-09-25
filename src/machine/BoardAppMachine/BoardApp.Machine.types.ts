export interface BoardAppMachineContext {
  currentBoard: number;
  boards: any[];
}

export type BoardAppMahcineEvent =
  | { type: 'ADD' }
  | { type: 'CANCEL' }
  | { type: 'CREATE' }
  | { type: 'SWITCH'; index: number }
  | { type: 'DELETE'; index: number };
