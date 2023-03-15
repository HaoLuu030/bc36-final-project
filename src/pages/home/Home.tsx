import Banner from "./components/banner/Banner";
import ExploreNearBy from "./components/exploreNearby/ExploreNearby";
import LiveAnyWhere from "./components/liveAnyWhere/LiveAnyWhere";

function Home() {
  return (
    <>
      <Banner />
      <main className="max-w-7xl mx-auto px-16">
        <ExploreNearBy />
        <LiveAnyWhere />
      </main>
    </>
  );
}

export default Home;
