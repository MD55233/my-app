import HeaderBox from '@/components/HeaderBox'; // Adjust the path as needed
import TotalBalanceBox from '@/components/TotalBalanceBox';
import Image from 'next/image';

const Home = () => {
  const loggedIn = { firstName: 'Daniyal' , lastName: 'Dawood' , email:'sample@gmail.com'}; // Example user data

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting" // Ensure HeaderBox expects this prop
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions"
          />
            
          <TotalBalanceBox
            accounts={[]} // Ensure TotalBalanceBox expects this type of data
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECNT TRANSACIONS 
      </div>
     


          
    </section>
  );
}

export default Home;
