import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';

const MockButtonFeadback = ['good', 'neutral', 'bad'];

const App = () => { 
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback = good + neutral + bad;
        const countPositiveFeedbackPercentage = Math.round(
            (good * 100) / countTotalFeedback,
        );

    
    const counterFeadbacks = feedback => {
    if (feedback === 'good') {
      setGood(good + 1);
    }
    if (feedback === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (feedback === 'bad') {
      setBad(bad + 1);
    }
  };
    
    return (
            <div>
                <Section title="Please leave feedback">
                   <FeedbackOptions
                        options={MockButtonFeadback}
                        onLeaveFeedback={counterFeadbacks}
                    />
                </Section>
                <Section title="Statistics">
                    {countTotalFeedback ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback}
                            positivePercentage={countPositiveFeedbackPercentage}
                        />
                    ) : (
                        'No feedback given'
                    )}
                </Section>
            </div>
        );
}
   



export default App;
