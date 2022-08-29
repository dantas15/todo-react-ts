export interface Task {
  id: string;
  title: string;
  created_at: Date;
  done_at: null | Date;
}
