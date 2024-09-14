import { formatAmount } from "@/lib/utils";// Ensure this path is correct
import AnimatedCounter from "./AnimatedCounter"; // Make sure this component is used if needed
import DoughnutChart from "./DoughnutChart";
 // Corrected import name to match file name

// Define the props type or interface
interface TotalBalanceBoxProps {
  accounts: any[]; // Define the correct type for accounts
  totalBanks: number;
  totalCurrentBalance: number;
}

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank Accounts {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>
          <p className="total-balance-amount flex-center gap-2">
            {formatAmount(totalCurrentBalance)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
