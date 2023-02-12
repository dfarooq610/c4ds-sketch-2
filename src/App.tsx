import { Intro } from "./components/ArticleApp";

function App() {
  return (
    <div className="bg-stone-100 h-fit-content min-h-screen min-w-full flex flex-col font-josefin-sans">
      <header className="mx-10 align-middle justify-center basis-1/12">
        <h1 className="text-4xl font-bold text-center mt-10 mb-5">
          How do you perceive the partisanship of the Supreme Court?
        </h1>
        <hr className="bg-black h-1 mt-1 mb-3" />
      </header>
      <main className="grow mt-2 mx-10 my-5 basis-10/12 flex flex-col">
        <Intro />
      </main>
      <footer className="bg-stone-300 align-middle justify-center basis-1/12">
        <p className="text-normal text-center my-5">
          A project by Danish Farooq and Gabriel Cohen for JRNL 5500: Coding for
          Digital Storytelling
        </p>
      </footer>
    </div>
  );
}

export default App;
