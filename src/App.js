import java_logo from "./logos/java.svg";
import cpp_logo from "./logos/cpp.svg";
import js_logo from "./logos/js.svg";
import python_logo from "./logos/python.svg";
import ruby_logo from "./logos/ruby.svg";

import "./App.css";
import { useState } from "react";

const LANG_LOGOS = {
  JAVA: java_logo,
  CPP: cpp_logo,
  JS: js_logo,
  Python: python_logo,
  Ruby: ruby_logo,
};

function App() {
  const langs = Object.keys(LANG_LOGOS);

  const [voteCount, setVoteCount] = useState({
    JAVA: 0,
    CPP: 0,
    JS: 0,
    Python: 0,
    Ruby: 0,
  });

  const display_languages = langs.map((lang) => (
    <div className="logo_div">
      <img src={LANG_LOGOS[lang]} className="App-logo" />
      <h2>Vote : {voteCount[lang]}</h2>
    </div>
  ));

  const choose_language = langs.map((lang) => (
    <option value={lang}>{lang}</option>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1>VOTE HERE</h1>
        <div className="vote_options">{display_languages}</div>
        <select
          className="langSelector"
          value=""
          onChange={(e) => {
            setVoteCount({
              ...voteCount,
              [e.target.value]: ++voteCount[e.target.value],
            });
          }}
        >
          <option selected="selected">Select Your Language!</option>
          {choose_language}
        </select>
      </header>
    </div>
  );
}

export default App;
