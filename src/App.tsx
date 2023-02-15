import { useState } from "react";
import Article from "./components/Article";
import Intro from "./components/Intro";

function App() {
  const [enteredMainArticle, setEnteredMainArticle] = useState<boolean>(false);
  
  return (
    <div className="bg-stone-100 h-fit-content min-h-screen min-w-full flex flex-col">
      <header className="font-josefin-sans mx-10 align-middle justify-center basis-1/12">
        <h1 className="text-4xl font-bold text-center mt-10 mb-5">
          How political is the Supreme Court?
        </h1>
        <hr className="bg-black h-1 mt-1 mb-3" />
      </header>
      <main className="grow mt-2 mx-10 my-5 basis-10/12 flex flex-col">
        {!enteredMainArticle ? (
          <Intro handleClick={() => setEnteredMainArticle(true)} />
        ) : (
          <Article />
        )}
      </main>
      <footer className="font-cardo bg-stone-300 align-middle justify-center basis-1/12">
        <p className="text-normal text-center my-5">
          A project by Danish Farooq and Gabriel Cohen for JRNL 5500: Coding for
          Digital Storytelling
        </p>
      </footer>
    </div>
  );
}

export default App;
