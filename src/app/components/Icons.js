export const CloseButton = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="10" y1="10" x2="90" y2="90" stroke="black" strokeWidth="10" />
    <line x1="90" y1="10" x2="10" y2="90" stroke="black" strokeWidth="10" />
  </svg>
);

export const ChevronUp = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mx-1"
  >
    <path
      d="M3 9.95a.875.875 0 0 1-.615-1.498L5.88 5 2.385 1.547A.875.875 0 0 1 3.615.302L7.74 4.377a.876.876 0 0 1 0 1.246L3.615 9.698A.87.87 0 0 1 3 9.95"
      transform="rotate(-90, 5, 5)"
    />
  </svg>
);

export const ChevronDown = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mx-1"
  >
    <path
      d="M3 9.95a.875.875 0 0 1-.615-1.498L5.88 5 2.385 1.547A.875.875 0 0 1 3.615.302L7.74 4.377a.876.876 0 0 1 0 1.246L3.615 9.698A.87.87 0 0 1 3 9.95"
      transform="rotate(90, 5, 5)"
    />
  </svg>
);
