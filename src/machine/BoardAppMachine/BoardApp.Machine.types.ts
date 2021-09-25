export interface BoardAppMachineContext {
  currentBoard: number;
  boards: any[];
}

export type BoardAppMahcineEvent =
  | { type: 'ADD' }
  | { type: 'CANCEL' }
  | { type: 'SWITCH'; index: number }
  | { type: 'DELETE'; index: number };
