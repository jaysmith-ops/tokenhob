import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import Wallet from "./pages/wallet";
import ConnectWallet from "./pages/connect-wallet";
import { ModalProvider } from "./providers/modal-provider";

function App() {
  return (
    <main className="font-lexend flex flex-col justify-between">
      <Navbar />

      <section className="flex-1 min-h-screen w-full flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
        </Routes>
        <ModalProvider />
      </section>

      <Footer />
    </main>
  );
}

export default App;
