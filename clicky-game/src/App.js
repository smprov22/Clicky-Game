import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import WhichWeasley from "./components/WhichWeasley";
import weasleys from "./weasleys.json";

function App() {
  return (
    <Wrapper>
      <Title>Which Weasley??</Title>
      <WhichWeasley
        image={weasleys[0].image}
      />
      <WhichWeasley
        image={weasleys[1].image}
      />
      <WhichWeasley
        image={weasleys[2].image}
      />
      <WhichWeasley
        image={weasleys[3].image}
      />
      <WhichWeasley
        image={weasleys[4].image}
      />
      <WhichWeasley
        image={weasleys[5].image}
      />
      <WhichWeasley
        image={weasleys[6].image}
      />
      <WhichWeasley
        image={weasleys[7].image}
      />
      <WhichWeasley
        image={weasleys[8].image}
      />
      
    </Wrapper>
  );
}

export default App;
