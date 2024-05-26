import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalancebox from "@/components/TotalBalancebox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
const Home = async() => {
    const loggedIn=await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
            <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.name || 'Guest'}
                subtext="Access and manage your account an transactions efficiently ."
            />
            <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={100000.65}
            />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:12412342},{currentBalance:12341234}]}
      />
    </section>
  );
};

export default Home;
