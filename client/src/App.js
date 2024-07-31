import React, { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activationMessage, setActivationMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5000/api/availablePacks')
      .then(response => {
        console.log(response)
        setPlans(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the plans!', error);
      });
  }, []);
 console.log(plans)
  const handleActivate = (planId) => {
    axios.post('http://localhost:5000/api/activatePack', {planId})
      .then(response => {
        setActivationMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error activating the plan!', error);
      });
  };

  return (
    <div>
      <h1>Available Internet Plans</h1>
      <ul>
        {plans.map(plan => (
          <li key={plan.id}>
            {plan.name} - ${plan.price} - {plan.data}
            <button onClick={() => handleActivate(plan.id)}>Activate</button>
          </li>
        ))}
      </ul>
      {activationMessage && <p>{activationMessage}</p>}
    </div>
  );
};

export default App;
