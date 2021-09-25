export interface BoardAppMachineContext {
  currentBoard: number;
  boards: any[];
}

export type BoardAppMahcineEvent =
  | { type: 'ADD' }
  | { type: 'SWITCH'; index: number }
  | { type: 'DELETE'; index: number }
  | { type: 'CANCEL'; index: number };
