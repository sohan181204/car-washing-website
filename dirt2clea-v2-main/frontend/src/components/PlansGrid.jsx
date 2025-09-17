import { useNavigate } from "react-router-dom";

const PlansGrid = () => {
  const navigate = useNavigate();

  const plans = [
    { carType: 'Hatchback', price: 2000, washes: 4 },
    { carType: 'Sedan', price: 2400, washes: 4 },
    { carType: 'SUV', price: 2800, washes: 4 }
  ];

  const handleSubscribe = (plan) => {
    navigate("/book-service", { state: { plan } });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-black">{plan.carType}</h3>
              <p className="text-2xl font-bold text-primary mb-2">₹{plan.price}</p>
              <p className="text-gray-600 mb-4">{plan.washes} washes/month</p>
              <button className="btn-primary hover:bg-red-700" onClick={() => handleSubscribe(plan)}>Subscribe Now</button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-primary">Save More with Subscriptions!</p>
        </div>
      </div>
    </section>
  );
};

export default PlansGrid;
