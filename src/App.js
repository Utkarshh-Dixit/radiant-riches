import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Heading from "./Components/Heading/Heading";
import FourComponents from "./Components/FourComponents/FourComponents";
import FiveLinks from "./Components/FiveLinks/FiveLinks";
import CustomComponent from "./Components/CustomComponent/CustomComponent";
import TripleComponent from "./Components/TripleComponent/TripleComponent";
import faltu from "./Components/faltu.jpeg";
import faltuu from "./Components/faltuu.jpeg";

function App() {
  return (
    <div>
            <Navbar />
            <Heading text="Best Website Builders" />
            <FourComponents />
            <FiveLinks />
            <CustomComponent faltuim={faltu} paragraph={"Analog for signals that have not been digitized as in most century radio telephone and television systems This involves linear electronic circuits as well as nonlinear ones"} description={"this is description"} rating={8.6} stars={"🌟🌟🌟"}/>
            <CustomComponent faltuim={faltuu} paragraph={"It’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article"} description={"this is description"} rating={10} stars={"🌟🌟🌟🌟🌟"}/>
            <CustomComponent faltuim={faltu} paragraph={"As designers, we are frequently and incorrectly reminded that our job is to “make things pretty.” We are indeed designers — not artists — and there is no place for formalism in good design. Web design has a function, and that function is to communicate the message for which the Web page was conceived. The medium is not the message."} description={"this is description"} rating={9.2} stars={"🌟🌟🌟🌟"}/>
            <CustomComponent faltuim={faltuu} paragraph={"As a young industry that champions innovation and rates its practitioners based on their ability to apprehend (sorry, “grok”) the continual emergence of new technologies, frameworks, protocols and data models, we are not particularly familiar with tradition. However, the practice of arranging type for optimal pleasure and comfort is a centuries-old discipline. As long ago as 1927, the "} rating={4.1} stars={"🌟🌟"}/>
            <TripleComponent
    image={faltu}
    buttons={["Button 1", "Button 2"]}
    heading="Component 1 Heading"
    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    texts={["Text 1", "Text 2", "Text 3"]}
    buttonText="Action"
/>

        </div>
  );
}

export default App;
