"use client";
import { useState } from "react";

const MAX_LIFE_AGE = 80;

export default function Home() {
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [annualPrice, setAnnualPrice] = useState(0);
  const [lifetimePrice, setLifetimePrice] = useState(0);
  const [years, setYears] = useState(0);
  const [isLifetime, setIsLifetime] = useState(false);
  const [age, setAge] = useState(0);

  const calculatePrices = () => {
    const remainingYears = isLifetime ? MAX_LIFE_AGE - age : years;
    const totalMonthly = monthlyPrice * 12 * remainingYears;
    const totalAnnual = annualPrice * remainingYears;
    const totalLifetime = lifetimePrice;

    return { totalMonthly, totalAnnual, totalLifetime };
  };

  const handleInputChange = (setter) => (e) => {
    const value = parseFloat(e.target.value);
    setter(isNaN(value) || value < 0 ? 0 : value);
  };

  const savings =
    calculatePrices().totalMonthly - calculatePrices().totalLifetime;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Don&apos;t subscribe bro!</h1>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="monthlyPrice" className="block mb-2">
            Monthly Subscription Price:
          </label>
          <input
            type="number"
            id="monthlyPrice"
            value={monthlyPrice}
            onChange={handleInputChange(setMonthlyPrice)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="annualPrice" className="block mb-2">
            Annual Subscription Price:
          </label>
          <input
            type="number"
            id="annualPrice"
            value={annualPrice}
            onChange={handleInputChange(setAnnualPrice)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lifetimePrice" className="block mb-2">
            Lifetime Subscription Price:
          </label>
          <input
            type="number"
            id="lifetimePrice"
            value={lifetimePrice}
            onChange={handleInputChange(setLifetimePrice)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-black"
          />
        </div>
        {isLifetime ? (
          <div className="mb-4">
            <label htmlFor="age" className="block mb-2">
              Current Age:{" "}
              <span className="text-xs italic">
                (Assuming avg lifespan to 80 years)
              </span>
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={handleInputChange(setAge)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-black"
            />
          </div>
        ) : (
          <div className="mb-4">
            <label htmlFor="years" className="block mb-2">
              Number of Years:
            </label>
            <input
              type="number"
              id="years"
              value={years}
              onChange={handleInputChange(setYears)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-black"
            />
          </div>
        )}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="isLifetime"
            checked={isLifetime}
            onChange={(e) => setIsLifetime(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="isLifetime">Lifetime Subscription</label>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Price Comparison</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Subscription Type</th>
                <th className="border px-4 py-2">Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Monthly Subscription</td>
                <td className="border px-4 py-2">
                  ${calculatePrices().totalMonthly.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Annual Subscription</td>
                <td className="border px-4 py-2">
                  ${calculatePrices().totalAnnual.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Lifetime Subscription</td>
                <td className="border px-4 py-2">
                  ${calculatePrices().totalLifetime.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {savings > 0 && (
          <p className="mt-4 text-sm italic">
            You&apos;ll save ${savings.toFixed(2)} with a lifetime subscription
            compared to a monthly subscription.
          </p>
        )}
      </div>
    </div>
  );
}
