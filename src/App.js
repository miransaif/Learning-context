import React  from "react";
import Provider from "./Provider";
import Context from "./Context";

const AgentOne = () => {
  return <AgentTwo />
}
const AgentTwo = () => {
  return <AgentThree />
}
const AgentThree = () => {
  return <AgentFour />
}
const AgentFour = () => {
  return <Tiger />
}

const Tiger = () => {
  return(
    <Context.Consumer>
      {
        context => (
          <div>
            <h1>Agent Information</h1>
            <p>Mission Is : {context.data.mname}</p>
            <h2>Mission Status: {context.data.accept}</h2>
          <button onClick={context.isMissionAccepted}>Choose to accept</button>
          </div>
        )
      }
    </Context.Consumer>
  )
}

const App = () => {
  return(
    <div>
    <h1>Context API</h1>
    <Provider>
      <AgentOne />
    </Provider>
  </div>
  )
}

export default App;