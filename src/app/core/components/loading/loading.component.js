import React from 'react';

export default ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    console.log(error);
    return (
      <div>
        <h2>Sorry, there was a problem loading the page.</h2>
      </div>
    );
  }

  return null;
};
