/* eslint-disable jsx-a11y/control-has-associated-label */
import cn from 'classnames';

interface NotificationProps {
  onCleanErrorMessage: () => void,
  hasError: boolean,
  errorMessage: string,
}

export const Notification: React.FC<NotificationProps> = ({
  onCleanErrorMessage,
  hasError,
  errorMessage,
}) => {
  return (
    <div
      className={cn('notification is-danger is-light has-text-weight-normal', {
        hidden: !hasError,
      })}
    >

      <button
        type="button"
        className="delete"
        onClick={onCleanErrorMessage}
      />

      {/* show only one message at a time */}
      {errorMessage}
      {/* Unable to add a todo
      <br />
      Unable to delete a todo
      <br />
      Unable to update a todo */}
    </div>
  );
};
