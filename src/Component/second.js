import React from 'react';

function ParentComponent() {
  return (
    <div>
      <ChildComponent message="Hello from Child 1" />
      <ChildComponent message="Greetings from Child 2" />
    </div>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

export default ParentComponent;
