"use client";

export function Button(): JSX.Element {
  return (
    <button
      className="bg-blue-200 px-3 py-2"
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert is being used for demo purposes only
        alert("booped");
      }}
      type="button"
    >
      Boop
    </button>
  );
}
