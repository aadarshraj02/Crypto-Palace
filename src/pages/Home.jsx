const Home = () => {
  return (
    <div>
      <div className="hro">
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
