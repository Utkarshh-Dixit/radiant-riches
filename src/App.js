import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Heading from "./Components/Heading/Heading";
import FourComponents from "./Components/FourComponents/FourComponents";
import FiveLinks from "./Components/FiveLinks/FiveLinks";
import CustomComponent from "./Components/CustomComponent/CustomComponent";
import TripleComponent from "./Components/TripleComponent/TripleComponent";
import check from "./Components/check.png";
import "./App.scss";

function App() {
  return (
    <div>
            <Navbar />
            <div className="conta">
            <Heading text="Best Website Builders" />
            <FourComponents />
            <FiveLinks />
            <CustomComponent faltuim={check} paragraph={"Analog for signals that have not been digitized as in most century radio telephone and television systems This involves linear electronic circuits as well as nonlinear ones"} description={"this is description"} rating={8.6} stars={"🌟🌟🌟"}/>
            <CustomComponent faltuim={check} paragraph={"It’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article"} description={"this is description"} rating={10} stars={"🌟🌟🌟🌟🌟"}/>
            <CustomComponent faltuim={check} paragraph={"As designers, we are frequently and incorrectly reminded that our job is to “make things pretty.” We are indeed designers — not artists — and there is no place for formalism in good design. Web design has a function, and that function is to communicate the message for which the Web page was conceived. The medium is not the message."} description={"this is description"} rating={9.2} stars={"🌟🌟🌟🌟"}/>
            <CustomComponent faltuim={check} paragraph={"As a young industry that champions innovation and rates its practitioners based on their ability to apprehend (sorry, “grok”) the continual emergence of new technologies, frameworks, protocols and data models, we are not particularly familiar with tradition. However, the practice of arranging type for optimal pleasure and comfort is a centuries-old discipline. As long ago as 1927, the "} rating={4.1} stars={"🌟🌟"}/>
            <h1>Related deals you might like for</h1>
            <div className="container">
    <TripleComponent
        image={check}
        buttons={["20% off", "Limited time"]}
        heading="Webbuilder 1"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        texts={["39.64$", "46.34$", "(20% off)"]}
        buttonText="View Deal"
    />
    <TripleComponent
        image={check}
        buttons={["20% off", "Limited time"]}
        heading="Webbuilder 2"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        texts={["39.64$", "46.34$", "(20% off)"]}
        buttonText="View Deal"
    />
    <TripleComponent
        image={check}
        buttons={["30% off", "Limited time"]}
        heading="Webbuilder 3"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        texts={["39.64$", "46.34$", "(30% off)"]}
        buttonText="View Deal"
    />
</div>
</div>

        </div>
  );
}

export default App;
