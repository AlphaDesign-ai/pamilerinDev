import { FC } from 'react';

const Button: FC = ({ children }) => (
  <button type="button" className="user-button">
    <span>{children}</span>
    <span className="user-button__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.006"
        height="10.84"
        viewBox="0 0 17.006 10.84"
      >
        <g transform="translate(17.214 24.42) rotate(180)">
          <g transform="translate(1.208 14.994)">
            <line
              x1="15"
              transform="translate(0.006 4.012)"
              fill="none"
              stroke="#8d8d8d"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M5.72,12,1.714,16.006,5.72,20.012"
              transform="translate(-1.714 -12)"
              fill="none"
              stroke="#8d8d8d"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </span>
  </button>
);

const TopNavigateButton: FC = () => {
  return (
    <button
      className="navigate-button"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="207.978"
          height="282.497"
          viewBox="0 0 207.978 282.497"
        >
          <g transform="translate(221.574 -0.208) rotate(90)">
            <g transform="translate(1.208 14.994)">
              <line
                x1="280.345"
                transform="translate(0.152 102.591)"
                fill="none"
                stroke="#393939"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M76.711,12l-75,102.591,75,102.591"
                transform="translate(-1.714 -12)"
                fill="none"
                stroke="#393939"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </g>
        </svg>
      </span>
      <span>Back to top</span>
    </button>
  );
};

export { TopNavigateButton };
export default Button;
