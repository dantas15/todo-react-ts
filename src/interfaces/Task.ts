export interface Task {
  id: string;
  title: string;
  created_at: number;
  done_at?: number;
}
