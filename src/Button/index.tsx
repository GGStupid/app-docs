import React from 'react';

interface IButtonProps {
  /** 文字 */
  text: string;
  /** class名 */
  className?: string;
  /** 点击事件 */
  onClick?: () => void;
}

export default ({ className, text, onClick }: IButtonProps) => (
  <button
    className={className}
    onClick={onClick}
    onAbort={onClick}
    onMouseUp={onClick}
  >
    {text}
  </button>
);
