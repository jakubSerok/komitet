import React from "react";
import bg from "./assets/bg.jpg";
import mapa from "./assets/mapa.jpg";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-8 bg-[#f5df18]"></div>
      <div className="w-full h-8 bg-[#15631b]"></div>
      <img
        src={bg}
        alt=""
        className="w-full h-full absolute top-0 left-0 z-[-10] object-cover"
        style={{ filter: "brightness(0.6)" }}
      />

      <img src="" alt="" />
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 w-full h-full mt-[20px]">
        <div className="p-4 ">
          <div className="">
            <div className="text-center p-4 bg-[#f5df18] bg-opacity-15  text-[#f5df18] rounded-md mt-[30px] flex flex-col gap-3 font-bold border-4 border-[#f5df18]">
              <h1 className="text-2xl md:text-5xl">KOMITET WYBORCZY</h1>
              <p className="md:text-4xl sm:text-xl text-md">
                WYBORCÓW WSPÓLNOTA POWIATOWA
              </p>
            </div>
            <div className=" mt-[10px]  p-4 bg-[#15631b] bg-opacity-30 border-4 border-[#15631b] rounded-md">
              <p
                className="font-bold text-[20px] sm:text-2xl md:text-4xl   text-center text-[#f5df18]"
                style={{ fontStyle: "italic" }}
              >
                "ZNACIE NAS, MY NIE OBIECUJEMY <br /> MY REALIZUJEMY"
              </p>
            </div>
          </div>
          <div className="bg-blue-400 p-4 rounded-lg mt-[50px] flex flex-col justify-center gap-4 max-w-[800px]">
            <h1 className="text-3xl font-bold text-center text-white">
              NAJWAŻNIEJSZE CELE:
            </h1>
            <ol className="flex flex-col gap-4">
              <li>
                <p className="text-lg text-white md:text-xl">
                  <span className="font-bold">1. SZPITAL POWIATOWY - </span>
                  profesjonalny, wielooddziałowy - dostępny dla każdego
                </p>
              </li>
              <li>
                <p className="text-lg text-white md:text-xl">
                  <span className="font-bold">2. PRZYJAZNE SZKOŁY - </span>–
                  nowoczesne szkoły zachęcające do rozwoju wykorzystujące w
                  nauczaniu najnowsze metody i technologie IT
                </p>
              </li>
              <li>
                <p className="text-lg text-white md:text-xl">
                  <span className="font-bold">3. DROGI - </span>
                  poprawa infrastruktury drogowej naszego powiatu
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 md:w-full w-[60%] grid-cols-1 gap-2 pr-2">
          <div className="flex flex-col p-2 bg-black bg-opacity-40 items-center text-center gap-2 border-4 border-[#f5df18] hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-white font-medium text-[18px]">
              <h1>Okręg wyborczy nr 1 </h1>
              <h2>Miasto Złotoryja</h2>
            </div>
            <ol className="text-white">
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
            </ol>
          </div>
          <div className="flex flex-col p-2 bg-black bg-opacity-40  items-center text-center gap-2 border-4 border-[#f5df18] hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-white font-medium text-[18px]">
              <h1>Okręg wyborczy nr 2 </h1>
              <h2>Gmina Złotoryja</h2>
            </div>
            <ol className="text-white">
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
            </ol>
          </div>
          <div className="flex flex-col p-2 bg-black bg-opacity-40 border-4 border-[#15631b] items-center text-center gap-2 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-white font-medium text-[18px]">
              <h1>Okręg wyborczy nr 3 </h1>
              <h2 className="text-[15px]">
                Miasto i Gmina Świerzawa, Miasto Wojcieszów
              </h2>
            </div>
            <ol className="text-white">
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
            </ol>
          </div>
          <div className="flex flex-col p-2 bg-black bg-opacity-40 border-4 border-[#15631b] items-center text-center gap-2 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-white font-medium text-[18px]">
              <h1>Okręg wyborczy nr 4 </h1>
              <h2 className="text-[15px]">Gmina Zagrodno, Gmina Pielgrzymka</h2>
            </div>
            <ol className="text-white">
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
              <li>Imie Nazwisko</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="text-center mt-[50px] p-4">
        <h1 className="text-3xl font-bold text-red-700 uppercase">Pamiętaj!</h1>
        <p className="text-xl text-white">
          W tych wyborach głosujemy na{" "}
          <span className="font-bold text-red-700">człowieka.</span> Nie tyle
          istotna jest lista co człowiek, na którego oddasz głos. To Ty
          decydujesz kto będzie Radnym.
        </p>
      </div>
    </div>
  );
};

export default Home;
