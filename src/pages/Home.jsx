const Home = () => {
  return (
    <div className="pb-20 py-4">
      <div className="hero max-w-[600px] mx-auto my-20 flex flex-col text-center gap-8">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form>
          <input type="text" placeholder="search crypto.." />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
