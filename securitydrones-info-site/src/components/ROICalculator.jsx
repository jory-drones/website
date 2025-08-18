import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * A simple ROI calculator that lets users compare the annual cost
 * of employing human guards versus deploying a single SecurityDrone.
 * Users adjust the number of human guards with a slider; the
 * component recalculates and displays the cost difference and
 * potential annual savings. Animations draw the eye to the
 * changing numbers.
 */
function ROICalculator() {
  const [guards, setGuards] = useState(3);
  const guardCost = 75000; // estimated annual cost per human guard (USD)
  const droneCost = 65000; // annual lease for one drone

  const humanTotal = guards * guardCost;
  const savings = humanTotal - droneCost;

  return (
    <section className="py-16 bg-primary text-center">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
          Calculate your ROI
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Adjust the slider to match the number of guards currently
          protecting your property. See how much you could save by
          switching to an autonomous drone solution.
        </p>
        <div className="flex flex-col items-center gap-6">
          <label htmlFor="guardRange" className="font-heading text-lg">
            Number of human guards: <span className="text-secondary">{guards}</span>
          </label>
          <input
            id="guardRange"
            type="range"
            min="1"
            max="10"
            value={guards}
            onChange={(e) => setGuards(parseInt(e.target.value))}
            className="w-full max-w-md h-2 bg-white/20 rounded-full appearance-none cursor-pointer"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-center mt-8">
            <div className="p-6 border border-secondary rounded-xl bg-primary-light">
              <h3 className="text-xl font-heading mb-2">Human Guard Cost</h3>
              <motion.p
                key={humanTotal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-heading text-secondary"
              >
                ${humanTotal.toLocaleString()}
              </motion.p>
            </div>
            <div className="p-6 border border-secondary rounded-xl bg-primary-light">
              <h3 className="text-xl font-heading mb-2">Drone Solution</h3>
              <motion.p
                key={droneCost}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-heading text-secondary"
              >
                ${droneCost.toLocaleString()}
              </motion.p>
            </div>
            <div className="p-6 border border-secondary rounded-xl bg-primary-light">
              <h3 className="text-xl font-heading mb-2">Annual Savings</h3>
              <motion.p
                key={savings}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-heading text-secondary"
              >
                ${savings.toLocaleString()}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ROICalculator;