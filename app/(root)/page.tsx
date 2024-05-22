import HeaderBox from "@/components/HeaderBox";
import TotalBalancebox from "@/components/TotalBalancebox";
const Home = () => {
    const loggedIn={firstName :"Ankit Singh"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
            <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your account an transactions efficiently ."
            />
            <TotalBalancebox
            accounts={[]}
            
            />
        </header>
      </div>
    </section>
  );
};

export default Home;
