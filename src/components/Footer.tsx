import { Filter } from './Filter';

interface FooterProps {
  filter: string,
  filterAll: () => void,
  filterActive: () => void,
  filterCompleted: () => void,
  hasCompleted: boolean,
  todosLength: number,
}

export const Footer: React.FC<FooterProps> = ({
  filter,
  filterAll,
  filterActive,
  filterCompleted,
  hasCompleted,
  todosLength,
}) => {
  return (
    todosLength > 0 ? (
      <footer className="todoapp__footer">
        <span className="todo-count">
          {`${todosLength} items left`}
        </span>

        <Filter
          filter={filter}
          filterActive={filterActive}
          filterAll={filterAll}
          filterCompleted={filterCompleted}
        />

        <button
          type="button"
          className="todoapp__clear-completed"
          style={{ visibility: hasCompleted ? 'visible' : 'hidden' }}
        >
          Clear completed
        </button>
      </footer>
    )
      : null
  );
};
