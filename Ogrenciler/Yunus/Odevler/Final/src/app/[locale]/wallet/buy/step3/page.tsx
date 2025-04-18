'use client'

import WalletSteps from "@/components/molecules/WalletSteps/WalletSteps";
import Success from "@/components/organism/Success/Success";

const SuccessPage = () => {
    return (
        <div className="success-page">
            <WalletSteps step={3} />
            <Success />
        </div>
    );
};

export default SuccessPage;
