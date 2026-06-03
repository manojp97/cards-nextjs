import Image from "next/image";
import ContributionHistory from "./components/contribution-history";
import PayoutThreshold from "./components/PayoutThreshold";
import SavingTargets from "./components/SavingTargets";
import PayoutPreferences from "./components/PayoutPreferences";
import BuyInvestment from "./components/BuyInvestment";
import AccountAccess from "./components/AccountAccess";
import SkeletonDemo from "./components/Skeleton";
import UpcomingPayments from "./components/UpcomingPayments";
import RecentTransactions from "./components/RecentTransactions";

export default function Home() {
  return (
    <main className="bg-white p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        
        <div className=" w-full">
          <ContributionHistory />
        </div>

        <div className="w-full">
          <PayoutThreshold />
        </div>

        <div className="w-full">
          <SavingTargets />
        </div>

        <div className="w-full">
          <BuyInvestment />
        </div>

        <div className="w-full">
          <AccountAccess />
        </div>

        <div className="w-full">
          <PayoutPreferences />
        </div>

        <div className="w-full">
          <SkeletonDemo />
        </div>

        <div className="w-full">
          <UpcomingPayments />
        </div>

        <div className="w-full">
          <RecentTransactions />
        </div>

      </div>
    </main>
  );
}
