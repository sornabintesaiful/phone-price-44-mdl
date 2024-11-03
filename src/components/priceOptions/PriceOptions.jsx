import PriceOption from "../priceOption/PriceOption";


const PriceOptions = () => {
  const priceOptions =[
    {
      "id": "option_001",
      "name": "Basic Plan",
      "price": 9.99,
      "features": [
        "Access to basic features",
        "Email support",
        "Limited storage"
      ]
    },
    {
      "id": "option_002",
      "name": "Standard Plan",
      "price": 19.99,
      "features": [
        "Access to basic and standard features",
        "Priority email support",
        "Extended storage",
        "Monthly reports"
      ]
    },
    {
      "id": "option_003",
      "name": "Premium Plan",
      "price": 29.99,
      "features": [
        "Access to all features",
        "24/7 support",
        "Unlimited storage",
        "Advanced analytics",
        "Custom branding options"
      ]
    },
    {
      "id": "option_004",
      "name": "Enterprise Plan",
      "price": 49.99,
      "features": [
        "All Premium features",
        "Dedicated account manager",
        "On-site training",
        "Custom integrations",
        "API access"
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-5xl font-bold text-center align-middle gap-4 p-4">Best Prices in the Town</h2>
      <div className="grid md:grid-cols-3 grid-cols-1">
        {priceOptions.map(option => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;