import classNames from 'classnames';
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from '../../../styles/BoardApp.module.css';

interface ListHeaderProps {
  name: string;
  onChange: (name: string) => void;
  children?: React.ReactNode;
}

const ListHeader = ({ name, onChange }: ListHeaderProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [hidden, setHidden] = useState(false);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  const handleTextArea = useCallback(() => {
    setHidden((curr) => !curr);
    if (!hidden) {
      textareaRef.current?.focus();
    }
  }, [hidden]);

  return (
    <>
      <div
        className={classNames(
          styles['list-header'],
          styles['is-menu-shown'],
          styles['u-clearfix'],
        )}
        onClick={handleTextArea}>
        <div
          className={classNames(
            styles['list-header-target'],
            hidden && 'is-hidden',
          )}></div>
        <h2 className={styles['list-header-name-assist']}>{name}</h2>
        <textarea
          className={classNames(
            styles['list-header-name'],
            styles['mod-list-name'],
          )}
          spellCheck='false'
          dir='auto'
          maxLength={512}
          style={{
            overflow: 'hidden',
            overflowWrap: 'break-word',
            height: '28px',
          }}
          ref={textareaRef}
          onBlur={() => setHidden((curr) => !curr)}
          onChange={handleChange}
          value={name}
        />
      </div>
    </>
  );
};

export default ListHeader;
